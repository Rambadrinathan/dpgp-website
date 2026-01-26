'use client';

import { ReactNode } from 'react';
import { CommentProvider } from './CommentContext';
import ReviewToolbar from './ReviewToolbar';

interface ReviewProviderProps {
  children: ReactNode;
}

export default function ReviewProvider({ children }: ReviewProviderProps) {
  return (
    <CommentProvider>
      {children}
      <ReviewToolbar />
    </CommentProvider>
  );
}
