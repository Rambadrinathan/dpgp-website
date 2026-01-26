import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Environment: 'production' for live site, 'sandbox' for staging/testing
export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || 'sandbox';

// Types for the section_comments table
export interface SectionComment {
  id: string;
  section_id: string;
  page_url: string;
  comment_text: string;
  author_name: string | null;
  resolved: boolean;
  created_at: string;
  updated_at: string;
}

export interface NewComment {
  section_id: string;
  page_url: string;
  comment_text: string;
  author_name?: string;
}

// Comment operations
export async function fetchComments(sectionId?: string) {
  let query = supabase
    .from('section_comments')
    .select('*')
    .order('created_at', { ascending: false });

  if (sectionId) {
    query = query.eq('section_id', sectionId);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching comments:', error);
    return [];
  }

  return data as SectionComment[];
}

export async function addComment(comment: {
  section_id: string;
  page_url: string;
  comment_text: string;
  author_name?: string;
}) {
  const { data, error } = await supabase
    .from('section_comments')
    .insert([{
      section_id: comment.section_id,
      page_url: comment.page_url,
      comment_text: comment.comment_text,
      author_name: comment.author_name || null,
      resolved: false,
    }])
    .select()
    .single();

  if (error) {
    console.error('Error adding comment:', error);
    return null;
  }

  return data as SectionComment;
}

export async function updateComment(id: string, updates: Partial<SectionComment>) {
  const { data, error } = await supabase
    .from('section_comments')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating comment:', error);
    return null;
  }

  return data as SectionComment;
}

export async function deleteComment(id: string) {
  const { error } = await supabase
    .from('section_comments')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting comment:', error);
    return false;
  }

  return true;
}

export async function toggleResolvedStatus(id: string, resolved: boolean) {
  return updateComment(id, { resolved });
}
