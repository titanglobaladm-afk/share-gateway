export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      ai_evaluations: {
        Row: {
          ai_comments: string | null
          attempt_id: string | null
          cognitive_score: number | null
          communication_score: number | null
          created_at: string | null
          critical_thinking_score: number | null
          evaluation_type: string
          id: string
          overall_score: number | null
          raw_ai_response: Json | null
          recommendation: string | null
          situational_score: number | null
          technical_score: number | null
          user_id: string
        }
        Insert: {
          ai_comments?: string | null
          attempt_id?: string | null
          cognitive_score?: number | null
          communication_score?: number | null
          created_at?: string | null
          critical_thinking_score?: number | null
          evaluation_type: string
          id?: string
          overall_score?: number | null
          raw_ai_response?: Json | null
          recommendation?: string | null
          situational_score?: number | null
          technical_score?: number | null
          user_id: string
        }
        Update: {
          ai_comments?: string | null
          attempt_id?: string | null
          cognitive_score?: number | null
          communication_score?: number | null
          created_at?: string | null
          critical_thinking_score?: number | null
          evaluation_type?: string
          id?: string
          overall_score?: number | null
          raw_ai_response?: Json | null
          recommendation?: string | null
          situational_score?: number | null
          technical_score?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_evaluations_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "aptitude_test_attempts"
            referencedColumns: ["id"]
          },
        ]
      }
      aptitude_test_answers: {
        Row: {
          answer: string
          attempt_id: string | null
          created_at: string | null
          id: string
          is_correct: boolean | null
          question_id: string
        }
        Insert: {
          answer: string
          attempt_id?: string | null
          created_at?: string | null
          id?: string
          is_correct?: boolean | null
          question_id: string
        }
        Update: {
          answer?: string
          attempt_id?: string | null
          created_at?: string | null
          id?: string
          is_correct?: boolean | null
          question_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "aptitude_test_answers_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "aptitude_test_attempts"
            referencedColumns: ["id"]
          },
        ]
      }
      aptitude_test_attempts: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          passed: boolean | null
          role: Database["public"]["Enums"]["app_role"] | null
          score: number | null
          started_at: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          passed?: boolean | null
          role?: Database["public"]["Enums"]["app_role"] | null
          score?: number | null
          started_at?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          passed?: boolean | null
          role?: Database["public"]["Enums"]["app_role"] | null
          score?: number | null
          started_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      document_templates: {
        Row: {
          active: boolean | null
          content_en: string
          content_fr: string
          created_at: string | null
          document_type: string
          id: string
          requires_signature: boolean | null
          title_en: string
          title_fr: string
          updated_at: string | null
          version: string | null
        }
        Insert: {
          active?: boolean | null
          content_en: string
          content_fr: string
          created_at?: string | null
          document_type: string
          id?: string
          requires_signature?: boolean | null
          title_en: string
          title_fr: string
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          active?: boolean | null
          content_en?: string
          content_fr?: string
          created_at?: string | null
          document_type?: string
          id?: string
          requires_signature?: boolean | null
          title_en?: string
          title_fr?: string
          updated_at?: string | null
          version?: string | null
        }
        Relationships: []
      }
      manual_answer_scores: {
        Row: {
          answer_id: string
          feedback: string | null
          graded_at: string | null
          grader_user_id: string
          id: string
          score: number
        }
        Insert: {
          answer_id: string
          feedback?: string | null
          graded_at?: string | null
          grader_user_id: string
          id?: string
          score: number
        }
        Update: {
          answer_id?: string
          feedback?: string | null
          graded_at?: string | null
          grader_user_id?: string
          id?: string
          score?: number
        }
        Relationships: [
          {
            foreignKeyName: "manual_answer_scores_answer_id_fkey"
            columns: ["answer_id"]
            isOneToOne: true
            referencedRelation: "aptitude_test_answers"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string | null
          id: string
          kyc_completed_at: string | null
          kyc_data: Json | null
          kyc_verified: boolean | null
          locale: string | null
          onboarding_completed: boolean | null
          phone: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          kyc_completed_at?: string | null
          kyc_data?: Json | null
          kyc_verified?: boolean | null
          locale?: string | null
          onboarding_completed?: boolean | null
          phone?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          kyc_completed_at?: string | null
          kyc_data?: Json | null
          kyc_verified?: boolean | null
          locale?: string | null
          onboarding_completed?: boolean | null
          phone?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      quiz_attempts: {
        Row: {
          ai_evaluation_id: string | null
          answers: Json | null
          course_id: string
          created_at: string | null
          id: string
          passed: boolean | null
          quiz_id: string
          score: number | null
          started_at: string | null
          submitted_at: string | null
          user_id: string
        }
        Insert: {
          ai_evaluation_id?: string | null
          answers?: Json | null
          course_id: string
          created_at?: string | null
          id?: string
          passed?: boolean | null
          quiz_id: string
          score?: number | null
          started_at?: string | null
          submitted_at?: string | null
          user_id: string
        }
        Update: {
          ai_evaluation_id?: string | null
          answers?: Json | null
          course_id?: string
          created_at?: string | null
          id?: string
          passed?: boolean | null
          quiz_id?: string
          score?: number | null
          started_at?: string | null
          submitted_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempts_ai_evaluation_id_fkey"
            columns: ["ai_evaluation_id"]
            isOneToOne: false
            referencedRelation: "ai_evaluations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_courses: {
        Row: {
          assigned_at: string | null
          completed_at: string | null
          course_id: string
          id: string
          last_accessed_at: string | null
          lessons_completed: Json | null
          progress_percentage: number | null
          quizzes_completed: Json | null
          role_test_passed: boolean | null
          user_id: string
        }
        Insert: {
          assigned_at?: string | null
          completed_at?: string | null
          course_id: string
          id?: string
          last_accessed_at?: string | null
          lessons_completed?: Json | null
          progress_percentage?: number | null
          quizzes_completed?: Json | null
          role_test_passed?: boolean | null
          user_id: string
        }
        Update: {
          assigned_at?: string | null
          completed_at?: string | null
          course_id?: string
          id?: string
          last_accessed_at?: string | null
          lessons_completed?: Json | null
          progress_percentage?: number | null
          quizzes_completed?: Json | null
          role_test_passed?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      user_document_signatures: {
        Row: {
          document_template_id: string
          id: string
          ip_address: string | null
          signature_data: Json | null
          signed_at: string | null
          user_id: string
        }
        Insert: {
          document_template_id: string
          id?: string
          ip_address?: string | null
          signature_data?: Json | null
          signed_at?: string | null
          user_id: string
        }
        Update: {
          document_template_id?: string
          id?: string
          ip_address?: string | null
          signature_data?: Json | null
          signed_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_document_signatures_document_template_id_fkey"
            columns: ["document_template_id"]
            isOneToOne: false
            referencedRelation: "document_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_passed_role_test: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role:
        | "admin"
        | "investor"
        | "doctor"
        | "nurse"
        | "driver"
        | "manager"
        | "security"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "admin",
        "investor",
        "doctor",
        "nurse",
        "driver",
        "manager",
        "security",
      ],
    },
  },
} as const
