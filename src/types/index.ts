import { Database } from './supabase'

export type NewsLetter = Database['public']['Tables']['newsletter']['Row']
export type Checksome = Database['public']['Tables']['checksome']['Row']
export type Users = Database['public']['Tables']['users']['Row']
export type Articles = Database['public']['Tables']['article']['Row']

export type NextPageProps<
  Params extends Record<string, string> | null = null,
  SearhParams extends Record<string, string> | null = null
> = {
  params: Params
  searchParams: SearhParams
}
