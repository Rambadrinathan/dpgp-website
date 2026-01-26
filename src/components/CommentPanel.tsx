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
  const panelRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const comments = getCommentsForSection(sectionId);
  const unresolvedCount = comments.filter((c) => !c.resolved).length;

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
        {unresolvedCount > 0 && (
          <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {unresolvedCount}
          </span>
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-white">
            <h3 className="font-semibold text-sm">{sectionName}</h3>
            <p className="text-xs text-blue-100">{comments.length} comments</p>
          </div>

          {/* Comments List */}
          <div className="max-h-64 overflow-y-auto">
            {comments.length === 0 ? (
              <div className="px-4 py-6 text-center text-gray-500 text-sm">
                No comments yet. Add feedback below.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className={`px-4 py-3 ${comment.resolved ? 'bg-green-50' : 'bg-white'}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm flex-1 whitespace-pre-wrap ${
                        comment.resolved ? 'text-gray-500 line-through' : 'text-gray-800'
                      }`}>
                        {comment.text}
                      </p>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={() => toggleResolved(comment.id)}
                          className={`p-1 rounded transition-colors ${
                            comment.resolved
                              ? 'text-green-600 hover:bg-green-100'
                              : 'text-gray-400 hover:bg-gray-100 hover:text-green-600'
                          }`}
                          title={comment.resolved ? 'Mark unresolved' : 'Mark resolved'}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteComment(comment.id)}
                          className="p-1 rounded text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                          title="Delete"
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

          {/* Add Comment Form */}
          <form onSubmit={handleAddComment} className="p-3 bg-gray-50 border-t">
            <textarea
              ref={textareaRef}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add feedback... (e.g., 'Logo too small - SJS')"
              className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              rows={2}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-400">Sign with initials</span>
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                Add Comment
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
