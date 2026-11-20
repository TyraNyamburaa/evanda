create table if not exists public.health (
  status text primary key
);

insert into public.health (status)
values ('ok')
on conflict (status) do nothing;

alter table public.health enable row level security;

grant select on public.health to anon, authenticated;

create policy "Health status is readable"
on public.health
for select
to anon, authenticated
using (true);
