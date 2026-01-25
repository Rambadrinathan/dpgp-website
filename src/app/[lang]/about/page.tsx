import { getDictionary, Locale, locales } from '@/dictionaries';
import Image from 'next/image';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'bn') as Locale;
  const dict = await getDictionary(lang);

  const content = {
    en: {
      heroTitle: "A Historic First",
      heroSubtitle: "The World's First AI-Powered Mass Voter Education Campaign",
      heroDesc: "Educating 60 million voters in 100 days using the power of AI, Media, and Technology",

      initiativeTitle: "The Initiative",
      initiativeSubtitle: "DPGP - Dharmic Political Governance Project",
      initiativeDesc: "For the first time in history, we are leveraging the transformative power of AI to undertake a mass education campaign of unprecedented scale. The goal: to shift 60 million voters from party-centric thinking to minister-centric evaluation before the West Bengal Assembly Elections 2026.",
      initiativePoints: [
        "Transform political culture from 'Which party?' to 'Which minister?'",
        "Educate voters about how the Council of Ministers actually governs their daily lives",
        "Empower citizens to ask the right questions and evaluate candidates on competence",
        "Reach every corner of West Bengal in Bengali, Hindi, and English"
      ],

      whyNowTitle: "Why Now? The AI Moment",
      whyNowDesc: "The KarmYog team has been deeply immersed in AI since the ChatGPT moment in November 2022. We see this mass education program as an unprecedented opportunity to truly leverage the power of AI, Media, and Technology for large-scale culture and behavior change. What would have taken years can now be accomplished in months. What would have required thousands of workers can now be amplified through intelligent automation.",

      omnidelTitle: "Powered by OmniDEL",
      omnidelSubtitle: "Omni-channel Digital Education & Learning Framework",
      omnidelDesc: "OmniDEL is a proprietary framework developed by Mahacharya Sourabh J Sarkar for delivering education at massive scale across multiple channels simultaneously. Combined with AI, it enables:",
      omnidelFeatures: [
        { icon: "🎬", title: "AI Video Generation", desc: "Thousands of educational videos in multiple languages" },
        { icon: "📱", title: "Multi-Channel Delivery", desc: "WhatsApp, YouTube, Facebook, Instagram - all platforms simultaneously" },
        { icon: "🗣️", title: "Vernacular Content", desc: "Native Bengali, Hindi content that resonates with local culture" },
        { icon: "📊", title: "Real-time Analytics", desc: "Measure impact and adjust messaging dynamically" },
        { icon: "🤖", title: "AI Personalization", desc: "Content tailored to different voter segments" },
        { icon: "🔄", title: "Rapid Iteration", desc: "Daily content production and distribution" }
      ],

      karmyogTitle: "KarmYog for 21st Century",
      karmyogSubtitle: "Where Ancient Wisdom Meets Modern Technology",
      karmyogDesc: "KarmYog for 21st Century is a movement to apply the principles of selfless action (Karma Yoga) using the tools of the modern age. Founded by Mahacharya Sourabh J Sarkar, it has pioneered large-scale behavior change campaigns that have touched millions of lives.",
      karmyogMission: "Our mission is to prove that AI can be a force for dharmic (righteous) transformation - not just commercial gain. Education is the first battleground.",

      founderTitle: "The Visionary",
      founderName: "Mahacharya Sourabh J Sarkar",
      founderRole: "Founder, KarmYog for 21st Century | Creator, OmniDEL Framework",
      founderBio: [
        "One of India's pioneers of interactive media and e-learning with over three decades of experience",
        "Creator of the OmniDEL Framework for mass digital education delivery",
        "Led the 'Safe Drive Save Life' movement that transformed road safety culture in Kolkata",
        "Believes AI has arrived at a transformative moment for education - and this campaign will prove it",
        "Passionate about using technology not for profit, but for dharmic transformation of society"
      ],
      founderQuote: "\"For 30 years, I've dreamed of reaching every voter, every citizen, with the education they need to make informed choices. AI has finally made this possible. This is not just a campaign - this is proof that technology can serve dharma.\"",

      cofounderName: "Ram Badrinathan",
      cofounderRole: "AI for Education Specialist | Technology Strategist",
      cofounderBio: "Deep expertise in leveraging AI for scalable education delivery. Architect of the AI systems powering the DPGP campaign.",

      trackTitle: "Proven Track Record",
      trackSubtitle: "We don't just talk. We deliver.",
      tracks: [
        { title: "Safe Drive Save Life", desc: "Transformed road safety culture in Kolkata through mass media campaign", impact: "Measurable reduction in road accidents" },
        { title: "Mass Music Education", desc: "Scaled music education to thousands across Bengal using digital platforms", impact: "Created new paradigm for arts education" },
        { title: "IIT Kharagpur Durga Puja 2025", desc: "Organized one of the largest and most innovative Durga Pujas", impact: "Millions of visitors, national recognition" },
        { title: "Digital Campaign 2025", desc: "Durga Puja digital campaign across social media", impact: "3 million+ views, viral reach" }
      ],

      scaleTitle: "The Scale of Ambition",
      scaleStats: [
        { number: "6 Crore", label: "Voters to Educate", desc: "West Bengal's entire electorate" },
        { number: "100", label: "Days", desc: "Intensive campaign duration" },
        { number: "294", label: "Constituencies", desc: "Every assembly segment covered" },
        { number: "3", label: "Languages", desc: "Bengali, Hindi, English" }
      ],

      principlesTitle: "Our Principles",
      principles: [
        { icon: "🙏", title: "Dharma-Centric", desc: "All actions guided by righteousness, not political interest" },
        { icon: "⚖️", title: "Non-Partisan", desc: "We favor no party, no candidate - only informed voters" },
        { icon: "📖", title: "Educate, Not Dictate", desc: "We provide information - the decision is always yours" },
        { icon: "✅", title: "Truth-Based", desc: "Only verified, factual, government-sourced data" },
        { icon: "🤝", title: "Inclusive", desc: "Reaching urban and rural, young and old, all communities" },
        { icon: "👁️", title: "Transparent", desc: "Open about our methods, funding, and operations" }
      ],

      ctaTitle: "Join Us in Making History",
      ctaDesc: "This is not just a voter education campaign. This is proof that AI can transform democracy itself."
    },
    hi: {
      heroTitle: "एक ऐतिहासिक पहल",
      heroSubtitle: "विश्व का पहला AI-संचालित जन मतदाता शिक्षा अभियान",
      heroDesc: "AI, मीडिया और प्रौद्योगिकी की शक्ति से 100 दिनों में 6 करोड़ मतदाताओं को शिक्षित करना",

      initiativeTitle: "पहल",
      initiativeSubtitle: "DPGP - धार्मिक राजनीतिक शासन परियोजना",
      initiativeDesc: "इतिहास में पहली बार, हम अभूतपूर्व पैमाने पर जन शिक्षा अभियान चलाने के लिए AI की परिवर्तनकारी शक्ति का लाभ उठा रहे हैं। लक्ष्य: पश्चिम बंगाल विधानसभा चुनाव 2026 से पहले 6 करोड़ मतदाताओं की सोच को दल-केंद्रित से मंत्री-केंद्रित मूल्यांकन में बदलना।",
      initiativePoints: [
        "'कौन सा दल?' से 'कौन सा मंत्री?' की ओर राजनीतिक संस्कृति को बदलना",
        "मतदाताओं को शिक्षित करना कि मंत्रिपरिषद वास्तव में उनके दैनिक जीवन को कैसे नियंत्रित करती है",
        "नागरिकों को सही सवाल पूछने और योग्यता के आधार पर उम्मीदवारों का मूल्यांकन करने के लिए सशक्त बनाना",
        "बंगाली, हिंदी और अंग्रेजी में पश्चिम बंगाल के हर कोने तक पहुंचना"
      ],

      whyNowTitle: "अभी क्यों? AI का क्षण",
      whyNowDesc: "कर्मयोग टीम नवंबर 2022 में ChatGPT के आने के बाद से AI में गहराई से डूबी हुई है। हम इस जन शिक्षा कार्यक्रम को बड़े पैमाने पर संस्कृति और व्यवहार परिवर्तन के लिए AI, मीडिया और प्रौद्योगिकी की शक्ति का वास्तविक उपयोग करने के एक अभूतपूर्व अवसर के रूप में देखते हैं।",

      omnidelTitle: "OmniDEL द्वारा संचालित",
      omnidelSubtitle: "ओमनी-चैनल डिजिटल शिक्षा एवं लर्निंग फ्रेमवर्क",
      omnidelDesc: "OmniDEL महाचार्य सौरभ जे सरकार द्वारा विकसित एक स्वामित्व वाला फ्रेमवर्क है जो एक साथ कई चैनलों पर बड़े पैमाने पर शिक्षा प्रदान करता है। AI के साथ मिलकर, यह सक्षम बनाता है:",
      omnidelFeatures: [
        { icon: "🎬", title: "AI वीडियो जनरेशन", desc: "कई भाषाओं में हजारों शैक्षिक वीडियो" },
        { icon: "📱", title: "मल्टी-चैनल डिलीवरी", desc: "WhatsApp, YouTube, Facebook, Instagram - सभी प्लेटफॉर्म एक साथ" },
        { icon: "🗣️", title: "स्थानीय भाषा सामग्री", desc: "स्थानीय संस्कृति से जुड़ी बंगाली, हिंदी सामग्री" },
        { icon: "📊", title: "रियल-टाइम एनालिटिक्स", desc: "प्रभाव मापें और गतिशील रूप से संदेश समायोजित करें" },
        { icon: "🤖", title: "AI पर्सनलाइजेशन", desc: "विभिन्न मतदाता वर्गों के लिए अनुकूलित सामग्री" },
        { icon: "🔄", title: "तेज पुनरावृत्ति", desc: "दैनिक सामग्री उत्पादन और वितरण" }
      ],

      karmyogTitle: "21वीं सदी के लिए कर्मयोग",
      karmyogSubtitle: "जहां प्राचीन ज्ञान आधुनिक प्रौद्योगिकी से मिलता है",
      karmyogDesc: "21वीं सदी के लिए कर्मयोग आधुनिक युग के उपकरणों का उपयोग करके निःस्वार्थ कर्म (कर्म योग) के सिद्धांतों को लागू करने का एक आंदोलन है। महाचार्य सौरभ जे सरकार द्वारा स्थापित, इसने बड़े पैमाने पर व्यवहार परिवर्तन अभियानों का बीड़ा उठाया है जिसने लाखों लोगों के जीवन को छुआ है।",
      karmyogMission: "हमारा मिशन यह साबित करना है कि AI धार्मिक (न्यायपूर्ण) परिवर्तन की शक्ति हो सकती है - न कि केवल व्यावसायिक लाभ के लिए। शिक्षा पहला युद्धक्षेत्र है।",

      founderTitle: "दूरदर्शी",
      founderName: "महाचार्य सौरभ जे सरकार",
      founderRole: "संस्थापक, 21वीं सदी के लिए कर्मयोग | निर्माता, OmniDEL Framework",
      founderBio: [
        "तीन दशकों से अधिक के अनुभव के साथ भारत के इंटरैक्टिव मीडिया और ई-लर्निंग के अग्रणी",
        "बड़े पैमाने पर डिजिटल शिक्षा वितरण के लिए OmniDEL Framework के निर्माता",
        "'Safe Drive Save Life' आंदोलन का नेतृत्व किया जिसने कोलकाता में सड़क सुरक्षा संस्कृति को बदला",
        "मानते हैं कि AI शिक्षा के लिए एक परिवर्तनकारी क्षण पर आया है - और यह अभियान इसे साबित करेगा",
        "लाभ के लिए नहीं, बल्कि समाज के धार्मिक परिवर्तन के लिए प्रौद्योगिकी का उपयोग करने के प्रति समर्पित"
      ],
      founderQuote: "\"30 वर्षों से, मैंने हर मतदाता, हर नागरिक तक पहुंचने का सपना देखा है, उन्हें सूचित विकल्प चुनने के लिए आवश्यक शिक्षा के साथ। AI ने अंततः इसे संभव बना दिया है। यह सिर्फ एक अभियान नहीं है - यह इस बात का प्रमाण है कि प्रौद्योगिकी धर्म की सेवा कर सकती है।\"",

      cofounderName: "राम बद्रीनाथन",
      cofounderRole: "AI for Education विशेषज्ञ | प्रौद्योगिकी रणनीतिकार",
      cofounderBio: "स्केलेबल शिक्षा वितरण के लिए AI का लाभ उठाने में गहरी विशेषज्ञता। DPGP अभियान को संचालित करने वाली AI प्रणालियों के वास्तुकार।",

      trackTitle: "सिद्ध ट्रैक रिकॉर्ड",
      trackSubtitle: "हम सिर्फ बात नहीं करते। हम करके दिखाते हैं।",
      tracks: [
        { title: "Safe Drive Save Life", desc: "जन मीडिया अभियान के माध्यम से कोलकाता में सड़क सुरक्षा संस्कृति को बदला", impact: "सड़क दुर्घटनाओं में मापनीय कमी" },
        { title: "जन संगीत शिक्षा", desc: "डिजिटल प्लेटफॉर्म का उपयोग करके पूरे बंगाल में हजारों तक संगीत शिक्षा पहुंचाई", impact: "कला शिक्षा के लिए नया प्रतिमान" },
        { title: "IIT खड़गपुर दुर्गा पूजा 2025", desc: "सबसे बड़ी और सबसे नवीन दुर्गा पूजाओं में से एक का आयोजन", impact: "लाखों आगंतुक, राष्ट्रीय पहचान" },
        { title: "डिजिटल अभियान 2025", desc: "सोशल मीडिया पर दुर्गा पूजा डिजिटल अभियान", impact: "30 लाख+ व्यूज, वायरल पहुंच" }
      ],

      scaleTitle: "महत्वाकांक्षा का पैमाना",
      scaleStats: [
        { number: "6 करोड़", label: "शिक्षित करने के लिए मतदाता", desc: "पश्चिम बंगाल का पूरा मतदाता वर्ग" },
        { number: "100", label: "दिन", desc: "गहन अभियान अवधि" },
        { number: "294", label: "निर्वाचन क्षेत्र", desc: "हर विधानसभा खंड कवर" },
        { number: "3", label: "भाषाएं", desc: "बंगाली, हिंदी, अंग्रेजी" }
      ],

      principlesTitle: "हमारे सिद्धांत",
      principles: [
        { icon: "🙏", title: "धर्म-केंद्रित", desc: "सभी कार्य राजनीतिक हित से नहीं, न्यायपरायणता से निर्देशित" },
        { icon: "⚖️", title: "निष्पक्ष", desc: "हम किसी दल, किसी उम्मीदवार का पक्ष नहीं लेते - केवल सूचित मतदाता" },
        { icon: "📖", title: "शिक्षित करें, आदेश नहीं", desc: "हम जानकारी देते हैं - निर्णय हमेशा आपका" },
        { icon: "✅", title: "सत्य-आधारित", desc: "केवल सत्यापित, तथ्यात्मक, सरकारी स्रोत डेटा" },
        { icon: "🤝", title: "समावेशी", desc: "शहरी और ग्रामीण, युवा और वृद्ध, सभी समुदायों तक पहुंचना" },
        { icon: "👁️", title: "पारदर्शी", desc: "हमारे तरीकों, धन और संचालन के बारे में खुलापन" }
      ],

      ctaTitle: "इतिहास बनाने में हमारे साथ जुड़ें",
      ctaDesc: "यह सिर्फ एक मतदाता शिक्षा अभियान नहीं है। यह इस बात का प्रमाण है कि AI लोकतंत्र को ही बदल सकता है।"
    },
    bn: {
      heroTitle: "একটি ঐতিহাসিক প্রথম",
      heroSubtitle: "বিশ্বের প্রথম AI-চালিত গণ ভোটার শিক্ষা অভিযান",
      heroDesc: "AI, মিডিয়া ও প্রযুক্তির শক্তি দিয়ে ১০০ দিনে ৬ কোটি ভোটারকে শিক্ষিত করা",

      initiativeTitle: "উদ্যোগ",
      initiativeSubtitle: "DPGP - ধার্মিক রাজনৈতিক শাসন প্রকল্প",
      initiativeDesc: "ইতিহাসে প্রথমবার, আমরা অভূতপূর্ব মাত্রায় গণশিক্ষা অভিযান চালাতে AI-এর রূপান্তরকারী শক্তি ব্যবহার করছি। লক্ষ্য: পশ্চিমবঙ্গ বিধানসভা নির্বাচন ২০২৬-এর আগে ৬ কোটি ভোটারের চিন্তাধারা দলকেন্দ্রিক থেকে মন্ত্রীকেন্দ্রিক মূল্যায়নে পরিবর্তন করা।",
      initiativePoints: [
        "'কোন দল?' থেকে 'কোন মন্ত্রী?'-তে রাজনৈতিক সংস্কৃতি রূপান্তর",
        "ভোটারদের শেখানো মন্ত্রিপরিষদ কীভাবে তাদের দৈনন্দিন জীবন নিয়ন্ত্রণ করে",
        "নাগরিকদের সঠিক প্রশ্ন জিজ্ঞাসা করতে ও যোগ্যতার ভিত্তিতে প্রার্থী মূল্যায়ন করতে সক্ষম করা",
        "বাংলা, হিন্দি ও ইংরেজিতে পশ্চিমবঙ্গের প্রতিটি কোণে পৌঁছানো"
      ],

      whyNowTitle: "এখনই কেন? AI-এর মুহূর্ত",
      whyNowDesc: "কর্মযোগ টিম ২০২২ সালের নভেম্বরে ChatGPT-এর আবির্ভাবের পর থেকে AI-তে গভীরভাবে নিমজ্জিত। আমরা এই গণশিক্ষা কর্মসূচিকে বড় মাপের সংস্কৃতি ও আচরণ পরিবর্তনের জন্য AI, মিডিয়া ও প্রযুক্তির শক্তি সত্যিকারভাবে ব্যবহার করার একটি অভূতপূর্ব সুযোগ হিসেবে দেখি।",

      omnidelTitle: "OmniDEL দ্বারা চালিত",
      omnidelSubtitle: "ওমনি-চ্যানেল ডিজিটাল এডুকেশন এন্ড লার্নিং ফ্রেমওয়ার্ক",
      omnidelDesc: "OmniDEL হল মহাচার্য সৌরভ জে সরকার কর্তৃক উদ্ভাবিত একটি মালিকানাধীন ফ্রেমওয়ার্ক যা একসাথে একাধিক চ্যানেলে বিশাল মাত্রায় শিক্ষা সরবরাহ করে। AI-এর সাথে মিলিয়ে, এটি সক্ষম করে:",
      omnidelFeatures: [
        { icon: "🎬", title: "AI ভিডিও জেনারেশন", desc: "একাধিক ভাষায় হাজার হাজার শিক্ষামূলক ভিডিও" },
        { icon: "📱", title: "মাল্টি-চ্যানেল ডেলিভারি", desc: "WhatsApp, YouTube, Facebook, Instagram - সব প্ল্যাটফর্ম একসাথে" },
        { icon: "🗣️", title: "স্থানীয় ভাষায় কন্টেন্ট", desc: "স্থানীয় সংস্কৃতির সাথে সংযুক্ত বাংলা, হিন্দি কন্টেন্ট" },
        { icon: "📊", title: "রিয়েল-টাইম অ্যানালিটিক্স", desc: "প্রভাব পরিমাপ করুন এবং গতিশীলভাবে বার্তা সামঞ্জস্য করুন" },
        { icon: "🤖", title: "AI পার্সোনালাইজেশন", desc: "বিভিন্ন ভোটার শ্রেণীর জন্য কাস্টমাইজড কন্টেন্ট" },
        { icon: "🔄", title: "দ্রুত পুনরাবৃত্তি", desc: "দৈনিক কন্টেন্ট উৎপাদন ও বিতরণ" }
      ],

      karmyogTitle: "২১শ শতকের জন্য কর্মযোগ",
      karmyogSubtitle: "যেখানে প্রাচীন জ্ঞান আধুনিক প্রযুক্তির সাথে মিলিত হয়",
      karmyogDesc: "২১শ শতকের জন্য কর্মযোগ হল আধুনিক যুগের সরঞ্জাম ব্যবহার করে নিঃস্বার্থ কর্মের (কর্ম যোগ) নীতি প্রয়োগের একটি আন্দোলন। মহাচার্য সৌরভ জে সরকার কর্তৃক প্রতিষ্ঠিত, এটি বড় মাপের আচরণ পরিবর্তন অভিযানের পথিকৃৎ যা লক্ষ লক্ষ মানুষের জীবন স্পর্শ করেছে।",
      karmyogMission: "আমাদের মিশন হল প্রমাণ করা যে AI ধার্মিক (ন্যায়পরায়ণ) রূপান্তরের শক্তি হতে পারে - শুধু বাণিজ্যিক লাভের জন্য নয়। শিক্ষা হল প্রথম যুদ্ধক্ষেত্র।",

      founderTitle: "দূরদর্শী",
      founderName: "মহাচার্য সৌরভ জে সরকার",
      founderRole: "প্রতিষ্ঠাতা, ২১শ শতকের জন্য কর্মযোগ | স্রষ্টা, OmniDEL Framework",
      founderBio: [
        "তিন দশকেরও বেশি অভিজ্ঞতা সহ ভারতের ইন্টারঅ্যাক্টিভ মিডিয়া ও ই-লার্নিংয়ের অন্যতম পথিকৃৎ",
        "বিশাল মাত্রায় ডিজিটাল শিক্ষা সরবরাহের জন্য OmniDEL Framework-এর স্রষ্টা",
        "'Safe Drive Save Life' আন্দোলনের নেতৃত্ব দিয়েছেন যা কলকাতায় সড়ক নিরাপত্তা সংস্কৃতি বদলে দিয়েছে",
        "বিশ্বাস করেন AI শিক্ষার জন্য একটি রূপান্তরকারী মুহূর্তে এসেছে - এবং এই অভিযান তা প্রমাণ করবে",
        "লাভের জন্য নয়, সমাজের ধার্মিক রূপান্তরের জন্য প্রযুক্তি ব্যবহারে নিবেদিত"
      ],
      founderQuote: "\"৩০ বছর ধরে, আমি প্রতিটি ভোটার, প্রতিটি নাগরিকের কাছে পৌঁছানোর স্বপ্ন দেখেছি, তাদের সচেতন সিদ্ধান্ত নেওয়ার জন্য প্রয়োজনীয় শিক্ষা দিয়ে। AI অবশেষে এটি সম্ভব করেছে। এটি শুধু একটি অভিযান নয় - এটি প্রমাণ যে প্রযুক্তি ধর্মের সেবা করতে পারে।\"",

      cofounderName: "রাম বদ্রীনাথন",
      cofounderRole: "AI for Education বিশেষজ্ঞ | প্রযুক্তি কৌশলবিদ",
      cofounderBio: "স্কেলেবল শিক্ষা সরবরাহের জন্য AI ব্যবহারে গভীর দক্ষতা। DPGP অভিযান চালনাকারী AI সিস্টেমের স্থপতি।",

      trackTitle: "প্রমাণিত ট্র্যাক রেকর্ড",
      trackSubtitle: "আমরা শুধু কথা বলি না। আমরা করে দেখাই।",
      tracks: [
        { title: "Safe Drive Save Life", desc: "গণমাধ্যম অভিযানের মাধ্যমে কলকাতায় সড়ক নিরাপত্তা সংস্কৃতি রূপান্তরিত", impact: "সড়ক দুর্ঘটনায় পরিমাপযোগ্য হ্রাস" },
        { title: "গণ সঙ্গীত শিক্ষা", desc: "ডিজিটাল প্ল্যাটফর্ম ব্যবহার করে সারা বাংলায় হাজার হাজার মানুষের কাছে সঙ্গীত শিক্ষা পৌঁছে দেওয়া", impact: "শিল্প শিক্ষার নতুন দৃষ্টান্ত তৈরি" },
        { title: "IIT খড়গপুর দুর্গাপূজা ২০২৫", desc: "সবচেয়ে বড় ও সবচেয়ে উদ্ভাবনী দুর্গাপূজাগুলির একটি আয়োজন", impact: "লক্ষ লক্ষ দর্শক, জাতীয় স্বীকৃতি" },
        { title: "ডিজিটাল অভিযান ২০২৫", desc: "সোশ্যাল মিডিয়ায় দুর্গাপূজা ডিজিটাল অভিযান", impact: "৩০ লক্ষ+ ভিউ, ভাইরাল পৌঁছানো" }
      ],

      scaleTitle: "উচ্চাকাঙ্ক্ষার মাত্রা",
      scaleStats: [
        { number: "৬ কোটি", label: "শিক্ষিত করার ভোটার", desc: "পশ্চিমবঙ্গের সমগ্র ভোটার" },
        { number: "১০০", label: "দিন", desc: "নিবিড় অভিযানের সময়কাল" },
        { number: "২৯৪", label: "নির্বাচনী এলাকা", desc: "প্রতিটি বিধানসভা এলাকা কভার" },
        { number: "৩", label: "ভাষা", desc: "বাংলা, হিন্দি, ইংরেজি" }
      ],

      principlesTitle: "আমাদের নীতি",
      principles: [
        { icon: "🙏", title: "ধর্মকেন্দ্রিক", desc: "সব কাজ রাজনৈতিক স্বার্থ নয়, ন্যায়পরায়ণতা দ্বারা পরিচালিত" },
        { icon: "⚖️", title: "নিরপেক্ষ", desc: "আমরা কোনো দল, কোনো প্রার্থীর পক্ষ নিই না - শুধু সচেতন ভোটার" },
        { icon: "📖", title: "শিক্ষিত করুন, আদেশ নয়", desc: "আমরা তথ্য দিই - সিদ্ধান্ত সবসময় আপনার" },
        { icon: "✅", title: "সত্য-ভিত্তিক", desc: "শুধুমাত্র যাচাইকৃত, তথ্যগত, সরকারি উৎস থেকে ডেটা" },
        { icon: "🤝", title: "অন্তর্ভুক্তিমূলক", desc: "শহর ও গ্রাম, তরুণ ও বৃদ্ধ, সব সম্প্রদায়ের কাছে পৌঁছানো" },
        { icon: "👁️", title: "স্বচ্ছ", desc: "আমাদের পদ্ধতি, তহবিল ও কার্যক্রম সম্পর্কে খোলামেলা" }
      ],

      ctaTitle: "ইতিহাস তৈরিতে আমাদের সাথে যোগ দিন",
      ctaDesc: "এটি শুধু একটি ভোটার শিক্ষা অভিযান নয়। এটি প্রমাণ যে AI গণতন্ত্রকেই রূপান্তরিত করতে পারে।"
    }
  };

  const t = content[lang];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">🤖</span>
            <span className="text-orange-300 font-medium">{t.heroTitle}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.heroSubtitle}</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">{t.heroDesc}</p>
        </div>
      </section>

      {/* The Initiative */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t.initiativeTitle}</h2>
              <p className="text-orange-500 font-semibold text-lg mb-6">{t.initiativeSubtitle}</p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">{t.initiativeDesc}</p>
              <ul className="space-y-4">
                {t.initiativePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white">
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/images/logo.png"
                      alt="DPGP Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-center text-2xl font-bold text-orange-400 mb-2">দল নয়, মন্ত্রী বাছুন</p>
                <p className="text-center text-blue-200">Not Party, Choose Ministers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now - AI Moment */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t.whyNowTitle}</h2>
          <p className="text-orange-100 text-lg leading-relaxed">{t.whyNowDesc}</p>
        </div>
      </section>

      {/* OmniDEL Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="text-blue-900 font-semibold">{t.omnidelTitle}</span>
            </div>
            <p className="text-orange-500 font-medium mb-4">{t.omnidelSubtitle}</p>
            <p className="text-gray-600 max-w-3xl mx-auto">{t.omnidelDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.omnidelFeatures.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-bold text-blue-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KarmYog Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.karmyogTitle}</h2>
            <p className="text-orange-400 font-medium text-lg mb-6">{t.karmyogSubtitle}</p>
            <p className="text-blue-200 max-w-3xl mx-auto text-lg">{t.karmyogDesc}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
            <p className="text-xl text-center text-orange-300 font-medium italic">{t.karmyogMission}</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">{t.founderTitle}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Founder */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-900 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                <span className="text-white text-4xl font-bold">SJS</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">{t.founderName}</h3>
              <p className="text-orange-500 text-center mb-6 font-medium">{t.founderRole}</p>
              <ul className="space-y-3 mb-8">
                {t.founderBio.map((bio, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">•</span>
                    <span className="text-gray-700">{bio}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-900 rounded-2xl p-6">
                <p className="text-blue-100 italic text-center">{t.founderQuote}</p>
              </div>
            </div>

            {/* Co-founder */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                <span className="text-white text-4xl font-bold">RB</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">{t.cofounderName}</h3>
              <p className="text-orange-500 text-center mb-6 font-medium">{t.cofounderRole}</p>
              <p className="text-gray-700 text-center">{t.cofounderBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t.scaleTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.scaleStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-300 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t.trackTitle}</h2>
            <p className="text-gray-600 text-lg">{t.trackSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.tracks.map((track, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-blue-900 text-xl mb-2">{track.title}</h3>
                <p className="text-gray-600 mb-4">{track.desc}</p>
                <div className="flex items-center gap-2 text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">{track.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">{t.principlesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.principles.map((principle, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{principle.icon}</span>
                  <h3 className="font-bold text-blue-900 text-lg">{principle.title}</h3>
                </div>
                <p className="text-gray-600">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-orange-100 text-lg mb-8">{t.ctaDesc}</p>
          <a
            href={`/${lang}/join`}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            {lang === 'bn' ? 'আন্দোলনে যোগ দিন' : lang === 'hi' ? 'आंदोलन में शामिल हों' : 'Join the Movement'}
          </a>
        </div>
      </section>
    </div>
  );
}
