export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      article: {
        Row: {
          category: string[] | null
          content: string | null
          created_at: string | null
          description: string | null
          id: number
          link: string | null
          thumbnail: string | null
          title: string | null
          view: number | null
        }
        Insert: {
          category?: string[] | null
          content?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          link?: string | null
          thumbnail?: string | null
          title?: string | null
          view?: number | null
        }
        Update: {
          category?: string[] | null
          content?: string | null
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
      letters: {
        Row: {
          content: string | null
          created_at: string
          id: number
          newsletter_id: number | null
          released_at: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          newsletter_id?: number | null
          released_at?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          newsletter_id?: number | null
          released_at?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'letters_newsletter_id_fkey'
            columns: ['newsletter_id']
            referencedRelation: 'newsletter'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'letters_newsletter_id_fkey'
            columns: ['newsletter_id']
            referencedRelation: 'newsletter_random'
            referencedColumns: ['id']
          }
        ]
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
          register: string | null
          status: string
          thumbnail: string | null
          updated_at: string
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
          register?: string | null
          status?: string
          thumbnail?: string | null
          updated_at?: string
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
          register?: string | null
          status?: string
          thumbnail?: string | null
          updated_at?: string
          view?: number | null
        }
        Relationships: []
      }
      newsletter_sequences: {
        Row: {
          count: number | null
          created_at: string
          id: number
          source_newsletter: number | null
          target_newsletter: number | null
        }
        Insert: {
          count?: number | null
          created_at?: string
          id?: number
          source_newsletter?: number | null
          target_newsletter?: number | null
        }
        Update: {
          count?: number | null
          created_at?: string
          id?: number
          source_newsletter?: number | null
          target_newsletter?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'newsletter_sequences_source_newsletter_fkey'
            columns: ['source_newsletter']
            referencedRelation: 'newsletter'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'newsletter_sequences_source_newsletter_fkey'
            columns: ['source_newsletter']
            referencedRelation: 'newsletter_random'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'newsletter_sequences_target_newsletter_fkey'
            columns: ['target_newsletter']
            referencedRelation: 'newsletter'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'newsletter_sequences_target_newsletter_fkey'
            columns: ['target_newsletter']
            referencedRelation: 'newsletter_random'
            referencedColumns: ['id']
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          newsletter_id: number | null
          role: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          newsletter_id?: number | null
          role?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          newsletter_id?: number | null
          role?: string
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
          },
          {
            foreignKeyName: 'users_newsletter_id_fkey'
            columns: ['newsletter_id']
            referencedRelation: 'newsletter'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'users_newsletter_id_fkey'
            columns: ['newsletter_id']
            referencedRelation: 'newsletter_random'
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
      explore_related_newsletters: {
        Args: {
          starting_item_id: number
        }
        Returns: {
          related_item_id: number
          counts: number
          depths: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
