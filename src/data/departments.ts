// All 54 Government Departments of West Bengal

export type MinisterType = 'CM' | 'MIC' | 'MoS-IC' | 'MoS';

export interface Department {
  id: number;
  name: string;
  nameBn: string;
  nameHi: string;
  icon: string;
  category: 'governance' | 'welfare' | 'infrastructure' | 'economy' | 'development' | 'services';
  ministerInCharge?: {
    name: string;
    type: MinisterType;
  };
  mosIndependent?: {
    name: string;
  };
  mos?: {
    name: string;
  };
  address: string;
  phone: string;
  email: string;
}

export const departments: Department[] = [
  {
    id: 1,
    name: "Agriculture",
    nameBn: "কৃষি",
    nameHi: "कृषि",
    icon: "🌾",
    category: "economy",
    ministerInCharge: { name: "Sri Sobhandeb Chattopadhyay", type: "MIC" },
    address: "Nabanna, 3rd Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-1778, 2253-5181",
    email: "micagriwb@gmail.com"
  },
  {
    id: 2,
    name: "Agricultural Marketing",
    nameBn: "কৃষি বিপণন",
    nameHi: "कृषि विपणन",
    icon: "🛒",
    category: "economy",
    mosIndependent: { name: "Sri Becharam Manna" },
    address: "Khadya Bhavan, 4th Floor, Block B, 11A Mirza Ghalib Street, Kolkata - 700087",
    phone: "2252-0619",
    email: "mannabecharam@gmail.com"
  },
  {
    id: 3,
    name: "Animal Resources Development",
    nameBn: "প্রাণী সম্পদ উন্নয়ন",
    nameHi: "पशु संसाधन विकास",
    icon: "🐄",
    category: "economy",
    ministerInCharge: { name: "Sri Swapan Debnath", type: "MIC" },
    address: "Prani Sampad Bhavan, LB-2, Sector-III Salt Lake City, Kolkata - 700106",
    phone: "2335-1130, 2335-1144",
    email: "mic.ard.wb@gmail.com"
  },
  {
    id: 4,
    name: "Backward Classes Welfare",
    nameBn: "অনগ্রসর শ্রেণি কল্যাণ",
    nameHi: "पिछड़ा वर्ग कल्याण",
    icon: "🤝",
    category: "welfare",
    mosIndependent: { name: "Sri Bulu Chik Baraik" },
    address: "Administrative Building, SDO Bidhanagar, 4th Floor, DJ-4, Salt Lake Sector II, Kolkata - 700091",
    phone: "2334-3603",
    email: "mic.bcwd@gmail.com"
  },
  {
    id: 5,
    name: "Science and Technology and Bio-Technology",
    nameBn: "বিজ্ঞান ও প্রযুক্তি এবং জৈব-প্রযুক্তি",
    nameHi: "विज्ञान एवं प्रौद्योगिकी और जैव-प्रौद्योगिकी",
    icon: "🔬",
    category: "development",
    ministerInCharge: { name: "Sri Ujjal Biswas", type: "MIC" },
    address: "Vigyan Chetana Bhavan, 26/B, Block-DD, Sector-I, Salt Lake, Kolkata - 700064",
    phone: "",
    email: "ps2micstbt@gmail.com"
  },
  {
    id: 6,
    name: "Consumer Affairs",
    nameBn: "ভোক্তা বিষয়ক",
    nameHi: "उपभोक्ता मामले",
    icon: "🛡️",
    category: "services",
    ministerInCharge: { name: "Sri Biplab Mitra", type: "MIC" },
    mos: { name: "Sri Srikant Mahato" },
    address: "Kreta Suraksha Bhawan, 3rd Floor, 11A Mirza Ghalib Street, Kolkata - 700087",
    phone: "2252-7483",
    email: "mic.cad-wb@nic.in"
  },
  {
    id: 7,
    name: "Co-operation",
    nameBn: "সমবায়",
    nameHi: "सहकारिता",
    icon: "🤲",
    category: "economy",
    ministerInCharge: { name: "Sri Pradip Kr. Mazumdar", type: "MIC" },
    address: "New Secretariat Building, Block-C, 3rd Floor, 1 Kiran Sankar Roy Road, Kolkata - 700001",
    phone: "2214-4001",
    email: "pstoministercoop@gmail.com"
  },
  {
    id: 8,
    name: "Correctional Administration",
    nameBn: "সংশোধন প্রশাসন",
    nameHi: "सुधार प्रशासन",
    icon: "⚖️",
    category: "governance",
    ministerInCharge: { name: "Sri Chandranath Sinha", type: "MIC" },
    address: "Jessop Building, 1st Floor, 63 Netaji Subhas Road, Kolkata - 700001",
    phone: "2262-5695",
    email: "mic.dca-wb@nic.in"
  },
  {
    id: 9,
    name: "Disaster Management and Civil Defence",
    nameBn: "দুর্যোগ ব্যবস্থাপনা ও বেসামরিক প্রতিরক্ষা",
    nameHi: "आपदा प्रबंधन और नागरिक सुरक्षा",
    icon: "🚨",
    category: "services",
    ministerInCharge: { name: "Janab Javed Ahmed Khan", type: "MIC" },
    address: "Nabanna, 2nd Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-4052",
    email: "micfes.dm.cd@gmail.com"
  },
  {
    id: 10,
    name: "Environment",
    nameBn: "পরিবেশ",
    nameHi: "पर्यावरण",
    icon: "🌳",
    category: "development",
    mosIndependent: { name: "Smt. Chandrima Bhattacharya" },
    address: "Prani Sampad Bhavan, 5th Floor, LB-2, Sector-III, Salt Lake, Kolkata-700098",
    phone: "",
    email: ""
  },
  {
    id: 11,
    name: "Finance",
    nameBn: "অর্থ",
    nameHi: "वित्त",
    icon: "💰",
    category: "governance",
    mosIndependent: { name: "Smt. Chandrima Bhattacharya" },
    address: "Nabanna, 6th Floor, 325 Sarat Chatterjee Road, Shibpur, Howrah - 711102",
    phone: "2253-5491, 2253-5492",
    email: "mosfdwb21@gmail.com"
  },
  {
    id: 12,
    name: "Fire and Emergency Services",
    nameBn: "অগ্নি ও জরুরি পরিষেবা",
    nameHi: "अग्नि एवं आपातकालीन सेवाएं",
    icon: "🚒",
    category: "services",
    mosIndependent: { name: "Sri Sujit Bose" },
    address: "New Town Fire Station Building, CF-7, Street Number-175, Action Area 1C, New Town - 700156",
    phone: "2337-3728",
    email: "mosicfiredepartment@gmail.com"
  },
  {
    id: 13,
    name: "Fisheries, Aquaculture, Aquatic Resources and Fishing Harbour",
    nameBn: "মৎস্য, জলজ চাষ, জলজ সম্পদ ও মাছ ধরার বন্দর",
    nameHi: "मत्स्य पालन, जलीय कृषि, जलीय संसाधन और मछली पकड़ने का बंदरगाह",
    icon: "🐟",
    category: "economy",
    mosIndependent: { name: "Sri Biplab Roy Chowdhury" },
    address: "Benfish Tower, 8th Floor, 31 GN Block, Salt Lake, Sector V, Kolkata - 700091",
    phone: "2357-0099, 2357-0078",
    email: "fisheriesmic@gmail.com"
  },
  {
    id: 14,
    name: "Food and Supplies",
    nameBn: "খাদ্য ও সরবরাহ",
    nameHi: "खाद्य एवं आपूर्ति",
    icon: "🍚",
    category: "welfare",
    ministerInCharge: { name: "Sri Rathin Ghosh", type: "MIC" },
    mos: { name: "Smt. Jyotsna Mandi" },
    address: "Khadya Bhavan, 11A Mirza Ghalib Street, Kolkata - 700087",
    phone: "2252-1388",
    email: "micfoodgovtwb@gmail.com"
  },
  {
    id: 15,
    name: "Food Processing Industries and Horticulture",
    nameBn: "খাদ্য প্রক্রিয়াকরণ শিল্প ও উদ্যানপালন",
    nameHi: "खाद्य प्रसंस्करण उद्योग और बागवानी",
    icon: "🏭",
    category: "economy",
    ministerInCharge: { name: "Sri Arup Roy", type: "MIC" },
    address: "Benfish Tower, 4th Floor, GN Block, Sector V, Salt Lake City, Kolkata - 700091",
    phone: "4029-2999",
    email: "micfpihwb@gmail.com"
  },
  {
    id: 16,
    name: "Forests",
    nameBn: "বন",
    nameHi: "वन",
    icon: "🌲",
    category: "development",
    mosIndependent: { name: "Smt. Birbaha Hansda" },
    address: "Aranya Bhawan, Block LA-10A, Sector-III, Salt Lake, Kolkata - 700106",
    phone: "2335-4040",
    email: "pstomicforest@gmail.com"
  },
  {
    id: 17,
    name: "Health and Family Welfare",
    nameBn: "স্বাস্থ্য ও পরিবার কল্যাণ",
    nameHi: "स्वास्थ्य एवं परिवार कल्याण",
    icon: "🏥",
    category: "welfare",
    ministerInCharge: { name: "Mamata Banerjee", type: "CM" },
    mos: { name: "Smt. Chandrima Bhattacharya" },
    address: "Nabanna, 14th Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-5555, 2214-3101",
    email: "cm-wb@nic.in"
  },
  {
    id: 18,
    name: "Higher Education",
    nameBn: "উচ্চ শিক্ষা",
    nameHi: "उच्च शिक्षा",
    icon: "🎓",
    category: "development",
    ministerInCharge: { name: "Sri Bratya Basu", type: "MIC" },
    address: "Bikash Bhavan, 5th Floor, East Block, Sector I, Salt Lake, Kolkata - 700091",
    phone: "2358-8858",
    email: "ps2miced@gmail.com"
  },
  {
    id: 19,
    name: "Home and Hill Affairs",
    nameBn: "স্বরাষ্ট্র ও পার্বত্য বিষয়ক",
    nameHi: "गृह एवं पर्वतीय मामले",
    icon: "🛡️",
    category: "governance",
    ministerInCharge: { name: "Mamata Banerjee", type: "CM" },
    address: "Nabanna, 14th Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-5555, 2214-3101",
    email: "cm-wb@nic.in"
  },
  {
    id: 20,
    name: "Housing",
    nameBn: "আবাসন",
    nameHi: "आवास",
    icon: "🏠",
    category: "infrastructure",
    ministerInCharge: { name: "Sri Aroop Biswas", type: "MIC" },
    address: "New Secretariat Building, Block-C, 3rd Floor, 1 K.S.Roy Road, Kolkata- 700001",
    phone: "2262-4004, 2262-4005",
    email: "mhousing56@yahoo.com"
  },
  {
    id: 21,
    name: "Information and Cultural Affairs",
    nameBn: "তথ্য ও সাংস্কৃতিক বিষয়ক",
    nameHi: "सूचना एवं सांस्कृतिक मामले",
    icon: "🎭",
    category: "services",
    ministerInCharge: { name: "Mamata Banerjee", type: "CM" },
    mos: { name: "Sri Indranil Sen" },
    address: "Nabanna, 14th Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-5555, 2214-3101",
    email: "cm-wb@nic.in"
  },
  {
    id: 22,
    name: "Information Technology and Electronics",
    nameBn: "তথ্য প্রযুক্তি ও ইলেকট্রনিক্স",
    nameHi: "सूचना प्रौद्योगिकी और इलेक्ट्रॉनिक्स",
    icon: "💻",
    category: "development",
    ministerInCharge: { name: "Sri Babul Supriyo", type: "MIC" },
    address: "Monibhandar, 6th Floor, Webel Bhavan, Block EP & GP, Sector-V, Salt Lake, Kolkata - 700091",
    phone: "2357-5533",
    email: "micit@wb.gov.in"
  },
  {
    id: 23,
    name: "Irrigation and Waterways",
    nameBn: "জলসেচ ও জলপথ",
    nameHi: "सिंचाई एवं जलमार्ग",
    icon: "🚿",
    category: "infrastructure",
    ministerInCharge: { name: "Shri Manas Ranjan Bhunia", type: "MIC" },
    mos: { name: "Smt. Yeasmin Sabina" },
    address: "Jalasampad Bhaban, 1st floor, Bidhannagar, Salt Lake, Kolkata - 700091",
    phone: "2321-5103",
    email: "hmiciwd@gmail.com"
  },
  {
    id: 24,
    name: "Judicial",
    nameBn: "বিচার",
    nameHi: "न्यायिक",
    icon: "⚖️",
    category: "governance",
    ministerInCharge: { name: "Sri Moloy Ghatak", type: "MIC" },
    address: "Writers' Building, Kolkata - 700001 & Nabanna, 6th Floor, Howrah - 711102",
    phone: "2214-5802",
    email: "ghatak.moloy@gmail.com"
  },
  {
    id: 25,
    name: "Labour",
    nameBn: "শ্রম",
    nameHi: "श्रम",
    icon: "👷",
    category: "welfare",
    ministerInCharge: { name: "Sri Moloy Ghatak", type: "MIC" },
    address: "New Secretariat Building Block A, 12th Floor, 1 Kiran Sankar Roy Road, Kolkata - 700001",
    phone: "2262-7140, 2262-7189",
    email: "ghatak.moloy@gmail.com"
  },
  {
    id: 26,
    name: "Land and Land Reforms & Refugee Relief and Rehabilitation",
    nameBn: "ভূমি ও ভূমি সংস্কার এবং উদ্বাস্তু ত্রাণ ও পুনর্বাসন",
    nameHi: "भूमि एवं भूमि सुधार और शरणार्थी राहत एवं पुनर्वास",
    icon: "🏞️",
    category: "governance",
    ministerInCharge: { name: "Mamata Banerjee", type: "CM" },
    mos: { name: "Smt. Chandrima Bhattacharya" },
    address: "Nabanna, 14th Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-5555, 2214-3101",
    email: "cm-wb@nic.in"
  },
  {
    id: 27,
    name: "Industry, Commerce and Enterprises",
    nameBn: "শিল্প, বাণিজ্য ও উদ্যোগ",
    nameHi: "उद्योग, वाणिज्य और उद्यम",
    icon: "🏭",
    category: "economy",
    ministerInCharge: { name: "Dr. Shashi Panja", type: "MIC" },
    address: "Shilpa Sadan, 6th Floor, 4 Abanindranath Tagore Sarani (Camac Street), Kolkata - 700016",
    phone: "4005-0111",
    email: "micicewb@wb.gov.in"
  },
  {
    id: 28,
    name: "Law",
    nameBn: "আইন",
    nameHi: "कानून",
    icon: "📜",
    category: "governance",
    ministerInCharge: { name: "Sri Moloy Ghatak", type: "MIC" },
    address: "Writers' Building, Kolkata - 700001 & Nabanna, 6th Floor, Howrah - 711102",
    phone: "2253-5395, 2253-5176",
    email: "ghatak.moloy@gmail.com"
  },
  {
    id: 29,
    name: "Mass Education Extension and Library Services",
    nameBn: "গণশিক্ষা সম্প্রসারণ ও গ্রন্থাগার পরিষেবা",
    nameHi: "जन शिक्षा विस्तार और पुस्तकालय सेवाएं",
    icon: "📚",
    category: "development",
    ministerInCharge: { name: "Janab Siddiqullah Choudhury", type: "MIC" },
    address: "Bikash Bhavan, 5th Floor, Salt Lake, Kolkata - 700091",
    phone: "2334-4791, 2358-9354",
    email: "mos.meels@gmail.com"
  },
  {
    id: 30,
    name: "Micro, Small & Medium Enterprises and Textiles",
    nameBn: "ক্ষুদ্র, ছোট ও মাঝারি উদ্যোগ এবং বস্ত্র",
    nameHi: "सूक्ष्म, लघु और मध्यम उद्यम और वस्त्र",
    icon: "🧵",
    category: "economy",
    ministerInCharge: { name: "Sri Chandranath Sinha", type: "MIC" },
    mos: { name: "Sri Tajmul Hossain" },
    address: "Shilpa Sadan, 6th Floor, 4 Abanindranath Tagore Sarani, Kolkata - 700016",
    phone: "2214-5663",
    email: "micmsmet.21@gmail.com"
  },
  {
    id: 31,
    name: "Minority Affairs and Madrasah Education",
    nameBn: "সংখ্যালঘু বিষয়ক ও মাদ্রাসা শিক্ষা",
    nameHi: "अल्पसंख्यक मामले और मदरसा शिक्षा",
    icon: "🕌",
    category: "welfare",
    ministerInCharge: { name: "Mamata Banerjee", type: "CM" },
    mos: { name: "Sri Tajmul Hossain" },
    address: "Nabanna, 14th Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-5555, 2214-3101",
    email: "cm-wb@nic.in"
  },
  {
    id: 32,
    name: "Non-Conventional and Renewable Energy Sources",
    nameBn: "অপ্রচলিত ও নবায়নযোগ্য শক্তি উৎস",
    nameHi: "गैर-पारंपरिक और नवीकरणीय ऊर्जा स्रोत",
    icon: "☀️",
    category: "infrastructure",
    ministerInCharge: { name: "Md. Ghulam Rabbani", type: "MIC" },
    address: "Bikalpa Shakti Bhavan, 1st Floor, J-1/10, EP & GP Block, Sector V, Salt Lake, Kolkata - 700091",
    phone: "2357-0093",
    email: "micnres-wb@bangla.gov.in"
  },
  {
    id: 33,
    name: "North Bengal Development",
    nameBn: "উত্তরবঙ্গ উন্নয়ন",
    nameHi: "उत्तर बंगाल विकास",
    icon: "🏔️",
    category: "development",
    ministerInCharge: { name: "Sri Udayan Guha", type: "MIC" },
    mos: { name: "Smt. Yeasmin Sabina" },
    address: "Mitra Building, 4th Floor, 8 Lyons Range, Kolkata - 700001",
    phone: "2230-5482",
    email: "udayanguha.dta@gmail.com"
  },
  {
    id: 34,
    name: "Panchayats and Rural Development",
    nameBn: "পঞ্চায়েত ও গ্রামোন্নয়ন",
    nameHi: "पंचायत एवं ग्रामीण विकास",
    icon: "🏘️",
    category: "development",
    ministerInCharge: { name: "Sri Pradip Kr. Mazumdar", type: "MIC" },
    mos: { name: "Sri Becharam Manna & Smt. Seuli Saha" },
    address: "Joint Administrative Building, 7th Floor, Wing B, Block - HC7, Sector - III, Salt Lake City, Kolkata - 700106",
    phone: "2335-3334",
    email: "micprd2022@gmail.com"
  },
  {
    id: 35,
    name: "Parliamentary Affairs",
    nameBn: "সংসদ বিষয়ক",
    nameHi: "संसदीय मामले",
    icon: "🏛️",
    category: "governance",
    ministerInCharge: { name: "Sri Sobhandeb Chattopadhyay", type: "MIC" },
    mos: { name: "Smt. Sandhyarani Tudu" },
    address: "Nabanna, 3rd Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-1778, 2253-5181",
    email: "micagriwb@gmail.com"
  },
  {
    id: 36,
    name: "Paschimanchal Unnayan Affairs",
    nameBn: "পশ্চিমাঞ্চল উন্নয়ন বিষয়ক",
    nameHi: "पश्चिमांचल उन्नयन मामले",
    icon: "🌅",
    category: "development",
    mosIndependent: { name: "Smt. Sandhyarani Tudu" },
    address: "Poura Bhawan, FD 415A, 5th Floor, Sector - III, Salt Lake City, Kolkata - 700106",
    phone: "2337-0225",
    email: "sandhyaranitudu5@gmail.com"
  },
  {
    id: 37,
    name: "Personnel and Administrative Reforms",
    nameBn: "কর্মী ও প্রশাসনিক সংস্কার",
    nameHi: "कार्मिक एवं प्रशासनिक सुधार",
    icon: "📋",
    category: "governance",
    ministerInCharge: { name: "Mamata Banerjee", type: "CM" },
    address: "Nabanna, 14th Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-5555, 2214-3101",
    email: "cm-wb@nic.in"
  },
  {
    id: 38,
    name: "Planning and Statistics",
    nameBn: "পরিকল্পনা ও পরিসংখ্যান",
    nameHi: "योजना एवं सांख्यिकी",
    icon: "📊",
    category: "governance",
    ministerInCharge: { name: "Mamata Banerjee", type: "CM" },
    mos: { name: "Smt. Chandrima Bhattacharya" },
    address: "Nabanna, 14th Floor, 325 Sarat Chatterjee Road, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-5525, 2214-3101",
    email: "cm-wb@nic.in"
  },
  {
    id: 39,
    name: "Programme Monitoring",
    nameBn: "কর্মসূচি পর্যবেক্ষণ",
    nameHi: "कार्यक्रम निगरानी",
    icon: "📈",
    category: "governance",
    mosIndependent: { name: "Smt. Chandrima Bhattacharya" },
    address: "Joint Administrative Building HC - 7, Sector - III, Saltlake, Kolkata - 700106",
    phone: "",
    email: "cm-wb@nic.in"
  },
  {
    id: 40,
    name: "Power",
    nameBn: "বিদ্যুৎ",
    nameHi: "बिजली",
    icon: "⚡",
    category: "infrastructure",
    ministerInCharge: { name: "Sri Aroop Biswas", type: "MIC" },
    mos: { name: "Janab Akhruzzaman" },
    address: "Bidyut Unnayan Bhavan, 6th Floor, Plot 3/C Block LA, Sector III, Salt Lake, Kolkata - 700098",
    phone: "2335-0768",
    email: "micpowerwb1@gmail.com"
  },
  {
    id: 41,
    name: "Public Health Engineering",
    nameBn: "জনস্বাস্থ্য কারিগরি",
    nameHi: "जनस्वास्थ्य अभियांत्रिकी",
    icon: "🚰",
    category: "infrastructure",
    ministerInCharge: { name: "Sri Pulak Roy", type: "MIC" },
    address: "NIJALAY, Janaswasthya Karigari Bhawan, 7th floor, Plot no. CN-8, Block CN, Sector V, Bidhannagar, Kolkata - 700091",
    phone: "2952-0150",
    email: "mic@wbphed.gov.in"
  },
  {
    id: 42,
    name: "Public Works",
    nameBn: "গণপূর্ত",
    nameHi: "लोक निर्माण",
    icon: "🛣️",
    category: "infrastructure",
    ministerInCharge: { name: "Sri Pulak Roy", type: "MIC" },
    address: "Nabanna, 325 Sarat Chatterjee Road, 8th Floor, Mandirtala, Shibpur, Howrah - 711102",
    phone: "2214-3161, 2214-1616",
    email: "micpwd@gmail.com"
  },
  {
    id: 43,
    name: "Public Enterprises and Industrial Reconstruction",
    nameBn: "সরকারি উদ্যোগ ও শিল্প পুনর্গঠন",
    nameHi: "सार्वजनिक उद्यम और औद्योगिक पुनर्गठन",
    icon: "🏗️",
    category: "economy",
    ministerInCharge: { name: "Shri Babul Supriyo", type: "MIC" },
    address: "Shilpa Sadan, 6th Floor, 4 Abanindranath Tagore Sarani, Kolkata - 700016",
    phone: "2282-0676",
    email: "mic.peir-bgla@bangla.gov.in"
  },
  {
    id: 44,
    name: "School Education",
    nameBn: "বিদ্যালয় শিক্ষা",
    nameHi: "विद्यालय शिक्षा",
    icon: "📚",
    category: "welfare",
    ministerInCharge: { name: "Sri Bratya Basu", type: "MIC" },
    mos: { name: "Sri Satyajit Barman" },
    address: "Bikash Bhavan, 5th Floor, Salt Lake, Kolkata - 700091",
    phone: "2334-2256",
    email: "edu.min.wb@gmail.com"
  },
  {
    id: 45,
    name: "Self Help Group and Self Employment",
    nameBn: "স্বনির্ভর গোষ্ঠী ও স্বকর্মসংস্থান",
    nameHi: "स्वयं सहायता समूह और स्वरोजगार",
    icon: "👥",
    category: "welfare",
    mosIndependent: { name: "Smt. Birbaha Hansda" },
    mos: { name: "Yeasmin Sabina" },
    address: "Kreta Suraksha Bhawan, 1st Floor, 11A Mirza Ghalib Street, Kolkata - 700087",
    phone: "2262-7270",
    email: ""
  },
  {
    id: 46,
    name: "Sundarban Affairs",
    nameBn: "সুন্দরবন বিষয়ক",
    nameHi: "सुंदरबन मामले",
    icon: "🐅",
    category: "development",
    ministerInCharge: { name: "Sri Bankim Chandra Hazra", type: "MIC" },
    address: "Mayukh Bhawan, Top Floor, Salt Lake, Kolkata - 700091",
    phone: "2321-8238",
    email: "mossaiw_91@yahoo.com"
  },
  {
    id: 47,
    name: "Technical Education, Training & Skill Development",
    nameBn: "কারিগরি শিক্ষা, প্রশিক্ষণ ও দক্ষতা উন্নয়ন",
    nameHi: "तकनीकी शिक्षा, प्रशिक्षण और कौशल विकास",
    icon: "🔧",
    category: "development",
    mosIndependent: { name: "Sri Indranil Sen" },
    address: "Karigori Bhawan, 2nd Floor, Action Area: III, Plot: B-7, New Town, Rajarhat, Kolkata - 700160",
    phone: "2324-5854",
    email: "mostetsdwb@gmail.com"
  },
  {
    id: 48,
    name: "Tourism",
    nameBn: "পর্যটন",
    nameHi: "पर्यटन",
    icon: "✈️",
    category: "economy",
    mosIndependent: { name: "Sri Indranil Sen" },
    address: "New Secretariat Building, Block A, 3rd Floor, 1 Kiran Sankar Roy Road, Kolkata - 700001",
    phone: "2262-8331",
    email: "mostourismwb@gmail.com"
  },
  {
    id: 49,
    name: "Transport",
    nameBn: "পরিবহন",
    nameHi: "परिवहन",
    icon: "🚌",
    category: "infrastructure",
    ministerInCharge: { name: "Sri Snehasis Chakraborty", type: "MIC" },
    mos: { name: "Sri Dilip Mondal" },
    address: "Paribahan Bhawan, 12 R N Mukherjee Road, Kolkata - 700001",
    phone: "2262-5402, 2262-5403",
    email: "pstomictransportwb@gmail.com"
  },
  {
    id: 50,
    name: "Tribal Development",
    nameBn: "উপজাতি উন্নয়ন",
    nameHi: "जनजातीय विकास",
    icon: "🏹",
    category: "welfare",
    mosIndependent: { name: "Sri Bulu Chik Baraik" },
    address: "Adivasi Bhawan, Premises No. 2221, Action Area - IIIA, Rajarhat - Newtown, Kolkata - 700160",
    phone: "68105918",
    email: "jstddwb65@gmail.com"
  },
  {
    id: 51,
    name: "Urban Development and Municipal Affairs",
    nameBn: "পৌর উন্নয়ন ও পৌর বিষয়ক",
    nameHi: "शहरी विकास एवं नगर निगम मामले",
    icon: "🏙️",
    category: "infrastructure",
    ministerInCharge: { name: "Janab Firhad Hakim", type: "MIC" },
    address: "Nagarayan, DF-8, Sector-I, Salt Lake, Kolkata - 700064",
    phone: "2358-3500",
    email: "micmaudwb@gmail.com"
  },
  {
    id: 52,
    name: "Water Resources Investigation and Development",
    nameBn: "জল সম্পদ অনুসন্ধান ও উন্নয়ন",
    nameHi: "जल संसाधन जांच और विकास",
    icon: "💧",
    category: "infrastructure",
    ministerInCharge: { name: "Sri Manas Ranjan Bhunia", type: "MIC" },
    address: "Khadya Bhavan, Block-A, 5th Floor, 11A Mirza Ghalib Street, Kolkata - 700087",
    phone: "2252-0558, 2252-0038",
    email: "ps2micwridd@gmail.com"
  },
  {
    id: 53,
    name: "Women and Child Development and Social Welfare",
    nameBn: "নারী ও শিশু উন্নয়ন এবং সমাজকল্যাণ",
    nameHi: "महिला एवं बाल विकास और समाज कल्याण",
    icon: "👩‍👧",
    category: "welfare",
    ministerInCharge: { name: "Dr. Shashi Panja", type: "MIC" },
    address: "Bikash Bhavan, 10th Floor, Salt Lake, Kolkata - 700091",
    phone: "2334-5673",
    email: "shashipanja@yahoo.com"
  },
  {
    id: 54,
    name: "Youth Services and Sports",
    nameBn: "যুব পরিষেবা ও ক্রীড়া",
    nameHi: "युवा सेवाएं और खेल",
    icon: "🏅",
    category: "services",
    mos: { name: "Sri Manoj Tiwari" },
    address: "New Secretariat Building, Block A, 6th Floor, 1 Kiran Sankar Roy Road, Kolkata - 700001",
    phone: "2262-4242, 2262-7462",
    email: ""
  }
];

// Category labels
export const categoryLabels = {
  governance: {
    en: "Governance & Administration",
    bn: "শাসন ও প্রশাসন",
    hi: "शासन एवं प्रशासन"
  },
  welfare: {
    en: "Welfare & Social Services",
    bn: "কল্যাণ ও সমাজ সেবা",
    hi: "कल्याण एवं समाज सेवा"
  },
  infrastructure: {
    en: "Infrastructure & Utilities",
    bn: "পরিকাঠামো ও ইউটিলিটি",
    hi: "बुनियादी ढांचा एवं उपयोगिताएं"
  },
  economy: {
    en: "Economy & Industry",
    bn: "অর্থনীতি ও শিল্প",
    hi: "अर्थव्यवस्था एवं उद्योग"
  },
  development: {
    en: "Development & Education",
    bn: "উন্নয়ন ও শিক্ষা",
    hi: "विकास एवं शिक्षा"
  },
  services: {
    en: "Public Services",
    bn: "জনসেবা",
    hi: "जनसेवाएं"
  }
};

// Get departments by category
export function getDepartmentsByCategory(category: Department['category']): Department[] {
  return departments.filter(d => d.category === category);
}

// Get unique ministers
export function getUniqueMinistersCount(): number {
  const ministers = new Set<string>();
  departments.forEach(d => {
    if (d.ministerInCharge) ministers.add(d.ministerInCharge.name);
    if (d.mosIndependent) ministers.add(d.mosIndependent.name);
    if (d.mos) ministers.add(d.mos.name);
  });
  return ministers.size;
}
