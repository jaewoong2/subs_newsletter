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
          days: string[] | null
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
          days?: string[] | null
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
          days?: string[] | null
          description?: string | null
          id?: number
          link?: string | null
          name?: string | null
          thumbnail?: string | null
          view?: number | null
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      categories: {
        Row: {
          categories: string | null
          count: number | null
        }
        Relationships: []
      }
      newsletter_random: {
        Row: {
          category: string[] | null
          created_at: string | null
          days: string[] | null
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
          days?: string[] | null
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
          days?: string[] | null
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
