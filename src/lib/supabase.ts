import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Environment: 'production' for live site, 'sandbox' for staging/testing
export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || 'sandbox';

export interface DbComment {
  id: string;
  section_id: string;
  section_name?: string;
  page_path: string;
  text: string;
  resolved: boolean;
  created_at: string;
  environment: string;
  review_round: number;
}
