import { Database } from './supabase'

export type NewsLetter = Database['public']['Tables']['newsletter']['Row']
export type Checksome = Database['public']['Tables']['checksome']['Row']
