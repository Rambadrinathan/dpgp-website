export interface MinistryDetail {
  id: string;
  icon: string;
  category: 'top10' | 'other';
  name: {
    en: string;
    hi: string;
    bn: string;
  };
  shortDesc: {
    en: string;
    hi: string;
    bn: string;
  };
  budget: string;
  employees: string;
  keyStats: {
    en: string[];
    hi: string[];
    bn: string[];
  };
  impact: {
    en: string[];
    hi: string[];
    bn: string[];
  };
  schemes: {
    name: string;
    desc: {
      en: string;
      hi: string;
      bn: string;
    };
  }[];
  questions: {
    en: string[];
    hi: string[];
    bn: string[];
  };
}

export const ministries: MinistryDetail[] = [
  {
    id: 'health',
    icon: '🏥',
    category: 'top10',
    name: {
      en: 'Health & Family Welfare',
      hi: 'स्वास्थ्य एवं परिवार कल्याण',
      bn: 'স্বাস্থ্য ও পরিবার কল্যাণ'
    },
    shortDesc: {
      en: 'Controls all government hospitals, doctors, medicines, ambulances, and health programs in West Bengal',
      hi: 'पश्चिम बंगाल के सभी सरकारी अस्पतालों, डॉक्टरों, दवाइयों, एम्बुलेंस और स्वास्थ्य कार्यक्रमों को नियंत्रित करता है',
      bn: 'পশ্চিমবঙ্গের সমস্ত সরকারি হাসপাতাল, ডাক্তার, ওষুধ, অ্যাম্বুলেন্স এবং স্বাস্থ্য কর্মসূচি নিয়ন্ত্রণ করে'
    },
    budget: '₹15,000+ Crore/year',
    employees: '50,000+',
    keyStats: {
      en: [
        '1,200+ government hospitals and health centers',
        '18 Medical Colleges including SSKM, NRS, RG Kar',
        '108 Ambulance service handles 15,000+ calls/day',
        '2 Crore+ patients visit government hospitals yearly',
        '10,000+ Primary Health Centers across Bengal'
      ],
      hi: [
        '1,200+ सरकारी अस्पताल और स्वास्थ्य केंद्र',
        'SSKM, NRS, RG Kar सहित 18 मेडिकल कॉलेज',
        '108 एम्बुलेंस सेवा 15,000+ कॉल/दिन संभालती है',
        '2 करोड़+ मरीज सालाना सरकारी अस्पतालों में आते हैं',
        'पूरे बंगाल में 10,000+ प्राथमिक स्वास्थ्य केंद्र'
      ],
      bn: [
        '১,২০০+ সরকারি হাসপাতাল ও স্বাস্থ্যকেন্দ্র',
        'SSKM, NRS, RG Kar সহ ১৮টি মেডিকেল কলেজ',
        '১০৮ অ্যাম্বুলেন্স সেবা প্রতিদিন ১৫,০০০+ কল সামলায়',
        '২ কোটি+ রোগী বছরে সরকারি হাসপাতালে আসেন',
        'সারা বাংলায় ১০,০০০+ প্রাথমিক স্বাস্থ্যকেন্দ্র'
      ]
    },
    impact: {
      en: [
        'When your child has fever at night - will the nearby PHC have a doctor?',
        'When you need emergency surgery - is the district hospital equipped?',
        'When your elderly parent needs dialysis - is it available free?',
        'Pregnant women delivery - safe motherhood depends on this ministry',
        'Medicine availability at government hospitals - this minister decides'
      ],
      hi: [
        'जब रात को आपके बच्चे को बुखार हो - क्या नजदीकी PHC में डॉक्टर होगा?',
        'जब आपको इमरजेंसी सर्जरी चाहिए - क्या जिला अस्पताल सुसज्जित है?',
        'जब आपके बुजुर्ग माता-पिता को डायलिसिस चाहिए - क्या यह मुफ्त उपलब्ध है?',
        'गर्भवती महिलाओं की डिलीवरी - सुरक्षित मातृत्व इस मंत्रालय पर निर्भर',
        'सरकारी अस्पतालों में दवा उपलब्धता - यह मंत्री तय करता है'
      ],
      bn: [
        'রাতে আপনার বাচ্চার জ্বর হলে - কাছের PHC-তে ডাক্তার থাকবে?',
        'জরুরি সার্জারি দরকার হলে - জেলা হাসপাতাল সুসজ্জিত?',
        'বয়স্ক বাবা-মায়ের ডায়ালিসিস দরকার - বিনামূল্যে পাওয়া যাবে?',
        'গর্ভবতী মায়েদের প্রসব - নিরাপদ মাতৃত্ব এই মন্ত্রণালয়ের উপর নির্ভর',
        'সরকারি হাসপাতালে ওষুধ পাওয়া - এই মন্ত্রী ঠিক করেন'
      ]
    },
    schemes: [
      {
        name: 'Swasthya Sathi',
        desc: {
          en: 'Free health coverage up to ₹5 lakh for every family - 10 crore people covered',
          hi: 'हर परिवार के लिए ₹5 लाख तक मुफ्त स्वास्थ्य कवरेज - 10 करोड़ लोग कवर',
          bn: 'প্রতিটি পরিবারের জন্য ₹৫ লক্ষ পর্যন্ত বিনামূল্যে স্বাস্থ্য কভারেজ - ১০ কোটি মানুষ কভার্ড'
        }
      },
      {
        name: 'Sishu Sathi',
        desc: {
          en: 'Free treatment for children with heart disease - 50,000+ children treated',
          hi: 'हृदय रोग वाले बच्चों का मुफ्त इलाज - 50,000+ बच्चों का इलाज',
          bn: 'হৃদরোগে আক্রান্ত শিশুদের বিনামূল্যে চিকিৎসা - ৫০,০০০+ শিশুর চিকিৎসা'
        }
      }
    ],
    questions: {
      en: [
        'How many doctors are posted in my block\'s PHC? What is the vacancy?',
        'Why do I have to travel 50km for an MRI scan?',
        'When will specialist doctors be available at sub-divisional hospitals?',
        'Why are essential medicines often out of stock?',
        'What is your plan to reduce waiting time at government hospitals?'
      ],
      hi: [
        'मेरे ब्लॉक के PHC में कितने डॉक्टर तैनात हैं? रिक्तियां कितनी हैं?',
        'MRI स्कैन के लिए मुझे 50 किमी क्यों जाना पड़ता है?',
        'उप-मंडल अस्पतालों में विशेषज्ञ डॉक्टर कब उपलब्ध होंगे?',
        'जरूरी दवाइयां अक्सर स्टॉक में क्यों नहीं होतीं?',
        'सरकारी अस्पतालों में प्रतीक्षा समय कम करने की आपकी योजना क्या है?'
      ],
      bn: [
        'আমার ব্লকের PHC-তে কতজন ডাক্তার আছেন? শূন্যপদ কত?',
        'MRI স্ক্যানের জন্য ৫০ কিমি যেতে হয় কেন?',
        'মহকুমা হাসপাতালে বিশেষজ্ঞ ডাক্তার কবে পাওয়া যাবে?',
        'জরুরি ওষুধ প্রায়ই স্টকে থাকে না কেন?',
        'সরকারি হাসপাতালে অপেক্ষার সময় কমানোর পরিকল্পনা কী?'
      ]
    }
  },
  {
    id: 'education',
    icon: '📚',
    category: 'top10',
    name: {
      en: 'School Education',
      hi: 'विद्यालय शिक्षा',
      bn: 'বিদ্যালয় শিক্ষা'
    },
    shortDesc: {
      en: 'Manages 1 lakh+ schools, 5 lakh+ teachers, Madhyamik & Higher Secondary exams, midday meals for 1 crore+ students',
      hi: '1 लाख+ स्कूल, 5 लाख+ शिक्षक, माध्यमिक और उच्च माध्यमिक परीक्षाएं, 1 करोड़+ छात्रों के लिए मिड-डे मील का प्रबंधन',
      bn: '১ লক্ষ+ স্কুল, ৫ লক্ষ+ শিক্ষক, মাধ্যমিক ও উচ্চমাধ্যমিক পরীক্ষা, ১ কোটি+ ছাত্রছাত্রীদের মিড-ডে মিল পরিচালনা'
    },
    budget: '₹25,000+ Crore/year',
    employees: '5,00,000+',
    keyStats: {
      en: [
        '1,00,000+ government and aided schools',
        '1.5 Crore+ students enrolled in schools',
        '5 Lakh+ teachers (40,000+ posts vacant)',
        'Madhyamik: 12 lakh+ students appear yearly',
        'Higher Secondary: 9 lakh+ students appear yearly'
      ],
      hi: [
        '1,00,000+ सरकारी और सहायता प्राप्त स्कूल',
        '1.5 करोड़+ छात्र स्कूलों में नामांकित',
        '5 लाख+ शिक्षक (40,000+ पद रिक्त)',
        'माध्यमिक: 12 लाख+ छात्र सालाना परीक्षा देते हैं',
        'उच्च माध्यमिक: 9 लाख+ छात्र सालाना परीक्षा देते हैं'
      ],
      bn: [
        '১,০০,০০০+ সরকারি ও সাহায্যপ্রাপ্ত স্কুল',
        '১.৫ কোটি+ ছাত্রছাত্রী স্কুলে নথিভুক্ত',
        '৫ লক্ষ+ শিক্ষক (৪০,০০০+ পদ শূন্য)',
        'মাধ্যমিক: ১২ লক্ষ+ ছাত্রছাত্রী বছরে পরীক্ষা দেয়',
        'উচ্চমাধ্যমিক: ৯ লক্ষ+ ছাত্রছাত্রী বছরে পরীক্ষা দেয়'
      ]
    },
    impact: {
      en: [
        'Your child\'s school has 1 teacher for 5 subjects - who fills these vacancies?',
        'Broken benches, no toilet, leaking roof - who maintains school buildings?',
        'Quality of Madhyamik/HS results - why Bengal students struggle in national exams?',
        'Midday meal quality - is your child getting nutritious food?',
        'English and computer education - are rural schools equipped?'
      ],
      hi: [
        'आपके बच्चे के स्कूल में 5 विषयों के लिए 1 शिक्षक - ये रिक्तियां कौन भरता है?',
        'टूटी बेंच, शौचालय नहीं, टपकती छत - स्कूल भवनों का रखरखाव कौन करता है?',
        'माध्यमिक/HS परिणामों की गुणवत्ता - बंगाल के छात्र राष्ट्रीय परीक्षाओं में क्यों पिछड़ते हैं?',
        'मिड-डे मील की गुणवत्ता - क्या आपके बच्चे को पौष्टिक भोजन मिल रहा है?',
        'अंग्रेजी और कंप्यूटर शिक्षा - क्या ग्रामीण स्कूल सुसज्जित हैं?'
      ],
      bn: [
        'আপনার সন্তানের স্কুলে ৫টি বিষয়ে ১ জন শিক্ষক - এই শূন্যপদ কে পূরণ করবে?',
        'ভাঙা বেঞ্চ, টয়লেট নেই, চুঁইয়ে পড়া ছাদ - স্কুল বিল্ডিং কে রক্ষণাবেক্ষণ করে?',
        'মাধ্যমিক/HS ফলাফলের মান - বাংলার ছাত্ররা জাতীয় পরীক্ষায় পিছিয়ে কেন?',
        'মিড-ডে মিলের মান - আপনার সন্তান পুষ্টিকর খাবার পাচ্ছে?',
        'ইংরেজি ও কম্পিউটার শিক্ষা - গ্রামের স্কুলগুলো সুসজ্জিত?'
      ]
    },
    schemes: [
      {
        name: 'Kanyashree',
        desc: {
          en: 'Annual scholarship for girls - ₹750/year (Class 8-12) + ₹25,000 one-time at 18 - 60 lakh+ beneficiaries',
          hi: 'लड़कियों के लिए वार्षिक छात्रवृत्ति - ₹750/वर्ष (कक्षा 8-12) + 18 पर ₹25,000 एकमुश्त - 60 लाख+ लाभार्थी',
          bn: 'মেয়েদের বার্ষিক বৃত্তি - ₹৭৫০/বছর (অষ্টম-দ্বাদশ) + ১৮ বছরে ₹২৫,০০০ একবার - ৬০ লক্ষ+ সুবিধাভোগী'
        }
      },
      {
        name: 'Sabuj Sathi',
        desc: {
          en: 'Free bicycles for students Class 9-12 - 1 Crore+ bicycles distributed',
          hi: 'कक्षा 9-12 के छात्रों के लिए मुफ्त साइकिल - 1 करोड़+ साइकिल वितरित',
          bn: 'নবম-দ্বাদশ শ্রেণির ছাত্রছাত্রীদের বিনামূল্যে সাইকেল - ১ কোটি+ সাইকেল বিতরণ'
        }
      }
    ],
    questions: {
      en: [
        'When will all teacher vacancies in my area be filled?',
        'Why don\'t government schools have English medium sections?',
        'What is being done about the SSC/TET recruitment scam?',
        'Why is there no proper science lab in my child\'s school?',
        'When will vocational training be introduced in all schools?'
      ],
      hi: [
        'मेरे क्षेत्र में सभी शिक्षक रिक्तियां कब भरी जाएंगी?',
        'सरकारी स्कूलों में अंग्रेजी माध्यम की कक्षाएं क्यों नहीं हैं?',
        'SSC/TET भर्ती घोटाले के बारे में क्या किया जा रहा है?',
        'मेरे बच्चे के स्कूल में उचित विज्ञान प्रयोगशाला क्यों नहीं है?',
        'सभी स्कूलों में व्यावसायिक प्रशिक्षण कब शुरू होगा?'
      ],
      bn: [
        'আমার এলাকায় সব শিক্ষক শূন্যপদ কবে পূরণ হবে?',
        'সরকারি স্কুলে ইংরেজি মাধ্যম বিভাগ নেই কেন?',
        'SSC/TET নিয়োগ কেলেঙ্কারি নিয়ে কী করা হচ্ছে?',
        'আমার সন্তানের স্কুলে সঠিক বিজ্ঞান ল্যাব নেই কেন?',
        'সব স্কুলে বৃত্তিমূলক প্রশিক্ষণ কবে চালু হবে?'
      ]
    }
  },
  {
    id: 'home',
    icon: '🛡️',
    category: 'top10',
    name: {
      en: 'Home & Hill Affairs',
      hi: 'गृह एवं पर्वतीय मामले',
      bn: 'স্বরাষ্ট্র ও পার্বত্য বিষয়ক'
    },
    shortDesc: {
      en: 'Controls West Bengal Police, law and order, women\'s safety, crime prevention, and Darjeeling hill administration',
      hi: 'पश्चिम बंगाल पुलिस, कानून व्यवस्था, महिला सुरक्षा, अपराध रोकथाम और दार्जिलिंग पहाड़ी प्रशासन को नियंत्रित करता है',
      bn: 'পশ্চিমবঙ্গ পুলিশ, আইনশৃঙ্খলা, নারী নিরাপত্তা, অপরাধ প্রতিরোধ এবং দার্জিলিং পার্বত্য প্রশাসন নিয়ন্ত্রণ করে'
    },
    budget: '₹12,000+ Crore/year',
    employees: '1,00,000+',
    keyStats: {
      en: [
        '1,00,000+ police personnel in West Bengal',
        '700+ police stations across the state',
        'Kolkata Police: 35,000+ personnel, separate commissionerate',
        '100+ women police stations (Mahila Thana)',
        'CCTV coverage: 10,000+ cameras in Kolkata alone'
      ],
      hi: [
        'पश्चिम बंगाल में 1,00,000+ पुलिस कर्मी',
        'राज्य भर में 700+ पुलिस स्टेशन',
        'कोलकाता पुलिस: 35,000+ कर्मी, अलग कमिश्नरेट',
        '100+ महिला पुलिस स्टेशन (महिला थाना)',
        'CCTV कवरेज: अकेले कोलकाता में 10,000+ कैमरे'
      ],
      bn: [
        'পশ্চিমবঙ্গে ১,০০,০০০+ পুলিশ কর্মী',
        'রাজ্যজুড়ে ৭০০+ থানা',
        'কলকাতা পুলিশ: ৩৫,০০০+ কর্মী, পৃথক কমিশনারেট',
        '১০০+ মহিলা থানা',
        'CCTV কভারেজ: শুধু কলকাতায় ১০,০০০+ ক্যামেরা'
      ]
    },
    impact: {
      en: [
        'When you call 100 at night - how fast does police respond?',
        'Your daughter travels alone - is public transport safe?',
        'Filing an FIR - will police register it or make excuses?',
        'Political violence during elections - who controls it?',
        'Cyber crime, online fraud - is there a mechanism to help you?'
      ],
      hi: [
        'जब आप रात को 100 कॉल करते हैं - पुलिस कितनी जल्दी आती है?',
        'आपकी बेटी अकेले यात्रा करती है - क्या सार्वजनिक परिवहन सुरक्षित है?',
        'FIR दर्ज करना - क्या पुलिस दर्ज करेगी या बहाने बनाएगी?',
        'चुनाव के दौरान राजनीतिक हिंसा - इसे कौन नियंत्रित करता है?',
        'साइबर अपराध, ऑनलाइन धोखाधड़ी - आपकी मदद का कोई तंत्र है?'
      ],
      bn: [
        'রাতে ১০০ নম্বরে ফোন করলে - পুলিশ কত দ্রুত আসে?',
        'আপনার মেয়ে একা যাতায়াত করে - গণপরিবহন নিরাপদ?',
        'FIR দায়ের করতে গেলে - পুলিশ নেবে না অজুহাত দেবে?',
        'নির্বাচনের সময় রাজনৈতিক হিংসা - কে নিয়ন্ত্রণ করে?',
        'সাইবার ক্রাইম, অনলাইন প্রতারণা - সাহায্যের ব্যবস্থা আছে?'
      ]
    },
    schemes: [
      {
        name: 'Duare Sarkar',
        desc: {
          en: 'Doorstep delivery of 11 government services including police verification',
          hi: 'पुलिस वेरिफिकेशन सहित 11 सरकारी सेवाओं की घर पर डिलीवरी',
          bn: 'পুলিশ ভেরিফিকেশন সহ ১১টি সরকারি পরিষেবা বাড়িতে'
        }
      },
      {
        name: 'Safe Drive Save Life',
        desc: {
          en: 'Road safety campaign - reduced road accident deaths by 25%',
          hi: 'सड़क सुरक्षा अभियान - सड़क दुर्घटना मृत्यु में 25% कमी',
          bn: 'সড়ক নিরাপত্তা অভিযান - সড়ক দুর্ঘটনায় মৃত্যু ২৫% কমেছে'
        }
      }
    ],
    questions: {
      en: [
        'Why does it take 45 minutes for police to arrive when I call 100?',
        'What is being done about rising crimes against women?',
        'Why are many police posts lying vacant for years?',
        'What action against politically-connected criminals?',
        'When will all police stations have proper cyber crime cells?'
      ],
      hi: [
        '100 पर कॉल करने पर पुलिस को आने में 45 मिनट क्यों लगते हैं?',
        'महिलाओं के खिलाफ बढ़ते अपराधों के बारे में क्या किया जा रहा है?',
        'कई पुलिस पद सालों से खाली क्यों हैं?',
        'राजनीतिक रूप से जुड़े अपराधियों के खिलाफ क्या कार्रवाई?',
        'सभी थानों में साइबर क्राइम सेल कब होगी?'
      ],
      bn: [
        '১০০ নম্বরে কল করলে পুলিশ আসতে ৪৫ মিনিট লাগে কেন?',
        'নারীদের বিরুদ্ধে বাড়তে থাকা অপরাধ নিয়ে কী করা হচ্ছে?',
        'অনেক পুলিশ পদ বছরের পর বছর খালি কেন?',
        'রাজনৈতিকভাবে যুক্ত অপরাধীদের বিরুদ্ধে কী ব্যবস্থা?',
        'সব থানায় সাইবার ক্রাইম সেল কবে হবে?'
      ]
    }
  },
  {
    id: 'pwd',
    icon: '🛣️',
    category: 'top10',
    name: {
      en: 'Public Works Department',
      hi: 'लोक निर्माण विभाग',
      bn: 'গণপূর্ত বিভাগ'
    },
    shortDesc: {
      en: 'Builds and maintains roads, bridges, government buildings - every pothole and broken bridge is their responsibility',
      hi: 'सड़कों, पुलों, सरकारी भवनों का निर्माण और रखरखाव - हर गड्ढा और टूटा पुल उनकी जिम्मेदारी',
      bn: 'রাস্তা, সেতু, সরকারি ভবন নির্মাণ ও রক্ষণাবেক্ষণ - প্রতিটি গর্ত ও ভাঙা সেতু তাদের দায়িত্ব'
    },
    budget: '₹8,000+ Crore/year',
    employees: '25,000+',
    keyStats: {
      en: [
        '35,000+ km of state highways and major district roads',
        '5,000+ bridges and culverts under state management',
        '500+ government buildings maintained yearly',
        '₹2,000+ Crore spent on road repair annually',
        'Monsoon damage: 1,000+ km roads damaged each year'
      ],
      hi: [
        '35,000+ किमी राज्य राजमार्ग और प्रमुख जिला सड़कें',
        'राज्य प्रबंधन के तहत 5,000+ पुल और पुलिया',
        '500+ सरकारी भवनों का सालाना रखरखाव',
        'सड़क मरम्मत पर सालाना ₹2,000+ करोड़ खर्च',
        'मानसून क्षति: हर साल 1,000+ किमी सड़कें क्षतिग्रस्त'
      ],
      bn: [
        '৩৫,০০০+ কিমি রাজ্য সড়ক ও প্রধান জেলা সড়ক',
        'রাজ্য পরিচালনায় ৫,০০০+ সেতু ও কালভার্ট',
        '৫০০+ সরকারি ভবন বছরে রক্ষণাবেক্ষণ',
        'রাস্তা মেরামতে বছরে ₹২,০০০+ কোটি খরচ',
        'বর্ষার ক্ষতি: প্রতি বছর ১,০০০+ কিমি রাস্তা ক্ষতিগ্রস্ত'
      ]
    },
    impact: {
      en: [
        'The road to your village - is it motorable or full of craters?',
        'Bridge collapse - who is responsible for structural safety?',
        'Monsoon flooding due to blocked drains - PWD maintains drainage',
        'Your child\'s school building falling apart - who repairs it?',
        'Travel time doubled due to bad roads - impacts your livelihood'
      ],
      hi: [
        'आपके गांव की सड़क - क्या गाड़ी चल सकती है या गड्ढों से भरी है?',
        'पुल गिरना - संरचनात्मक सुरक्षा की जिम्मेदारी किसकी?',
        'नाली बंद होने से बाढ़ - PWD नालियों का रखरखाव करता है',
        'आपके बच्चे की स्कूल बिल्डिंग गिर रही है - मरम्मत कौन करेगा?',
        'खराब सड़कों से यात्रा समय दोगुना - आपकी आजीविका प्रभावित'
      ],
      bn: [
        'আপনার গ্রামের রাস্তা - গাড়ি চলে না গর্তে ভরা?',
        'সেতু ধসে পড়া - কাঠামোগত নিরাপত্তার দায় কার?',
        'নর্দমা বন্ধ হয়ে বন্যা - PWD নর্দমা রক্ষণাবেক্ষণ করে',
        'আপনার সন্তানের স্কুল বিল্ডিং ভেঙে পড়ছে - মেরামত কে করবে?',
        'খারাপ রাস্তায় যাতায়াতে দ্বিগুণ সময় - জীবিকা প্রভাবিত'
      ]
    },
    schemes: [
      {
        name: 'Pathashree',
        desc: {
          en: 'Road improvement scheme - 12,000+ km roads upgraded',
          hi: 'सड़क सुधार योजना - 12,000+ किमी सड़कें उन्नत',
          bn: 'রাস্তা উন্নয়ন প্রকল্প - ১২,০০০+ কিমি রাস্তা উন্নত'
        }
      },
      {
        name: 'Setubandhan',
        desc: {
          en: 'Bridge construction and repair - 500+ new bridges built',
          hi: 'पुल निर्माण और मरम्मत - 500+ नए पुल बने',
          bn: 'সেতু নির্মাণ ও মেরামত - ৫০০+ নতুন সেতু নির্মিত'
        }
      }
    ],
    questions: {
      en: [
        'The main road to my village has been broken for 3 years - when will it be repaired?',
        'Why do newly built roads develop potholes within 6 months?',
        'The bridge near my house is 50 years old - has it been inspected for safety?',
        'Why are road projects delayed by 2-3 years beyond deadline?',
        'Contractor quality - who monitors that proper materials are used?'
      ],
      hi: [
        'मेरे गांव की मुख्य सड़क 3 साल से टूटी है - मरम्मत कब होगी?',
        'नई बनी सड़कों में 6 महीने में गड्ढे क्यों हो जाते हैं?',
        'मेरे घर के पास का पुल 50 साल पुराना है - सुरक्षा जांच हुई?',
        'सड़क परियोजनाएं समय सीमा से 2-3 साल देरी क्यों होती हैं?',
        'ठेकेदार गुणवत्ता - सही सामग्री की निगरानी कौन करता है?'
      ],
      bn: [
        'আমার গ্রামের প্রধান রাস্তা ৩ বছর ধরে ভাঙা - মেরামত কবে হবে?',
        'নতুন বানানো রাস্তায় ৬ মাসে গর্ত হয়ে যায় কেন?',
        'আমার বাড়ির কাছের সেতু ৫০ বছর পুরনো - নিরাপত্তা পরীক্ষা হয়েছে?',
        'রাস্তা প্রকল্প সময়সীমার চেয়ে ২-৩ বছর দেরি হয় কেন?',
        'ঠিকাদারের মান - সঠিক উপকরণ ব্যবহার হচ্ছে কে দেখে?'
      ]
    }
  },
  {
    id: 'panchayat',
    icon: '🏘️',
    category: 'top10',
    name: {
      en: 'Panchayat & Rural Development',
      hi: 'पंचायत एवं ग्रामीण विकास',
      bn: 'পঞ্চায়েত ও গ্রামোন্নয়ন'
    },
    shortDesc: {
      en: 'Runs MGNREGA (100 days work), rural housing, village roads, drinking water - lifeline of 7 crore rural Bengalis',
      hi: 'MGNREGA (100 दिन का काम), ग्रामीण आवास, गांव की सड़कें, पीने का पानी - 7 करोड़ ग्रामीण बंगालियों की जीवन रेखा',
      bn: 'MGNREGA (১০০ দিনের কাজ), গ্রামীণ আবাসন, গ্রামের রাস্তা, পানীয় জল - ৭ কোটি গ্রামীণ বাঙালির জীবনরেখা'
    },
    budget: '₹20,000+ Crore/year',
    employees: '50,000+',
    keyStats: {
      en: [
        '3,354 Gram Panchayats across West Bengal',
        '341 Panchayat Samitis (Block level)',
        '23 Zilla Parishads (District level)',
        '70 Lakh+ job cards under MGNREGA',
        '58,000+ villages in West Bengal'
      ],
      hi: [
        'पश्चिम बंगाल में 3,354 ग्राम पंचायतें',
        '341 पंचायत समितियां (ब्लॉक स्तर)',
        '23 जिला परिषद (जिला स्तर)',
        'MGNREGA के तहत 70 लाख+ जॉब कार्ड',
        'पश्चिम बंगाल में 58,000+ गांव'
      ],
      bn: [
        'পশ্চিমবঙ্গে ৩,৩৫৪ গ্রাম পঞ্চায়েত',
        '৩৪১ পঞ্চায়েত সমিতি (ব্লক স্তর)',
        '২৩ জেলা পরিষদ (জেলা স্তর)',
        'MGNREGA-তে ৭০ লক্ষ+ জব কার্ড',
        'পশ্চিমবঙ্গে ৫৮,০০০+ গ্রাম'
      ]
    },
    impact: {
      en: [
        'MGNREGA wages - are you getting ₹223/day for 100 days?',
        'Rural housing (Bangla Awas Yojana) - did you get your house?',
        'Village road to connect to main road - who builds it?',
        'Drinking water - tube well, piped water in your village?',
        'Gram Panchayat funds - is it being spent transparently?'
      ],
      hi: [
        'MGNREGA मजदूरी - क्या आपको 100 दिन के लिए ₹223/दिन मिल रहे हैं?',
        'ग्रामीण आवास (बांग्ला आवास योजना) - क्या आपको घर मिला?',
        'मुख्य सड़क से जोड़ने वाली गांव की सड़क - कौन बनाता है?',
        'पीने का पानी - आपके गांव में ट्यूबवेल, पाइप से पानी?',
        'ग्राम पंचायत फंड - क्या पारदर्शी तरीके से खर्च हो रहा है?'
      ],
      bn: [
        'MGNREGA মজুরি - আপনি ১০০ দিনে ₹২২৩/দিন পাচ্ছেন?',
        'গ্রামীণ আবাসন (বাংলা আবাস যোজনা) - আপনি বাড়ি পেয়েছেন?',
        'প্রধান রাস্তার সাথে যুক্ত গ্রামের রাস্তা - কে বানায়?',
        'পানীয় জল - আপনার গ্রামে টিউবওয়েল, পাইপের জল?',
        'গ্রাম পঞ্চায়েত তহবিল - স্বচ্ছভাবে খরচ হচ্ছে?'
      ]
    },
    schemes: [
      {
        name: 'MGNREGA',
        desc: {
          en: '100 days guaranteed work at ₹223/day - West Bengal is top performer with 25 Crore+ person-days',
          hi: '₹223/दिन पर 100 दिन की गारंटीड नौकरी - 25 करोड़+ श्रम दिवसों के साथ पश्चिम बंगाल शीर्ष',
          bn: '₹২২৩/দিন হারে ১০০ দিনের গ্যারান্টিড কাজ - ২৫ কোটি+ শ্রম দিবস নিয়ে পশ্চিমবঙ্গ শীর্ষে'
        }
      },
      {
        name: 'Bangla Awas Yojana',
        desc: {
          en: 'Rural housing - ₹1.2 lakh per house - 30 lakh+ houses built',
          hi: 'ग्रामीण आवास - ₹1.2 लाख प्रति घर - 30 लाख+ घर बने',
          bn: 'গ্রামীণ আবাসন - ₹১.২ লক্ষ প্রতি বাড়ি - ৩০ লক্ষ+ বাড়ি নির্মিত'
        }
      }
    ],
    questions: {
      en: [
        'Why is MGNREGA work not available when I need it?',
        'My Bangla Awas application has been pending for 2 years - why?',
        'Panchayat Pradhan takes commission on every scheme - what action?',
        'Why is the village road fund spent on main roads instead?',
        'Drinking water pipeline was promised 5 years ago - when?'
      ],
      hi: [
        'जब मुझे जरूरत होती है तो MGNREGA का काम क्यों नहीं मिलता?',
        'मेरा बांग्ला आवास आवेदन 2 साल से लंबित है - क्यों?',
        'पंचायत प्रधान हर योजना पर कमीशन लेता है - क्या कार्रवाई?',
        'गांव की सड़क का फंड मुख्य सड़कों पर क्यों खर्च होता है?',
        'पीने के पानी की पाइपलाइन 5 साल पहले वादा था - कब?'
      ],
      bn: [
        'যখন দরকার তখন MGNREGA কাজ পাওয়া যায় না কেন?',
        'আমার বাংলা আবাস আবেদন ২ বছর ধরে আটকে আছে - কেন?',
        'পঞ্চায়েত প্রধান প্রতিটি প্রকল্পে কমিশন নেন - কী ব্যবস্থা?',
        'গ্রামের রাস্তার তহবিল প্রধান রাস্তায় খরচ হয় কেন?',
        'পানীয় জলের পাইপলাইন ৫ বছর আগে প্রতিশ্রুতি ছিল - কবে?'
      ]
    }
  },
  {
    id: 'urban',
    icon: '🏙️',
    category: 'top10',
    name: {
      en: 'Urban Development & Municipal Affairs',
      hi: 'शहरी विकास एवं नगरपालिका मामले',
      bn: 'পৌর উন্নয়ন ও পৌরসভা বিষয়ক'
    },
    shortDesc: {
      en: 'Controls Kolkata Municipal Corporation, 127 municipalities - water supply, garbage, drainage, building permissions',
      hi: 'कोलकाता नगर निगम, 127 नगरपालिकाओं को नियंत्रित करता है - पानी की आपूर्ति, कचरा, नाली, भवन अनुमति',
      bn: 'কলকাতা পৌরনিগম, ১২৭টি পৌরসভা নিয়ন্ত্রণ করে - জল সরবরাহ, আবর্জনা, নিকাশী, বিল্ডিং অনুমতি'
    },
    budget: '₹10,000+ Crore/year',
    employees: '80,000+',
    keyStats: {
      en: [
        'Kolkata Municipal Corporation: 1.5 Crore population',
        '127 Municipalities + 7 Municipal Corporations',
        '3.5 Crore urban population in West Bengal (38% of state)',
        '1,000+ tonnes garbage collected daily in Kolkata alone',
        '50+ lakh water connections across urban Bengal'
      ],
      hi: [
        'कोलकाता नगर निगम: 1.5 करोड़ जनसंख्या',
        '127 नगरपालिकाएं + 7 नगर निगम',
        'पश्चिम बंगाल में 3.5 करोड़ शहरी जनसंख्या (राज्य का 38%)',
        'अकेले कोलकाता में प्रतिदिन 1,000+ टन कचरा संग्रह',
        'शहरी बंगाल में 50+ लाख पानी कनेक्शन'
      ],
      bn: [
        'কলকাতা পৌরনিগম: ১.৫ কোটি জনসংখ্যা',
        '১২৭ পৌরসভা + ৭ পৌরনিগম',
        'পশ্চিমবঙ্গে ৩.৫ কোটি শহুরে জনসংখ্যা (রাজ্যের ৩৮%)',
        'শুধু কলকাতায় প্রতিদিন ১,০০০+ টন আবর্জনা সংগ্রহ',
        'শহুরে বাংলায় ৫০+ লক্ষ জল সংযোগ'
      ]
    },
    impact: {
      en: [
        'Water comes for 2 hours only - why not 24x7?',
        'Garbage piling up on your street corner - who clears it?',
        'Waterlogging after 30 minutes rain - whose drainage system?',
        'Building permission takes 6 months - why so slow?',
        'Footpath occupied by hawkers - who regulates it?'
      ],
      hi: [
        'पानी सिर्फ 2 घंटे आता है - 24x7 क्यों नहीं?',
        'आपकी गली के कोने पर कचरा जमा - कौन साफ करता है?',
        '30 मिनट की बारिश में जलभराव - किसकी नाली व्यवस्था?',
        'बिल्डिंग परमिशन में 6 महीने - इतनी देरी क्यों?',
        'फुटपाथ पर फेरीवालों का कब्जा - नियमन कौन करता है?'
      ],
      bn: [
        'জল আসে মাত্র ২ ঘণ্টা - ২৪x৭ কেন নয়?',
        'আপনার রাস্তার কোণে আবর্জনা জমছে - কে পরিষ্কার করে?',
        '৩০ মিনিট বৃষ্টিতে জলজট - কার নিকাশী ব্যবস্থা?',
        'বিল্ডিং পারমিশনে ৬ মাস - এত দেরি কেন?',
        'ফুটপাতে হকারদের দখল - নিয়ন্ত্রণ কে করে?'
      ]
    },
    schemes: [
      {
        name: 'Jal Swapno',
        desc: {
          en: 'Piped drinking water to every urban household - 50 lakh+ connections',
          hi: 'हर शहरी घर में पाइप से पीने का पानी - 50 लाख+ कनेक्शन',
          bn: 'প্রতিটি শহুরে বাড়িতে পাইপে পানীয় জল - ৫০ লক্ষ+ সংযোগ'
        }
      },
      {
        name: 'Nijashree',
        desc: {
          en: 'Affordable housing for urban poor - ₹1-3 lakh subsidy per house',
          hi: 'शहरी गरीबों के लिए किफायती आवास - ₹1-3 लाख प्रति घर सब्सिडी',
          bn: 'শহুরে দরিদ্রদের জন্য সাশ্রয়ী আবাসন - ₹১-৩ লক্ষ প্রতি বাড়ি ভর্তুকি'
        }
      }
    ],
    questions: {
      en: [
        'Why does my area face water shortage while other areas have 24x7 supply?',
        'Garbage collection is irregular - why are there no fixed timings?',
        'My colony gets waterlogged every monsoon - when will drainage improve?',
        'Property tax increased but services didn\'t - why?',
        'Illegal constructions happening everywhere - who stops them?'
      ],
      hi: [
        'मेरे क्षेत्र में पानी की कमी क्यों जबकि अन्य क्षेत्रों में 24x7 आपूर्ति है?',
        'कचरा संग्रह अनियमित है - निश्चित समय क्यों नहीं?',
        'मेरी कॉलोनी हर मानसून में जलमग्न - नाली कब सुधरेगी?',
        'प्रॉपर्टी टैक्स बढ़ा लेकिन सेवाएं नहीं - क्यों?',
        'हर जगह अवैध निर्माण - कौन रोकता है?'
      ],
      bn: [
        'আমার এলাকায় জলের অভাব কেন যখন অন্য এলাকায় ২৪x৭ সরবরাহ?',
        'আবর্জনা সংগ্রহ অনিয়মিত - নির্দিষ্ট সময় নেই কেন?',
        'আমার কলোনি প্রতি বর্ষায় ডুবে যায় - নিকাশী কবে উন্নত হবে?',
        'প্রপার্টি ট্যাক্স বাড়ল কিন্তু পরিষেবা নয় - কেন?',
        'সর্বত্র অবৈধ নির্মাণ - কে থামায়?'
      ]
    }
  },
  {
    id: 'agriculture',
    icon: '🌾',
    category: 'top10',
    name: {
      en: 'Agriculture',
      hi: 'कृषि',
      bn: 'কৃষি'
    },
    shortDesc: {
      en: 'Supports 70 lakh+ farmers - seeds, fertilizers, crop insurance, MSP, Krishak Bandhu income support',
      hi: '70 लाख+ किसानों का समर्थन - बीज, उर्वरक, फसल बीमा, MSP, कृषक बंधु आय सहायता',
      bn: '৭০ লক্ষ+ কৃষকদের সহায়তা - বীজ, সার, ফসল বিমা, MSP, কৃষক বন্ধু আয় সহায়তা'
    },
    budget: '₹8,000+ Crore/year',
    employees: '15,000+',
    keyStats: {
      en: [
        '70 Lakh+ farmers in West Bengal',
        '52 Lakh hectares cultivated land',
        'Rice production: 1.5 Crore+ tonnes/year (3rd in India)',
        'Potato production: 1 Crore+ tonnes/year (2nd in India)',
        '75 Lakh+ Krishak Bandhu beneficiaries'
      ],
      hi: [
        'पश्चिम बंगाल में 70 लाख+ किसान',
        '52 लाख हेक्टेयर खेती की जमीन',
        'चावल उत्पादन: 1.5 करोड़+ टन/वर्ष (भारत में तीसरा)',
        'आलू उत्पादन: 1 करोड़+ टन/वर्ष (भारत में दूसरा)',
        '75 लाख+ कृषक बंधु लाभार्थी'
      ],
      bn: [
        'পশ্চিমবঙ্গে ৭০ লক্ষ+ কৃষক',
        '৫২ লক্ষ হেক্টর চাষযোগ্য জমি',
        'ধান উৎপাদন: ১.৫ কোটি+ টন/বছর (ভারতে তৃতীয়)',
        'আলু উৎপাদন: ১ কোটি+ টন/বছর (ভারতে দ্বিতীয়)',
        '৭৫ লক্ষ+ কৃষক বন্ধু সুবিধাভোগী'
      ]
    },
    impact: {
      en: [
        'Paddy MSP - are you getting the minimum support price?',
        'Fertilizer shortage during sowing season - who ensures supply?',
        'Crop destroyed by flood/drought - is insurance claim paid?',
        'Cold storage for potato - is it available near you?',
        'Agricultural loan at 4% - are banks providing it?'
      ],
      hi: [
        'धान MSP - क्या आपको न्यूनतम समर्थन मूल्य मिल रहा है?',
        'बुवाई के मौसम में उर्वरक की कमी - आपूर्ति कौन सुनिश्चित करता है?',
        'बाढ़/सूखे से फसल नष्ट - बीमा दावा मिला?',
        'आलू के लिए कोल्ड स्टोरेज - आपके पास उपलब्ध है?',
        '4% पर कृषि ऋण - क्या बैंक दे रहे हैं?'
      ],
      bn: [
        'ধান MSP - আপনি ন্যূনতম সহায়ক মূল্য পাচ্ছেন?',
        'বপনের মরসুমে সারের অভাব - সরবরাহ কে নিশ্চিত করে?',
        'বন্যা/খরায় ফসল নষ্ট - বিমার টাকা পেলেন?',
        'আলুর জন্য কোল্ড স্টোরেজ - কাছে পাওয়া যায়?',
        '৪% সুদে কৃষি ঋণ - ব্যাংক দিচ্ছে?'
      ]
    },
    schemes: [
      {
        name: 'Krishak Bandhu',
        desc: {
          en: '₹10,000/year income support for farmers + ₹2 lakh death benefit - 75 lakh+ beneficiaries',
          hi: 'किसानों के लिए ₹10,000/वर्ष आय सहायता + ₹2 लाख मृत्यु लाभ - 75 लाख+ लाभार्थी',
          bn: 'কৃষকদের জন্য ₹১০,০০০/বছর আয় সহায়তা + ₹২ লক্ষ মৃত্যু সুবিধা - ৭৫ লক্ষ+ সুবিধাভোগী'
        }
      },
      {
        name: 'Bangla Shasya Bima',
        desc: {
          en: 'Crop insurance - premium paid by government - covers flood, drought, pest damage',
          hi: 'फसल बीमा - प्रीमियम सरकार देती है - बाढ़, सूखा, कीट क्षति कवर',
          bn: 'ফসল বিমা - প্রিমিয়াম সরকার দেয় - বন্যা, খরা, পোকার ক্ষতি কভার'
        }
      }
    ],
    questions: {
      en: [
        'Why is paddy procurement so slow - farmers waiting for weeks?',
        'Krishak Bandhu money comes late - when will it be on time?',
        'Fertilizer prices up 40% - what subsidy support?',
        'My land was flooded - crop insurance still not paid after 6 months?',
        'Market price for vegetables crashes - any MSP protection?'
      ],
      hi: [
        'धान खरीद इतनी धीमी क्यों - किसान हफ्तों से इंतजार कर रहे?',
        'कृषक बंधु का पैसा देर से आता है - समय पर कब मिलेगा?',
        'उर्वरक कीमतें 40% बढ़ीं - क्या सब्सिडी सहायता?',
        'मेरी जमीन बाढ़ में डूबी - 6 महीने बाद भी फसल बीमा नहीं मिला?',
        'सब्जियों का बाजार भाव गिरा - कोई MSP सुरक्षा?'
      ],
      bn: [
        'ধান সংগ্রহ এত ধীর কেন - কৃষকরা সপ্তাহের পর সপ্তাহ অপেক্ষা করছেন?',
        'কৃষক বন্ধুর টাকা দেরিতে আসে - সময়মতো কবে আসবে?',
        'সারের দাম ৪০% বাড়ল - ভর্তুকি সহায়তা কী?',
        'আমার জমি বন্যায় ডুবেছিল - ৬ মাসেও ফসল বিমার টাকা পাইনি?',
        'সবজির বাজারদর পড়ে গেছে - কোনো MSP সুরক্ষা?'
      ]
    }
  },
  {
    id: 'food',
    icon: '🍚',
    category: 'top10',
    name: {
      en: 'Food & Supplies',
      hi: 'खाद्य एवं आपूर्ति',
      bn: 'খাদ্য ও সরবরাহ'
    },
    shortDesc: {
      en: 'Runs Public Distribution System - 10 crore+ people get subsidized rice, wheat, oil through ration shops',
      hi: 'सार्वजनिक वितरण प्रणाली चलाता है - 10 करोड़+ लोगों को राशन दुकानों से सस्ता चावल, गेहूं, तेल मिलता है',
      bn: 'গণবন্টন ব্যবস্থা চালায় - ১০ কোটি+ মানুষ রেশন দোকান থেকে সস্তা চাল, গম, তেল পান'
    },
    budget: '₹6,000+ Crore/year',
    employees: '20,000+',
    keyStats: {
      en: [
        '10 Crore+ people covered under PDS',
        '2.1 Crore ration cards in West Bengal',
        '21,000+ Fair Price Shops (Ration Shops)',
        '35 kg rice/wheat per family per month at ₹2/kg',
        '1 litre cooking oil per family at subsidized rates'
      ],
      hi: [
        'PDS के तहत 10 करोड़+ लोग कवर',
        'पश्चिम बंगाल में 2.1 करोड़ राशन कार्ड',
        '21,000+ उचित मूल्य की दुकानें (राशन दुकानें)',
        '₹2/किलो पर प्रति परिवार 35 किलो चावल/गेहूं प्रति माह',
        'सब्सिडी दर पर प्रति परिवार 1 लीटर खाना पकाने का तेल'
      ],
      bn: [
        'PDS-এ ১০ কোটি+ মানুষ কভার্ড',
        'পশ্চিমবঙ্গে ২.১ কোটি রেশন কার্ড',
        '২১,০০০+ ন্যায্যমূল্যের দোকান (রেশন দোকান)',
        '₹২/কেজিতে প্রতি পরিবার মাসে ৩৫ কেজি চাল/গম',
        'ভর্তুকি দরে প্রতি পরিবার ১ লিটার রান্নার তেল'
      ]
    },
    impact: {
      en: [
        'Ration shop says "no stock" - but where did the grain go?',
        'Your name deleted from ration card - how to get it back?',
        'Digital ration (e-POS) machine not working - manual system possible?',
        'Quality of rice given - is it fit to eat?',
        'New ration card application pending for 1 year - why?'
      ],
      hi: [
        'राशन दुकान कहती है "स्टॉक नहीं" - लेकिन अनाज कहां गया?',
        'आपका नाम राशन कार्ड से कटा - वापस कैसे?',
        'डिजिटल राशन (e-POS) मशीन खराब - मैनुअल सिस्टम संभव?',
        'दिए गए चावल की गुणवत्ता - खाने लायक है?',
        'नया राशन कार्ड आवेदन 1 साल से लंबित - क्यों?'
      ],
      bn: [
        'রেশন দোকান বলে "স্টক নেই" - কিন্তু শস্য কোথায় গেল?',
        'আপনার নাম রেশন কার্ড থেকে কাটা গেছে - ফেরত কীভাবে?',
        'ডিজিটাল রেশন (e-POS) মেশিন কাজ করছে না - ম্যানুয়াল সিস্টেম সম্ভব?',
        'দেওয়া চালের মান - খাওয়ার যোগ্য?',
        'নতুন রেশন কার্ড আবেদন ১ বছর ধরে আটকে - কেন?'
      ]
    },
    schemes: [
      {
        name: 'Khadya Sathi',
        desc: {
          en: 'Universal PDS - every family gets 35kg rice/wheat at ₹2/kg regardless of income',
          hi: 'सार्वभौमिक PDS - हर परिवार को आय की परवाह किए बिना ₹2/किलो पर 35 किलो चावल/गेहूं',
          bn: 'সার্বজনীন PDS - প্রতিটি পরিবার আয় নির্বিশেষে ₹২/কেজিতে ৩৫ কেজি চাল/গম পায়'
        }
      },
      {
        name: 'e-POS System',
        desc: {
          en: 'Biometric verification at ration shops - reduces corruption and fake cards',
          hi: 'राशन दुकानों पर बायोमेट्रिक वेरिफिकेशन - भ्रष्टाचार और फर्जी कार्ड कम करता है',
          bn: 'রেশন দোকানে বায়োমেট্রিক যাচাই - দুর্নীতি ও জাল কার্ড কমায়'
        }
      }
    ],
    questions: {
      en: [
        'Why does the ration shop owner say stock finished by 15th every month?',
        'My mother\'s fingerprint doesn\'t work on e-POS - she can\'t get ration?',
        'Ration dealer sells in black market - what action against him?',
        'Why is oil not available for the last 3 months?',
        'Single women, disabled people struggle to reach ration shop - home delivery?'
      ],
      hi: [
        'राशन दुकानदार हर महीने 15 तारीख को स्टॉक खत्म क्यों बताता है?',
        'मेरी मां की उंगली का निशान e-POS पर काम नहीं करता - उन्हें राशन नहीं मिलेगा?',
        'राशन डीलर काला बाजारी करता है - उसके खिलाफ क्या कार्रवाई?',
        'पिछले 3 महीने से तेल क्यों नहीं मिल रहा?',
        'अकेली महिलाएं, विकलांग राशन दुकान जाने में परेशान - घर पर डिलीवरी?'
      ],
      bn: [
        'রেশন দোকানদার প্রতি মাসে ১৫ তারিখেই স্টক শেষ বলে কেন?',
        'আমার মায়ের আঙুলের ছাপ e-POS-এ কাজ করে না - রেশন পাবেন না?',
        'রেশন ডিলার কালোবাজারি করে - তার বিরুদ্ধে কী ব্যবস্থা?',
        'গত ৩ মাস ধরে তেল পাওয়া যাচ্ছে না কেন?',
        'একা মহিলা, প্রতিবন্ধীরা রেশন দোকানে যেতে কষ্ট পান - বাড়িতে ডেলিভারি?'
      ]
    }
  },
  {
    id: 'power',
    icon: '⚡',
    category: 'top10',
    name: {
      en: 'Power & Non-Conventional Energy',
      hi: 'बिजली एवं गैर-पारंपरिक ऊर्जा',
      bn: 'বিদ্যুৎ ও অপ্রচলিত শক্তি'
    },
    shortDesc: {
      en: 'Manages electricity supply for 2.5 crore+ consumers - WBSEDCL, CESC, load shedding, billing, new connections',
      hi: '2.5 करोड़+ उपभोक्ताओं के लिए बिजली आपूर्ति प्रबंधित करता है - WBSEDCL, CESC, लोड शेडिंग, बिलिंग, नए कनेक्शन',
      bn: '২.৫ কোটি+ গ্রাহকদের জন্য বিদ্যুৎ সরবরাহ পরিচালনা করে - WBSEDCL, CESC, লোডশেডিং, বিলিং, নতুন সংযোগ'
    },
    budget: '₹5,000+ Crore/year',
    employees: '40,000+',
    keyStats: {
      en: [
        '2.5 Crore+ electricity consumers in West Bengal',
        'WBSEDCL serves rural areas, CESC serves Kolkata',
        '99%+ villages electrified under Saubhagya scheme',
        'Peak demand: 12,000+ MW (often supply falls short)',
        '200+ MW solar power capacity added'
      ],
      hi: [
        'पश्चिम बंगाल में 2.5 करोड़+ बिजली उपभोक्ता',
        'WBSEDCL ग्रामीण क्षेत्रों में, CESC कोलकाता में सेवा देता है',
        'सौभाग्य योजना के तहत 99%+ गांवों में बिजली',
        'पीक डिमांड: 12,000+ MW (अक्सर आपूर्ति कम)',
        '200+ MW सौर ऊर्जा क्षमता जोड़ी गई'
      ],
      bn: [
        'পশ্চিমবঙ্গে ২.৫ কোটি+ বিদ্যুৎ গ্রাহক',
        'WBSEDCL গ্রামীণ এলাকায়, CESC কলকাতায় পরিষেবা দেয়',
        'সৌভাগ্য প্রকল্পে ৯৯%+ গ্রামে বিদ্যুৎ',
        'পিক ডিমান্ড: ১২,০০০+ MW (প্রায়ই সরবরাহ কম)',
        '২০০+ MW সৌর বিদ্যুৎ ক্ষমতা যোগ হয়েছে'
      ]
    },
    impact: {
      en: [
        'Load shedding for 4-6 hours in summer - when will it end?',
        'Electricity bill doubled suddenly - is meter faulty?',
        'New connection application pending for 8 months - why so slow?',
        'Transformer burns every monsoon - when permanent solution?',
        'Street lights not working - who maintains them?'
      ],
      hi: [
        'गर्मियों में 4-6 घंटे लोड शेडिंग - कब खत्म होगी?',
        'बिजली बिल अचानक दोगुना - क्या मीटर खराब है?',
        'नया कनेक्शन आवेदन 8 महीने से लंबित - इतनी देरी क्यों?',
        'हर मानसून में ट्रांसफॉर्मर जलता है - स्थायी समाधान कब?',
        'स्ट्रीट लाइट काम नहीं कर रही - रखरखाव कौन करता है?'
      ],
      bn: [
        'গ্রীষ্মে ৪-৬ ঘণ্টা লোডশেডিং - কবে শেষ হবে?',
        'বিদ্যুৎ বিল হঠাৎ দ্বিগুণ - মিটার খারাপ?',
        'নতুন সংযোগ আবেদন ৮ মাস ধরে আটকে - এত দেরি কেন?',
        'প্রতি বর্ষায় ট্রান্সফরমার পুড়ে যায় - স্থায়ী সমাধান কবে?',
        'রাস্তার আলো জ্বলছে না - রক্ষণাবেক্ষণ কে করে?'
      ]
    },
    schemes: [
      {
        name: 'Saubhagya',
        desc: {
          en: 'Free electricity connection to every household - 40 lakh+ connections given',
          hi: 'हर घर में मुफ्त बिजली कनेक्शन - 40 लाख+ कनेक्शन दिए गए',
          bn: 'প্রতিটি বাড়িতে বিনামূল্যে বিদ্যুৎ সংযোগ - ৪০ লক্ষ+ সংযোগ দেওয়া হয়েছে'
        }
      },
      {
        name: 'Solar Rooftop',
        desc: {
          en: 'Subsidy for rooftop solar panels - 40% central + state subsidy',
          hi: 'रूफटॉप सोलर पैनल के लिए सब्सिडी - 40% केंद्रीय + राज्य सब्सिडी',
          bn: 'ছাদে সোলার প্যানেলের জন্য ভর্তুকি - ৪০% কেন্দ্রীয় + রাজ্য ভর্তুকি'
        }
      }
    ],
    questions: {
      en: [
        'Why does my area face 6 hours load shedding while nearby areas have 24x7 power?',
        'My bill shows 500 units but I only use AC 2 hours - meter check?',
        'Agriculture pump connection - why 2 year wait?',
        'Frequent voltage fluctuation damaging appliances - compensation?',
        'Why are electricity rates higher in West Bengal than neighboring states?'
      ],
      hi: [
        'मेरे क्षेत्र में 6 घंटे लोड शेडिंग क्यों जबकि पास के क्षेत्रों में 24x7 बिजली है?',
        'मेरा बिल 500 यूनिट दिखाता है लेकिन मैं सिर्फ 2 घंटे AC चलाता हूं - मीटर जांच?',
        'कृषि पंप कनेक्शन - 2 साल का इंतजार क्यों?',
        'बार-बार वोल्टेज में उतार-चढ़ाव से उपकरण खराब - मुआवजा?',
        'पश्चिम बंगाल में बिजली दरें पड़ोसी राज्यों से ज्यादा क्यों?'
      ],
      bn: [
        'আমার এলাকায় ৬ ঘণ্টা লোডশেডিং কেন যখন কাছের এলাকায় ২৪x৭ বিদ্যুৎ আছে?',
        'আমার বিলে ৫০০ ইউনিট দেখাচ্ছে কিন্তু আমি মাত্র ২ ঘণ্টা AC চালাই - মিটার চেক?',
        'কৃষি পাম্প সংযোগ - ২ বছর অপেক্ষা কেন?',
        'ঘন ঘন ভোল্টেজ ওঠানামায় যন্ত্রপাতি নষ্ট - ক্ষতিপূরণ?',
        'পশ্চিমবঙ্গে বিদ্যুতের দাম প্রতিবেশী রাজ্যের চেয়ে বেশি কেন?'
      ]
    }
  },
  {
    id: 'transport',
    icon: '🚌',
    category: 'top10',
    name: {
      en: 'Transport',
      hi: 'परिवहन',
      bn: 'পরিবহন'
    },
    shortDesc: {
      en: 'Manages government buses, licenses, vehicle permits, road safety - how you travel daily depends on this ministry',
      hi: 'सरकारी बसें, लाइसेंस, वाहन परमिट, सड़क सुरक्षा प्रबंधित करता है - आप रोज कैसे यात्रा करते हैं यह इस मंत्रालय पर निर्भर',
      bn: 'সরকারি বাস, লাইসেন্স, গাড়ির পারমিট, সড়ক নিরাপত্তা পরিচালনা করে - আপনি প্রতিদিন কীভাবে যাতায়াত করেন তা এই মন্ত্রণালয়ের উপর নির্ভর'
    },
    budget: '₹3,000+ Crore/year',
    employees: '30,000+',
    keyStats: {
      en: [
        'SBSTC, NBSTC, CSTC operate 4,000+ government buses',
        '1 Crore+ registered vehicles in West Bengal',
        '50 Lakh+ driving licenses issued',
        '25,000+ auto/taxi permits',
        '3,000+ road accidents per year (1,000+ deaths)'
      ],
      hi: [
        'SBSTC, NBSTC, CSTC 4,000+ सरकारी बसें चलाते हैं',
        'पश्चिम बंगाल में 1 करोड़+ पंजीकृत वाहन',
        '50 लाख+ ड्राइविंग लाइसेंस जारी',
        '25,000+ ऑटो/टैक्सी परमिट',
        '3,000+ सड़क दुर्घटनाएं प्रति वर्ष (1,000+ मौतें)'
      ],
      bn: [
        'SBSTC, NBSTC, CSTC ৪,০০০+ সরকারি বাস চালায়',
        'পশ্চিমবঙ্গে ১ কোটি+ নিবন্ধিত গাড়ি',
        '৫০ লক্ষ+ ড্রাইভিং লাইসেন্স ইস্যু করা হয়েছে',
        '২৫,০০০+ অটো/ট্যাক্সি পারমিট',
        'বছরে ৩,০০০+ সড়ক দুর্ঘটনা (১,০০০+ মৃত্যু)'
      ]
    },
    impact: {
      en: [
        'Government bus doesn\'t come to your village - private operators charge double',
        'Driving license takes 3 months - why not same day?',
        'Overloaded buses, rash driving - who enforces safety?',
        'Auto/taxi refuses to go by meter - who regulates fares?',
        'No bus after 8 PM - women can\'t travel safely at night'
      ],
      hi: [
        'सरकारी बस आपके गांव नहीं आती - प्राइवेट दोगुना किराया लेते हैं',
        'ड्राइविंग लाइसेंस में 3 महीने - उसी दिन क्यों नहीं?',
        'ओवरलोड बसें, तेज ड्राइविंग - सुरक्षा कौन लागू करता है?',
        'ऑटो/टैक्सी मीटर से जाने से मना करता है - किराया कौन नियंत्रित करता है?',
        'रात 8 बजे के बाद बस नहीं - महिलाएं रात को सुरक्षित यात्रा नहीं कर सकतीं'
      ],
      bn: [
        'সরকারি বাস আপনার গ্রামে আসে না - প্রাইভেট দ্বিগুণ ভাড়া নেয়',
        'ড্রাইভিং লাইসেন্সে ৩ মাস - সেই দিনই কেন নয়?',
        'ওভারলোড বাস, বেপরোয়া ড্রাইভিং - নিরাপত্তা কে বাস্তবায়ন করে?',
        'অটো/ট্যাক্সি মিটারে যেতে অস্বীকার করে - ভাড়া কে নিয়ন্ত্রণ করে?',
        'রাত ৮টার পর বাস নেই - মহিলারা রাতে নিরাপদে যাতায়াত করতে পারেন না'
      ]
    },
    schemes: [
      {
        name: 'Student Bus Pass',
        desc: {
          en: 'Subsidized monthly pass for students - ₹55 for unlimited travel in government buses',
          hi: 'छात्रों के लिए सब्सिडी वाला मासिक पास - सरकारी बसों में असीमित यात्रा के लिए ₹55',
          bn: 'ছাত্রদের জন্য ভর্তুকিযুক্ত মাসিক পাস - সরকারি বাসে সীমাহীন যাতায়াতে ₹৫৫'
        }
      },
      {
        name: 'Sarathi Portal',
        desc: {
          en: 'Online driving license application - reduced wait time from months to weeks',
          hi: 'ऑनलाइन ड्राइविंग लाइसेंस आवेदन - प्रतीक्षा समय महीनों से घटाकर हफ्तों में',
          bn: 'অনলাইন ড্রাইভিং লাইসেন্স আবেদন - অপেক্ষার সময় মাস থেকে সপ্তাহে কমেছে'
        }
      }
    ],
    questions: {
      en: [
        'Why no government bus service to my village/locality?',
        'Online driving license appointment not available for 3 months - why?',
        'Who is responsible for checking overloaded buses?',
        'Auto union controls permits - why no free permits for new drivers?',
        'Why are bus fares increased every year but bus quality remains poor?'
      ],
      hi: [
        'मेरे गांव/इलाके में सरकारी बस सेवा क्यों नहीं?',
        'ऑनलाइन ड्राइविंग लाइसेंस अपॉइंटमेंट 3 महीने तक उपलब्ध नहीं - क्यों?',
        'ओवरलोड बसों की जांच की जिम्मेदारी किसकी?',
        'ऑटो यूनियन परमिट नियंत्रित करता है - नए ड्राइवरों के लिए मुफ्त परमिट क्यों नहीं?',
        'बस किराया हर साल बढ़ता है लेकिन बस की गुणवत्ता खराब - क्यों?'
      ],
      bn: [
        'আমার গ্রাম/এলাকায় সরকারি বাস সেবা নেই কেন?',
        'অনলাইন ড্রাইভিং লাইসেন্স অ্যাপয়েন্টমেন্ট ৩ মাস পাওয়া যাচ্ছে না - কেন?',
        'ওভারলোড বাস চেক করার দায়িত্ব কার?',
        'অটো ইউনিয়ন পারমিট নিয়ন্ত্রণ করে - নতুন ড্রাইভারদের জন্য ফ্রি পারমিট কেন নেই?',
        'বাস ভাড়া প্রতি বছর বাড়ে কিন্তু বাসের মান খারাপ - কেন?'
      ]
    }
  }
];

export const getMinistryById = (id: string): MinistryDetail | undefined => {
  return ministries.find(m => m.id === id);
};

export const getTop10Ministries = (): MinistryDetail[] => {
  return ministries.filter(m => m.category === 'top10');
};
