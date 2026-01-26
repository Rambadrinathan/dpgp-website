import { getDictionary, Locale, locales } from '@/dictionaries';
import ReviewableSection from '@/components/ReviewableSection';

export default async function WhyNowPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);

  const content = {
    en: {
      heroTitle: "The Jagaran Layer",
      heroSubtitle: "A Revolutionary Framework for Mass Education",
      heroDesc: "Applying Media's TRP Model to Transform How Society Learns",
      attribution: "Original concept by Mahacharya Sourabh J Sarkar, OmniDEL Framework",

      insightTitle: "The Core Insight",
      mediaModel: "The Media Model",
      mediaDesc: "Media companies have perfected a formula for capturing mass attention:",
      mediaFormula: "Societal Events → TRP → Monetization → Revenue",
      mediaEvents: [
        "Festivals (Durga Puja, Diwali, New Year)",
        "Political Events (Elections, Policy Changes)",
        "Disasters (Pollution, Earthquakes, Floods)",
        "Controversies (Corporate Scandals, Crimes)",
        "Cultural Moments (Film Releases, Sports Events)"
      ],
      mediaResult: "Each event creates a natural attention spike. Media captures this attention, converts it to TRP (measurable viewership), and monetizes through advertising.",

      educationGap: "The Education Gap",
      educationDesc: "The education industry has never adopted this model:",
      educationProblems: [
        "Curriculum-driven, not event-responsive",
        "Schedule-bound, not moment-aware",
        "Institution-centric, not life-centric",
        "Push model, not pull model"
      ],
      educationResult: "Result: Low engagement, limited behavior change at scale. Education lacks an 'awakening mechanism.'",

      jagaranTitle: "The Jagaran Layer Solution",
      jagaranMeaning: "Jagaran (जागरण/জাগরণ) = Awakening",
      jagaranDesc: "Instead of monetizing attention like media, we convert attention into learning and behavior change:",
      jagaranFormula: "Societal Events → Jagaran (Awakening) → Learning → Behavior Change → Societal Impact",
      jagaranPrinciple: "When Delhi pollution spikes, millions are searching for information, discussing with family, emotionally engaged. Media responds with 24/7 coverage. Education should respond with environmental health education - at that exact moment of heightened attention.",

      historicalTitle: "Historical Precedent: Festivals as Education",
      historicalDesc: "Our ancestors understood this. Ancient festivals were not just celebrations - they were carefully designed educational events:",
      festivals: [
        { name: "Durga Puja", lesson: "Victory of dharma over adharma, community organization" },
        { name: "Diwali", lesson: "Financial literacy (new year accounting), cleanliness" },
        { name: "Holi", lesson: "Social leveling, seasonal transition awareness" },
        { name: "Navratri", lesson: "Nine forms of energy, health through fasting" }
      ],
      historicalConclusion: "Modernity separated education from life. The Jagaran Layer reconnects them.",

      proofTitle: "Proof of Concept",
      proof1Title: "Durga Puja 2025",
      proof1Desc: "Test-marketed this approach with IIT Kharagpur Durga Puja campaign. Leveraged festival attention for cultural education.",
      proof1Result: "3 million+ views across social platforms",
      proof2Title: "Elections 2026",
      proof2Desc: "Full deployment of the Jagaran Layer. Using election fever - the natural attention spike - to deliver civic education at scale.",
      proof2Result: "100-day AI-powered voter education campaign",

      eventsTitle: "50+ Societal Events for Education",
      eventsDesc: "The Jagaran Layer can be applied to any event that captures societal attention:",
      eventCategories: [
        {
          category: "Calendar Events",
          examples: "Elections, Independence Day, Budget Announcement, Festivals",
          opportunity: "Civic education, financial literacy, cultural values"
        },
        {
          category: "Seasonal Events",
          examples: "Monsoon, Exam Season, Harvest, Winter Pollution",
          opportunity: "Health education, study skills, agricultural knowledge"
        },
        {
          category: "Crisis Events",
          examples: "Natural Disasters, Disease Outbreaks, Accidents",
          opportunity: "Disaster preparedness, public health, safety education"
        },
        {
          category: "Cultural Moments",
          examples: "Film Releases, Sports Events, Viral Social Media",
          opportunity: "Media literacy, historical education, critical thinking"
        }
      ],

      whyNowTitle: "Why Now? The AI Multiplier",
      whyNowDesc: "Previously, event-responsive education was impossible at scale. AI changes everything:",
      aiComparison: [
        { aspect: "Content Creation", before: "Weeks", after: "Hours" },
        { aspect: "Language Adaptation", before: "Manual Translation", after: "Real-time Multilingual" },
        { aspect: "Personalization", before: "One-size-fits-all", after: "Individualized" },
        { aspect: "Distribution", before: "Broadcast Only", after: "Targeted, Multi-channel" },
        { aspect: "Feedback", before: "Post-campaign Surveys", after: "Real-time Analytics" }
      ],
      aiConclusion: "The convergence: Societal event awareness + AI content generation + Digital distribution = Mass education at media scale.",

      implicationTitle: "A New Paradigm for Education",
      paradigmShift: [
        { old: "Curriculum-first", new: "Event-first" },
        { old: "Schedule-bound", new: "Moment-responsive" },
        { old: "Institution-centric", new: "Life-centric" },
        { old: "Push model", new: "Pull model" },
        { old: "Learning as obligation", new: "Learning as participation" }
      ],

      ctaTitle: "This Campaign is the Proof",
      ctaDesc: "DPGP demonstrates that elections can be converted into a civic education event. If this works, every societal event becomes an educational opportunity.",
      ctaButton: "Join the Movement"
    },
    bn: {
      heroTitle: "জাগরণ স্তর",
      heroSubtitle: "গণশিক্ষার জন্য একটি বৈপ্লবিক ফ্রেমওয়ার্ক",
      heroDesc: "সমাজ কীভাবে শেখে তা রূপান্তর করতে মিডিয়ার TRP মডেল প্রয়োগ",
      attribution: "মহাচার্য সৌরভ জে সরকারের মৌলিক ধারণা, OmniDEL Framework",

      insightTitle: "মূল অন্তর্দৃষ্টি",
      mediaModel: "মিডিয়া মডেল",
      mediaDesc: "মিডিয়া কোম্পানিগুলো গণমনোযোগ আকর্ষণের একটি সূত্র নিখুঁত করেছে:",
      mediaFormula: "সামাজিক ঘটনা → TRP → নগদীকরণ → রাজস্ব",
      mediaEvents: [
        "উৎসব (দুর্গাপূজা, দীপাবলি, নববর্ষ)",
        "রাজনৈতিক ঘটনা (নির্বাচন, নীতি পরিবর্তন)",
        "দুর্যোগ (দূষণ, ভূমিকম্প, বন্যা)",
        "বিতর্ক (কর্পোরেট কেলেঙ্কারি, অপরাধ)",
        "সাংস্কৃতিক মুহূর্ত (চলচ্চিত্র মুক্তি, ক্রীড়া ইভেন্ট)"
      ],
      mediaResult: "প্রতিটি ঘটনা একটি স্বাভাবিক মনোযোগ স্পাইক তৈরি করে। মিডিয়া এই মনোযোগ ক্যাপচার করে, TRP-তে রূপান্তর করে, এবং বিজ্ঞাপনের মাধ্যমে নগদীকরণ করে।",

      educationGap: "শিক্ষার ফাঁক",
      educationDesc: "শিক্ষা শিল্প কখনও এই মডেল গ্রহণ করেনি:",
      educationProblems: [
        "পাঠ্যক্রম-চালিত, ঘটনা-প্রতিক্রিয়াশীল নয়",
        "সময়সূচী-আবদ্ধ, মুহূর্ত-সচেতন নয়",
        "প্রতিষ্ঠান-কেন্দ্রিক, জীবন-কেন্দ্রিক নয়",
        "পুশ মডেল, পুল মডেল নয়"
      ],
      educationResult: "ফলাফল: কম সম্পৃক্ততা, বড় পরিসরে সীমিত আচরণ পরিবর্তন। শিক্ষার একটি 'জাগরণ প্রক্রিয়া' নেই।",

      jagaranTitle: "জাগরণ স্তর সমাধান",
      jagaranMeaning: "জাগরণ = Awakening",
      jagaranDesc: "মিডিয়ার মতো মনোযোগ নগদীকরণের বদলে, আমরা মনোযোগকে শিক্ষা ও আচরণ পরিবর্তনে রূপান্তর করি:",
      jagaranFormula: "সামাজিক ঘটনা → জাগরণ → শিক্ষা → আচরণ পরিবর্তন → সামাজিক প্রভাব",
      jagaranPrinciple: "যখন দিল্লির দূষণ বাড়ে, লক্ষ লক্ষ মানুষ তথ্য খুঁজছে, পরিবারের সাথে আলোচনা করছে, আবেগগতভাবে সম্পৃক্ত। মিডিয়া ২৪/৭ কভারেজ দিয়ে সাড়া দেয়। শিক্ষার উচিত পরিবেশগত স্বাস্থ্য শিক্ষা দিয়ে সাড়া দেওয়া - ঠিক সেই উচ্চ মনোযোগের মুহূর্তে।",

      historicalTitle: "ঐতিহাসিক নজির: শিক্ষা হিসেবে উৎসব",
      historicalDesc: "আমাদের পূর্বপুরুষরা এটা বুঝতেন। প্রাচীন উৎসবগুলো শুধু উদযাপন ছিল না - এগুলো সযত্নে পরিকল্পিত শিক্ষামূলক ঘটনা ছিল:",
      festivals: [
        { name: "দুর্গাপূজা", lesson: "অধর্মের উপর ধর্মের বিজয়, সম্প্রদায় সংগঠন" },
        { name: "দীপাবলি", lesson: "আর্থিক সাক্ষরতা (নববর্ষ হিসাব), পরিচ্ছন্নতা" },
        { name: "হোলি", lesson: "সামাজিক সমতা, ঋতু পরিবর্তন সচেতনতা" },
        { name: "নবরাত্রি", lesson: "শক্তির নয় রূপ, উপবাসের মাধ্যমে স্বাস্থ্য" }
      ],
      historicalConclusion: "আধুনিকতা শিক্ষাকে জীবন থেকে আলাদা করেছে। জাগরণ স্তর তাদের পুনরায় সংযুক্ত করে।",

      proofTitle: "ধারণার প্রমাণ",
      proof1Title: "দুর্গাপূজা ২০২৫",
      proof1Desc: "IIT খড়গপুর দুর্গাপূজা অভিযানে এই পদ্ধতি পরীক্ষামূলকভাবে ব্যবহার করা হয়েছে। সাংস্কৃতিক শিক্ষার জন্য উৎসবের মনোযোগ কাজে লাগানো হয়েছে।",
      proof1Result: "সোশ্যাল প্ল্যাটফর্মে ৩০ লক্ষ+ ভিউ",
      proof2Title: "নির্বাচন ২০২৬",
      proof2Desc: "জাগরণ স্তরের সম্পূর্ণ স্থাপনা। নির্বাচনী জ্বর - স্বাভাবিক মনোযোগ স্পাইক - ব্যবহার করে বড় পরিসরে নাগরিক শিক্ষা প্রদান।",
      proof2Result: "১০০ দিনের AI-চালিত ভোটার শিক্ষা অভিযান",

      eventsTitle: "শিক্ষার জন্য ৫০+ সামাজিক ঘটনা",
      eventsDesc: "জাগরণ স্তর যেকোনো ঘটনায় প্রয়োগ করা যায় যা সামাজিক মনোযোগ আকর্ষণ করে:",
      eventCategories: [
        {
          category: "ক্যালেন্ডার ঘটনা",
          examples: "নির্বাচন, স্বাধীনতা দিবস, বাজেট ঘোষণা, উৎসব",
          opportunity: "নাগরিক শিক্ষা, আর্থিক সাক্ষরতা, সাংস্কৃতিক মূল্যবোধ"
        },
        {
          category: "ঋতুভিত্তিক ঘটনা",
          examples: "বর্ষা, পরীক্ষার মৌসুম, ফসল কাটা, শীতকালীন দূষণ",
          opportunity: "স্বাস্থ্য শিক্ষা, অধ্যয়ন দক্ষতা, কৃষি জ্ঞান"
        },
        {
          category: "সংকট ঘটনা",
          examples: "প্রাকৃতিক দুর্যোগ, রোগ প্রাদুর্ভাব, দুর্ঘটনা",
          opportunity: "দুর্যোগ প্রস্তুতি, জনস্বাস্থ্য, নিরাপত্তা শিক্ষা"
        },
        {
          category: "সাংস্কৃতিক মুহূর্ত",
          examples: "চলচ্চিত্র মুক্তি, ক্রীড়া ইভেন্ট, ভাইরাল সোশ্যাল মিডিয়া",
          opportunity: "মিডিয়া সাক্ষরতা, ঐতিহাসিক শিক্ষা, সমালোচনামূলক চিন্তা"
        }
      ],

      whyNowTitle: "এখনই কেন? AI মাল্টিপ্লায়ার",
      whyNowDesc: "আগে, ঘটনা-প্রতিক্রিয়াশীল শিক্ষা বড় পরিসরে অসম্ভব ছিল। AI সবকিছু বদলে দেয়:",
      aiComparison: [
        { aspect: "কন্টেন্ট তৈরি", before: "সপ্তাহ", after: "ঘণ্টা" },
        { aspect: "ভাষা অভিযোজন", before: "ম্যানুয়াল অনুবাদ", after: "রিয়েল-টাইম বহুভাষিক" },
        { aspect: "ব্যক্তিগতকরণ", before: "সবার জন্য এক", after: "ব্যক্তিগত" },
        { aspect: "বিতরণ", before: "শুধু সম্প্রচার", after: "লক্ষ্যভিত্তিক, বহু-চ্যানেল" },
        { aspect: "প্রতিক্রিয়া", before: "অভিযান-পরবর্তী সমীক্ষা", after: "রিয়েল-টাইম বিশ্লেষণ" }
      ],
      aiConclusion: "সমন্বয়: সামাজিক ঘটনা সচেতনতা + AI কন্টেন্ট জেনারেশন + ডিজিটাল বিতরণ = মিডিয়া স্কেলে গণশিক্ষা।",

      implicationTitle: "শিক্ষার জন্য একটি নতুন দৃষ্টান্ত",
      paradigmShift: [
        { old: "পাঠ্যক্রম-প্রথম", new: "ঘটনা-প্রথম" },
        { old: "সময়সূচী-আবদ্ধ", new: "মুহূর্ত-প্রতিক্রিয়াশীল" },
        { old: "প্রতিষ্ঠান-কেন্দ্রিক", new: "জীবন-কেন্দ্রিক" },
        { old: "পুশ মডেল", new: "পুল মডেল" },
        { old: "বাধ্যবাধকতা হিসেবে শিক্ষা", new: "অংশগ্রহণ হিসেবে শিক্ষা" }
      ],

      ctaTitle: "এই অভিযান হল প্রমাণ",
      ctaDesc: "DPGP প্রদর্শন করে যে নির্বাচনকে নাগরিক শিক্ষা ইভেন্টে রূপান্তর করা যায়। এটি কাজ করলে, প্রতিটি সামাজিক ঘটনা একটি শিক্ষামূলক সুযোগ হয়ে ওঠে।",
      ctaButton: "আন্দোলনে যোগ দিন"
    },
    hi: {
      heroTitle: "जागरण परत",
      heroSubtitle: "जन शिक्षा के लिए एक क्रांतिकारी ढांचा",
      heroDesc: "समाज कैसे सीखता है इसे बदलने के लिए मीडिया के TRP मॉडल का अनुप्रयोग",
      attribution: "महाचार्य सौरभ जे सरकार की मूल अवधारणा, OmniDEL Framework",

      insightTitle: "मूल अंतर्दृष्टि",
      mediaModel: "मीडिया मॉडल",
      mediaDesc: "मीडिया कंपनियों ने जन-ध्यान आकर्षित करने का एक सूत्र पूर्ण किया है:",
      mediaFormula: "सामाजिक घटनाएं → TRP → मुद्रीकरण → राजस्व",
      mediaEvents: [
        "त्योहार (दुर्गा पूजा, दिवाली, नया साल)",
        "राजनीतिक घटनाएं (चुनाव, नीति परिवर्तन)",
        "आपदाएं (प्रदूषण, भूकंप, बाढ़)",
        "विवाद (कॉर्पोरेट घोटाले, अपराध)",
        "सांस्कृतिक क्षण (फिल्म रिलीज, खेल आयोजन)"
      ],
      mediaResult: "हर घटना एक स्वाभाविक ध्यान स्पाइक बनाती है। मीडिया इस ध्यान को कैप्चर करता है, TRP में बदलता है, और विज्ञापन के माध्यम से मुद्रीकरण करता है।",

      educationGap: "शिक्षा का अंतर",
      educationDesc: "शिक्षा उद्योग ने कभी इस मॉडल को नहीं अपनाया:",
      educationProblems: [
        "पाठ्यक्रम-संचालित, घटना-प्रतिक्रियाशील नहीं",
        "समय-सारणी-बद्ध, क्षण-जागरूक नहीं",
        "संस्थान-केंद्रित, जीवन-केंद्रित नहीं",
        "पुश मॉडल, पुल मॉडल नहीं"
      ],
      educationResult: "परिणाम: कम जुड़ाव, बड़े पैमाने पर सीमित व्यवहार परिवर्तन। शिक्षा में 'जागरण तंत्र' का अभाव है।",

      jagaranTitle: "जागरण परत समाधान",
      jagaranMeaning: "जागरण = Awakening",
      jagaranDesc: "मीडिया की तरह ध्यान का मुद्रीकरण करने के बजाय, हम ध्यान को सीखने और व्यवहार परिवर्तन में बदलते हैं:",
      jagaranFormula: "सामाजिक घटनाएं → जागरण → सीखना → व्यवहार परिवर्तन → सामाजिक प्रभाव",
      jagaranPrinciple: "जब दिल्ली का प्रदूषण बढ़ता है, लाखों लोग जानकारी खोज रहे हैं, परिवार के साथ चर्चा कर रहे हैं, भावनात्मक रूप से जुड़े हैं। मीडिया 24/7 कवरेज के साथ प्रतिक्रिया देता है। शिक्षा को पर्यावरणीय स्वास्थ्य शिक्षा के साथ प्रतिक्रिया देनी चाहिए - ठीक उसी उच्च ध्यान के क्षण में।",

      historicalTitle: "ऐतिहासिक मिसाल: शिक्षा के रूप में त्योहार",
      historicalDesc: "हमारे पूर्वज इसे समझते थे। प्राचीन त्योहार सिर्फ उत्सव नहीं थे - ये सावधानीपूर्वक डिज़ाइन किए गए शैक्षिक आयोजन थे:",
      festivals: [
        { name: "दुर्गा पूजा", lesson: "अधर्म पर धर्म की विजय, समुदाय संगठन" },
        { name: "दिवाली", lesson: "वित्तीय साक्षरता (नए साल का हिसाब), स्वच्छता" },
        { name: "होली", lesson: "सामाजिक समानता, मौसमी परिवर्तन जागरूकता" },
        { name: "नवरात्रि", lesson: "शक्ति के नौ रूप, उपवास के माध्यम से स्वास्थ्य" }
      ],
      historicalConclusion: "आधुनिकता ने शिक्षा को जीवन से अलग कर दिया। जागरण परत उन्हें फिर से जोड़ती है।",

      proofTitle: "अवधारणा का प्रमाण",
      proof1Title: "दुर्गा पूजा 2025",
      proof1Desc: "IIT खड़गपुर दुर्गा पूजा अभियान में इस दृष्टिकोण का परीक्षण किया। सांस्कृतिक शिक्षा के लिए त्योहार के ध्यान का उपयोग किया।",
      proof1Result: "सोशल प्लेटफॉर्म पर 30 लाख+ व्यूज",
      proof2Title: "चुनाव 2026",
      proof2Desc: "जागरण परत का पूर्ण परिनियोजन। चुनावी ज्वर - स्वाभाविक ध्यान स्पाइक - का उपयोग करके बड़े पैमाने पर नागरिक शिक्षा प्रदान करना।",
      proof2Result: "100 दिन का AI-संचालित मतदाता शिक्षा अभियान",

      eventsTitle: "शिक्षा के लिए 50+ सामाजिक घटनाएं",
      eventsDesc: "जागरण परत किसी भी घटना पर लागू की जा सकती है जो सामाजिक ध्यान आकर्षित करती है:",
      eventCategories: [
        {
          category: "कैलेंडर घटनाएं",
          examples: "चुनाव, स्वतंत्रता दिवस, बजट घोषणा, त्योहार",
          opportunity: "नागरिक शिक्षा, वित्तीय साक्षरता, सांस्कृतिक मूल्य"
        },
        {
          category: "मौसमी घटनाएं",
          examples: "मानसून, परीक्षा का मौसम, फसल, सर्दियों का प्रदूषण",
          opportunity: "स्वास्थ्य शिक्षा, अध्ययन कौशल, कृषि ज्ञान"
        },
        {
          category: "संकट घटनाएं",
          examples: "प्राकृतिक आपदाएं, रोग प्रकोप, दुर्घटनाएं",
          opportunity: "आपदा तैयारी, जन स्वास्थ्य, सुरक्षा शिक्षा"
        },
        {
          category: "सांस्कृतिक क्षण",
          examples: "फिल्म रिलीज, खेल आयोजन, वायरल सोशल मीडिया",
          opportunity: "मीडिया साक्षरता, ऐतिहासिक शिक्षा, आलोचनात्मक सोच"
        }
      ],

      whyNowTitle: "अभी क्यों? AI मल्टीप्लायर",
      whyNowDesc: "पहले, घटना-प्रतिक्रियाशील शिक्षा बड़े पैमाने पर असंभव थी। AI सब कुछ बदल देता है:",
      aiComparison: [
        { aspect: "कंटेंट निर्माण", before: "सप्ताह", after: "घंटे" },
        { aspect: "भाषा अनुकूलन", before: "मैनुअल अनुवाद", after: "रियल-टाइम बहुभाषी" },
        { aspect: "वैयक्तिकरण", before: "सबके लिए एक", after: "व्यक्तिगत" },
        { aspect: "वितरण", before: "केवल प्रसारण", after: "लक्षित, बहु-चैनल" },
        { aspect: "प्रतिक्रिया", before: "अभियान-पश्चात सर्वेक्षण", after: "रियल-टाइम एनालिटिक्स" }
      ],
      aiConclusion: "संयोजन: सामाजिक घटना जागरूकता + AI कंटेंट जनरेशन + डिजिटल वितरण = मीडिया स्केल पर जन शिक्षा।",

      implicationTitle: "शिक्षा के लिए एक नया प्रतिमान",
      paradigmShift: [
        { old: "पाठ्यक्रम-पहले", new: "घटना-पहले" },
        { old: "समय-सारणी-बद्ध", new: "क्षण-प्रतिक्रियाशील" },
        { old: "संस्थान-केंद्रित", new: "जीवन-केंद्रित" },
        { old: "पुश मॉडल", new: "पुल मॉडल" },
        { old: "बाध्यता के रूप में शिक्षा", new: "भागीदारी के रूप में शिक्षा" }
      ],

      ctaTitle: "यह अभियान प्रमाण है",
      ctaDesc: "DPGP दर्शाता है कि चुनाव को नागरिक शिक्षा आयोजन में बदला जा सकता है। यदि यह काम करता है, तो हर सामाजिक घटना एक शैक्षिक अवसर बन जाती है।",
      ctaButton: "आंदोलन में शामिल हों"
    }
  };

  const t = content[lang];

  return (
    <div>
      {/* Hero Section */}
      <ReviewableSection sectionId="whynow-hero" sectionName="Hero Section">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">💡</span>
            <span className="text-orange-300 font-medium">{lang === 'en' ? 'Original Framework' : lang === 'bn' ? 'মৌলিক ফ্রেমওয়ার্ক' : 'मूल ढांचा'}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.heroTitle}</h1>
          <p className="text-2xl text-orange-400 font-medium mb-4">{t.heroSubtitle}</p>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-6">{t.heroDesc}</p>
          <p className="text-blue-300 italic">{t.attribution}</p>
        </div>
      </section>
      </ReviewableSection>

      {/* Core Insight Section */}
      <ReviewableSection sectionId="whynow-insight" sectionName="Core Insight: Media vs Education">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">{t.insightTitle}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Media Model */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📺</span>
                <h3 className="text-2xl font-bold text-green-800">{t.mediaModel}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t.mediaDesc}</p>
              <div className="bg-green-800 text-white rounded-xl p-4 mb-6 text-center font-mono text-lg">
                {t.mediaFormula}
              </div>
              <ul className="space-y-2 mb-6">
                {t.mediaEvents.map((event, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    {event}
                  </li>
                ))}
              </ul>
              <p className="text-green-700 font-medium">{t.mediaResult}</p>
            </div>

            {/* Education Gap */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🎓</span>
                <h3 className="text-2xl font-bold text-red-800">{t.educationGap}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t.educationDesc}</p>
              <ul className="space-y-3 mb-6">
                {t.educationProblems.map((problem, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-red-500">✗</span>
                    {problem}
                  </li>
                ))}
              </ul>
              <p className="text-red-700 font-medium">{t.educationResult}</p>
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Jagaran Layer Solution */}
      <ReviewableSection sectionId="whynow-jagaran" sectionName="Jagaran Layer Solution">
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.jagaranTitle}</h2>
            <p className="text-orange-100 text-xl italic">{t.jagaranMeaning}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto mb-8">
            <p className="text-white text-lg mb-6">{t.jagaranDesc}</p>
            <div className="bg-white text-orange-600 rounded-xl p-4 text-center font-mono text-lg font-bold">
              {t.jagaranFormula}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">{t.jagaranPrinciple}</p>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Historical Precedent */}
      <ReviewableSection sectionId="whynow-historical" sectionName="Historical Precedent: Festivals">
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">{t.historicalTitle}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">{t.historicalDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.festivals.map((festival, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-orange-500">
                <h3 className="font-bold text-blue-900 text-xl mb-3">{festival.name}</h3>
                <p className="text-gray-600">{festival.lesson}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-900 rounded-2xl p-8 text-center">
            <p className="text-white text-xl font-medium">{t.historicalConclusion}</p>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Proof of Concept */}
      <ReviewableSection sectionId="whynow-proof" sectionName="Proof of Concept">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">{t.proofTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border-2 border-orange-200">
              <div className="text-4xl mb-4">🪔</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{t.proof1Title}</h3>
              <p className="text-gray-700 mb-4">{t.proof1Desc}</p>
              <div className="bg-orange-500 text-white rounded-xl px-4 py-3 inline-block font-bold">
                {t.proof1Result}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{t.proof2Title}</h3>
              <p className="text-gray-700 mb-4">{t.proof2Desc}</p>
              <div className="bg-blue-900 text-white rounded-xl px-4 py-3 inline-block font-bold">
                {t.proof2Result}
              </div>
            </div>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* 50+ Events */}
      <ReviewableSection sectionId="whynow-events" sectionName="50+ Societal Events">
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">{t.eventsTitle}</h2>
          <p className="text-blue-200 text-center max-w-3xl mx-auto mb-12">{t.eventsDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.eventCategories.map((cat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-bold text-orange-400 text-xl mb-3">{cat.category}</h3>
                <p className="text-blue-200 mb-2"><span className="text-white">Examples:</span> {cat.examples}</p>
                <p className="text-green-400"><span className="text-white">Opportunity:</span> {cat.opportunity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Why Now - AI */}
      <ReviewableSection sectionId="whynow-ai" sectionName="AI Multiplier">
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">{t.whyNowTitle}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">{t.whyNowDesc}</p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">{lang === 'en' ? 'Aspect' : lang === 'bn' ? 'দিক' : 'पहलू'}</th>
                  <th className="px-6 py-4 text-left">{lang === 'en' ? 'Before AI' : lang === 'bn' ? 'AI-এর আগে' : 'AI से पहले'}</th>
                  <th className="px-6 py-4 text-left">{lang === 'en' ? 'With AI' : lang === 'bn' ? 'AI-এর সাথে' : 'AI के साथ'}</th>
                </tr>
              </thead>
              <tbody>
                {t.aiComparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-blue-900">{row.aspect}</td>
                    <td className="px-6 py-4 text-red-600">{row.before}</td>
                    <td className="px-6 py-4 text-green-600 font-medium">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <p className="text-white text-xl font-medium">{t.aiConclusion}</p>
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* Paradigm Shift */}
      <ReviewableSection sectionId="whynow-paradigm" sectionName="New Paradigm for Education">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">{t.implicationTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.paradigmShift.map((shift, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-red-500 line-through">{shift.old}</div>
                  <div className="text-2xl">→</div>
                  <div className="text-green-600 font-bold">{shift.new}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ReviewableSection>

      {/* CTA */}
      <ReviewableSection sectionId="whynow-cta" sectionName="Call to Action">
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-orange-100 text-xl mb-10">{t.ctaDesc}</p>
          <a
            href={`/${lang}/join`}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-orange-500 font-bold text-lg rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            {t.ctaButton}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
      </ReviewableSection>
    </div>
  );
}
