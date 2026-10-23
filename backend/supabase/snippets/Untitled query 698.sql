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
