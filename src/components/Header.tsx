'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

type Locale = 'en' | 'hi' | 'bn';

interface HeaderProps {
  lang: Locale;
  dict: {
    nav: {
      home: string;
      whyNow?: string;
      ministries: string;
      about: string;
      join: string;
      donate?: string;
    };
  };
}

const localeNames: Record<Locale, string> = {
  en: 'EN',
  hi: 'हि',
  bn: 'বা',
};

export default function Header({ lang, dict }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/why-now`, label: dict.nav.whyNow || 'Why Now' },
    { href: `/${lang}/ministries`, label: dict.nav.ministries },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/join`, label: dict.nav.join },
  ];

  const donateLabel = dict.nav.donate || 'Donate';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="DPGP Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-blue-900 text-xl tracking-tight">DPGP</span>
              <span className="text-xs text-orange-500 block font-medium">মন্ত্রী চিনুন, মন্ত্রী বাছুন</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-orange-500 py-2 ${
                  pathname === item.href ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href={`/${lang}/donate`}
              className="ml-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-full transition-all duration-300 hover:scale-105 shadow-md"
            >
              {donateLabel}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex bg-gray-100 rounded-full p-1">
              {(['en', 'hi', 'bn'] as Locale[]).map((locale) => (
                <Link
                  key={locale}
                  href={switchLocale(locale)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    lang === locale
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {localeNames[locale]}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden ml-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'
        }`}>
          <div className="pt-2 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${lang}/donate`}
              className="block mt-2 mx-4 py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-lg text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {donateLabel}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
