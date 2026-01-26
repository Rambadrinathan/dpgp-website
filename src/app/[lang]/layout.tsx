import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewProvider from '@/components/ReviewProvider';
import { getDictionary, Locale, locales } from '@/dictionaries';

const notoBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'bn') as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'bn') as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className={notoBengali.variable}>
      <body className="font-sans antialiased">
        <ReviewProvider>
          <Header lang={locale} dict={dict} />
          <main className="pt-16 pb-16">{children}</main>
          <Footer lang={locale} dict={dict} />
        </ReviewProvider>
      </body>
    </html>
  );
}
