import urllib.request, urllib.parse, re, html, time, json, sys
UA={"User-Agent":"Mozilla/5.0"}
def get(u):
    try:
        return urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=15).read().decode("utf-8","ignore")
    except Exception as e:
        return ""
kws=sys.argv[1:]
out=[]
for k in kws:
    s=get("https://pantip.com/search?q="+urllib.parse.quote(k))
    ids=[]
    for i in re.findall(r'/topic/(\d+)',s):
        if i not in ids: ids.append(i)
    for i in ids[:6]:
        p=get("https://pantip.com/topic/"+i)
        t=re.search(r'<meta property="og:title" content="([^"]*)"',p)
        d=re.search(r'<meta (?:name|property)="(?:og:)?description" content="([^"]*)"',p)
        dt=re.search(r'"datePublished"\s*:\s*"([^"]+)"',p) or re.search(r'data-utime="([^"]+)"',p)
        out.append({"kw":k,"id":i,"title":html.unescape(t.group(1)) if t else "","desc":html.unescape(d.group(1))[:300] if d else "","date":dt.group(1) if dt else ""})
        time.sleep(0.4)
for o in out: print(json.dumps(o,ensure_ascii=False))
