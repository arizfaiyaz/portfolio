create table if not exists portfolio_visitors (
  id bigint primary key generated always as identity,
  counter_name text unique not null,
  count bigint not null default 120,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

insert into portfolio_visitors (counter_name, count)
values ('main', 120)
on conflict (counter_name) do nothing;
