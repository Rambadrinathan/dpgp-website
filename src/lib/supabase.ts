import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Environment: 'production' for real reviews, 'sandbox' for testing
export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || 'sandbox';

export interface DbComment {
  id: string;
  section_id: string;
  page_path: string;
  text: string;
  resolved: boolean;
  created_at: string;
  environment: string;
}
