import { getDictionary, Locale, locales } from '@/dictionaries';
import ReviewableSection from '@/components/ReviewableSection';
import Link from 'next/link';

export default async function MinisterSelectionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);

  const content = {
    en: {
      heroTitle: "Minister Selection",
      heroSubtitle: "The Prayogshala - Sacred Electoral Experiment",
      heroDesc: "This is not about choosing parties. It's about selecting who will BE your minister.",

      paradigmTitle: "A Paradigm Shift",
      paradigmOld: "Traditional Voting",
      paradigmOldDesc: "Which party do I support? What symbol do I recognize?",
      paradigmNew: "Minister Selection",
      paradigmNewDesc: "Which candidate can govern my state? Who has ministerial competence?",
      paradigmQuote: "Parties don't run hospitals or build roads — Ministers do.",

      howTitle: "How Minister Selection Works",
      steps: [
        { icon: "📚", title: "Understand Ministries", desc: "Learn what each of the 44 ministries does and how they affect your daily life - health, education, roads, water, electricity" },
        { icon: "🔍", title: "Evaluate Candidates", desc: "Assess if candidates in your constituency have the competence, character, and commitment to be effective ministers" },
        { icon: "✅", title: "Make Informed Choice", desc: "Vote for the candidate best suited to serve as a minister, regardless of party symbol" }
      ],

      whyTitle: "Why This Matters",
      whyPoints: [
        { icon: "🏥", title: "44 Ministers Control Your Life", desc: "From hospitals to schools to roads - ministers decide everything. Your MLA could become one of them." },
        { icon: "⚖️", title: "Quality Over Loyalty", desc: "When voters demand ministerial quality, parties are forced to field better candidates." },
        { icon: "🌟", title: "Better Governance", desc: "Minister-centric voting creates accountability and competence in government." }
      ],

      ministriesTitle: "Key Ministries That Impact You",
      ministriesDesc: "These are the portfolios your next minister could hold:",
      topMinistries: [
        { icon: "🏥", name: "Health & Family Welfare", impact: "Hospitals, doctors, medicines, ambulances" },
        { icon: "📚", name: "School Education", impact: "Schools, teachers, midday meals, exams" },
        { icon: "🛡️", name: "Home & Hill Affairs", impact: "Police, law & order, women's safety" },
        { icon: "🛣️", name: "Public Works (PWD)", impact: "Roads, bridges, government buildings" },
        { icon: "🏘️", name: "Panchayat & Rural Dev", impact: "MGNREGA, rural schemes, village development" },
        { icon: "⚡", name: "Power & Energy", impact: "Electricity, bills, connections, power supply" }
      ],
      viewAllMinistries: "View All 44 Ministries",

      evaluateTitle: "How to Evaluate Candidates",
      evaluateDesc: "Ask these questions about every candidate:",
      questions: [
        "Does this person understand how government departments work?",
        "Have they demonstrated competence in any field?",
        "Do they have the character to resist corruption?",
        "Can they manage large budgets and thousands of employees?",
        "Will they prioritize public service over personal gain?"
      ],

      candidateTitle: "Become a Minister-Candidate",
      candidateDesc: "If you believe you have the competence and character to serve as a minister, step forward. Let citizens evaluate you on merit, not party ticket.",
      candidateReasons: [
        "Be evaluated on competence, not party loyalty",
        "Build direct connection with informed voters",
        "Demonstrate ministerial capability publicly",
        "Be part of democratic innovation"
      ],
      registerButton: "Register as Minister-Candidate",

      ctaTitle: "Join the Prayogshala",
      ctaDesc: "Be part of India's first minister-centric voting experiment. Transform how democracy works.",
      joinParishad: "Join the Parishad",
      donate: "Support the Movement"
    },
    hi: {
      heroTitle: "मंत्री चयन",
      heroSubtitle: "प्रयोगशाला - पवित्र चुनावी प्रयोग",
      heroDesc: "यह दल चुनने के बारे में नहीं है। यह चुनने के बारे में है कि कौन आपका मंत्री होगा।",

      paradigmTitle: "एक सोच बदलाव",
      paradigmOld: "पारंपरिक मतदान",
      paradigmOldDesc: "मैं किस दल का समर्थन करूं? कौन सा चुनाव चिह्न पहचानता हूं?",
      paradigmNew: "मंत्री चयन",
      paradigmNewDesc: "कौन सा उम्मीदवार मेरे राज्य को चला सकता है? किसमें मंत्री बनने की योग्यता है?",
      paradigmQuote: "पार्टी तो अस्पताल नहीं चलाती, सड़क नहीं बनाती — मंत्री चलाते हैं।",

      howTitle: "मंत्री चयन कैसे काम करता है",
      steps: [
        { icon: "📚", title: "मंत्रालयों को समझें", desc: "जानें कि 44 मंत्रालयों में से प्रत्येक क्या करता है और वे आपके दैनिक जीवन को कैसे प्रभावित करते हैं - स्वास्थ्य, शिक्षा, सड़कें, पानी, बिजली" },
        { icon: "🔍", title: "उम्मीदवारों का मूल्यांकन करें", desc: "आकलन करें कि आपके निर्वाचन क्षेत्र के उम्मीदवारों में प्रभावी मंत्री बनने की योग्यता, चरित्र और प्रतिबद्धता है या नहीं" },
        { icon: "✅", title: "जानकारीपूर्ण चयन करें", desc: "दल के चिह्न की परवाह किए बिना, मंत्री के रूप में सेवा करने के लिए सबसे उपयुक्त उम्मीदवार को वोट दें" }
      ],

      whyTitle: "यह क्यों महत्वपूर्ण है",
      whyPoints: [
        { icon: "🏥", title: "44 मंत्री आपका जीवन नियंत्रित करते हैं", desc: "अस्पतालों से लेकर स्कूलों तक सड़कों तक - मंत्री सब कुछ तय करते हैं। आपका विधायक उनमें से एक बन सकता है।" },
        { icon: "⚖️", title: "वफादारी से ज्यादा गुणवत्ता", desc: "जब मतदाता मंत्री-स्तर की गुणवत्ता की मांग करते हैं, पार्टियां बेहतर उम्मीदवार देने के लिए मजबूर होती हैं।" },
        { icon: "🌟", title: "बेहतर शासन", desc: "मंत्री-केंद्रित मतदान सरकार में जवाबदेही और योग्यता बनाता है।" }
      ],

      ministriesTitle: "प्रमुख मंत्रालय जो आपको प्रभावित करते हैं",
      ministriesDesc: "ये वे विभाग हैं जो आपके अगले मंत्री के पास हो सकते हैं:",
      topMinistries: [
        { icon: "🏥", name: "स्वास्थ्य एवं परिवार कल्याण", impact: "अस्पताल, डॉक्टर, दवाइयां, एम्बुलेंस" },
        { icon: "📚", name: "विद्यालय शिक्षा", impact: "स्कूल, शिक्षक, मध्याह्न भोजन, परीक्षाएं" },
        { icon: "🛡️", name: "गृह एवं पर्वतीय मामले", impact: "पुलिस, कानून व्यवस्था, महिला सुरक्षा" },
        { icon: "🛣️", name: "लोक निर्माण (PWD)", impact: "सड़कें, पुल, सरकारी भवन" },
        { icon: "🏘️", name: "पंचायत एवं ग्रामीण विकास", impact: "मनरेगा, ग्रामीण योजनाएं, गांव विकास" },
        { icon: "⚡", name: "बिजली एवं ऊर्जा", impact: "बिजली, बिल, कनेक्शन, बिजली आपूर्ति" }
      ],
      viewAllMinistries: "सभी 44 मंत्रालय देखें",

      evaluateTitle: "उम्मीदवारों का मूल्यांकन कैसे करें",
      evaluateDesc: "हर उम्मीदवार के बारे में ये सवाल पूछें:",
      questions: [
        "क्या यह व्यक्ति समझता है कि सरकारी विभाग कैसे काम करते हैं?",
        "क्या उन्होंने किसी क्षेत्र में योग्यता प्रदर्शित की है?",
        "क्या उनमें भ्रष्टाचार का विरोध करने का चरित्र है?",
        "क्या वे बड़े बजट और हजारों कर्मचारियों का प्रबंधन कर सकते हैं?",
        "क्या वे व्यक्तिगत लाभ से अधिक जनसेवा को प्राथमिकता देंगे?"
      ],

      candidateTitle: "मंत्री-उम्मीदवार बनें",
      candidateDesc: "यदि आप मानते हैं कि आपमें मंत्री के रूप में सेवा करने की योग्यता और चरित्र है, तो आगे आएं। नागरिकों को पार्टी टिकट पर नहीं, योग्यता पर आपका मूल्यांकन करने दें।",
      candidateReasons: [
        "पार्टी वफादारी नहीं, योग्यता के आधार पर मूल्यांकित हों",
        "जागरूक मतदाताओं के साथ सीधा संबंध बनाएं",
        "सार्वजनिक रूप से मंत्रालय की योग्यता प्रदर्शित करें",
        "लोकतांत्रिक नवाचार का हिस्सा बनें"
      ],
      registerButton: "मंत्री-उम्मीदवार के रूप में पंजीकरण करें",

      ctaTitle: "प्रयोगशाला में शामिल हों",
      ctaDesc: "भारत के पहले मंत्री-केंद्रित मतदान प्रयोग का हिस्सा बनें। लोकतंत्र के काम करने के तरीके को बदलें।",
      joinParishad: "परिषद में शामिल हों",
      donate: "आंदोलन का समर्थन करें"
    },
    bn: {
      heroTitle: "মন্ত্রী নির্বাচন",
      heroSubtitle: "প্রয়োগশালা - পবিত্র নির্বাচনী পরীক্ষা",
      heroDesc: "এটি দল বাছাইয়ের বিষয় নয়। এটি বাছাইয়ের বিষয় যে কে আপনার মন্ত্রী হবে।",

      paradigmTitle: "একটি চিন্তার পরিবর্তন",
      paradigmOld: "প্রচলিত ভোটদান",
      paradigmOldDesc: "আমি কোন দল সমর্থন করি? কোন প্রতীক চিনি?",
      paradigmNew: "মন্ত্রী নির্বাচন",
      paradigmNewDesc: "কোন প্রার্থী আমার রাজ্য চালাতে পারবে? কার মন্ত্রী হওয়ার যোগ্যতা আছে?",
      paradigmQuote: "দল তো হাসপাতাল চালায় না, রাস্তা বানায় না — মন্ত্রী চালায়।",

      howTitle: "মন্ত্রী নির্বাচন কীভাবে কাজ করে",
      steps: [
        { icon: "📚", title: "মন্ত্রণালয় বুঝুন", desc: "জানুন ৪৪টি মন্ত্রণালয়ের প্রত্যেকটি কী করে এবং কীভাবে আপনার দৈনন্দিন জীবনকে প্রভাবিত করে - স্বাস্থ্য, শিক্ষা, রাস্তা, জল, বিদ্যুৎ" },
        { icon: "🔍", title: "প্রার্থীদের মূল্যায়ন করুন", desc: "মূল্যায়ন করুন আপনার নির্বাচনী এলাকার প্রার্থীদের কার্যকর মন্ত্রী হওয়ার যোগ্যতা, চরিত্র ও প্রতিশ্রুতি আছে কিনা" },
        { icon: "✅", title: "সচেতন সিদ্ধান্ত নিন", desc: "দলীয় প্রতীক নির্বিশেষে, মন্ত্রী হিসেবে সেবা করার জন্য সবচেয়ে উপযুক্ত প্রার্থীকে ভোট দিন" }
      ],

      whyTitle: "এটি কেন গুরুত্বপূর্ণ",
      whyPoints: [
        { icon: "🏥", title: "৪৪ জন মন্ত্রী আপনার জীবন নিয়ন্ত্রণ করে", desc: "হাসপাতাল থেকে স্কুল থেকে রাস্তা - মন্ত্রীরা সবকিছু ঠিক করে। আপনার বিধায়ক তাদের একজন হতে পারে।" },
        { icon: "⚖️", title: "আনুগত্যের চেয়ে মান", desc: "ভোটাররা যখন মন্ত্রী-মানের প্রার্থী দাবি করে, দলগুলো ভালো প্রার্থী দিতে বাধ্য হয়।" },
        { icon: "🌟", title: "উন্নত শাসন", desc: "মন্ত্রীকেন্দ্রিক ভোটদান সরকারে জবাবদিহিতা ও যোগ্যতা তৈরি করে।" }
      ],

      ministriesTitle: "প্রধান মন্ত্রণালয় যা আপনাকে প্রভাবিত করে",
      ministriesDesc: "এগুলো সেই বিভাগ যা আপনার পরবর্তী মন্ত্রীর কাছে থাকতে পারে:",
      topMinistries: [
        { icon: "🏥", name: "স্বাস্থ্য ও পরিবার কল্যাণ", impact: "হাসপাতাল, ডাক্তার, ওষুধ, অ্যাম্বুলেন্স" },
        { icon: "📚", name: "বিদ্যালয় শিক্ষা", impact: "স্কুল, শিক্ষক, মিড-ডে মিল, পরীক্ষা" },
        { icon: "🛡️", name: "স্বরাষ্ট্র ও পার্বত্য বিষয়ক", impact: "পুলিশ, আইনশৃঙ্খলা, নারী নিরাপত্তা" },
        { icon: "🛣️", name: "গণপূর্ত (PWD)", impact: "রাস্তা, সেতু, সরকারি ভবন" },
        { icon: "🏘️", name: "পঞ্চায়েত ও গ্রামোন্নয়ন", impact: "১০০ দিনের কাজ, গ্রামীণ প্রকল্প, গ্রাম উন্নয়ন" },
        { icon: "⚡", name: "বিদ্যুৎ ও শক্তি", impact: "বিদ্যুৎ, বিল, সংযোগ, বিদ্যুৎ সরবরাহ" }
      ],
      viewAllMinistries: "সব ৪৪টি মন্ত্রণালয় দেখুন",

      evaluateTitle: "প্রার্থীদের কীভাবে মূল্যায়ন করবেন",
      evaluateDesc: "প্রতিটি প্রার্থী সম্পর্কে এই প্রশ্নগুলো জিজ্ঞাসা করুন:",
      questions: [
        "এই ব্যক্তি কি বোঝেন সরকারি বিভাগ কীভাবে কাজ করে?",
        "তারা কি কোনো ক্ষেত্রে যোগ্যতা প্রদর্শন করেছেন?",
        "তাদের কি দুর্নীতি প্রতিরোধের চরিত্র আছে?",
        "তারা কি বড় বাজেট এবং হাজার হাজার কর্মচারী পরিচালনা করতে পারবেন?",
        "তারা কি ব্যক্তিগত লাভের চেয়ে জনসেবাকে অগ্রাধিকার দেবেন?"
      ],

      candidateTitle: "মন্ত্রী-প্রার্থী হন",
      candidateDesc: "আপনি যদি বিশ্বাস করেন যে আপনার মন্ত্রী হিসেবে সেবা করার যোগ্যতা ও চরিত্র আছে, এগিয়ে আসুন। নাগরিকদের দলীয় টিকেট নয়, যোগ্যতার ভিত্তিতে আপনাকে মূল্যায়ন করতে দিন।",
      candidateReasons: [
        "দলীয় আনুগত্য নয়, যোগ্যতার ভিত্তিতে মূল্যায়িত হন",
        "সচেতন ভোটারদের সাথে সরাসরি সংযোগ তৈরি করুন",
        "প্রকাশ্যে মন্ত্রণালয় যোগ্যতা প্রদর্শন করুন",
        "গণতান্ত্রিক উদ্ভাবনের অংশ হন"
      ],
      registerButton: "মন্ত্রী-প্রার্থী হিসেবে নিবন্ধন করুন",

      ctaTitle: "প্রয়োগশালায় যোগ দিন",
      ctaDesc: "ভারতের প্রথম মন্ত্রীকেন্দ্রিক ভোটদান পরীক্ষার অংশ হন। গণতন্ত্র কীভাবে কাজ করে তা রূপান্তরিত করুন।",
      joinParishad: "পরিষদে যোগ দিন",
      donate: "আন্দোলনকে সমর্থন করুন"
    }
  };

  const t = content[lang];

  return (
    <div>
      {/* Hero */}
      <ReviewableSection sectionId="minister-selection-hero" sectionName="Minister Selection Hero">
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
              <span className="text-2xl">🗳️</span>
              <span className="text-orange-300 font-medium">{t.heroTitle}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.heroSubtitle}</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">{t.heroDesc}</p>
          </div>
        </section>
      </ReviewableSection>

      {/* Paradigm Shift */}
      <ReviewableSection sectionId="minister-selection-paradigm" sectionName="Paradigm Shift">
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">{t.paradigmTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Old Way */}
              <div className="bg-gray-100 rounded-3xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">❌</span>
                  <h3 className="text-xl font-bold text-gray-700">{t.paradigmOld}</h3>
                </div>
                <p className="text-gray-600 text-lg">{t.paradigmOldDesc}</p>
              </div>
              {/* New Way */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">✅</span>
                  <h3 className="text-xl font-bold text-green-700">{t.paradigmNew}</h3>
                </div>
                <p className="text-gray-700 text-lg">{t.paradigmNewDesc}</p>
              </div>
            </div>
            <div className="bg-orange-500 rounded-2xl p-8 text-center">
              <p className="text-white text-xl md:text-2xl font-bold italic">&ldquo;{t.paradigmQuote}&rdquo;</p>
            </div>
          </div>
        </section>
      </ReviewableSection>

      {/* How It Works */}
      <ReviewableSection sectionId="minister-selection-how" sectionName="How It Works">
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">{t.howTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.steps.map((step, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ReviewableSection>

      {/* Why This Matters */}
      <ReviewableSection sectionId="minister-selection-why" sectionName="Why This Matters">
        <section className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.whyTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.whyPoints.map((point, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <span className="text-4xl mb-4 block">{point.icon}</span>
                  <h3 className="text-xl font-bold text-orange-400 mb-3">{point.title}</h3>
                  <p className="text-blue-200">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ReviewableSection>

      {/* Ministries Preview */}
      <ReviewableSection sectionId="minister-selection-ministries" sectionName="Ministries Preview">
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t.ministriesTitle}</h2>
              <p className="text-gray-600 text-lg">{t.ministriesDesc}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {t.topMinistries.map((ministry, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-3 block">{ministry.icon}</span>
                  <h3 className="font-bold text-blue-900 mb-2">{ministry.name}</h3>
                  <p className="text-sm text-gray-600">{ministry.impact}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href={`/${lang}/ministries`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors"
              >
                {t.viewAllMinistries}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </ReviewableSection>

      {/* Evaluate Candidates */}
      <ReviewableSection sectionId="minister-selection-evaluate" sectionName="Evaluate Candidates">
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">{t.evaluateTitle}</h2>
            <p className="text-orange-100 text-lg mb-8 text-center">{t.evaluateDesc}</p>
            <div className="bg-white rounded-3xl p-8">
              <ul className="space-y-4">
                {t.questions.map((question, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 text-lg pt-1">{question}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ReviewableSection>

      {/* Become Minister-Candidate */}
      <ReviewableSection sectionId="minister-selection-candidate" sectionName="Become Minister-Candidate">
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t.candidateTitle}</h2>
                <p className="text-gray-700 text-lg mb-8">{t.candidateDesc}</p>
                <ul className="space-y-4 mb-8">
                  {t.candidateReasons.map((reason, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${lang}/join`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg"
                >
                  {t.registerButton}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 text-white text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{lang === 'bn' ? 'আপনি কি মন্ত্রী হতে প্রস্তুত?' : lang === 'hi' ? 'क्या आप मंत्री बनने के लिए तैयार हैं?' : 'Are you ready to be a Minister?'}</h3>
                <p className="text-blue-200">{lang === 'bn' ? 'যোগ্যতা আছে? চরিত্র আছে? প্রমাণ করুন।' : lang === 'hi' ? 'योग्यता है? चरित्र है? साबित करें।' : 'Have competence? Have character? Prove it.'}</p>
              </div>
            </div>
          </div>
        </section>
      </ReviewableSection>

      {/* CTA */}
      <ReviewableSection sectionId="minister-selection-cta" sectionName="Call to Action">
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-purple-100 text-lg mb-8">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/join`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg"
              >
                {t.joinParishad}
              </Link>
              <Link
                href={`/${lang}/donate`}
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg"
              >
                {t.donate}
              </Link>
            </div>
          </div>
        </section>
      </ReviewableSection>
    </div>
  );
}
