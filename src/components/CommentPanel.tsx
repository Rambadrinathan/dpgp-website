'use client';

import { useState, useRef, useEffect } from 'react';
import { useComments } from './CommentContext';
import { ENVIRONMENT } from '@/lib/supabase';

interface CommentPanelProps {
  sectionId: string;
  sectionName: string;
}

export default function CommentPanel({ sectionId, sectionName }: CommentPanelProps) {
  const { getCommentsForSection, addComment, deleteComment, toggleResolved, isReviewMode } = useComments();
  const [isOpen, setIsOpen] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const comments = getCommentsForSection(sectionId);
  const activeComments = comments.filter((c) => !c.resolved);
  const resolvedComments = comments.filter((c) => c.resolved);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  // Hide completely on production environment or when review mode is disabled
  if (ENVIRONMENT === 'production' || !isReviewMode) {
    return null;
  }

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      await addComment(sectionId, sectionName, newComment.trim());
      setNewComment('');
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="relative" ref={panelRef}>
      {/* Review Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          isOpen
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-2 border-dashed border-yellow-400'
        }`}
        title={`Review ${sectionName}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
        <span className="hidden sm:inline">Review</span>
        {activeComments.length > 0 && (
          <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {activeComments.length}
          </span>
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-white">
            <h3 className="font-semibold text-sm">{sectionName}</h3>
            <p className="text-xs text-blue-100">
              {activeComments.length} active • {resolvedComments.length} resolved
            </p>
          </div>

          {/* Active Comments */}
          <div className="max-h-48 overflow-y-auto">
            {activeComments.length === 0 ? (
              <div className="px-4 py-4 text-center text-gray-500 text-sm">
                No active feedback. Add comments below.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {activeComments.map((comment) => (
                  <div key={comment.id} className="px-4 py-3 bg-white">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm flex-1 whitespace-pre-wrap text-gray-800">
                        {comment.text}
                      </p>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={() => toggleResolved(comment.id)}
                          className="p-1 rounded text-gray-400 hover:bg-green-100 hover:text-green-600 transition-colors"
                          title="Mark resolved (moves to history)"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteComment(comment.id)}
                          className="p-1 rounded text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                          title="Delete permanently"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{formatTimestamp(comment.timestamp)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* History Section (Collapsible) */}
          {resolvedComments.length > 0 && (
            <div className="border-t border-gray-200">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="w-full px-4 py-2 flex items-center justify-between text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <svg className={`w-4 h-4 transition-transform ${showHistory ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  History ({resolvedComments.length})
                </span>
                <span className="text-xs text-green-600">Resolved</span>
              </button>

              {showHistory && (
                <div className="max-h-32 overflow-y-auto bg-gray-50 divide-y divide-gray-100">
                  {resolvedComments.map((comment) => (
                    <div key={comment.id} className="px-4 py-2">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs text-gray-500 line-through flex-1 whitespace-pre-wrap">
                          {comment.text}
                        </p>
                        <button
                          onClick={() => toggleResolved(comment.id)}
                          className="p-1 rounded text-green-600 hover:bg-green-100 transition-colors flex-shrink-0"
                          title="Reopen this feedback"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">Added {formatTimestamp(comment.timestamp)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Add Comment Form */}
          <form onSubmit={handleAddComment} className="p-3 bg-gray-50 border-t">
            <textarea
              ref={textareaRef}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add feedback... (sign with initials)"
              className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              rows={2}
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
