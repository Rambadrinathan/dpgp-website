import { getDictionary, Locale, locales } from '@/dictionaries';
import { ministries, MinistryDetail } from '@/data/ministries';
import Link from 'next/link';

export default async function MinistriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);

  const getText = (obj: { en: string; hi: string; bn: string }) => obj[lang];
  const getArray = (obj: { en: string[]; hi: string[]; bn: string[] }) => obj[lang];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{dict.ministries.title}</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">{dict.ministries.subtitle}</p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white py-8 border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {ministries.filter(m => m.category === 'top10').map((ministry) => (
              <a
                key={ministry.id}
                href={`#${ministry.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors whitespace-nowrap text-sm font-medium"
              >
                <span>{ministry.icon}</span>
                <span>{getText(ministry.name)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Ministry Sections */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            {dict.ministries.topMinistries}
          </h2>

          <div className="space-y-16">
            {ministries.filter(m => m.category === 'top10').map((ministry, index) => (
              <MinistrySection
                key={ministry.id}
                ministry={ministry}
                lang={lang}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {lang === 'bn' ? 'জানুন, প্রশ্ন করুন, সঠিক প্রার্থী বাছুন' : lang === 'hi' ? 'जानें, सवाल करें, सही उम्मीदवार चुनें' : 'Learn, Question, Choose the Right Candidate'}
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            {lang === 'bn'
              ? 'আপনার এলাকার প্রার্থীকে এই প্রশ্নগুলো করুন। তাদের উত্তর থেকে বুঝুন তারা কতটা যোগ্য।'
              : lang === 'hi'
              ? 'अपने क्षेत्र के उम्मीदवार से ये सवाल पूछें। उनके जवाबों से समझें वे कितने योग्य हैं।'
              : 'Ask these questions to candidates in your area. Understand their capability from their answers.'}
          </p>
          <Link
            href={`/${lang}/join`}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-bold rounded-full hover:bg-gray-100 transition-all"
          >
            {lang === 'bn' ? 'আন্দোলনে যোগ দিন' : lang === 'hi' ? 'आंदोलन में शामिल हों' : 'Join the Movement'}
          </Link>
        </div>
      </section>
    </div>
  );
}

function MinistrySection({ ministry, lang, index }: { ministry: MinistryDetail; lang: Locale; index: number }) {
  const getText = (obj: { en: string; hi: string; bn: string }) => obj[lang];
  const getArray = (obj: { en: string[]; hi: string[]; bn: string[] }) => obj[lang];

  return (
    <div id={ministry.id} className="scroll-mt-32">
      <div className={`bg-white rounded-3xl shadow-xl overflow-hidden ${index % 2 === 0 ? '' : ''}`}>
        {/* Ministry Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 text-white">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{ministry.icon}</span>
            <div>
              <h3 className="text-3xl font-bold">{getText(ministry.name)}</h3>
              <p className="text-blue-200 text-lg mt-1">{getText(ministry.shortDesc)}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <span className="text-blue-200 text-sm">
                {lang === 'bn' ? 'বাজেট' : lang === 'hi' ? 'बजट' : 'Budget'}
              </span>
              <p className="text-white font-bold">{ministry.budget}</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <span className="text-blue-200 text-sm">
                {lang === 'bn' ? 'কর্মচারী' : lang === 'hi' ? 'कर्मचारी' : 'Employees'}
              </span>
              <p className="text-white font-bold">{ministry.employees}</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Key Statistics */}
          <div className="mb-10">
            <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">📊</span>
              {lang === 'bn' ? 'গুরুত্বপূর্ণ তথ্য' : lang === 'hi' ? 'महत्वपूर्ण आंकड़े' : 'Key Statistics'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getArray(ministry.keyStats).map((stat, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">{stat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Impacts You */}
          <div className="mb-10">
            <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">👤</span>
              {lang === 'bn' ? 'আপনার জীবনে প্রভাব' : lang === 'hi' ? 'आपके जीवन पर प्रभाव' : 'How It Impacts Your Life'}
            </h4>
            <div className="space-y-3">
              {getArray(ministry.impact).map((impact, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                  <span className="text-orange-500 font-bold">{i + 1}.</span>
                  <span className="text-gray-700">{impact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Government Schemes */}
          <div className="mb-10">
            <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">🎯</span>
              {lang === 'bn' ? 'সরকারি প্রকল্প' : lang === 'hi' ? 'सरकारी योजनाएं' : 'Government Schemes'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ministry.schemes.map((scheme, i) => (
                <div key={i} className="p-5 bg-green-50 rounded-xl border border-green-200">
                  <h5 className="font-bold text-green-800 text-lg mb-2">{scheme.name}</h5>
                  <p className="text-gray-600">{getText(scheme.desc)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Questions to Ask */}
          <div>
            <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">❓</span>
              {lang === 'bn' ? 'প্রার্থীকে এই প্রশ্ন করুন' : lang === 'hi' ? 'उम्मीदवार से ये सवाल पूछें' : 'Questions to Ask Candidates'}
            </h4>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
              <ul className="space-y-4">
                {getArray(ministry.questions).map((question, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-gray-800 font-medium">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
