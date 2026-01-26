'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase, SectionComment, addComment as addSupabaseComment, deleteComment as deleteSupabaseComment, toggleResolvedStatus } from '@/lib/supabase';

export interface Comment {
  id: string;
  sectionId: string;
  text: string;
  timestamp: string;
  resolved?: boolean;
  authorName?: string;
}

interface CommentContextType {
  comments: Comment[];
  addComment: (sectionId: string, text: string) => Promise<void>;
  deleteComment: (id: string) => Promise<void>;
  toggleResolved: (id: string) => Promise<void>;
  getCommentsForSection: (sectionId: string) => Comment[];
  exportComments: () => string;
  importComments: (json: string) => boolean;
  clearAllComments: () => void;
  isReviewMode: boolean;
  setReviewMode: (enabled: boolean) => void;
  isLoading: boolean;
  currentPageUrl: string;
  setCurrentPageUrl: (url: string) => void;
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

const REVIEW_MODE_KEY = 'dpgp-review-mode';

// Convert Supabase comment to local format
function toLocalComment(sc: SectionComment): Comment {
  return {
    id: sc.id,
    sectionId: sc.section_id,
    text: sc.comment_text,
    timestamp: sc.created_at,
    resolved: sc.resolved,
    authorName: sc.author_name || undefined,
  };
}

export function CommentProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState('');

  // Load comments from Supabase on mount
  useEffect(() => {
    async function loadComments() {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('section_comments')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) {
          console.error('Failed to load comments from Supabase:', error);
        } else if (data) {
          setComments(data.map(toLocalComment));
        }
      } catch (e) {
        console.error('Failed to load comments:', e);
      }
      setIsLoading(false);
    }

    loadComments();

    // Load review mode preference from localStorage
    const reviewMode = localStorage.getItem(REVIEW_MODE_KEY);
    if (reviewMode === 'true') {
      setIsReviewMode(true);
    }

    // Subscribe to real-time updates
    const channel = supabase
      .channel('section_comments_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'section_comments' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newComment = toLocalComment(payload.new as SectionComment);
            setComments((prev) => {
              // Avoid duplicates
              if (prev.some((c) => c.id === newComment.id)) return prev;
              return [...prev, newComment];
            });
          } else if (payload.eventType === 'UPDATE') {
            const updated = toLocalComment(payload.new as SectionComment);
            setComments((prev) =>
              prev.map((c) => (c.id === updated.id ? updated : c))
            );
          } else if (payload.eventType === 'DELETE') {
            const deletedId = (payload.old as { id: string }).id;
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
    // Extract author name if present (e.g., "comment text - SJS")
    let authorName: string | undefined;
    let commentText = text;
    const authorMatch = text.match(/\s*[-–—]\s*([A-Za-z]{2,10})$/);
    if (authorMatch) {
      authorName = authorMatch[1];
      commentText = text.replace(/\s*[-–—]\s*[A-Za-z]{2,10}$/, '').trim();
    }

    const result = await addSupabaseComment({
      section_id: sectionId,
      page_url: currentPageUrl || window.location.pathname,
      comment_text: commentText,
      author_name: authorName,
    });

    if (result) {
      // Real-time subscription will handle the update
    }
  }, [currentPageUrl]);

  const deleteComment = useCallback(async (id: string) => {
    const success = await deleteSupabaseComment(id);
    if (success) {
      // Real-time subscription will handle the update
    }
  }, []);

  const toggleResolved = useCallback(async (id: string) => {
    const comment = comments.find((c) => c.id === id);
    if (comment) {
      await toggleResolvedStatus(id, !comment.resolved);
      // Real-time subscription will handle the update
    }
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
      pageUrl: currentPageUrl,
      comments: comments,
    };
    return JSON.stringify(exportData, null, 2);
  }, [comments, currentPageUrl]);

  const importComments = useCallback((json: string): boolean => {
    // Import is now mainly for reference - actual data is in Supabase
    try {
      const data = JSON.parse(json);
      if (data.comments && Array.isArray(data.comments)) {
        console.log('Import data (for reference):', data);
        // TODO: Could batch insert to Supabase if needed
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  const clearAllComments = useCallback(() => {
    // Clear is a dangerous operation - only clear local state
    // Supabase data should be managed through dashboard
    console.warn('Clear all is disabled for Supabase mode. Manage data through Supabase dashboard.');
  }, []);

  const handleSetReviewMode = useCallback((enabled: boolean) => {
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
        importComments,
        clearAllComments,
        isReviewMode,
        setReviewMode: handleSetReviewMode,
        isLoading,
        currentPageUrl,
        setCurrentPageUrl,
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
