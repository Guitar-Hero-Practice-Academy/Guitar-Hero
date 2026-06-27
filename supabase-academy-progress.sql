create extension if not exists pgcrypto;

create table if not exists public.academy_progress (
  id uuid primary key default gen_random_uuid(),
  user_id text not null unique,
  active_mission_id text,
  completed_exercise_ids jsonb not null default '[]'::jsonb,
  checkpoint_results jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create index if not exists academy_progress_user_id_idx
  on public.academy_progress (user_id);
