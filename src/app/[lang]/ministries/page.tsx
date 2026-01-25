import { getDictionary, Locale, locales } from '@/dictionaries';

const allMinistries = [
  { key: 'health', icon: '🏥', category: 'top' },
  { key: 'education', icon: '📚', category: 'top' },
  { key: 'home', icon: '🛡️', category: 'top' },
  { key: 'pwd', icon: '🛣️', category: 'top' },
  { key: 'panchayat', icon: '🏘️', category: 'top' },
  { key: 'urban', icon: '🏙️', category: 'top' },
  { key: 'agriculture', icon: '🌾', category: 'top' },
  { key: 'food', icon: '🍚', category: 'top' },
  { key: 'power', icon: '⚡', category: 'top' },
  { key: 'transport', icon: '🚌', category: 'top' },
] as const;

const otherMinistries = [
  { name: 'Higher Education', nameBn: 'উচ্চশিক্ষা', nameHi: 'उच्च शिक्षा', icon: '🎓' },
  { name: 'Technical Education', nameBn: 'কারিগরি শিক্ষা', nameHi: 'तकनीकी शिक्षा', icon: '⚙️' },
  { name: 'Finance', nameBn: 'অর্থ', nameHi: 'वित्त', icon: '💰' },
  { name: 'Labour', nameBn: 'শ্রম', nameHi: 'श्रम', icon: '👷' },
  { name: 'Industry & Commerce', nameBn: 'শিল্প ও বাণিজ্য', nameHi: 'उद्योग व वाणिज्य', icon: '🏭' },
  { name: 'MSME & Textiles', nameBn: 'MSME ও বস্ত্র', nameHi: 'MSME व वस्त्र', icon: '🧵' },
  { name: 'Irrigation & Waterways', nameBn: 'সেচ ও জলপথ', nameHi: 'सिंचाई व जलमार्ग', icon: '💧' },
  { name: 'Water Resources', nameBn: 'জলসম্পদ', nameHi: 'जल संसाधन', icon: '🚰' },
  { name: 'Women & Child Development', nameBn: 'নারী ও শিশু উন্নয়ন', nameHi: 'महिला व बाल विकास', icon: '👶' },
  { name: 'Minority Affairs', nameBn: 'সংখ্যালঘু বিষয়ক', nameHi: 'अल्पसंख्यक मामले', icon: '🤝' },
  { name: 'Backward Classes Welfare', nameBn: 'অনগ্রসর শ্রেণি কল্যাণ', nameHi: 'पिछड़ा वर्ग कल्याण', icon: '🙏' },
  { name: 'SC/ST Welfare', nameBn: 'SC/ST কল্যাণ', nameHi: 'SC/ST कल्याण', icon: '🤲' },
  { name: 'Youth & Sports', nameBn: 'যুব ও ক্রীড়া', nameHi: 'युवा व खेल', icon: '⚽' },
  { name: 'Information & Culture', nameBn: 'তথ্য ও সংস্কৃতি', nameHi: 'सूचना व संस्कृति', icon: '🎭' },
  { name: 'Land & Land Reforms', nameBn: 'ভূমি ও ভূমি সংস্কার', nameHi: 'भूमि व भूमि सुधार', icon: '🗺️' },
  { name: 'Refugee Relief', nameBn: 'শরণার্থী ত্রাণ', nameHi: 'शरणार्थी राहत', icon: '🏠' },
  { name: 'Disaster Management', nameBn: 'দুর্যোগ ব্যবস্থাপনা', nameHi: 'आपदा प्रबंधन', icon: '🌊' },
  { name: 'Environment', nameBn: 'পরিবেশ', nameHi: 'पर्यावरण', icon: '🌱' },
  { name: 'Forests', nameBn: 'বন', nameHi: 'वन', icon: '🌳' },
  { name: 'Fisheries', nameBn: 'মৎস্য', nameHi: 'मत्स्य', icon: '🐟' },
  { name: 'Animal Resources', nameBn: 'প্রাণী সম্পদ', nameHi: 'पशु संसाधन', icon: '🐄' },
  { name: 'Tourism', nameBn: 'পর্যটন', nameHi: 'पर्यटन', icon: '🏖️' },
  { name: 'Consumer Affairs', nameBn: 'ভোক্তা বিষয়ক', nameHi: 'उपभोक्ता मामले', icon: '🛒' },
  { name: 'Cooperation', nameBn: 'সমবায়', nameHi: 'सहकारिता', icon: '🤝' },
  { name: 'Housing', nameBn: 'আবাসন', nameHi: 'आवास', icon: '🏗️' },
  { name: 'Fire & Emergency Services', nameBn: 'অগ্নি ও জরুরি সেবা', nameHi: 'अग्नि व आपातकालीन सेवाएं', icon: '🚒' },
  { name: 'Correctional Administration', nameBn: 'সংশোধনমূলক প্রশাসন', nameHi: 'सुधार प्रशासन', icon: '⚖️' },
  { name: 'Judicial', nameBn: 'বিচার বিভাগীয়', nameHi: 'न्यायिक', icon: '👨‍⚖️' },
  { name: 'Parliamentary Affairs', nameBn: 'সংসদ বিষয়ক', nameHi: 'संसदीय मामले', icon: '🏛️' },
  { name: 'Personnel & Admin Reforms', nameBn: 'কর্মী ও প্রশাসনিক সংস্কার', nameHi: 'कार्मिक व प्रशासनिक सुधार', icon: '📋' },
  { name: 'Planning & Statistics', nameBn: 'পরিকল্পনা ও পরিসংখ্যান', nameHi: 'योजना व सांख्यिकी', icon: '📊' },
  { name: 'Public Enterprises', nameBn: 'সরকারি উদ্যোগ', nameHi: 'सार्वजनिक उद्यम', icon: '🏢' },
  { name: 'Self-Help Groups', nameBn: 'স্বনির্ভর গোষ্ঠী', nameHi: 'स्वयं सहायता समूह', icon: '👥' },
  { name: 'Sundarban Affairs', nameBn: 'সুন্দরবন বিষয়ক', nameHi: 'सुंदरबन मामले', icon: '🐅' },
];

export default async function MinistriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);

  const getOtherMinistryName = (ministry: typeof otherMinistries[0]) => {
    if (lang === 'bn') return ministry.nameBn;
    if (lang === 'hi') return ministry.nameHi;
    return ministry.name;
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.ministries.title}</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">{dict.ministries.subtitle}</p>
        </div>
      </section>

      {/* Top 10 Ministries */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
            {dict.ministries.topMinistries}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allMinistries.map((ministry) => {
              const ministryData = dict.ministriesList[ministry.key];
              return (
                <div
                  key={ministry.key}
                  className="group p-6 bg-gray-50 rounded-2xl hover:bg-blue-900 transition-all cursor-pointer border border-gray-100 hover:border-blue-900"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{ministry.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 group-hover:text-white transition-colors mb-2">
                        {ministryData.name}
                      </h3>
                      <p className="text-gray-600 group-hover:text-blue-200 transition-colors">
                        {ministryData.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Departments */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
            {lang === 'bn' ? 'অন্যান্য দপ্তর' : lang === 'hi' ? 'अन्य विभाग' : 'Other Departments'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {otherMinistries.map((ministry, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl hover:shadow-lg transition-all cursor-pointer text-center"
              >
                <div className="text-2xl mb-2">{ministry.icon}</div>
                <h3 className="font-medium text-sm text-gray-700">
                  {getOtherMinistryName(ministry)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="bg-orange-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              {lang === 'bn' ? 'কেন মন্ত্রণালয় জানা গুরুত্বপূর্ণ?' : lang === 'hi' ? 'मंत्रालयों को जानना क्यों महत्वपूर्ण है?' : 'Why is knowing ministries important?'}
            </h3>
            <p className="text-gray-600 mb-4">
              {lang === 'bn'
                ? 'আপনি যখন ভোট দেন, আপনি আসলে এই মন্ত্রণালয়গুলো কে চালাবে তা নির্ধারণ করেন। প্রতিটি মন্ত্রণালয় আপনার দৈনন্দিন জীবনকে সরাসরি প্রভাবিত করে - আপনার সন্তানের স্কুল থেকে আপনার চলার রাস্তা পর্যন্ত।'
                : lang === 'hi'
                ? 'जब आप वोट देते हैं, तो आप वास्तव में यह तय करते हैं कि इन मंत्रालयों को कौन चलाएगा। प्रत्येक मंत्रालय आपके दैनिक जीवन को सीधे प्रभावित करता है - आपके बच्चे के स्कूल से लेकर आपकी यात्रा की सड़कों तक।'
                : 'When you vote, you are actually deciding who will run these ministries. Each ministry directly affects your daily life - from your child\'s school to the roads you travel.'}
            </p>
            <p className="text-orange-600 font-semibold">
              {lang === 'bn'
                ? 'জানুন, প্রশ্ন করুন, সঠিক প্রার্থী বাছুন।'
                : lang === 'hi'
                ? 'जानें, सवाल करें, सही उम्मीदवार चुनें।'
                : 'Learn, question, choose the right candidate.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
