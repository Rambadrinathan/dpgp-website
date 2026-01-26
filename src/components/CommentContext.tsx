'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase, DbComment, ENVIRONMENT } from '@/lib/supabase';

export interface Comment {
  id: string;
  sectionId: string;
  sectionName: string;
  pagePath: string;
  text: string;
  timestamp: string;
  resolved?: boolean;
  reviewRound: number;
}

interface CommentContextType {
  comments: Comment[];
  currentRound: number;
  addComment: (sectionId: string, sectionName: string, text: string) => Promise<void>;
  deleteComment: (id: string) => Promise<void>;
  toggleResolved: (id: string) => Promise<void>;
  getCommentsForSection: (sectionId: string) => Comment[];
  exportComments: () => string;
  exportAsAIPrompts: () => string;
  clearAllComments: () => Promise<void>;
  startNewRound: () => Promise<void>;
  isReviewMode: boolean;
  setReviewMode: (enabled: boolean) => void;
  isLoading: boolean;
  error: string | null;
  environment: string;
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

const REVIEW_MODE_KEY = 'dpgp-review-mode';
const REVIEW_ROUND_KEY = 'dpgp-review-round';

function dbToComment(db: DbComment): Comment {
  return {
    id: db.id,
    sectionId: db.section_id,
    sectionName: db.section_name || db.section_id,
    pagePath: db.page_path,
    text: db.text,
    timestamp: db.created_at,
    resolved: db.resolved,
    reviewRound: db.review_round || 1,
  };
}

// Section name to file mapping for AI prompts
const SECTION_FILE_MAP: Record<string, string> = {
  'hero': 'src/app/[lang]/page.tsx - Hero Section',
  'hero-section': 'src/app/[lang]/page.tsx - Hero Section',
  'why-now': 'src/app/[lang]/why-now/page.tsx',
  'about': 'src/app/[lang]/about/page.tsx',
  'ministries': 'src/app/[lang]/ministries/page.tsx',
  'join': 'src/app/[lang]/join/page.tsx',
  'donate': 'src/app/[lang]/donate/page.tsx',
  'crowdfunding': 'src/app/[lang]/donate/page.tsx - Crowdfunding Section',
  'navigation': 'src/components/Navigation.tsx',
  'footer': 'src/components/Footer.tsx',
};

export function CommentProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load comments and round from Supabase on mount
  useEffect(() => {
    async function loadComments() {
      try {
        setIsLoading(true);

        // First, get the current round number
        const storedRound = localStorage.getItem(REVIEW_ROUND_KEY);
        const round = storedRound ? parseInt(storedRound, 10) : 1;
        setCurrentRound(round);

        // Load comments for current round only
        const { data, error: fetchError } = await supabase
          .from('comments')
          .select('*')
          .eq('environment', ENVIRONMENT)
          .eq('review_round', round)
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

    // Subscribe to real-time changes
    const channel = supabase
      .channel('comments-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'comments' },
        (payload) => {
          const record = (payload.new || payload.old) as DbComment;
          if (record?.environment !== ENVIRONMENT) return;

          // Only show comments from current round
          const storedRound = localStorage.getItem(REVIEW_ROUND_KEY);
          const round = storedRound ? parseInt(storedRound, 10) : 1;
          if (record?.review_round !== round) return;

          if (payload.eventType === 'INSERT') {
            const newComment = dbToComment(payload.new as DbComment);
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

  const addComment = useCallback(async (sectionId: string, sectionName: string, text: string) => {
    const pagePath = typeof window !== 'undefined' ? window.location.pathname : '/';

    const { data, error: insertError } = await supabase
      .from('comments')
      .insert({
        section_id: sectionId,
        section_name: sectionName,
        page_path: pagePath,
        text: text,
        resolved: false,
        environment: ENVIRONMENT,
        review_round: currentRound,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Failed to add comment:', insertError);
      setError('Failed to save comment.');
      return;
    }

    if (data) {
      const newComment = dbToComment(data);
      setComments((prev) => {
        if (prev.some((c) => c.id === newComment.id)) {
          return prev;
        }
        return [...prev, newComment];
      });
    }
  }, [currentRound]);

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
      reviewRound: currentRound,
      comments: comments,
    };
    return JSON.stringify(exportData, null, 2);
  }, [comments, currentRound]);

  // Generate AI-ready prompts from comments
  const exportAsAIPrompts = useCallback(() => {
    const unresolvedComments = comments.filter((c) => !c.resolved);

    if (unresolvedComments.length === 0) {
      return '# No pending feedback to process\n\nAll comments have been resolved!';
    }

    // Group comments by section
    const bySection = unresolvedComments.reduce((acc, comment) => {
      const key = comment.sectionName || comment.sectionId;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(comment);
      return acc;
    }, {} as Record<string, Comment[]>);

    let output = `# DPGP Website - Review Round ${currentRound} Feedback\n`;
    output += `Generated: ${new Date().toISOString()}\n`;
    output += `Environment: ${ENVIRONMENT}\n`;
    output += `Total pending items: ${unresolvedComments.length}\n\n`;
    output += `---\n\n`;
    output += `## AI PROMPT TO EXECUTE ALL CHANGES:\n\n`;
    output += `Please make the following changes to the DPGP website based on reviewer feedback:\n\n`;

    Object.entries(bySection).forEach(([section, sectionComments], index) => {
      const fileHint = SECTION_FILE_MAP[section.toLowerCase()] || `Section: ${section}`;

      output += `### ${index + 1}. ${section}\n`;
      output += `**File:** ${fileHint}\n`;
      output += `**Page:** ${sectionComments[0]?.pagePath || 'Unknown'}\n\n`;
      output += `**Changes requested:**\n`;

      sectionComments.forEach((comment, i) => {
        output += `${i + 1}. ${comment.text}\n`;
      });

      output += `\n`;
    });

    output += `---\n\n`;
    output += `## INDIVIDUAL PROMPTS (copy-paste ready):\n\n`;

    Object.entries(bySection).forEach(([section, sectionComments]) => {
      const fileHint = SECTION_FILE_MAP[section.toLowerCase()] || section;

      sectionComments.forEach((comment, i) => {
        output += `### Prompt ${i + 1} - ${section}:\n`;
        output += `\`\`\`\n`;
        output += `In the "${section}" section (${fileHint}), please make the following change:\n\n`;
        output += `${comment.text}\n`;
        output += `\`\`\`\n\n`;
      });
    });

    return output;
  }, [comments, currentRound]);

  const clearAllComments = useCallback(async () => {
    const { error: deleteError } = await supabase
      .from('comments')
      .delete()
      .eq('environment', ENVIRONMENT)
      .eq('review_round', currentRound);

    if (deleteError) {
      console.error('Failed to clear comments:', deleteError);
      setError('Failed to clear comments.');
      return;
    }

    setComments([]);
  }, [currentRound]);

  // Start a new review round (archives current comments by incrementing round number)
  const startNewRound = useCallback(async () => {
    const newRound = currentRound + 1;
    setCurrentRound(newRound);
    localStorage.setItem(REVIEW_ROUND_KEY, String(newRound));
    setComments([]); // Clear local state for new round
  }, [currentRound]);

  const setReviewModeHandler = useCallback((enabled: boolean) => {
    setIsReviewMode(enabled);
  }, []);

  return (
    <CommentContext.Provider
      value={{
        comments,
        currentRound,
        addComment,
        deleteComment,
        toggleResolved,
        getCommentsForSection,
        exportComments,
        exportAsAIPrompts,
        clearAllComments,
        startNewRound,
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
