import { getDictionary, Locale, locales } from '@/dictionaries';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.about.title}</h1>
          <p className="text-xl text-orange-400">{dict.about.subtitle}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">{dict.about.mission}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {dict.about.missionText}
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">{dict.about.founder}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-3xl font-bold">SJS</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">
                {dict.about.founderName}
              </h3>
              <p className="text-orange-500 text-center mb-4">{dict.about.founderTitle}</p>
              <p className="text-gray-600 text-center">{dict.about.founderBio}</p>
            </div>

            {/* Co-founder */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-3xl font-bold">RB</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">
                {dict.about.cofounder}
              </h3>
              <p className="text-orange-500 text-center mb-4">{dict.about.cofounderTitle}</p>
              <p className="text-gray-600 text-center">{dict.about.cofounderBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">{dict.about.track}</h2>
          <div className="space-y-4">
            {[dict.about.track1, dict.about.track2, dict.about.track3, dict.about.track4].map((track, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">{track}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KarmYog Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">KarmYog for 21st Century</h2>
          <p className="text-xl text-blue-200 mb-8">
            {lang === 'bn'
              ? '30+ বছরের প্রমাণিত দক্ষতা মিডিয়া ও প্রযুক্তি ব্যবহার করে বড় মাপের সংস্কৃতি ও আচরণ পরিবর্তনে।'
              : lang === 'hi'
              ? 'मीडिया और प्रौद्योगिकी का उपयोग करके बड़े पैमाने पर संस्कृति और व्यवहार परिवर्तन में 30+ वर्षों की सिद्ध विशेषज्ञता।'
              : '30+ years of proven expertise in large-scale culture and behavior change using media and technology.'}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4">
              <div className="text-4xl mb-2">📚</div>
              <p className="text-sm text-blue-200">OmniDEL Framework</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🤖</div>
              <p className="text-sm text-blue-200">AI for Education</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🎬</div>
              <p className="text-sm text-blue-200">Interactive Media</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🌐</div>
              <p className="text-sm text-blue-200">Mass Movements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            {lang === 'bn' ? 'আমাদের নীতি' : lang === 'hi' ? 'हमारे सिद्धांत' : 'Our Principles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '🙏', title: lang === 'bn' ? 'ধর্মকেন্দ্রিক' : lang === 'hi' ? 'धर्म-केंद्रित' : 'Dharma-Centric', desc: lang === 'bn' ? 'সব কাজ ন্যায়পরায়ণতা দ্বারা পরিচালিত' : lang === 'hi' ? 'सभी कार्य न्यायपरायणता द्वारा निर्देशित' : 'All actions guided by righteousness' },
              { icon: '⚖️', title: lang === 'bn' ? 'নিরপেক্ষ' : lang === 'hi' ? 'निष्पक्ष' : 'Non-Partisan', desc: lang === 'bn' ? 'কোনো দল বা প্রার্থীর পক্ষপাত নয়' : lang === 'hi' ? 'कोई दल या उम्मीदवार पक्षपात नहीं' : 'No party or candidate bias' },
              { icon: '📖', title: lang === 'bn' ? 'শিক্ষা, আদেশ নয়' : lang === 'hi' ? 'शिक्षित करें, आदेश नहीं' : 'Educate, Not Dictate', desc: lang === 'bn' ? 'ভোটারদের সিদ্ধান্ত নিতে ক্ষমতায়ন' : lang === 'hi' ? 'मतदाताओं को निर्णय लेने के लिए सशक्त बनाएं' : 'Empower voters to decide' },
              { icon: '✅', title: lang === 'bn' ? 'সত্য-ভিত্তিক' : lang === 'hi' ? 'सत्य-आधारित' : 'Truth-Based', desc: lang === 'bn' ? 'শুধুমাত্র যাচাইকৃত, তথ্যগত তথ্য' : lang === 'hi' ? 'केवल सत्यापित, तथ्यात्मक जानकारी' : 'Only verified, factual information' },
              { icon: '🤝', title: lang === 'bn' ? 'অন্তর্ভুক্তিমূলক' : lang === 'hi' ? 'समावेशी' : 'Inclusive', desc: lang === 'bn' ? 'সমাজের সব অংশে পৌঁছানো' : lang === 'hi' ? 'समाज के सभी वर्गों तक पहुंचना' : 'Reach all sections of society' },
              { icon: '👁️', title: lang === 'bn' ? 'স্বচ্ছ' : lang === 'hi' ? 'पारदर्शी' : 'Transparent', desc: lang === 'bn' ? 'তহবিল ও কার্যক্রম সম্পর্কে খোলামেলা' : lang === 'hi' ? 'धन और संचालन के बारे में खुलापन' : 'Open about funding and operations' },
            ].map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{principle.icon}</span>
                  <h3 className="font-bold text-blue-900">{principle.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
