export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      checksome: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          email: string | null
          id: number
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          email?: string | null
          id?: number
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          email?: string | null
          id?: number
        }
        Relationships: []
      }
      newsletter: {
        Row: {
          category: string[] | null
          created_at: string | null
          description: string | null
          id: number
          link: string | null
          name: string | null
          thumbnail: string | null
        }
        Insert: {
          category?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number
          link?: string | null
          name?: string | null
          thumbnail?: string | null
        }
        Update: {
          category?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number
          link?: string | null
          name?: string | null
          thumbnail?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
