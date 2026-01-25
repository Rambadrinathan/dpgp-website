import Link from 'next/link';
import { getDictionary, Locale, locales } from '@/dictionaries';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);

  const ministries = [
    { key: 'health', icon: '🏥' },
    { key: 'education', icon: '📚' },
    { key: 'home', icon: '🛡️' },
    { key: 'pwd', icon: '🛣️' },
    { key: 'panchayat', icon: '🏘️' },
    { key: 'urban', icon: '🏙️' },
    { key: 'agriculture', icon: '🌾' },
    { key: 'food', icon: '🍚' },
    { key: 'power', icon: '⚡' },
    { key: 'transport', icon: '🚌' },
  ] as const;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-orange-400">{dict.hero.tagline}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 mb-6">
              {dict.hero.subtitle}
            </p>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              {dict.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/ministries`}
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105"
              >
                {dict.hero.cta}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={`/${lang}/join`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all hover:bg-white/10"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            {dict.stats.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                {dict.stats.stat1}
              </div>
              <div className="text-gray-600">{dict.stats.stat1Label}</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100">
              <div className="text-5xl md:text-6xl font-bold text-blue-900 mb-2">
                {dict.stats.stat2}
              </div>
              <div className="text-gray-600">{dict.stats.stat2Label}</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                {dict.stats.stat3}
              </div>
              <div className="text-gray-600">{dict.stats.stat3Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
            {dict.mission.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{dict.mission.point1Title}</h3>
              <p className="text-gray-600">{dict.mission.point1}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{dict.mission.point2Title}</h3>
              <p className="text-gray-600">{dict.mission.point2}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{dict.mission.point3Title}</h3>
              <p className="text-gray-600">{dict.mission.point3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {dict.ministries.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.ministries.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {ministries.map((ministry) => {
              const ministryData = dict.ministriesList[ministry.key];
              return (
                <div
                  key={ministry.key}
                  className="group p-4 bg-gray-50 rounded-xl hover:bg-blue-900 transition-all cursor-pointer"
                >
                  <div className="text-3xl mb-2">{ministry.icon}</div>
                  <h3 className="font-semibold text-sm text-blue-900 group-hover:text-white transition-colors">
                    {ministryData.name}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link
              href={`/${lang}/ministries`}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-full transition-all"
            >
              {dict.ministries.viewAll}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {dict.join.title}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {dict.join.subtitle}
          </p>
          <Link
            href={`/${lang}/join`}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105"
          >
            {dict.cta.joinNow}
          </Link>
        </div>
      </section>
    </div>
  );
}
