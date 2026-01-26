'use client';

import { useState } from 'react';
import { useComments } from './CommentContext';
import { ENVIRONMENT } from '@/lib/supabase';

export default function ReviewToolbar() {
  const {
    comments,
    exportAsAIPrompts,
    isReviewMode,
    setReviewMode,
    isLoading,
    error,
    environment,
  } = useComments();
  const [showPromptsModal, setShowPromptsModal] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
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

  // Export comments as simple text format
  const handleDownloadText = () => {
    const date = new Date().toISOString().split('T')[0];
    let output = `DPGP Website Review Comments\n`;
    output += `Exported: ${new Date().toLocaleString()}\n`;
    output += `Environment: ${ENVIRONMENT}\n`;
    output += `Total: ${comments.length} comments (${unresolvedCount} active, ${resolvedCount} resolved)\n`;
    output += `${'='.repeat(60)}\n\n`;

    // Group by section
    const bySection = comments.reduce((acc, comment) => {
      const key = comment.sectionName || comment.sectionId;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(comment);
      return acc;
    }, {} as Record<string, typeof comments>);

    Object.entries(bySection).forEach(([section, sectionComments]) => {
      output += `## ${section}\n`;
      output += `${'-'.repeat(40)}\n`;

      const active = sectionComments.filter(c => !c.resolved);
      const resolved = sectionComments.filter(c => c.resolved);

      if (active.length > 0) {
        output += `\nActive (${active.length}):\n`;
        active.forEach((comment, i) => {
          const date = new Date(comment.timestamp).toLocaleString('en-IN', {
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
          });
          output += `  ${i + 1}. ${comment.text}\n`;
          output += `     [${date}]\n`;
        });
      }

      if (resolved.length > 0) {
        output += `\nResolved (${resolved.length}):\n`;
        resolved.forEach((comment, i) => {
          const date = new Date(comment.timestamp).toLocaleString('en-IN', {
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
          });
          output += `  ${i + 1}. [RESOLVED] ${comment.text}\n`;
          output += `     [${date}]\n`;
        });
      }

      output += `\n`;
    });

    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dpgp-comments-${date}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('Comments downloaded as text file!');
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
    a.download = `dpgp-ai-prompts-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('AI Prompts downloaded!');
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

      {/* Review Mode Bar - Simplified */}
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
              </div>
              <div className="hidden sm:flex items-center gap-3 text-white/90 text-sm">
                <span>{comments.length} total</span>
                <span>•</span>
                <span className="text-green-200">{resolvedCount} resolved</span>
                <span>•</span>
                <span className="text-red-200">{unresolvedCount} active</span>
                {isLoading && <span className="text-white/70 ml-2">Loading...</span>}
                {error && <span className="text-red-200 ml-2">{error}</span>}
              </div>
            </div>

            {/* Right: Actions - Simplified */}
            <div className="flex items-center gap-2">
              {/* Download Comments (Text) */}
              <button
                onClick={handleDownloadText}
                disabled={comments.length === 0}
                className="flex items-center gap-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
                title="Download all comments as text file"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden sm:inline">Download</span>
              </button>

              {/* AI Prompts Button */}
              <button
                onClick={handleExportAIPrompts}
                disabled={unresolvedCount === 0}
                className="flex items-center gap-1 px-3 py-1.5 bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors"
                title="Generate AI prompts from active comments"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="hidden sm:inline">AI Prompts</span>
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
        </div>
      </div>

      {/* AI Prompts Modal */}
      {showPromptsModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="px-6 py-4 bg-green-600 text-white flex items-center justify-between">
              <div>
                <h3 className="font-semibold">AI-Ready Prompts</h3>
                <p className="text-sm text-green-100">{unresolvedCount} active items to process</p>
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
    </>
  );
}
