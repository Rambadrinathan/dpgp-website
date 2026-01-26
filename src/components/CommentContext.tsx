'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface Comment {
  id: string;
  sectionId: string;
  text: string;
  timestamp: string;
  resolved?: boolean;
}

interface CommentContextType {
  comments: Comment[];
  addComment: (sectionId: string, text: string) => void;
  deleteComment: (id: string) => void;
  toggleResolved: (id: string) => void;
  getCommentsForSection: (sectionId: string) => Comment[];
  exportComments: () => string;
  importComments: (json: string) => boolean;
  clearAllComments: () => void;
  isReviewMode: boolean;
  setReviewMode: (enabled: boolean) => void;
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

const STORAGE_KEY = 'dpgp-review-comments';
const REVIEW_MODE_KEY = 'dpgp-review-mode';

export function CommentProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load comments from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setComments(JSON.parse(saved));
      }
      const reviewMode = localStorage.getItem(REVIEW_MODE_KEY);
      if (reviewMode === 'true') {
        setIsReviewMode(true);
      }
    } catch (e) {
      console.error('Failed to load comments:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
      } catch (e) {
        console.error('Failed to save comments:', e);
      }
    }
  }, [comments, isLoaded]);

  // Save review mode preference
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(REVIEW_MODE_KEY, String(isReviewMode));
    }
  }, [isReviewMode, isLoaded]);

  const addComment = useCallback((sectionId: string, text: string) => {
    const newComment: Comment = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      sectionId,
      text,
      timestamp: new Date().toISOString(),
      resolved: false,
    };
    setComments((prev) => [...prev, newComment]);
  }, []);

  const deleteComment = useCallback((id: string) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const toggleResolved = useCallback((id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, resolved: !c.resolved } : c))
    );
  }, []);

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
      comments: comments,
    };
    return JSON.stringify(exportData, null, 2);
  }, [comments]);

  const importComments = useCallback((json: string): boolean => {
    try {
      const data = JSON.parse(json);
      if (data.comments && Array.isArray(data.comments)) {
        // Merge imported comments with existing, avoiding duplicates
        setComments((prev) => {
          const existingIds = new Set(prev.map((c) => c.id));
          const newComments = data.comments.filter(
            (c: Comment) => !existingIds.has(c.id)
          );
          return [...prev, ...newComments];
        });
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  const clearAllComments = useCallback(() => {
    setComments([]);
  }, []);

  const setReviewMode = useCallback((enabled: boolean) => {
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
        setReviewMode,
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
