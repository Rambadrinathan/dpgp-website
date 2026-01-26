'use client';

import { useState } from 'react';
import { useComments } from './CommentContext';
import { ENVIRONMENT } from '@/lib/supabase';

export default function ReviewToolbar() {
  const {
    comments,
    currentRound,
    exportComments,
    exportAsAIPrompts,
    clearAllComments,
    startNewRound,
    isReviewMode,
    setReviewMode,
    isLoading,
    error,
    environment,
  } = useComments();
  const [showPanel, setShowPanel] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showNewRoundConfirm, setShowNewRoundConfirm] = useState(false);
  const [showPromptsModal, setShowPromptsModal] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isClearing, setIsClearing] = useState(false);
  const [generatedPrompts, setGeneratedPrompts] = useState('');

  // Hide review mode completely on production environment
  if (ENVIRONMENT === 'production') {
    return null;
  }

  const unresolvedCount = comments.filter((c) => !c.resolved).length;
  const resolvedCount = comments.filter((c) => c.resolved).length;
  const isSandbox = environment === 'sandbox';

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleExport = () => {
    const data = exportComments();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dpgp-comments-round${currentRound}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('Comments exported successfully!');
  };

  const handleExportAIPrompts = () => {
    const prompts = exportAsAIPrompts();
    setGeneratedPrompts(prompts);
    setShowPromptsModal(true);
  };

  const handleCopyPrompts = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompts);
      showNotification('AI Prompts copied to clipboard!');
    } catch {
      showNotification('Failed to copy. Try selecting and copying manually.');
    }
  };

  const handleDownloadPrompts = () => {
    const blob = new Blob([generatedPrompts], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dpgp-ai-prompts-round${currentRound}-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('AI Prompts downloaded!');
  };

  const handleClear = async () => {
    setIsClearing(true);
    await clearAllComments();
    setShowClearConfirm(false);
    setIsClearing(false);
    showNotification(`All Round ${currentRound} comments cleared.`);
  };

  const handleStartNewRound = async () => {
    await startNewRound();
    setShowNewRoundConfirm(false);
    showNotification(`Started Review Round ${currentRound + 1}!`);
  };

  // Floating toggle button when not in review mode
  if (!isReviewMode) {
    return (
      <button
        onClick={() => setReviewMode(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 ${
          isSandbox
            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
            : 'bg-gradient-to-r from-yellow-500 to-orange-500'
        } text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200`}
        title="Enable Review Mode"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        <span className="hidden sm:inline">Review Mode</span>
        <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">R{currentRound}</span>
      </button>
    );
  }

  return (
    <>
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-in fade-in slide-in-from-top-2 duration-200">
          {notification}
        </div>
      )}

      {/* Review Mode Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 shadow-lg ${
        isSandbox
          ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'
          : 'bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left: Review Mode Indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-white">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="font-semibold text-sm">REVIEW MODE</span>
                <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full font-bold">
                  Round {currentRound}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-white/90 text-sm">
                <span>{comments.length} total</span>
                <span>•</span>
                <span className="text-green-200">{resolvedCount} resolved</span>
                <span>•</span>
                <span className="text-red-200">{unresolvedCount} pending</span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              {/* AI Prompts Button */}
              <button
                onClick={handleExportAIPrompts}
                className="flex items-center gap-1 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
                title="Export as AI Prompts"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="hidden sm:inline">AI Prompts</span>
              </button>

              {/* Expand/Actions Button */}
              <button
                onClick={() => setShowPanel(!showPanel)}
                className="flex items-center gap-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span className="hidden sm:inline">More</span>
              </button>

              {/* Exit Review Mode */}
              <button
                onClick={() => setReviewMode(false)}
                className={`flex items-center gap-1 px-3 py-1.5 bg-white text-sm font-medium rounded-lg hover:bg-opacity-90 transition-colors ${
                  isSandbox ? 'text-purple-600' : 'text-orange-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="hidden sm:inline">Exit</span>
              </button>
            </div>
          </div>

          {/* Expanded Panel */}
          {showPanel && (
            <div className="pb-4 pt-2 border-t border-white/20">
              {/* Status indicator */}
              <div className="flex items-center justify-center gap-2 mb-3 text-xs">
                {isLoading ? (
                  <span className="text-white/70">Loading comments...</span>
                ) : error ? (
                  <span className="text-red-200">{error}</span>
                ) : (
                  <span className="text-green-200 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Review Round {currentRound} - Comments sync in real-time
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {/* Export JSON */}
                <button
                  onClick={handleExport}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-sm font-medium">Export JSON</span>
                </button>

                {/* New Round */}
                <button
                  onClick={() => setShowNewRoundConfirm(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500/80 hover:bg-blue-500 text-white rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-sm font-medium">New Round</span>
                </button>

                {/* Clear Current Round */}
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-red-500/80 hover:bg-red-500 text-white rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span className="text-sm font-medium">Clear Round</span>
                </button>

                {/* AI Prompts (duplicate for panel) */}
                <button
                  onClick={handleExportAIPrompts}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500/80 hover:bg-green-500 text-white rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium">AI Prompts</span>
                </button>
              </div>

              <p className="text-white/70 text-xs text-center mt-3">
                Click &quot;AI Prompts&quot; to generate ready-to-use prompts from feedback. Start &quot;New Round&quot; after changes are made.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* AI Prompts Modal */}
      {showPromptsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="px-6 py-4 bg-green-600 text-white flex items-center justify-between">
              <div>
                <h3 className="font-semibold">AI-Ready Prompts - Round {currentRound}</h3>
                <p className="text-sm text-green-100">{unresolvedCount} pending items to process</p>
              </div>
              <button
                onClick={() => setShowPromptsModal(false)}
                className="p-1 hover:bg-white/20 rounded"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto p-6">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded-lg">
                {generatedPrompts}
              </pre>
            </div>
            <div className="px-6 py-3 bg-gray-50 flex justify-end gap-2 border-t">
              <button
                onClick={handleDownloadPrompts}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download .md
              </button>
              <button
                onClick={handleCopyPrompts}
                className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Round Confirmation Modal */}
      {showNewRoundConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden">
            <div className="px-6 py-4 bg-blue-600 text-white">
              <h3 className="font-semibold">Start New Review Round?</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                This will archive Round {currentRound} comments and start <strong>Round {currentRound + 1}</strong>.
              </p>
              <p className="text-sm text-blue-600 mt-2">
                Previous comments are saved and can be accessed later. New comments will be separate.
              </p>
            </div>
            <div className="px-6 py-3 bg-gray-50 flex justify-end gap-2">
              <button
                onClick={() => setShowNewRoundConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleStartNewRound}
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Round {currentRound + 1}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden">
            <div className={`px-6 py-4 text-white ${isSandbox ? 'bg-purple-600' : 'bg-red-600'}`}>
              <h3 className="font-semibold">Clear Round {currentRound} Comments?</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                This will permanently delete all {comments.length} comments from Round {currentRound}. This action cannot be undone.
              </p>
            </div>
            <div className="px-6 py-3 bg-gray-50 flex justify-end gap-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleClear}
                disabled={isClearing}
                className={`px-4 py-2 text-sm font-medium text-white rounded-lg disabled:opacity-50 transition-colors ${
                  isSandbox ? 'bg-purple-600 hover:bg-purple-700' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isClearing ? 'Clearing...' : 'Clear All'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
