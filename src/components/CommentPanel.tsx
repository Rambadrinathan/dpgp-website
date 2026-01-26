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
  const [activeTab, setActiveTab] = useState<'comments' | 'ai-edit'>('comments');
  const [newComment, setNewComment] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiPreview, setAiPreview] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [applyingChanges, setApplyingChanges] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
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
  }, [isOpen, activeTab]);

  // Hide completely on production environment or when review mode is disabled
  if (ENVIRONMENT === 'production' || !isReviewMode) {
    return null;
  }

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      await addComment(sectionId, newComment.trim());
      setNewComment('');
    }
  };

  const handleGeneratePreview = async () => {
    if (!aiPrompt.trim()) return;

    setAiLoading(true);
    setAiError(null);
    setAiPreview(null);

    try {
      const response = await fetch('/api/ai-edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sectionId,
          prompt: aiPrompt,
          mode: 'preview',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate preview');
      }

      setAiPreview(data.suggestion);
    } catch (error) {
      setAiError(error instanceof Error ? error.message : 'Failed to generate preview');
    } finally {
      setAiLoading(false);
    }
  };

  const handleApplyChanges = async () => {
    if (!aiPrompt.trim()) return;

    setApplyingChanges(true);
    setAiError(null);

    try {
      const response = await fetch('/api/ai-edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sectionId,
          prompt: aiPrompt,
          mode: 'apply',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to apply changes');
      }

      setSuccessMessage('Changes applied! Page will refresh...');
      setAiPrompt('');
      setAiPreview(null);

      // Add a comment noting the AI edit
      await addComment(sectionId, `[AI Edit Applied] ${aiPrompt}`);

      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      setAiError(error instanceof Error ? error.message : 'Failed to apply changes');
    } finally {
      setApplyingChanges(false);
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
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('comments')}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'comments'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              💬 Comments ({comments.length})
            </button>
            <button
              onClick={() => setActiveTab('ai-edit')}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'ai-edit'
                  ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ⚡ AI Edit
            </button>
          </div>

          {/* Comments Tab */}
          {activeTab === 'comments' && (
            <>
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
            </>
          )}

          {/* AI Edit Tab */}
          {activeTab === 'ai-edit' && (
            <div className="p-4">
              {successMessage && (
                <div className="mb-3 p-3 bg-green-100 text-green-800 rounded-lg text-sm">
                  ✓ {successMessage}
                </div>
              )}

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What change do you want?
                </label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="e.g., Make the logo 2x bigger, Change heading to 'Join the Movement', Add a gradient background..."
                  className="w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-purple-500 resize-none"
                  rows={3}
                />
              </div>

              {aiError && (
                <div className="mb-3 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                  {aiError}
                </div>
              )}

              {/* Preview */}
              {aiPreview && (
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-purple-700">Preview (first 500 chars)</span>
                  </div>
                  <pre className="p-2 bg-gray-900 text-green-400 text-xs rounded-lg overflow-auto max-h-32">
                    {aiPreview.slice(0, 500)}...
                  </pre>
                </div>
              )}

              <div className="flex gap-2">
                <button
                  onClick={handleGeneratePreview}
                  disabled={!aiPrompt.trim() || aiLoading}
                  className="flex-1 px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-lg hover:bg-purple-200 disabled:opacity-50"
                >
                  {aiLoading ? '⏳ Generating...' : '👁️ Preview'}
                </button>
                <button
                  onClick={handleApplyChanges}
                  disabled={!aiPrompt.trim() || applyingChanges}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 disabled:opacity-50"
                >
                  {applyingChanges ? '⏳ Applying...' : '⚡ Apply Changes'}
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-3 text-center">
                Changes will be applied directly to the code. Page will auto-refresh.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
