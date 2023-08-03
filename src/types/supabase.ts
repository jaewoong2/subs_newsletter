export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      article: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          link: string | null
          thumbnail: string | null
          title: string | null
          view: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          link?: string | null
          thumbnail?: string | null
          title?: string | null
          view?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          link?: string | null
          thumbnail?: string | null
          title?: string | null
          view?: number | null
        }
        Relationships: []
      }
      blocks: {
        Row: {
          bgcolor: string | null
          created_at: string | null
          id: number
          image: string | null
          subtitle: string | null
          textcolor: string | null
          title: string | null
        }
        Insert: {
          bgcolor?: string | null
          created_at?: string | null
          id?: number
          image?: string | null
          subtitle?: string | null
          textcolor?: string | null
          title?: string | null
        }
        Update: {
          bgcolor?: string | null
          created_at?: string | null
          id?: number
          image?: string | null
          subtitle?: string | null
          textcolor?: string | null
          title?: string | null
        }
        Relationships: []
      }
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
          view: number | null
        }
        Insert: {
          category?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number
          link?: string | null
          name?: string | null
          thumbnail?: string | null
          view?: number | null
        }
        Update: {
          category?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number
          link?: string | null
          name?: string | null
          thumbnail?: string | null
          view?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      newsletter_random: {
        Row: {
          category: string[] | null
          created_at: string | null
          description: string | null
          id: number | null
          link: string | null
          name: string | null
          thumbnail: string | null
          view: number | null
        }
        Insert: {
          category?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number | null
          link?: string | null
          name?: string | null
          thumbnail?: string | null
          view?: number | null
        }
        Update: {
          category?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number | null
          link?: string | null
          name?: string | null
          thumbnail?: string | null
          view?: number | null
        }
        Relationships: []
      }
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
