#!/usr/bin/env python3
"""Reproducible preprocessing and preliminary screening for 300 hackathon ideas.

The script is deliberately deterministic and offline. It extracts the two Markdown
idea-card files and the tabular PDF, preserves every source record, creates
source-qualified IDs, performs field-aware lexical similarity (not semantic
embeddings), scores against the rubric found in the input, and validates coverage.
"""

from __future__ import annotations

import csv
import hashlib
import json
import math
import re
import sys
import unicodedata
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from difflib import SequenceMatcher
from pathlib import Path
from typing import Iterable

try:
    import pdfplumber
except ImportError as exc:  # pragma: no cover
    raise SystemExit("pdfplumber is required; run with the bundled Codex Python runtime") from exc


ROOT = Path(__file__).resolve().parents[1]
INPUT = ROOT / "research" / "ideas"
OUTPUT = ROOT / "idea_analysis"
CHECKPOINTS = OUTPUT / "checkpoints"

SOURCES = [
    ("MDA", INPUT / "file.md", "Curated 100"),
    ("MDB", INPUT / "ไอเดีย Hackathon Make Me Money.md", "Evidence-led 100"),
    ("PDF", INPUT / "การวิจัยไอเดียแฮกกาธอน.pdf", "Research report 100"),
]

FIELD_MAP = {
    "ID": "original_id",
    "Name": "title",
    "Category": "category",
    "Problem": "problem",
    "Target Customer": "target_users",
    "Solution": "solution",
    "Core MVP": "core_features",
    "Revenue Model": "monetization",
    "Data / API": "data_api",
    "Differentiation": "differentiation",
    "Biggest Risk": "risk",
    "Feasibility": "feasibility",
    "Evidence Status": "evidence",
}

CATEGORY_RANGES = [
    (1, 25, "Tourism & Local Economy"),
    (26, 35, "Student & Education"),
    (36, 50, "Small Business / SME"),
    (51, 60, "Productivity & Automation"),
    (61, 70, "Consumer Lifestyle"),
    (71, 80, "Marketplace & Matching"),
    (81, 90, "Community & Local Services"),
    (91, 100, "Wildcard / Unconventional"),
]


@dataclass
class Idea:
    source_code: str
    source_file: str
    source_label: str
    original_id: str
    original_text: str
    source_location: str
    title: str = ""
    category: str = ""
    problem: str = ""
    target_users: str = ""
    solution: str = ""
    core_features: str = ""
    monetization: str = ""
    data_api: str = ""
    differentiation: str = ""
    risk: str = ""
    feasibility: str = ""
    evidence: str = ""
    duplicate_classification: str = "UNIQUE"
    duplicate_group: str = ""
    related_ids: list[str] = field(default_factory=list)
    clusters: list[str] = field(default_factory=list)
    scores: dict[str, int] = field(default_factory=dict)
    shortlist_group: str = ""
    decision_reasons: list[str] = field(default_factory=list)

    @property
    def qid(self) -> str:
        return f"{self.source_code}-{self.original_id}"


def clean(text: str) -> str:
    text = unicodedata.normalize("NFC", text or "")
    text = text.replace("\u200b", "").replace("\ufeff", "")
    return re.sub(r"[ \t]+", " ", text).strip()


def category_for_id(original_id: str) -> str:
    number = int(original_id.split("-")[-1])
    for start, end, label in CATEGORY_RANGES:
        if start <= number <= end:
            return label
    return "Unknown"


def parse_markdown(source_code: str, path: Path, label: str) -> list[Idea]:
    raw = path.read_text(encoding="utf-8")
    heading = re.compile(r"(?m)^####\s+(IDEA-\d{3})\s+[—-]\s+(.+?)\s*$")
    matches = list(heading.finditer(raw))
    ideas: list[Idea] = []
    for idx, match in enumerate(matches):
        start = match.start()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(raw)
        block = raw[start:end].rstrip()
        # The last card is followed by later phases; retain only its card body.
        phase_cut = re.search(r"(?m)^##\s+(?:3\.|Phase 4|Final)", block)
        if phase_cut:
            block = block[: phase_cut.start()].rstrip()
        fields: dict[str, str] = {}
        for line in block.splitlines()[1:]:
            fm = re.match(r"^-\s+\*\*(.+?):\*\*\s*(.*)$", line.strip())
            if fm:
                fields[fm.group(1).strip()] = fm.group(2).strip()
        idea = Idea(
            source_code=source_code,
            source_file=str(path.relative_to(ROOT)),
            source_label=label,
            original_id=match.group(1),
            original_text=block,
            source_location=f"lines {raw[:start].count(chr(10)) + 1}-{raw[:start].count(chr(10)) + block.count(chr(10)) + 1}",
            title=clean(fields.get("Name") or match.group(2)),
        )
        for source_field, attr in FIELD_MAP.items():
            if attr in {"original_id", "title"}:
                continue
            setattr(idea, attr, clean(fields.get(source_field, "")))
        ideas.append(idea)
    return ideas


def words_to_text(words: list[dict]) -> str:
    if not words:
        return ""
    lines: list[list[dict]] = []
    for word in sorted(words, key=lambda w: (round(w["top"] / 3) * 3, w["x0"])):
        if not lines or abs(lines[-1][0]["top"] - word["top"]) > 3.2:
            lines.append([word])
        else:
            lines[-1].append(word)
    return clean("\n".join(" ".join(w["text"] for w in sorted(line, key=lambda x: x["x0"])) for line in lines))


def after_marker(text: str, marker: str, next_markers: Iterable[str] = ()) -> str:
    pos = text.lower().find(marker.lower())
    if pos < 0:
        return ""
    value = text[pos + len(marker):].strip(" :\n")
    ends = [value.lower().find(m.lower()) for m in next_markers]
    ends = [p for p in ends if p >= 0]
    return clean(value[: min(ends)] if ends else value)


def split_cyclic(text: str, first: str, second: str) -> tuple[str, str]:
    """Split two labelled fields even when a PDF page break reverses marker order."""
    low = text.lower()
    a, b = low.find(first.lower()), low.find(second.lower())
    if a < 0 or b < 0:
        return after_marker(text, first, [second]), after_marker(text, second, [first])
    if a < b:
        one = text[a + len(first):b]
        two = text[b + len(second):] + "\n" + text[:a]
    else:
        one = text[a + len(first):] + "\n" + text[:b]
        two = text[b + len(second):a]
    return clean(one.strip(" :\n")), clean(two.strip(" :\n"))


def parse_pdf(source_code: str, path: Path, label: str) -> list[Idea]:
    # Fixed x positions come from the six-column table in the source PDF.
    boundaries = [150, 232, 310, 388, 466]
    records: list[dict] = []
    current: dict | None = None
    with pdfplumber.open(path) as pdf:
        for page_number, page in enumerate(pdf.pages[:36], 1):
            words = page.extract_words(x_tolerance=1, y_tolerance=2, keep_blank_chars=False)
            # Page 36 switches from IDEA-100 to narrative at roughly y=550.
            if page_number == 36:
                words = [w for w in words if w["top"] < 545]
            lines: list[list[dict]] = []
            for word in sorted(words, key=lambda w: (w["top"], w["x0"])):
                if not lines or abs(lines[-1][0]["top"] - word["top"]) > 3.2:
                    lines.append([word])
                else:
                    lines[-1].append(word)
            for line in lines:
                id_word = next((w for w in line if re.fullmatch(r"IDEA-\d{3}", w["text"])), None)
                if id_word:
                    if current:
                        records.append(current)
                    current = {
                        "id": id_word["text"],
                        "start_page": page_number,
                        "end_page": page_number,
                        "columns": [[] for _ in range(6)],
                    }
                if not current:
                    continue
                current["end_page"] = page_number
                for word in line:
                    if re.fullmatch(r"IDEA-\d{3}", word["text"]):
                        continue
                    x = word["x0"]
                    col = sum(x >= b for b in boundaries)
                    current["columns"][col].append(word)
        if current:
            records.append(current)

    ideas: list[Idea] = []
    for record in records:
        cols = [words_to_text(words) for words in record["columns"]]
        name = cols[0]
        problem_col, solution_col, revenue_col, data_col, feas_col = cols[1:]
        # Ignore any repeated table header text accidentally collected in name.
        name = clean(re.sub(r"^(?:ID\s*&\s*Name\s*)+", "", name)).replace("\n", " ")
        original = (
            f"{record['id']} — {name}\n"
            f"[Problem / Target]\n{problem_col}\n"
            f"[Solution / Core MVP]\n{solution_col}\n"
            f"[Revenue / Differentiation]\n{revenue_col}\n"
            f"[Data/API / Risk]\n{data_col}\n"
            f"[Feasibility / Evidence]\n{feas_col}"
        )
        problem, target = split_cyclic(problem_col, "Problem:", "Target:")
        solution, mvp = split_cyclic(solution_col, "Solution:", "MVP:")
        revenue, diff = split_cyclic(revenue_col, "Rev:", "Diff:")
        api, risk = split_cyclic(data_col, "API:", "Risk:")
        feas, evid = split_cyclic(feas_col, "Feas:", "Evid:")
        ideas.append(Idea(
            source_code=source_code,
            source_file=str(path.relative_to(ROOT)),
            source_label=label,
            original_id=record["id"],
            original_text=original,
            source_location=f"pages {record['start_page']}-{record['end_page']}",
            title=name,
            category=category_for_id(record["id"]),
            problem=problem,
            target_users=target,
            solution=solution,
            core_features=mvp,
            monetization=revenue,
            data_api=api,
            differentiation=diff,
            risk=risk,
            feasibility=feas,
            evidence=evid,
        ))
    return ideas


def norm_for_similarity(text: str) -> str:
    text = unicodedata.normalize("NFKC", text or "").lower()
    text = re.sub(r"https?://\S+", " ", text)
    text = re.sub(r"\b(?:idea|verified|assumption|unknown|high|medium|low)\b", " ", text)
    return re.sub(r"[^0-9a-zก-๙]+", "", text)


def title_key(text: str) -> str:
    """Conservative product-name key; strips explanatory subtitle and TH/THB suffix."""
    base = re.split(r"\s+[—–]\s+", clean(text.replace("\n", " ")), maxsplit=1)[0]
    base = re.sub(r"\s+(?:TH|THB)$", "", base, flags=re.IGNORECASE)
    return norm_for_similarity(base)


def category_key(text: str) -> str:
    low = text.lower()
    for _, _, label in CATEGORY_RANGES:
        if label.lower() in low:
            return label
    return clean(text)


def ngrams(text: str, n: int = 3) -> set[str]:
    text = norm_for_similarity(text)
    if len(text) < n:
        return {text} if text else set()
    return {text[i:i+n] for i in range(len(text) - n + 1)}


def jaccard(a: set[str], b: set[str]) -> float:
    return len(a & b) / len(a | b) if a and b else 0.0


def sim(a: str, b: str) -> float:
    na, nb = norm_for_similarity(a), norm_for_similarity(b)
    if not na or not nb:
        return 0.0
    return 0.55 * jaccard(ngrams(na), ngrams(nb)) + 0.45 * SequenceMatcher(None, na, nb).ratio()


def pair_similarity(a: Idea, b: Idea) -> dict[str, float]:
    title = sim(a.title, b.title)
    target = sim(a.target_users, b.target_users)
    problem = sim(a.problem, b.problem)
    solution = sim(a.solution + " " + a.core_features, b.solution + " " + b.core_features)
    business = sim(a.monetization, b.monetization)
    weighted = 0.10 * title + 0.15 * target + 0.30 * problem + 0.35 * solution + 0.10 * business
    return {"title": title, "target": target, "problem": problem, "solution": solution, "business": business, "weighted": weighted}


class UnionFind:
    def __init__(self, items: Iterable[str]):
        self.parent = {x: x for x in items}

    def find(self, x: str) -> str:
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x

    def union(self, a: str, b: str) -> None:
        ra, rb = self.find(a), self.find(b)
        if ra != rb:
            self.parent[rb] = ra


def detect_duplicates(ideas: list[Idea]) -> list[dict]:
    reviews: list[dict] = []
    uf = UnionFind(i.qid for i in ideas)
    for idx, a in enumerate(ideas):
        for b in ideas[idx + 1:]:
            s = pair_similarity(a, b)
            same_title = bool(title_key(a.title)) and title_key(a.title) == title_key(b.title)
            if (same_title and s["problem"] >= 0.62 and s["solution"] >= 0.62) or s["weighted"] >= 0.82:
                relation = "EXACT_DUPLICATE"
                confidence = "HIGH" if s["weighted"] >= 0.78 or same_title else "MEDIUM"
                uf.union(a.qid, b.qid)
            elif ((s["problem"] >= 0.48 and s["solution"] >= 0.48 and s["target"] >= 0.25)
                  or (same_title and (s["problem"] >= 0.18 or s["target"] >= 0.20))
                  or s["weighted"] >= 0.62):
                relation = "NEAR_DUPLICATE"
                confidence = "HIGH" if s["weighted"] >= 0.68 else "MEDIUM"
                uf.union(a.qid, b.qid)
            elif same_title or (category_key(a.category) == category_key(b.category) and s["weighted"] >= 0.30) or s["weighted"] >= 0.44:
                relation = "RELATED"
                confidence = "MEDIUM" if s["weighted"] >= 0.53 else "LOW"
            else:
                continue
            reason = (
                f"field-aware lexical comparison: target={s['target']:.2f}, problem={s['problem']:.2f}, "
                f"solution={s['solution']:.2f}, business={s['business']:.2f}; "
                "requires human review because semantic embeddings were not used"
            )
            reviews.append({
                "duplicate_group": "",
                "relation_type": relation,
                "matching_ids": f"{a.qid}|{b.qid}",
                "similarity_reasons": reason,
                "confidence": confidence,
                "weighted_similarity": f"{s['weighted']:.3f}",
            })
            if relation == "RELATED":
                a.related_ids.append(b.qid)
                b.related_ids.append(a.qid)

    groups: dict[str, list[str]] = defaultdict(list)
    for idea in ideas:
        groups[uf.find(idea.qid)].append(idea.qid)
    meaningful = [sorted(ids) for ids in groups.values() if len(ids) > 1]
    meaningful.sort(key=lambda ids: ids[0])
    group_name: dict[str, str] = {}
    for number, ids in enumerate(meaningful, 1):
        for qid in ids:
            group_name[qid] = f"DUP-{number:03d}"
    by_id = {i.qid: i for i in ideas}
    for row in reviews:
        ids = row["matching_ids"].split("|")
        if row["relation_type"] != "RELATED":
            row["duplicate_group"] = group_name.get(ids[0], "")
            for qid in ids:
                idea = by_id[qid]
                idea.duplicate_group = group_name.get(qid, "")
                if row["relation_type"] == "EXACT_DUPLICATE":
                    idea.duplicate_classification = "EXACT_DUPLICATE"
                elif idea.duplicate_classification != "EXACT_DUPLICATE":
                    idea.duplicate_classification = "NEAR_DUPLICATE"
    for idea in ideas:
        if idea.duplicate_classification == "UNIQUE" and idea.related_ids:
            idea.duplicate_classification = "RELATED"
    # Explicit UNIQUE rows make classification auditable for all 300 records.
    for idea in ideas:
        if idea.duplicate_classification == "UNIQUE":
            reviews.append({
                "duplicate_group": "",
                "relation_type": "UNIQUE",
                "matching_ids": idea.qid,
                "similarity_reasons": "No pair crossed the documented field-aware lexical thresholds.",
                "confidence": "MEDIUM",
                "weighted_similarity": "",
            })
    return reviews


CLUSTERS = {
    "C01 Tourism discovery & itinerary": ("Tourism", ["เที่ยว", "trip", "route", "itinerary", "สถานที่", "tour"]),
    "C02 Booking, queues & capacity": ("Scheduling", ["จอง", "คิว", "slot", "calendar", "seat", "booking", "นัด"]),
    "C03 Payments, pricing & profitability": ("Finance", ["ชำระ", "payment", "promptpay", "ราคา", "cost", "margin", "กำไร", "invoice", "budget", "fee"]),
    "C04 Documents, compliance & proof": ("Trust/compliance", ["เอกสาร", "document", "proof", "verify", "consent", "pdpa", "contract", "audit", "certificate"]),
    "C05 Marketplace & matching": ("Matching", ["จับคู่", "marketplace", "match", "gig", "แลกเปลี่ยน", "เช่า", "share"]),
    "C06 SME operations & inventory": ("SME operations", ["ร้าน", "sme", "stock", "สต็อก", "order", "ออเดอร์", "supplier", "restock"]),
    "C07 Education & student workflows": ("Education", ["student", "school", "นักเรียน", "นักศึกษา", "tcas", "portfolio", "เรียน", "มหาวิทยาลัย"]),
    "C08 Productivity & team coordination": ("Productivity", ["task", "งาน", "approval", "อนุมัติ", "team", "ทีม", "workflow", "shift", "version"]),
    "C09 Household & personal finance": ("Consumer", ["ครอบครัว", "บ้าน", "หอ", "ผ่อน", "หนี้", "subscription", "สัตว์เลี้ยง", "pet"]),
    "C10 Community & civic services": ("Community", ["ชุมชน", "หมู่บ้าน", "วัด", "บริจาค", "อาสา", "community", "local", "เทศบาล"]),
    "C11 Safety, fraud & incident response": ("Safety", ["ปลอดภัย", "โกง", "scam", "risk", "ฉุกเฉิน", "incident", "fraud", "sos"]),
    "C12 Content, translation & AI assistance": ("AI/content", ["ai", "llm", "ocr", "แปล", "translate", "content", "post", "resume", "สัมภาษณ์"]),
    "C13 Sustainability & circular economy": ("Sustainability", ["ขยะ", "waste", "recycle", "refill", "carbon", "surplus", "ซ่อม", "repair"]),
}


def assign_clusters(idea: Idea) -> list[str]:
    text = " ".join([idea.title, idea.category, idea.problem, idea.solution, idea.core_features]).lower()
    labels = []
    # Primary category is retained as a cluster even when no keyword survives PDF extraction.
    primary = {
        "Tourism & Local Economy": "C01 Tourism discovery & itinerary",
        "Student & Education": "C07 Education & student workflows",
        "Small Business / SME": "C06 SME operations & inventory",
        "Productivity & Automation": "C08 Productivity & team coordination",
        "Consumer Lifestyle": "C09 Household & personal finance",
        "Marketplace & Matching": "C05 Marketplace & matching",
        "Community & Local Services": "C10 Community & civic services",
        "Wildcard / Unconventional": "C12 Content, translation & AI assistance",
    }.get(idea.category)
    if primary:
        labels.append(primary)
    for name, (_, keywords) in CLUSTERS.items():
        if any(keyword in text for keyword in keywords):
            labels.append(name)
    return list(dict.fromkeys(labels)) or ["C08 Productivity & team coordination"]


def contains_any(text: str, words: Iterable[str]) -> bool:
    low = text.lower()
    return any(word.lower() in low for word in words)


def technical_profile(idea: Idea) -> dict[str, str]:
    text = " ".join([idea.data_api, idea.solution, idea.core_features, idea.risk])
    api = contains_any(text, ["api", "google", "mapbox", "openai", "gemini", "line ", "weather", "tat ", "ocr", "translation"])
    dataset = contains_any(text, ["dataset", "ฐานข้อมูล", "curated", "รายการ", "catalog", "ข้อมูลสถานที่", "seed"])
    realtime = contains_any(text, ["real-time", "realtime", "สด", "location", "geolocation", "แจ้งเตือน"])
    auth = contains_any(text, ["auth", "login", "ยืนยันตัวตน", "บัญชีผู้ใช้", "kyc"])
    payment = contains_any(text, ["payment", "promptpay", "ชำระ", "มัดจำ", "จ่าย", "stripe", "omise", "slip"])
    can_sample = not contains_any(text, ["ต้องใช้ข้อมูลจริง", "ใช้ไม่ได้เลย", "กฎหมาย", "ใบอนุญาต"])
    deps = []
    if api: deps.append("External API [INFERRED from fields]")
    if dataset: deps.append("Curated/external dataset [INFERRED from fields]")
    if realtime: deps.append("Real-time or location service [INFERRED from fields]")
    if auth: deps.append("Authentication/KYC [INFERRED from fields]")
    if payment: deps.append("Payment/slip flow; use mock unless verified [INFERRED]")
    if not deps: deps.append("Standard web app/database stack [INFERRED]")
    critical = []
    if contains_any(idea.risk, ["กฎหมาย", "ใบอนุญาต", "ความปลอดภัย", "pdpa", "สูญหาย", "อุบัติเหตุ"]):
        critical.append("Legal/safety/privacy dependency")
    if api and contains_any(idea.risk + idea.data_api, ["ไม่ยืนยัน", "unknown", "อาจ", "เสถียร", "ราคา"]):
        critical.append("External API/data availability unverified")
    if realtime:
        critical.append("Real-time reliability and cold-start risk")
    return {
        "external_api_required": "YES_INFERRED" if api else "NO_EVIDENCE",
        "dataset_required": "YES_INFERRED" if dataset else "NO_EVIDENCE",
        "realtime_required": "YES_INFERRED" if realtime else "NO_EVIDENCE",
        "authentication_required": "YES_INFERRED" if auth else "NO_EVIDENCE",
        "payment_required": "YES_INFERRED" if payment else "NO_EVIDENCE",
        "sample_data_demo_possible": "YES_INFERRED" if can_sample else "UNCERTAIN",
        "technical_dependencies": "; ".join(deps),
        "critical_dependencies": "; ".join(critical) if critical else "No critical dependency identified from input [INFERENCE]",
    }


def tourism_relevance(idea: Idea) -> str:
    text = " ".join([idea.category, idea.title, idea.problem, idea.target_users, idea.solution])
    if "Tourism" in idea.category or contains_any(text, ["นักท่องเที่ยว", "ท่องเที่ยว", "trip", "tour", "hotel", "homestay", "เรือ", "เกาะ"]):
        return "DIRECT [FACT from input]"
    if contains_any(text, ["local", "ชุมชน", "เทศกาล", "ร้านอาหาร", "ภาษา"]):
        return "INDIRECT [INFERENCE]"
    return "NONE IDENTIFIED"


def score_idea(idea: Idea, tech: dict[str, str]) -> dict[str, int]:
    # Rubric found in file.md: Problem 20, Completeness/Usability 30,
    # Business Feasibility/Impact 30, Pitch/Q&A 20. Tourism is tracked but not
    # scored because the input says the bonus weight is unconfirmed.
    evidence = idea.evidence.lower()
    feas = idea.feasibility.lower()
    problem = 9
    problem += 3 if len(idea.problem) >= 45 else 1
    problem += 2 if len(idea.target_users) >= 20 else 0
    problem += 2 if idea.differentiation else 0
    problem += 2 if "verified" in evidence else 0
    problem -= 1 if not idea.problem or not idea.target_users else 0

    if "high" in feas:
        complete = 24
    elif "medium" in feas:
        complete = 18
    elif "low" in feas:
        complete = 11
    else:
        complete = 15
    complete += 3 if re.search(r"(?:^|\s)[123][.)]", idea.core_features) else 1
    complete += 2 if tech["sample_data_demo_possible"] == "YES_INFERRED" else 0
    complete -= 2 if tech["realtime_required"] == "YES_INFERRED" else 0
    complete -= 2 if tech["external_api_required"] == "YES_INFERRED" and contains_any(idea.data_api + idea.risk, ["ไม่ยืนยัน", "unknown", "อาจ", "เสถียร"]) else 0

    business = 9
    business += 5 if len(idea.monetization) >= 25 else 1
    business += 4 if contains_any(idea.monetization + idea.target_users, ["จ่าย", "payer", "subscription", "commission", "fee", "รายเดือน", "ขาย", "โฆษณา"]) else 0
    business += 3 if contains_any(idea.monetization, ["subscription", "commission", "fee", "รายเดือน", "ต่อครั้ง", "%", "บาท"]) else 0
    business += 2 if len(idea.differentiation) >= 25 else 0
    business += 2 if "verified" in evidence else 0
    business -= 3 if "assumption" in (idea.monetization + " " + idea.evidence).lower() else 0
    business -= 2 if contains_any(idea.risk, ["ไม่ยอมจ่าย", "ผู้จ่ายไม่ชัด", "โมเดลสร้างเงิน", "cold start"]) else 0

    pitch = 8
    pitch += 3 if contains_any(idea.core_features + idea.solution, ["dashboard", "map", "แผนที่", "qr", "เปรียบเทียบ", "timeline", "รูป", "กราฟ", "ticket"] ) else 1
    pitch += 3 if len(idea.core_features) >= 35 else 1
    pitch += 2 if tourism_relevance(idea).startswith("DIRECT") else 0
    pitch -= 2 if "low" in feas else 0

    scores = {
        "problem_opportunity_20": max(0, min(20, problem)),
        "completeness_usability_30": max(0, min(30, complete)),
        "business_feasibility_impact_30": max(0, min(30, business)),
        "pitch_qa_demo_20": max(0, min(20, pitch)),
    }
    scores["total_100"] = sum(scores.values())
    return scores


def decide(ideas: list[Idea], profiles: dict[str, dict[str, str]]) -> None:
    group_members: dict[str, list[Idea]] = defaultdict(list)
    for idea in ideas:
        if idea.duplicate_group:
            group_members[idea.duplicate_group].append(idea)
    canonical: dict[str, str] = {}
    for group, members in group_members.items():
        canonical[group] = max(members, key=lambda x: (x.scores["total_100"], x.qid)).qid

    for idea in ideas:
        score = idea.scores["total_100"]
        tech = profiles[idea.qid]
        critical = tech["critical_dependencies"] != "No critical dependency identified from input [INFERENCE]"
        is_noncanonical_exact = (
            idea.duplicate_classification == "EXACT_DUPLICATE"
            and canonical.get(idea.duplicate_group) != idea.qid
        )
        if is_noncanonical_exact:
            idea.shortlist_group = "C — LOW PRIORITY"
            idea.decision_reasons = ["EXACT_DUPLICATE_NON_CANONICAL"]
        elif "low" in idea.feasibility.lower() or score < 67:
            idea.shortlist_group = "C — LOW PRIORITY"
            idea.decision_reasons = ["LOW_MVP_FEASIBILITY" if "low" in idea.feasibility.lower() else "LOW_PRELIMINARY_SCORE"]
        elif idea.duplicate_classification == "NEAR_DUPLICATE" and canonical.get(idea.duplicate_group) != idea.qid:
            idea.shortlist_group = "B — RESERVE"
            idea.decision_reasons = ["NEAR_DUPLICATE_NEEDS_DIFFERENTIATION"]
        elif score >= 77 and not critical and "low" not in idea.feasibility.lower() and idea.scores["business_feasibility_impact_30"] >= 18:
            idea.shortlist_group = "A — SHORTLIST"
            idea.decision_reasons = ["STRONG_BALANCE_UNDER_RUBRIC", "MVP_DEMO_WITHIN_1_5_DAYS_PLAUSIBLE"]
        else:
            idea.shortlist_group = "B — RESERVE"
            reasons = []
            if critical: reasons.append("CRITICAL_DEPENDENCY_NEEDS_VERIFICATION")
            if "medium" in idea.feasibility.lower(): reasons.append("MVP_SCOPE_RISK")
            if idea.scores["business_feasibility_impact_30"] < 18: reasons.append("MONETIZATION_VALIDATION_NEEDED")
            if score < 77: reasons.append("BORDERLINE_RUBRIC_SCORE")
            idea.decision_reasons = reasons or ["HIGH_POTENTIAL_WITH_UNCERTAINTY"]


def missing_info(idea: Idea, tech: dict[str, str]) -> str:
    items = ["Customer willingness-to-pay not independently validated [UNKNOWN]"]
    if "verified" not in idea.evidence.lower():
        items.append("Problem evidence/market validation [UNKNOWN]")
    if tech["external_api_required"] == "YES_INFERRED":
        items.append("API access, quota, price, license and current availability [NEEDS_VERIFICATION]")
    if tech["dataset_required"] == "YES_INFERRED":
        items.append("Dataset coverage, quality and license [NEEDS_VERIFICATION]")
    if tech["payment_required"] == "YES_INFERRED":
        items.append("Real payment eligibility/integration; demo should use mock payment unless verified [NEEDS_VERIFICATION]")
    return "; ".join(items)


def write_csv(path: Path, rows: list[dict], fieldnames: list[str]) -> None:
    with path.open("w", encoding="utf-8-sig", newline="") as stream:
        writer = csv.DictWriter(stream, fieldnames=fieldnames, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def file_sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def render_clusters(ideas: list[Idea]) -> str:
    by_cluster: dict[str, list[Idea]] = defaultdict(list)
    for idea in ideas:
        for cluster in idea.clusters:
            by_cluster[cluster].append(idea)
    lines = [
        "# Idea Clusters",
        "",
        "การจัดกลุ่มนี้เป็น rule-based, multi-label clustering จาก Problem + Solution + Category และไม่อ้างว่าเป็น semantic embedding. หนึ่งไอเดียจึงอยู่ได้หลายกลุ่ม.",
        "",
    ]
    shared = {
        "C01": "ผู้ใช้ต้องการค้นพบ/วางแผนท่องเที่ยว และข้อมูลสถานที่เพียงพอต่อ demo",
        "C02": "ผู้ให้บริการยอมเปิด capacity และผู้ใช้เห็นคุณค่าจากการลดเวลารอ",
        "C03": "มีผู้จ่ายชัดและยอมจ่ายเพื่อประหยัดต้นทุน/เพิ่มรายได้",
        "C04": "หลักฐานดิจิทัลช่วยลดงานหรือข้อพิพาทโดยไม่ถูกตีความเป็นคำปรึกษากฎหมาย",
        "C05": "มี supply และ demand มากพอ; trust/safety แก้ด้วย MVP ได้บางส่วน",
        "C06": "SME ยอมเปลี่ยนจากแชตหรือสเปรดชีต และเห็น ROI ที่วัดได้",
        "C07": "นักเรียน/โรงเรียนเข้าถึงได้โดยไม่ติดข้อมูลส่วนบุคคลหรือระบบราชการ",
        "C08": "workflow แคบพอให้ทำ end-to-end ได้ใน 1.5 วัน",
        "C09": "ผู้บริโภคยอมบันทึกข้อมูลและเห็นประโยชน์ซ้ำต่อเนื่อง",
        "C10": "ชุมชนมีเจ้าของระบบและดูแลข้อมูลหลัง hackathon",
        "C11": "ข้อมูลเตือนภัยแม่นพอและไม่สร้างความมั่นใจเกินจริง",
        "C12": "คุณภาพ AI/OCR/translation เพียงพอและมี fallback เมื่อผิด",
        "C13": "แรงจูงใจทางเศรษฐกิจสอดคล้องกับผลด้านสิ่งแวดล้อม",
    }
    differences = {
        "C01": "ต่างกันที่ discovery, itinerary, transport, local commerce และ buyer",
        "C02": "ต่างกันที่ fixed slot, queue, booking, cancellation และ capacity owner",
        "C03": "ต่างกันที่ calculator, payment, invoice, deposit และ revenue model",
        "C04": "ต่างกันที่ชนิดเอกสาร ระดับความเสี่ยง และผู้ยืนยันหลักฐาน",
        "C05": "ต่างกันที่สินทรัพย์/บริการที่จับคู่ ความถี่ และความเสี่ยง cold start",
        "C06": "ต่างกันที่ order, stock, costing, quotation และ customer communication",
        "C07": "ต่างกันที่ admissions, learning, campus life และ school operations",
        "C08": "ต่างกันที่ approval, handoff, reminder, versioning และ team size",
        "C09": "ต่างกันที่เงิน สุขภาพ บ้าน สัตว์เลี้ยง และ shared household state",
        "C10": "ต่างกันที่ civic reporting, volunteering, donation และ local administration",
        "C11": "ต่างกันที่ prevention, verification, emergency response และ liability",
        "C12": "ต่างกันที่ generate, extract, translate, summarize และ human review",
        "C13": "ต่างกันที่ reuse, repair, refill, waste collection และ carbon accounting",
    }
    for name in CLUSTERS:
        members = sorted(by_cluster.get(name, []), key=lambda x: x.qid)
        code = name.split()[0]
        lines += [
            f"## {name}",
            "",
            f"- Problem Category: {CLUSTERS[name][0]}",
            f"- Number of Ideas: {len(members)}",
            f"- Associated Idea IDs: {', '.join(i.qid for i in members) if members else 'None'}",
            f"- Shared Assumptions: {shared[code]} [INFERENCE]",
            f"- Key Differences: {differences[code]} [INFERENCE]",
            "",
        ]
    return "\n".join(lines)


def main() -> int:
    OUTPUT.mkdir(exist_ok=True)
    CHECKPOINTS.mkdir(exist_ok=True)
    all_ideas: list[Idea] = []
    source_counts: dict[str, int] = {}
    for code, path, label in SOURCES:
        parsed = parse_pdf(code, path, label) if path.suffix.lower() == ".pdf" else parse_markdown(code, path, label)
        source_counts[code] = len(parsed)
        all_ideas.extend(parsed)

    # Hard validation before analysis.
    if source_counts != {"MDA": 100, "MDB": 100, "PDF": 100}:
        raise ValueError(f"Unexpected source counts: {source_counts}")
    qids = [idea.qid for idea in all_ideas]
    if len(qids) != 300 or len(set(qids)) != 300:
        raise ValueError("Qualified IDs are missing or duplicated")
    for code in source_counts:
        found = {i.original_id for i in all_ideas if i.source_code == code}
        expected = {f"IDEA-{n:03d}" for n in range(1, 101)}
        if found != expected:
            raise ValueError(f"Coverage failure for {code}: missing={sorted(expected-found)}, extra={sorted(found-expected)}")

    # Checkpoints preserve extracted source text and a machine-readable parse.
    with (CHECKPOINTS / "raw_ideas.jsonl").open("w", encoding="utf-8") as stream:
        for idea in all_ideas:
            stream.write(json.dumps({
                "qualified_id": idea.qid,
                "source_file": idea.source_file,
                "source_location": idea.source_location,
                "original_id": idea.original_id,
                "original_text": idea.original_text,
            }, ensure_ascii=False) + "\n")
    parsed_checkpoint = [{
        "qualified_id": i.qid,
        "source_file": i.source_file,
        "original_id": i.original_id,
        "title": i.title,
        "category": i.category,
        "problem": i.problem,
        "target_users": i.target_users,
        "solution": i.solution,
        "core_features": i.core_features,
        "monetization": i.monetization,
        "data_api": i.data_api,
        "differentiation": i.differentiation,
        "risk": i.risk,
        "feasibility": i.feasibility,
        "evidence": i.evidence,
    } for i in all_ideas]
    write_csv(CHECKPOINTS / "parsed_fields.csv", parsed_checkpoint, list(parsed_checkpoint[0]))

    reviews = detect_duplicates(all_ideas)
    profiles = {idea.qid: technical_profile(idea) for idea in all_ideas}
    for idea in all_ideas:
        idea.clusters = assign_clusters(idea)
        idea.scores = score_idea(idea, profiles[idea.qid])
    decide(all_ideas, profiles)

    normalized_rows = []
    for idea in all_ideas:
        tech = profiles[idea.qid]
        normalized_rows.append({
            "qualified_id": idea.qid,
            "source_code": idea.source_code,
            "source_file": idea.source_file,
            "source_location": idea.source_location,
            "original_id": idea.original_id,
            "original_text": idea.original_text,
            "normalized_title": idea.title,
            "target_users": idea.target_users,
            "core_problem": idea.problem,
            "proposed_solution": idea.solution,
            "core_features": idea.core_features,
            "monetization_model": idea.monetization,
            "tourism_relevance": tourism_relevance(idea),
            "data_requirements": idea.data_api or "Not stated [UNKNOWN]",
            "technical_dependencies": tech["technical_dependencies"],
            "critical_dependencies": tech["critical_dependencies"],
            "external_api_required": tech["external_api_required"],
            "dataset_required": tech["dataset_required"],
            "realtime_required": tech["realtime_required"],
            "authentication_required": tech["authentication_required"],
            "payment_required": tech["payment_required"],
            "sample_data_demo_possible": tech["sample_data_demo_possible"],
            "missing_information": missing_info(idea, tech),
            "source_category": idea.category,
            "source_feasibility": idea.feasibility,
            "source_evidence_status": idea.evidence,
            "source_differentiation": idea.differentiation,
            "source_biggest_risk": idea.risk,
            "duplicate_classification": idea.duplicate_classification,
            "duplicate_group": idea.duplicate_group,
            "related_ids": "|".join(sorted(set(idea.related_ids))),
            "cluster_ids": "|".join(c.split()[0] for c in idea.clusters),
            "fact_inference_note": "Original fields are FACT-from-input; normalized dependencies, scores, clusters and decisions are INFERENCE; external availability is NEEDS_VERIFICATION.",
        })
    normalized_fields = list(normalized_rows[0])
    write_csv(OUTPUT / "ideas_normalized.csv", normalized_rows, normalized_fields)
    write_csv(OUTPUT / "duplicate_review.csv", reviews, ["duplicate_group", "relation_type", "matching_ids", "similarity_reasons", "confidence", "weighted_similarity"])
    (OUTPUT / "clusters.md").write_text(render_clusters(all_ideas), encoding="utf-8")

    score_fields = ["problem_opportunity_20", "completeness_usability_30", "business_feasibility_impact_30", "pitch_qa_demo_20", "total_100"]
    common_fields = [
        "qualified_id", "original_id", "source_file", "normalized_title", "source_category",
        *score_fields, "tourism_relevance", "duplicate_classification", "critical_dependencies",
        "decision_reason_codes", "rationale", "next_validation",
    ]
    shortlist_rows, reserve_rows, rejection_rows = [], [], []
    for idea in all_ideas:
        tech = profiles[idea.qid]
        base = {
            "qualified_id": idea.qid,
            "original_id": idea.original_id,
            "source_file": idea.source_file,
            "normalized_title": idea.title,
            "source_category": idea.category,
            **idea.scores,
            "tourism_relevance": tourism_relevance(idea),
            "duplicate_classification": idea.duplicate_classification,
            "critical_dependencies": tech["critical_dependencies"],
            "decision_reason_codes": "|".join(idea.decision_reasons),
            "rationale": (
                f"Rubric-based preliminary inference: problem={idea.scores['problem_opportunity_20']}/20, "
                f"build/usability={idea.scores['completeness_usability_30']}/30, "
                f"business/impact={idea.scores['business_feasibility_impact_30']}/30, "
                f"pitch/demo={idea.scores['pitch_qa_demo_20']}/20."
            ),
            "next_validation": missing_info(idea, tech),
        }
        if idea.shortlist_group.startswith("A"):
            shortlist_rows.append(base)
        elif idea.shortlist_group.startswith("B"):
            reserve_rows.append(base)
        else:
            rejection_rows.append(base)
    shortlist_rows.sort(key=lambda r: (-r["total_100"], r["qualified_id"]))
    reserve_rows.sort(key=lambda r: (-r["total_100"], r["qualified_id"]))
    rejection_rows.sort(key=lambda r: (-r["total_100"], r["qualified_id"]))
    write_csv(OUTPUT / "shortlist.csv", shortlist_rows, common_fields)
    write_csv(OUTPUT / "reserve.csv", reserve_rows, common_fields)
    write_csv(OUTPUT / "rejection_log.csv", rejection_rows, common_fields)

    relation_counts = Counter(row["relation_type"] for row in reviews)
    idea_class_counts = Counter(i.duplicate_classification for i in all_ideas)
    cluster_counts = Counter(cluster.split()[0] for i in all_ideas for cluster in i.clusters)
    decision_counts = Counter(i.shortlist_group for i in all_ideas)
    risk_counts = Counter(
        risk for profile in profiles.values()
        for risk in profile["critical_dependencies"].split("; ")
        if not risk.startswith("No critical")
    )
    report = f"""# Preliminary Idea Analysis Report

## Executive summary

- Inputs inspected: 3 files (2 Markdown, 1 PDF)
- Ideas validated: **{len(all_ideas)}** ({', '.join(f'{k}={v}' for k,v in source_counts.items())})
- Qualified IDs: 300 unique; original IDs are intentionally repeated across sources and preserved
- A — SHORTLIST: **{len(shortlist_rows)}**
- B — RESERVE: **{len(reserve_rows)}**
- C — LOW PRIORITY: **{len(rejection_rows)}**
- Selection was threshold- and risk-based; the shortlist count was not forced to 60

## Duplicate review

Idea-level classifications: {', '.join(f'{k}={v}' for k,v in sorted(idea_class_counts.items()))}.

Pair/review rows: {', '.join(f'{k}={v}' for k,v in sorted(relation_counts.items()))}. Similarity is field-aware lexical comparison across Target User, Core Problem, Solution Mechanism and Business Model. Character n-gram Jaccard and sequence similarity were combined; no semantic embedding service was available, so every EXACT/NEAR result is a review candidate rather than an automatic merge. Near-duplicates were not merged.

## Cluster counts

Multi-label counts (totals exceed 300): {', '.join(f'{k}={v}' for k,v in sorted(cluster_counts.items()))}. See `clusters.md` for assumptions, IDs and differences.

## Rubric and scoring

The input includes an apparent competition rubric, so the default prompt weights were replaced with: Problem & Opportunity 20, Completeness & Usability 30, Business Feasibility & Impact 30, Pitch & Q&A 20. Tourism relevance is retained as a separate field and **not added to the 100-point score**, because the input explicitly says the bonus weight is unconfirmed.

All scores are **INFERENCE**, not judging outcomes. FACT means copied from an input field. UNKNOWN marks missing evidence. NEEDS_VERIFICATION marks external facts such as current API access, prices, licences, legal requirements, datasets or payment eligibility.

## Screening logic

- SHORTLIST: score >=77, business score >=18, no LOW source feasibility and no extracted critical dependency.
- RESERVE: promising but medium scope, critical dependency, near-duplicate differentiation, or monetization evidence needs verification.
- LOW PRIORITY: low feasibility, total below 67, or a non-canonical exact duplicate.
- Score was not the sole gate: dependency risk, source feasibility and duplicate status can override it.
- Category diversity was preserved through uniform criteria rather than fixed quotas.

## Frequent critical risks

{chr(10).join(f'- {risk}: {count}' for risk,count in risk_counts.most_common()) or '- No repeated critical risk extracted'}

Other recurring uncertainties are customer willingness-to-pay, cold start for two-sided marketplaces, current API/data availability, payment/KYC eligibility, privacy and legal liability.

## Validation and traceability

- Every source contains IDEA-001 through IDEA-100 exactly once.
- Every normalized record has a source-qualified ID (`MDA-`, `MDB-`, or `PDF-`), original ID, source file, source location and full extracted Original Text.
- `checkpoints/raw_ideas.jsonl` preserves the extracted source record before normalization.
- Source SHA-256: {', '.join(f'{code}={file_sha256(path)}' for code,path,_ in SOURCES)}
- Output partition check: {len(shortlist_rows)} + {len(reserve_rows)} + {len(rejection_rows)} = {len(shortlist_rows)+len(reserve_rows)+len(rejection_rows)}.

## Limitations

- PDF Thai text uses embedded glyph positioning; extraction preserves content but may contain visible spacing/word-splitting artifacts. Page ranges are retained for audit.
- Duplicate detection is not semantic embedding analysis and may miss paraphrases or flag lexically similar concepts. Human review is required for EXACT/NEAR rows.
- No live web verification was performed. Claims copied from the source remain claims-from-input, not independently verified facts.
- Scores estimate hackathon fit from written cards; they do not validate demand, implementation skill, access rights, legal compliance or real-world unit economics.

## Recommended next round

1. Human-review all EXACT_DUPLICATE and NEAR_DUPLICATE pairs, choosing a canonical card without deleting source records.
2. For shortlisted ideas, run 3-5 target-user interviews and one payer interview; record willingness-to-pay separately from interest.
3. Verify the exact API/dataset licence, quota and fallback before selecting a build.
4. Reduce each candidate to one end-to-end demo workflow and use sample data/mock payment when real integrations are not verified.
5. Re-score the strongest candidates after technical spikes, competitor verification and a two-minute pitch rehearsal.
"""
    (OUTPUT / "analysis_report.md").write_text(report, encoding="utf-8")

    manifest = {
        "source_counts": source_counts,
        "total": len(all_ideas),
        "qualified_id_unique": len(set(qids)),
        "output_partition": {"shortlist": len(shortlist_rows), "reserve": len(reserve_rows), "low_priority": len(rejection_rows)},
        "coverage_ok": len(shortlist_rows) + len(reserve_rows) + len(rejection_rows) == len(all_ideas),
        "source_sha256": {code: file_sha256(path) for code, path, _ in SOURCES},
    }
    (CHECKPOINTS / "validation_manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(manifest, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
