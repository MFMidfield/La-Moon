You are doing careful, verified research for a Thai travel-planning app. Today is 2026-10-24. QUALITY OVER QUANTITY: fewer entries are fine; every value must be correct and current. Use the newest sources, and cross-check each key fact (existence/still open, location, price, hours) with at least 2 independent sources (official website or official social page, Google Maps listing, Agoda/Booking/Traveloka listing, Michelin Guide, Wongnai, TAT). Skip anything permanently or temporarily closed. Never guess: unknown → null and list the field in "uncertain_fields".

Scope: 5 southern provinces
Targets:
- krabi, phang-nga, phuket, surat-thani, nakhon-si-thammarat: per province 6 stays (2 saver, 2 mid, 2 comfy; include islands/beach areas where relevant, e.g. Ao Nang/Railay, Khao Lak, Patong/Kata/Old Town, Samui/Phangan/Khao Sok, Khanom/Sichon) and 8 restaurants/cafés (local southern food, seafood, famous markets/shops)

Return ONE JSON object only (no prose), exactly:
{"generated_at": "2026-10-24", "stays": [ ... ], "restaurants": [ ... ]}

STAY object (all keys present):
{
  "id": "slug-from-english-name",                 // lowercase a-z0-9-
  "province": "bangkok",                          // province id given above
  "name_th": "", "name_en": "",
  "type": "hotel | resort | boutique | hostel | guesthouse | homestay | villa",
  "area_th": "ย่าน/อำเภอ เช่น อ่าวนาง",
  "lat": 0, "lng": 0, "coords_source": "url (Google Maps/OSM/official)",
  "description_th": "1 short original Thai sentence (no copying)",
  "price_per_night_thb": {"min": 0, "max": 0},   // standard double room, 2 adults, typical (non-holiday) rate; from a listing you opened
  "price_checked_on": "2026-10-xx", "price_source": "url",
  "tier": "saver | mid | comfy",                  // saver < ฿1,200/night, mid ฿1,200–3,500, comfy > ฿3,500
  "rating": {"score": 0, "out_of": 10, "count": 0, "source": "url"},
  "amenities": ["pool","breakfast","free_wifi","parking","beach_access","near_transit","family","pet_friendly","workspace"],  // only verified ones
  "moods": ["1–3 of: beach mountain food temple quiet photo adventure"],
  "check_in": "14:00", "check_out": "12:00",
  "website": "official url or null",
  "booking_urls": {"agoda": null, "booking": null, "traveloka": null},  // direct property pages you opened
  "image_url": null, "image_page_url": null, "image_author": null, "image_license": null,   // ONLY Wikimedia Commons (CC0/PD/CC BY/CC BY-SA, 1280px thumbnail) or Unsplash, verified on the file page
  "official_image_url": null,                      // the property's own og:image/hero image URL from its official website (copyrighted; app will credit it) — only if it clearly shows this property
  "sources": ["urls"],
  "uncertain_fields": []
}

RESTAURANT object (all keys present):
{
  "id": "slug-from-english-name",
  "province": "bangkok",
  "name_th": "", "name_en": "",
  "kind": "restaurant | street_food | cafe | market | bakery | bar",
  "cuisine_th": ["ไทยใต้","ซีฟู้ด"],
  "signature_dishes_th": ["2–4 dishes it is known for"],
  "meals": ["breakfast","lunch","dinner","snack"],
  "area_th": "", "lat": 0, "lng": 0, "coords_source": "url",
  "description_th": "1 short original Thai sentence",
  "price_per_person_thb": {"min": 0, "max": 0},  // typical spend per person
  "opening_hours": "HH:MM-HH:MM | text", "closed_days": "Thai text or null",
  "awards": ["e.g. Michelin Bib Gourmand 2026", "Wongnai Users' Choice 2026"],   // only if verified on the awarding site
  "rating": {"score": 0, "out_of": 5, "count": 0, "source": "url"},
  "dietary": ["halal","vegetarian","vegan"],       // only verified
  "moods": ["food + up to 2 more"],
  "website": "official url/social page or null",
  "image_url": null, "image_page_url": null, "image_author": null, "image_license": null,   // free-licensed only, as above
  "official_image_url": null,                      // from its own website/official page, only if clearly this place
  "sources": ["urls"],
  "uncertain_fields": []
}

Before answering, re-check: no duplicates; every coordinate really points at the place; prices have a source and date; nothing permanently closed.
