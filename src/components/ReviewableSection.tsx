'use client';

import { ReactNode } from 'react';
import CommentPanel from './CommentPanel';
import { useComments } from './CommentContext';

interface ReviewableSectionProps {
  sectionId: string;
  sectionName: string;
  children: ReactNode;
  className?: string;
}

export default function ReviewableSection({
  sectionId,
  sectionName,
  children,
  className = '',
}: ReviewableSectionProps) {
  const { isReviewMode, getCommentsForSection } = useComments();
  const comments = getCommentsForSection(sectionId);
  const hasUnresolved = comments.some((c) => !c.resolved);

  return (
    <div className={`relative ${className}`}>
      {/* Review indicator border when in review mode */}
      {isReviewMode && (
        <div
          className={`absolute inset-0 pointer-events-none rounded-lg border-2 border-dashed transition-colors ${
            hasUnresolved
              ? 'border-red-400 bg-red-50/20'
              : comments.length > 0
              ? 'border-green-400 bg-green-50/20'
              : 'border-yellow-400/50'
          }`}
        />
      )}

      {/* Section Content */}
      <div className="relative">
        {children}
      </div>

      {/* Comment Panel Button - positioned at top right */}
      {isReviewMode && (
        <div className="absolute top-2 right-2 z-40">
          <CommentPanel sectionId={sectionId} sectionName={sectionName} />
        </div>
      )}
    </div>
  );
}
