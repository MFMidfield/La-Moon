create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  favorite_moods text[] not null default '{}',
  provinces text[] not null default '{}',
  regions text[] not null default '{}', -- ไม่ได้ใช้แล้ว (Register เลือกแค่จังหวัด)
  custom_moods text[] not null default '{}',
  accepted_terms_at timestamptz not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "own profile select" on public.profiles
  for select using (auth.uid() = id);
create policy "own profile insert" on public.profiles
  for insert with check (auth.uid() = id);
create policy "own profile update" on public.profiles
  for update using (auth.uid() = id);

-- avatars: public bucket, เขียน/แก้/ลบได้เฉพาะโฟลเดอร์ <user id> ของตัวเอง
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', true, 2097152, array['image/jpeg','image/png','image/webp']);

create policy "avatar insert own folder" on storage.objects for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "avatar update own folder" on storage.objects for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "avatar delete own folder" on storage.objects for delete to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

-- places: ข้อมูลสถานที่ (อ่านได้ทุกคน, เขียนผ่าน Studio/service role เท่านั้น)
create table public.places (
  id text primary key,                 -- slug เช่น 'krabi-phi-phi'
  province text not null,              -- id จังหวัด เช่น 'krabi'
  name text not null,
  district text,
  description text,
  moods text[] not null default '{}',  -- id มู้ด
  tags text[] not null default '{}',
  rarity text not null default 'common' check (rarity in ('common','rare','legendary')),
  stats jsonb not null default '{}',   -- {"view":1-5,"chill":1-5,"value":1-5,"access":1-5}
  price_level smallint check (price_level between 1 and 3),  -- ประหยัด/กลางๆ/จัดเต็ม
  lat double precision,
  lng double precision,
  image_url text,
  image_credit text,
  affiliate_url text,
  created_at timestamptz not null default now()
);
alter table public.places enable row level security;
create policy "places readable" on public.places for select to anon, authenticated using (true);

-- trips: ทริปที่ผู้ใช้บันทึก
create table public.trips (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  province text not null,
  moods text[] not null default '{}',
  budget smallint,
  days jsonb not null default '[]',    -- [["place-id",...], [...]] เรียงตามวัน
  combos text[] not null default '{}',
  personality text,
  created_at timestamptz not null default now()
);
alter table public.trips enable row level security;
create policy "own trips select" on public.trips for select using (auth.uid() = user_id);
create policy "own trips insert" on public.trips for insert with check (auth.uid() = user_id);
create policy "own trips delete" on public.trips for delete using (auth.uid() = user_id);

-- swipes: ประวัติการปัด (ใช้คำนวณบุคลิก + สถิติ sponsor)
create table public.swipes (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  place_id text not null references public.places(id) on delete cascade,
  direction text not null check (direction in ('left','right')),
  created_at timestamptz not null default now()
);
alter table public.swipes enable row level security;
create policy "own swipes select" on public.swipes for select using (auth.uid() = user_id);
create policy "own swipes insert" on public.swipes for insert with check (auth.uid() = user_id);
