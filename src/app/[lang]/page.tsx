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

      {/* The Prayog Section */}
      <ReviewableSection sectionId="home-prayog" sectionName="The Prayog Section">
      <section className="bg-gradient-to-b from-white to-purple-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4">
              {dict.prayog.title}
            </h2>
            <p className="text-xl text-purple-700 font-medium mb-4">
              {dict.prayog.subtitle}
            </p>
            <p className="text-gray-600 italic max-w-2xl mx-auto">
              {dict.prayog.meaning}
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              {dict.prayog.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-200">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                🔬
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">{dict.prayog.hypothesis}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.prayog.hypothesisText}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-200">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                ⚗️
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">{dict.prayog.experiment}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.prayog.experimentText}</p>
            </div>
          </div>

          {/* Three Pillars */}
          <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-12">
            {lang === 'bn' ? 'তিনটি স্তম্ভ' : lang === 'hi' ? 'तीन स्तंभ' : 'The Three Pillars'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { pillar: dict.prayog.pillars.manthan, icon: '🔄', color: 'blue' },
              { pillar: dict.prayog.pillars.prayogshala, icon: '🧪', color: 'purple' },
              { pillar: dict.prayog.pillars.parishad, icon: '👥', color: 'orange' },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-8 rounded-3xl transition-all duration-300 card-hover ${
                  item.color === 'blue'
                    ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200'
                    : item.color === 'purple'
                    ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200'
                    : 'bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200'
                }`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className={`text-2xl font-bold mb-2 ${
                  item.color === 'blue' ? 'text-blue-900' : item.color === 'purple' ? 'text-purple-900' : 'text-orange-900'
                }`}>
                  {item.pillar.name}
                </h4>
                <p className="text-sm text-gray-500 mb-3 italic">{item.pillar.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{item.pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Success Dashboard Section */}
      <ReviewableSection sectionId="home-dashboard" sectionName="Success Dashboard">
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {dict.dashboard.title}
          </h2>
          <p className="text-xl text-purple-200 mb-6">
            {dict.dashboard.subtitle}
          </p>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto mb-12">
            {dict.dashboard.description}
          </p>

          {/* Goal Display */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-3xl px-12 py-8 mb-12">
            <div className="text-8xl md:text-9xl font-bold text-orange-400">
              {dict.dashboard.goal}
            </div>
            <div className="text-left">
              <div className="text-2xl font-semibold text-white">{dict.dashboard.goalLabel}</div>
            </div>
          </div>

          {/* Progress Stats */}
          <h4 className="text-lg text-purple-200 mb-8">{dict.dashboard.progress}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '0', label: dict.dashboard.ministerCandidates },
              { value: '0', label: dict.dashboard.parishadMembers },
              { value: '0', label: dict.dashboard.constituenciesCovered },
              { value: '0', label: dict.dashboard.votersEducated },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            href={`/${lang}/join`}
            className="inline-flex items-center justify-center px-10 py-5 mt-12 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            {dict.dashboard.joinCta}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
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

      {/* Minister-Candidate Section */}
      <ReviewableSection sectionId="home-minister-candidate" sectionName="Minister-Candidate Section">
      <section className="bg-gradient-to-b from-orange-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-4">
                {dict.ministerCandidate.title}
              </h2>
              <p className="text-xl text-orange-700 font-medium mb-6">
                {dict.ministerCandidate.subtitle}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {dict.ministerCandidate.description}
              </p>

              <h4 className="font-semibold text-gray-800 mb-4">{dict.ministerCandidate.whyJoin}</h4>
              <ul className="space-y-3 mb-8">
                {[
                  dict.ministerCandidate.reason1,
                  dict.ministerCandidate.reason2,
                  dict.ministerCandidate.reason3,
                  dict.ministerCandidate.reason4,
                ].map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-900 mb-6">{dict.ministerCandidate.formTitle}</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={dict.ministerCandidate.namePlaceholder}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                />
                <input
                  type="text"
                  placeholder={dict.ministerCandidate.constituencyPlaceholder}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                />
                <textarea
                  placeholder={dict.ministerCandidate.whyMinisterPlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
                >
                  {dict.ministerCandidate.submitButton}
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                {dict.ministerCandidate.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Parishad Section */}
      <ReviewableSection sectionId="home-parishad" sectionName="Parishad Section">
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {dict.parishad.title}
            </h2>
            <p className="text-xl text-purple-200 mb-6">
              {dict.parishad.subtitle}
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              {dict.parishad.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Pledge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">{dict.parishad.pledge}</h3>
              <blockquote className="text-lg text-blue-100 italic leading-relaxed border-l-4 border-orange-400 pl-6">
                &quot;{dict.parishad.pledgeText}&quot;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-5xl font-bold text-orange-400">1,000+</span>
                <span className="text-purple-200">{dict.parishad.memberCount}</span>
              </div>
            </div>

            {/* Right: Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{dict.parishad.benefits.title}</h3>
              <ul className="space-y-4">
                {[
                  dict.parishad.benefits.benefit1,
                  dict.parishad.benefits.benefit2,
                  dict.parishad.benefits.benefit3,
                  dict.parishad.benefits.benefit4,
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-blue-100">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${lang}/join`}
                className="inline-flex items-center justify-center px-10 py-5 mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                {dict.parishad.joinButton}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
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
              ? 'দল তো হাসপাতাল চালায় না, রাস্তা বানায় না — মন্ত্রী চালায়। তাই দল নয়, মন্ত্রী বাছুন।'
              : lang === 'hi'
              ? 'पार्टी तो अस्पताल नहीं चलाती, सड़क नहीं बनाती — मंत्री चलाते हैं। इसलिए पार्टी नहीं, मंत्री चुनें।'
              : 'Parties don\'t run hospitals or build roads — Ministers do. So choose Ministers, not parties.'}
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
