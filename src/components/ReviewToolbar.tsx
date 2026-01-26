'use client';

import { useState } from 'react';
import { useComments } from './CommentContext';

export default function ReviewToolbar() {
  const {
    comments,
    exportComments,
    clearAllComments,
    isReviewMode,
    setReviewMode,
    isLoading,
    error,
    environment,
  } = useComments();
  const [showPanel, setShowPanel] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isClearing, setIsClearing] = useState(false);

  const unresolvedCount = comments.filter((c) => !c.resolved).length;
  const resolvedCount = comments.filter((c) => c.resolved).length;
  const isStaging = environment === 'staging';

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  // Generate a readable text report of all feedback
  const generateFeedbackReport = () => {
    // Group comments by section
    const bySection: Record<string, typeof comments> = {};
    comments.forEach((c) => {
      if (!bySection[c.sectionId]) {
        bySection[c.sectionId] = [];
      }
      bySection[c.sectionId].push(c);
    });

    const lines: string[] = [
      '═══════════════════════════════════════════════════════════════',
      '                    DPGP WEBSITE REVIEW FEEDBACK',
      '═══════════════════════════════════════════════════════════════',
      '',
      `Generated: ${new Date().toLocaleString('en-IN')}`,
      `Environment: ${environment.toUpperCase()}`,
      `Total Comments: ${comments.length}`,
      `Resolved: ${resolvedCount} | Pending: ${unresolvedCount}`,
      '',
      '═══════════════════════════════════════════════════════════════',
      '',
    ];

    Object.entries(bySection).forEach(([sectionId, sectionComments]) => {
      lines.push(`📍 SECTION: ${sectionId.toUpperCase()}`);
      lines.push('───────────────────────────────────────────────────────────────');

      sectionComments.forEach((comment, index) => {
        const status = comment.resolved ? '✅ RESOLVED' : '⏳ PENDING';
        const date = new Date(comment.timestamp).toLocaleString('en-IN');
        lines.push(`  ${index + 1}. [${status}] ${date}`);
        lines.push(`     "${comment.text}"`);
        lines.push('');
      });

      lines.push('');
    });

    lines.push('═══════════════════════════════════════════════════════════════');
    lines.push('                         END OF REPORT');
    lines.push('═══════════════════════════════════════════════════════════════');

    return lines.join('\n');
  };

  const handleExportText = () => {
    const report = generateFeedbackReport();
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dpgp-feedback-${environment}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('Feedback report downloaded!');
  };

  const handleExportJSON = () => {
    const data = exportComments();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dpgp-comments-${environment}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('JSON exported!');
  };

  const handleCopyReport = async () => {
    const report = generateFeedbackReport();
    try {
      await navigator.clipboard.writeText(report);
      showNotification('Report copied to clipboard!');
    } catch {
      showNotification('Failed to copy.');
    }
  };

  const handleClear = async () => {
    setIsClearing(true);
    await clearAllComments();
    setShowClearConfirm(false);
    setIsClearing(false);
    showNotification('All comments cleared.');
  };

  // Floating toggle button when not in review mode
  if (!isReviewMode) {
    return (
      <button
        onClick={() => setReviewMode(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 ${
          isStaging
            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
            : 'bg-gradient-to-r from-yellow-500 to-orange-500'
        } text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200`}
        title="Enable Review Mode"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        <span className="hidden sm:inline">Review Mode</span>
        {isStaging && <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded">STAGING</span>}
      </button>
    );
  }

  return (
    <>
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
          {notification}
        </div>
      )}

      {/* Review Mode Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 shadow-lg ${
        isStaging
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
                {isStaging && (
                  <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded font-bold">
                    STAGING
                  </span>
                )}
              </div>
              <div className="hidden sm:flex items-center gap-3 text-white/90 text-sm">
                <span>{comments.length} feedback</span>
                <span>•</span>
                <span className="text-green-200">{resolvedCount} done</span>
                <span>•</span>
                <span className="text-red-200">{unresolvedCount} pending</span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPanel(!showPanel)}
                className="flex items-center gap-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden sm:inline">Export</span>
              </button>

              <button
                onClick={() => setReviewMode(false)}
                className={`flex items-center gap-1 px-3 py-1.5 bg-white text-sm font-medium rounded-lg hover:bg-opacity-90 transition-colors ${
                  isStaging ? 'text-purple-600' : 'text-orange-600'
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
                  <span className="text-white/70">Loading...</span>
                ) : error ? (
                  <span className="text-red-200">{error}</span>
                ) : (
                  <span className="text-green-200 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Synced to cloud
                  </span>
                )}
              </div>

              <div className="grid grid-cols-4 gap-2">
                {/* Export Text Report */}
                <button
                  onClick={handleExportText}
                  className="flex flex-col items-center justify-center gap-1 px-3 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-xs font-medium">Text Report</span>
                </button>

                {/* Export JSON */}
                <button
                  onClick={handleExportJSON}
                  className="flex flex-col items-center justify-center gap-1 px-3 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-xs font-medium">JSON</span>
                </button>

                {/* Copy to Clipboard */}
                <button
                  onClick={handleCopyReport}
                  className="flex flex-col items-center justify-center gap-1 px-3 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium">Copy</span>
                </button>

                {/* Clear All */}
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="flex flex-col items-center justify-center gap-1 px-3 py-2.5 bg-red-500/80 hover:bg-red-500 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span className="text-xs font-medium">Clear</span>
                </button>
              </div>

              <p className="text-white/70 text-xs text-center mt-3">
                Click &quot;Review&quot; on each section to add feedback
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden">
            <div className={`px-6 py-4 text-white ${isStaging ? 'bg-purple-600' : 'bg-red-600'}`}>
              <h3 className="font-semibold">Clear All Feedback?</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                This will permanently delete all {comments.length} comments. Export first if needed.
              </p>
            </div>
            <div className="px-6 py-3 bg-gray-50 flex justify-end gap-2">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleClear}
                disabled={isClearing}
                className={`px-4 py-2 text-sm font-medium text-white rounded-lg disabled:opacity-50 ${
                  isStaging ? 'bg-purple-600 hover:bg-purple-700' : 'bg-red-600 hover:bg-red-700'
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
