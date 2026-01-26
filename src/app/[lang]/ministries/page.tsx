import { getDictionary, Locale, locales } from '@/dictionaries';
import { departments, categoryLabels, Department } from '@/data/departments';
import Link from 'next/link';
import ReviewableSection from '@/components/ReviewableSection';

export default async function MinistriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);

  const categories = ['governance', 'welfare', 'infrastructure', 'economy', 'development', 'services'] as const;

  const getCategoryLabel = (cat: keyof typeof categoryLabels) => categoryLabels[cat][lang];
  const getDeptName = (dept: Department) => lang === 'bn' ? dept.nameBn : lang === 'hi' ? dept.nameHi : dept.name;

  // Group departments by category
  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = departments.filter(d => d.category === cat);
    return acc;
  }, {} as Record<string, Department[]>);

  const content = {
    en: {
      heroTitle: "54 Government Departments",
      heroSubtitle: "Know who controls your life. Every department has a minister. Your MLA could be one of them.",
      searchPlaceholder: "Search departments...",
      filterAll: "All Departments",
      ministerLabel: "Minister-in-Charge",
      mosicLabel: "MoS (Independent)",
      mosLabel: "Minister of State",
      contactLabel: "Contact",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      ctaTitle: "Ask Your Candidate",
      ctaDesc: "Now that you know the departments, ask your MLA candidates: Which ministry can you handle? What's your plan?",
      noMinister: "No minister assigned"
    },
    hi: {
      heroTitle: "54 सरकारी विभाग",
      heroSubtitle: "जानें कौन आपका जीवन नियंत्रित करता है। हर विभाग का एक मंत्री होता है। आपका विधायक उनमें से एक हो सकता है।",
      searchPlaceholder: "विभाग खोजें...",
      filterAll: "सभी विभाग",
      ministerLabel: "मंत्री प्रभारी",
      mosicLabel: "राज्य मंत्री (स्वतंत्र प्रभार)",
      mosLabel: "राज्य मंत्री",
      contactLabel: "संपर्क",
      phoneLabel: "फोन",
      emailLabel: "ईमेल",
      addressLabel: "पता",
      ctaTitle: "अपने उम्मीदवार से पूछें",
      ctaDesc: "अब जब आप विभागों को जानते हैं, अपने विधायक उम्मीदवारों से पूछें: कौन सा मंत्रालय संभाल सकते हो? आपकी योजना क्या है?",
      noMinister: "कोई मंत्री नियुक्त नहीं"
    },
    bn: {
      heroTitle: "৫৪টি সরকারি বিভাগ",
      heroSubtitle: "জানুন কে আপনার জীবন নিয়ন্ত্রণ করে। প্রতিটি বিভাগের একজন মন্ত্রী আছে। আপনার বিধায়ক তাদের একজন হতে পারে।",
      searchPlaceholder: "বিভাগ খুঁজুন...",
      filterAll: "সব বিভাগ",
      ministerLabel: "মন্ত্রী প্রভারী",
      mosicLabel: "প্রতিমন্ত্রী (স্বতন্ত্র দায়িত্ব)",
      mosLabel: "প্রতিমন্ত্রী",
      contactLabel: "যোগাযোগ",
      phoneLabel: "ফোন",
      emailLabel: "ইমেইল",
      addressLabel: "ঠিকানা",
      ctaTitle: "আপনার প্রার্থীকে জিজ্ঞাসা করুন",
      ctaDesc: "এখন আপনি বিভাগগুলো জানেন, আপনার বিধায়ক প্রার্থীদের জিজ্ঞাসা করুন: কোন মন্ত্রণালয় সামলাতে পারবেন? আপনার পরিকল্পনা কী?",
      noMinister: "কোনো মন্ত্রী নিযুক্ত নেই"
    }
  };

  const t = content[lang];

  return (
    <div>
      {/* Hero */}
      <ReviewableSection sectionId="ministries-hero" sectionName="Ministries Hero">
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-2xl">🏛️</span>
              <span className="text-orange-300 font-bold text-lg">54</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.heroTitle}</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">{t.heroSubtitle}</p>
          </div>
        </section>
      </ReviewableSection>

      {/* Stats Bar */}
      <ReviewableSection sectionId="ministries-stats" sectionName="Department Stats">
        <section className="bg-white border-b py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {categories.map(cat => (
                <a
                  key={cat}
                  href={`#${cat}`}
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 hover:border-orange-200 border border-gray-100 transition-all"
                >
                  <span className="text-2xl">
                    {cat === 'governance' && '🏛️'}
                    {cat === 'welfare' && '🤝'}
                    {cat === 'infrastructure' && '🏗️'}
                    {cat === 'economy' && '💰'}
                    {cat === 'development' && '📈'}
                    {cat === 'services' && '🛎️'}
                  </span>
                  <div>
                    <div className="font-bold text-blue-900">{grouped[cat].length}</div>
                    <div className="text-xs text-gray-500">{getCategoryLabel(cat)}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </ReviewableSection>

      {/* Departments by Category */}
      {categories.map(cat => (
        <ReviewableSection key={cat} sectionId={`ministries-${cat}`} sectionName={`${cat} Departments`}>
          <section id={cat} className="py-12 scroll-mt-20 bg-gray-50 odd:bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">
                  {cat === 'governance' && '🏛️'}
                  {cat === 'welfare' && '🤝'}
                  {cat === 'infrastructure' && '🏗️'}
                  {cat === 'economy' && '💰'}
                  {cat === 'development' && '📈'}
                  {cat === 'services' && '🛎️'}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">{getCategoryLabel(cat)}</h2>
                  <p className="text-gray-500">{grouped[cat].length} {lang === 'bn' ? 'টি বিভাগ' : lang === 'hi' ? 'विभाग' : 'departments'}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {grouped[cat].map(dept => (
                  <DepartmentCard key={dept.id} dept={dept} lang={lang} t={t} getDeptName={getDeptName} />
                ))}
              </div>
            </div>
          </section>
        </ReviewableSection>
      ))}

      {/* CTA */}
      <ReviewableSection sectionId="ministries-cta" sectionName="Call to Action">
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-orange-100 text-lg mb-8">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/minister-selection`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-bold rounded-full hover:bg-gray-100 transition-all"
              >
                {lang === 'bn' ? 'মন্ত্রী নির্বাচন সম্পর্কে জানুন' : lang === 'hi' ? 'मंत्री चयन के बारे में जानें' : 'Learn About Minister Selection'}
              </Link>
              <Link
                href={`/${lang}/join`}
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-full hover:bg-orange-800 transition-all"
              >
                {lang === 'bn' ? 'আন্দোলনে যোগ দিন' : lang === 'hi' ? 'आंदोलन में शामिल हों' : 'Join the Movement'}
              </Link>
            </div>
          </div>
        </section>
      </ReviewableSection>
    </div>
  );
}

function DepartmentCard({
  dept,
  lang,
  t,
  getDeptName
}: {
  dept: Department;
  lang: Locale;
  t: { ministerLabel: string; mosicLabel: string; mosLabel: string; phoneLabel: string; emailLabel: string; noMinister: string };
  getDeptName: (dept: Department) => string;
}) {
  const hasMinister = dept.ministerInCharge || dept.mosIndependent || dept.mos;

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all overflow-hidden group">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{dept.icon}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-blue-900 text-sm leading-tight truncate">{getDeptName(dept)}</h3>
            <span className="text-xs text-gray-500">#{dept.id}</span>
          </div>
        </div>
      </div>

      {/* Minister Info */}
      <div className="p-4 space-y-2 text-sm">
        {dept.ministerInCharge && (
          <div className="flex items-start gap-2">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium shrink-0">
              {dept.ministerInCharge.type}
            </span>
            <span className="text-gray-800 font-medium">{dept.ministerInCharge.name}</span>
          </div>
        )}
        {dept.mosIndependent && (
          <div className="flex items-start gap-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium shrink-0">MoS-IC</span>
            <span className="text-gray-700">{dept.mosIndependent.name}</span>
          </div>
        )}
        {dept.mos && (
          <div className="flex items-start gap-2">
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-medium shrink-0">MoS</span>
            <span className="text-gray-700">{dept.mos.name}</span>
          </div>
        )}
        {!hasMinister && (
          <span className="text-gray-400 italic">{t.noMinister}</span>
        )}
      </div>

      {/* Contact Info */}
      <div className="px-4 pb-4 pt-2 border-t border-gray-100 bg-gray-50 space-y-1 text-xs text-gray-600">
        {dept.phone && (
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span className="truncate">{dept.phone}</span>
          </div>
        )}
        {dept.email && (
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline truncate">{dept.email}</a>
          </div>
        )}
      </div>
    </div>
  );
}
