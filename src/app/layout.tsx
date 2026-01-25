import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DPGP - দল নয়, মন্ত্রী চাই',
  description: '100-Day Voter Education Campaign for West Bengal Assembly Elections 2026',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
