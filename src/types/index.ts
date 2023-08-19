import { Database } from './supabase'

export type NewsLetter = Database['public']['Tables']['newsletter']['Row']
export type Checksome = Database['public']['Tables']['checksome']['Row']

export type NextPageProps<
  Params extends Record<string, string> = { example: 'example' },
  SearhParams extends Record<string, string> = { example: 'example' }
> = {
  params: Params
  searchParams: SearhParams
}
