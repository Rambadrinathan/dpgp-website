'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase, DbComment, ENVIRONMENT } from '@/lib/supabase';

export interface Comment {
  id: string;
  sectionId: string;
  pagePath: string;
  text: string;
  timestamp: string;
  resolved?: boolean;
}

interface CommentContextType {
  comments: Comment[];
  addComment: (sectionId: string, text: string) => Promise<void>;
  deleteComment: (id: string) => Promise<void>;
  toggleResolved: (id: string) => Promise<void>;
  getCommentsForSection: (sectionId: string) => Comment[];
  exportComments: () => string;
  clearAllComments: () => Promise<void>;
  isReviewMode: boolean;
  setReviewMode: (enabled: boolean) => void;
  isLoading: boolean;
  error: string | null;
  environment: string;
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

const REVIEW_MODE_KEY = 'dpgp-review-mode';

function dbToComment(db: DbComment): Comment {
  return {
    id: db.id,
    sectionId: db.section_id,
    pagePath: db.page_path,
    text: db.text,
    timestamp: db.created_at,
    resolved: db.resolved,
  };
}

export function CommentProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load comments from Supabase on mount - filtered by environment
  useEffect(() => {
    async function loadComments() {
      try {
        setIsLoading(true);
        const { data, error: fetchError } = await supabase
          .from('comments')
          .select('*')
          .eq('environment', ENVIRONMENT)
          .order('created_at', { ascending: true });

        if (fetchError) {
          console.error('Failed to load comments:', fetchError);
          setError('Failed to load comments. Using local mode.');
          return;
        }

        if (data) {
          setComments(data.map(dbToComment));
        }
        setError(null);
      } catch (e) {
        console.error('Failed to load comments:', e);
        setError('Failed to connect to database.');
      } finally {
        setIsLoading(false);
      }
    }

    loadComments();

    // Load review mode preference from localStorage
    const reviewMode = localStorage.getItem(REVIEW_MODE_KEY);
    if (reviewMode === 'true') {
      setIsReviewMode(true);
    }

    // Subscribe to real-time changes - filtered by environment
    const channel = supabase
      .channel('comments-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'comments' },
        (payload) => {
          // Only handle events for our environment
          const record = (payload.new || payload.old) as DbComment;
          if (record?.environment !== ENVIRONMENT) return;

          if (payload.eventType === 'INSERT') {
            const newComment = dbToComment(payload.new as DbComment);
            // Prevent duplicates - only add if not already in state
            setComments((prev) => {
              if (prev.some((c) => c.id === newComment.id)) {
                return prev;
              }
              return [...prev, newComment];
            });
          } else if (payload.eventType === 'UPDATE') {
            const updated = dbToComment(payload.new as DbComment);
            setComments((prev) =>
              prev.map((c) => (c.id === updated.id ? updated : c))
            );
          } else if (payload.eventType === 'DELETE') {
            const deletedId = (payload.old as DbComment).id;
            setComments((prev) => prev.filter((c) => c.id !== deletedId));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Save review mode preference
  useEffect(() => {
    localStorage.setItem(REVIEW_MODE_KEY, String(isReviewMode));
  }, [isReviewMode]);

  const addComment = useCallback(async (sectionId: string, text: string) => {
    const pagePath = typeof window !== 'undefined' ? window.location.pathname : '/';

    const { data, error: insertError } = await supabase
      .from('comments')
      .insert({
        section_id: sectionId,
        page_path: pagePath,
        text: text,
        resolved: false,
        environment: ENVIRONMENT,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Failed to add comment:', insertError);
      setError('Failed to save comment.');
      return;
    }

    // Don't add to state here - let real-time subscription handle it
    // This prevents duplicates
    if (data) {
      const newComment = dbToComment(data);
      setComments((prev) => {
        if (prev.some((c) => c.id === newComment.id)) {
          return prev;
        }
        return [...prev, newComment];
      });
    }
  }, []);

  const deleteComment = useCallback(async (id: string) => {
    const { error: deleteError } = await supabase
      .from('comments')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.error('Failed to delete comment:', deleteError);
      setError('Failed to delete comment.');
      return;
    }

    setComments((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const toggleResolved = useCallback(async (id: string) => {
    const comment = comments.find((c) => c.id === id);
    if (!comment) return;

    const { error: updateError } = await supabase
      .from('comments')
      .update({ resolved: !comment.resolved })
      .eq('id', id);

    if (updateError) {
      console.error('Failed to update comment:', updateError);
      setError('Failed to update comment.');
      return;
    }

    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, resolved: !c.resolved } : c))
    );
  }, [comments]);

  const getCommentsForSection = useCallback(
    (sectionId: string) => {
      return comments.filter((c) => c.sectionId === sectionId);
    },
    [comments]
  );

  const exportComments = useCallback(() => {
    const exportData = {
      exportedAt: new Date().toISOString(),
      source: 'DPGP Website Review',
      environment: ENVIRONMENT,
      comments: comments,
    };
    return JSON.stringify(exportData, null, 2);
  }, [comments]);

  const clearAllComments = useCallback(async () => {
    // Only clear comments for current environment
    const { error: deleteError } = await supabase
      .from('comments')
      .delete()
      .eq('environment', ENVIRONMENT);

    if (deleteError) {
      console.error('Failed to clear comments:', deleteError);
      setError('Failed to clear comments.');
      return;
    }

    setComments([]);
  }, []);

  const setReviewModeHandler = useCallback((enabled: boolean) => {
    setIsReviewMode(enabled);
  }, []);

  return (
    <CommentContext.Provider
      value={{
        comments,
        addComment,
        deleteComment,
        toggleResolved,
        getCommentsForSection,
        exportComments,
        clearAllComments,
        isReviewMode,
        setReviewMode: setReviewModeHandler,
        isLoading,
        error,
        environment: ENVIRONMENT,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export function useComments() {
  const context = useContext(CommentContext);
  if (context === undefined) {
    throw new Error('useComments must be used within a CommentProvider');
  }
  return context;
}
