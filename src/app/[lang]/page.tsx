import Link from 'next/link';
import Image from 'next/image';
import { getDictionary, Locale, locales } from '@/dictionaries';
import ReviewableSection from '@/components/ReviewableSection';

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
      {/* Hero Section with Background Image */}
      <ReviewableSection sectionId="home-hero" sectionName="Hero Section">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="DPGP Campaign"
            fill
            className="object-cover object-top"
            priority
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-blue-900/80" />
          {/* Animated Particles/Glow Effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Logo */}
          <div className="animate-fade-in-down mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 animate-float">
              <Image
                src="/images/logo.png"
                alt="DPGP Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Main Tagline */}
          <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            <span className="gradient-text drop-shadow-lg">{dict.hero.tagline}</span>
          </h1>

          {/* Subtitle with glass effect */}
          <div className="animate-fade-in-up delay-200 inline-block glass rounded-full px-6 py-3 mb-8">
            <p className="text-xl md:text-2xl text-white font-medium">
              {dict.hero.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="animate-fade-in-up delay-300 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            {dict.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/ministries`}
              className="group inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 btn-shine animate-pulse-glow"
            >
              {dict.hero.cta}
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href={`/${lang}/join`}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 hover:border-white text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up delay-600 absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Stats Section */}
      <ReviewableSection sectionId="home-stats" sectionName="Stats Section">
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #1a365d 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
            {dict.stats.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: dict.stats.stat1, label: dict.stats.stat1Label, color: 'orange' },
              { stat: dict.stats.stat2, label: dict.stats.stat2Label, color: 'blue' },
              { stat: dict.stats.stat3, label: dict.stats.stat3Label, color: 'orange' },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center p-10 rounded-3xl card-hover ${
                  item.color === 'orange'
                    ? 'bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200'
                    : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200'
                }`}
              >
                <div className={`text-6xl md:text-7xl font-bold mb-4 ${
                  item.color === 'orange' ? 'text-orange-500' : 'text-blue-900'
                }`}>
                  {item.stat}
                </div>
                <div className="text-gray-600 text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Mission Section */}
      <ReviewableSection sectionId="home-mission" sectionName="Mission Section">
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-6">
            {dict.mission.title}
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto text-lg">
            {lang === 'bn' ? 'আমাদের তিনটি মূল লক্ষ্য' : lang === 'hi' ? 'हमारे तीन मुख्य लक्ष्य' : 'Our three core objectives'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: dict.mission.point1Title, desc: dict.mission.point1, icon: '📖', color: 'blue' },
              { title: dict.mission.point2Title, desc: dict.mission.point2, icon: '💡', color: 'orange' },
              { title: dict.mission.point3Title, desc: dict.mission.point3, icon: '✊', color: 'blue' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-4xl ${
                  item.color === 'blue' ? 'bg-blue-100' : 'bg-orange-100'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Ministries Preview */}
      <ReviewableSection sectionId="home-ministries" sectionName="Ministries Preview">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              {dict.ministries.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.ministries.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {ministries.map((ministry, index) => {
              const ministryData = dict.ministriesList[ministry.key];
              return (
                <div
                  key={ministry.key}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:from-blue-900 hover:to-blue-800 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-900 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                    {ministry.icon}
                  </div>
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
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 btn-shine"
            >
              {dict.ministries.viewAll}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Quote Section */}
      <ReviewableSection sectionId="home-quote" sectionName="Quote Section">
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6 opacity-50">&quot;</div>
          <blockquote className="text-2xl md:text-4xl font-medium text-white mb-8 leading-relaxed">
            {lang === 'bn'
              ? 'দল তো হাসপাতাল চালায় না, রাস্তা বানায় না — মন্ত্রী চালায়। তাই মন্ত্রী চিনুন, মন্ত্রী বাছুন।'
              : lang === 'hi'
              ? 'पार्टी तो अस्पताल नहीं चलाती, सड़क नहीं बनाती — मंत्री चलाते हैं। इसलिए मंत्री जानो, मंत्री चुनो।'
              : 'Parties don\'t run hospitals or build roads — Ministers do. Know your minister, choose your minister.'}
          </blockquote>
          <p className="text-orange-400 font-semibold text-lg">
            — Mahacharya Sourabh J Sarkar
          </p>
        </div>
      </section>
      </ReviewableSection>

      {/* CTA Section */}
      <ReviewableSection sectionId="home-cta" sectionName="Call to Action">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {dict.join.title}
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            {dict.join.subtitle}
          </p>
          <Link
            href={`/${lang}/join`}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-orange-500 font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl btn-shine"
          >
            {dict.cta.joinNow}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
      </ReviewableSection>
    </div>
  );
}