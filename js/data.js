// =========================================
// PRAGYA CLASSES BMR — Application Data
// =========================================

// WhatsApp number for payments/contact
export const WHATSAPP_NUMBER = '919414574875';
export const WHATSAPP_NUMBER_2 = '919587269099';

// YouTube Channel
export const YOUTUBE_CHANNEL = 'https://www.youtube.com/@pragyaclassesbmr2281';

// Contact Info
export const CONTACT = {
  phone1: '9414574875',
  phone2: '9587269099',
  email: 'pragyaclassesbmr2013@gmail.com',
  address: 'रामदेव मंदिर के सामने, अम्बेडकर कॉलोनी, बाड़मेर, राजस्थान - 344502',
  addressEn: 'Near Ramdev Mandir, Ambedkar Colony, Barmer, Rajasthan - 344502',
  instagram: 'https://www.instagram.com/pragyaclassesbmr/',
  youtube: 'https://www.youtube.com/@pragyaclassesbmr2281',
  app: 'https://play.google.com/store/apps/details?id=co.loki.qvgsl',
};

// Course Categories
export const CATEGORIES = [
  { id: 'all', label: 'सभी', labelEn: 'All' },
  { id: 'school-lecturer', label: 'स्कूल व्याख्याता', labelEn: 'School Lecturer' },
  { id: 'senior-teacher', label: 'वरिष्ठ शिक्षक', labelEn: 'Senior Teacher' },
  { id: 'net-jrf', label: 'NET/JRF', labelEn: 'NET/JRF' },
  { id: 'college-sahayak', label: 'कॉलेज सहायक आचार्य', labelEn: 'College Asst. Professor' },
  { id: 'reet', label: 'REET', labelEn: 'REET' },
  { id: 'sahitya', label: 'हिंदी साहित्य', labelEn: 'Hindi Literature' },
];

// Courses Data (from app screenshots)
export const COURSES = [
  {
    id: 1,
    title: 'संपूर्ण हिंदी व्याकरण',
    titleEn: 'Complete Hindi Grammar',
    description: 'सभी प्रतियोगी परीक्षाओं हेतु संपूर्ण हिंदी व्याकरण का कोर्स। व्याकरण के सभी टॉपिक्स विस्तार से कवर किए गए हैं।',
    category: 'all',
    price: 999,
    originalPrice: 4999,
    discount: 80,
    features: ['200+ वीडियो लेक्चर', 'PDF नोट्स', 'डाउट सपोर्ट', 'लाइफटाइम एक्सेस'],
    expiry: '15 Feb 2027',
    isNew: false,
    isFeatured: true,
    gradient: 'linear-gradient(135deg, #1E3A5F, #2B4F7E)',
  },
  {
    id: 2,
    title: 'स्कूल व्याख्याता हिंदी टेस्ट सीरीज़-02',
    titleEn: 'School Lecturer Hindi Test Series-02',
    description: '18 टेस्ट, 1900 प्रश्न। 12 विषय वस्तु टेस्ट + 04 माइनर टेस्ट + 02 मेगा टेस्ट।',
    category: 'school-lecturer',
    price: 299,
    originalPrice: 3000,
    discount: 90.03,
    features: ['18 टेस्ट', '1900 प्रश्न', '12 विषय वस्तु टेस्ट', '4 माइनर टेस्ट', '2 मेगा टेस्ट'],
    isNew: false,
    isFeatured: true,
    gradient: 'linear-gradient(135deg, #FF6B35, #FF9A6C)',
  },
  {
    id: 3,
    title: 'वरिष्ठ शिक्षक हिंदी टेस्ट सीरीज़-02',
    titleEn: 'Senior Teacher Hindi Test Series-02',
    description: '18 टेस्ट, 1900 प्रश्न। 12 विषय वस्तु टेस्ट + 04 माइनर टेस्ट + 02 मेगा टेस्ट।',
    category: 'senior-teacher',
    price: 299,
    originalPrice: 3000,
    discount: 90.03,
    features: ['18 टेस्ट', '1900 प्रश्न', '12 विषय वस्तु टेस्ट', '4 माइनर टेस्ट', '2 मेगा टेस्ट'],
    isNew: false,
    isFeatured: false,
    gradient: 'linear-gradient(135deg, #10B981, #34D399)',
  },
  {
    id: 4,
    title: 'वरिष्ठ शिक्षक हिंदी टेस्ट सीरीज़-01',
    titleEn: 'Senior Teacher Hindi Test Series-01',
    description: '15 टेस्ट, 1650 प्रश्न, 5 बार प्रयास। विषय वस्तु एवं माइनर/मेगा टेस्ट शामिल।',
    category: 'senior-teacher',
    price: 199,
    originalPrice: 3000,
    discount: 93.37,
    features: ['15 टेस्ट', '1650 प्रश्न', '5 बार प्रयास', '12 विषय वस्तु टेस्ट', '3 मेगा टेस्ट'],
    isNew: false,
    isFeatured: false,
    gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
  },
  {
    id: 5,
    title: 'स्कूल व्याख्याता हिंदी टेस्ट सीरीज़-01',
    titleEn: 'School Lecturer Hindi Test Series-01',
    description: '15 टेस्ट, 1650 प्रश्न, 5 बार प्रयास। विषय वस्तु एवं माइनर/मेगा टेस्ट शामिल।',
    category: 'school-lecturer',
    price: 199,
    originalPrice: 3000,
    discount: 93.37,
    features: ['15 टेस्ट', '1650 प्रश्न', '5 बार प्रयास', '12 विषय वस्तु टेस्ट', '3 मेगा टेस्ट'],
    isNew: false,
    isFeatured: true,
    gradient: 'linear-gradient(135deg, #EC4899, #F472B6)',
  },
  {
    id: 6,
    title: 'संपूर्ण हिंदी साहित्य इतिहास टेस्ट सीरीज़',
    titleEn: 'Complete Hindi Literature History Test Series',
    description: 'प्रज्ञा के 25 टेस्ट (सम्पूर्ण हिंदी साहित्येतिहास)। 1250 प्रश्न।',
    category: 'sahitya',
    price: 299,
    originalPrice: 1260,
    discount: 76.08,
    features: ['25 टेस्ट', '1250 प्रश्न', 'सम्पूर्ण साहित्येतिहास', 'CUET, UG-PG, NET/JRF'],
    isNew: false,
    isFeatured: false,
    gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
  },
  {
    id: 7,
    title: 'कॉलेज सहायक आचार्य हिंदी',
    titleEn: 'College Assistant Professor Hindi',
    description: 'कॉलेज सहायक आचार्य हिंदी प्रथम & द्वितीय प्रश्न पत्र। सम्पूर्ण सिलेबस कवर।',
    category: 'college-sahayak',
    price: 8999,
    originalPrice: 21000,
    discount: 57.15,
    features: ['प्रथम प्रश्न पत्र', 'द्वितीय प्रश्न पत्र', 'सम्पूर्ण सिलेबस', 'विस्तृत नोट्स'],
    isNew: true,
    isFeatured: true,
    gradient: 'linear-gradient(135deg, #1E3A5F, #3B82F6)',
  },
  {
    id: 8,
    title: 'हिंदी साहित्य का सांगठित इतिहास (तृतीय संस्करण)',
    titleEn: 'Organized History of Hindi Literature (3rd Edition)',
    description: 'हिंदी साहित्य का सांगठित इतिहास - पुस्तक। तृतीय संस्करण।',
    category: 'sahitya',
    price: 150,
    originalPrice: 600,
    discount: 75,
    features: ['तृतीय संस्करण', 'CUET, UG-PG', 'Asst. Professor', '2nd Grade, UGC-NET/JRF'],
    isNew: true,
    isFeatured: false,
    gradient: 'linear-gradient(135deg, #06B6D4, #22D3EE)',
  },
];

// Test Series Demo Questions (Hindi Grammar)
export const DEMO_QUESTIONS = [
  {
    id: 1,
    question: '"संदेश" शब्द में कौन-सा उपसर्ग है?',
    options: ['सम्', 'सन्', 'सं', 'सत्'],
    correct: 0,
    topic: 'उपसर्ग',
    explanation: '"संदेश" = सम् + देश। "सम्" उपसर्ग है जो "एक साथ" या "अच्छी तरह" का अर्थ देता है।',
  },
  {
    id: 2,
    question: '"निर्दोष" में कौन-सा उपसर्ग है?',
    options: ['नि', 'निर्', 'निस्', 'नी'],
    correct: 1,
    topic: 'उपसर्ग',
    explanation: '"निर्दोष" = निर् + दोष। "निर्" उपसर्ग "बिना" या "रहित" का अर्थ देता है।',
  },
  {
    id: 3,
    question: '"रसोईघर" में कौन-सा समास है?',
    options: ['द्वंद्व समास', 'तत्पुरुष समास', 'कर्मधारय समास', 'बहुव्रीहि समास'],
    correct: 1,
    topic: 'समास',
    explanation: '"रसोईघर" = रसोई के लिए घर - तत्पुरुष समास (संबंध तत्पुरुष)।',
  },
  {
    id: 4,
    question: '"चौराहा" में कौन-सा समास है?',
    options: ['द्विगु समास', 'द्वंद्व समास', 'अव्ययीभाव समास', 'तत्पुरुष समास'],
    correct: 0,
    topic: 'समास',
    explanation: '"चौराहा" = चार राहों का समूह - द्विगु समास (संख्यावाचक पूर्वपद)।',
  },
  {
    id: 5,
    question: '"उपकार" शब्द का विलोम क्या है?',
    options: ['सहकार', 'अपकार', 'निराकार', 'परोपकार'],
    correct: 1,
    topic: 'विलोम शब्द',
    explanation: '"उपकार" का विलोम "अपकार" है। उप = भलाई, अप = बुराई।',
  },
  {
    id: 6,
    question: '"जो कम बोलता हो" - इसके लिए एक शब्द क्या होगा?',
    options: ['मितभाषी', 'वाचाल', 'अल्पज्ञ', 'मूक'],
    correct: 0,
    topic: 'अनेक शब्दों के लिए एक शब्द',
    explanation: '"मितभाषी" = जो कम बोलता हो। मित = कम, भाषी = बोलने वाला।',
  },
  {
    id: 7,
    question: '"श्रृंगार रस" का स्थायी भाव क्या है?',
    options: ['हास', 'रति', 'शोक', 'क्रोध'],
    correct: 1,
    topic: 'रस',
    explanation: 'श्रृंगार रस का स्थायी भाव "रति" (प्रेम) है।',
  },
  {
    id: 8,
    question: '"उत्प्रेक्षा" अलंकार की पहचान किससे होती है?',
    options: ['जैसा, सा', 'मानो, जानो, जनु', 'रूपक कथन', 'अतिशयोक्ति'],
    correct: 1,
    topic: 'अलंकार',
    explanation: 'उत्प्रेक्षा अलंकार में "मानो", "जानो", "जनु", "मनु" आदि वाचक शब्द प्रयुक्त होते हैं।',
  },
  {
    id: 9,
    question: '"कबीर" किस काल के कवि हैं?',
    options: ['आदिकाल', 'भक्तिकाल', 'रीतिकाल', 'आधुनिक काल'],
    correct: 1,
    topic: 'हिंदी साहित्य इतिहास',
    explanation: 'कबीर भक्तिकाल (संवत् 1375-1700 वि.) के निर्गुण भक्ति धारा के ज्ञानाश्रयी शाखा के प्रमुख कवि हैं।',
  },
  {
    id: 10,
    question: '"हिंदी साहित्य का इतिहास" के लेखक कौन हैं?',
    options: ['हजारी प्रसाद द्विवेदी', 'रामचंद्र शुक्ल', 'महावीर प्रसाद द्विवेदी', 'भारतेंदु हरिश्चंद्र'],
    correct: 1,
    topic: 'हिंदी साहित्य इतिहास',
    explanation: '"हिंदी साहित्य का इतिहास" आचार्य रामचंद्र शुक्ल जी की प्रसिद्ध रचना है (1929)।',
  },
  {
    id: 11,
    question: '"मैला आंचल" उपन्यास के लेखक कौन हैं?',
    options: ['प्रेमचंद', 'फणीश्वरनाथ रेणु', 'यशपाल', 'जैनेंद्र कुमार'],
    correct: 1,
    topic: 'हिंदी साहित्य',
    explanation: '"मैला आंचल" (1954) फणीश्वरनाथ रेणु का प्रसिद्ध आंचलिक उपन्यास है।',
  },
  {
    id: 12,
    question: '"वीर रस" का स्थायी भाव क्या है?',
    options: ['क्रोध', 'उत्साह', 'भय', 'विस्मय'],
    correct: 1,
    topic: 'रस',
    explanation: 'वीर रस का स्थायी भाव "उत्साह" है।',
  },
  {
    id: 13,
    question: '"जहाँ उपमेय को उपमान का रूप दिया जाए" वहाँ कौन-सा अलंकार होता है?',
    options: ['उपमा', 'रूपक', 'उत्प्रेक्षा', 'अतिशयोक्ति'],
    correct: 1,
    topic: 'अलंकार',
    explanation: 'रूपक अलंकार में उपमेय पर उपमान का आरोप किया जाता है। जैसे: "मुख चंद्र है"।',
  },
  {
    id: 14,
    question: '"सूरसागर" किसकी रचना है?',
    options: ['तुलसीदास', 'सूरदास', 'मीराबाई', 'रसखान'],
    correct: 1,
    topic: 'हिंदी साहित्य',
    explanation: '"सूरसागर" सूरदास जी की प्रमुख रचना है जिसमें कृष्ण की बाल-लीलाओं का वर्णन है।',
  },
  {
    id: 15,
    question: '"संधि" के कितने भेद होते हैं?',
    options: ['2', '3', '4', '5'],
    correct: 1,
    topic: 'संधि',
    explanation: 'संधि के 3 भेद होते हैं: 1. स्वर संधि, 2. व्यंजन संधि, 3. विसर्ग संधि।',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'राहुल शर्मा',
    nameEn: 'Rahul Sharma',
    role: 'स्कूल व्याख्याता चयनित',
    roleEn: 'Selected as School Lecturer',
    text: 'प्रज्ञा क्लासेज की टेस्ट सीरीज़ बहुत ही उपयोगी रही। प्रश्नों का स्तर परीक्षा के अनुरूप था। Dr. धनदाय सर का मार्गदर्शन अमूल्य है।',
    avatar: 'RS',
    rating: 5,
  },
  {
    id: 2,
    name: 'प्रिया मेघवाल',
    nameEn: 'Priya Meghwal',
    role: 'वरिष्ठ शिक्षक चयनित',
    roleEn: 'Selected as Senior Teacher',
    text: 'हिंदी व्याकरण और साहित्य की इतनी गहरी समझ कहीं और नहीं मिलती। प्रज्ञा क्लासेज ने मेरी तैयारी को नई दिशा दी।',
    avatar: 'PM',
    rating: 5,
  },
  {
    id: 3,
    name: 'विकास चौधरी',
    nameEn: 'Vikas Choudhary',
    role: 'NET/JRF क्वालिफाइड',
    roleEn: 'NET/JRF Qualified',
    text: 'सर के नोट्स और टेस्ट सीरीज़ के बिना NET क्वालिफाय करना मुश्किल था। बहुत कम कीमत में बेस्ट कंटेंट मिला।',
    avatar: 'VC',
    rating: 5,
  },
  {
    id: 4,
    name: 'सुनीता कुमारी',
    nameEn: 'Sunita Kumari',
    role: 'REET उत्तीर्ण',
    roleEn: 'REET Qualified',
    text: 'ऑनलाइन क्लासेज की क्वालिटी बहुत अच्छी है। हर टॉपिक को बहुत सरल भाषा में समझाया जाता है। बाड़मेर का गर्व है प्रज्ञा क्लासेज!',
    avatar: 'SK',
    rating: 5,
  },
  {
    id: 5,
    name: 'महेश जोशी',
    nameEn: 'Mahesh Joshi',
    role: 'कॉलेज सहायक आचार्य चयनित',
    roleEn: 'Selected as Asst. Professor',
    text: 'कॉलेज सहायक आचार्य की तैयारी के लिए प्रज्ञा क्लासेज का कोर्स सबसे बेहतरीन है। Dr. धनदाय सर का अनुभव और ज्ञान अद्वितीय है।',
    avatar: 'MJ',
    rating: 5,
  },
];

// YouTube Videos (real channel videos)
export const YOUTUBE_VIDEOS = [
  {
    id: 'wrVU37kTN_Y',
    title: 'चंदबरदाई : पृथ्वीराज रासो — विस्तृत व्याख्या',
    thumbnail: 'https://img.youtube.com/vi/wrVU37kTN_Y/hqdefault.jpg',
  },
  {
    id: 'tIEMJEd90eE',
    title: 'स्कूल व्याख्याता हिंदी की अनुमानित अंतिम मेरिट — Dr. Dhanday Sir',
    thumbnail: 'https://img.youtube.com/vi/tIEMJEd90eE/hqdefault.jpg',
  },
  {
    id: 'J7vw2ZhABmc',
    title: 'देवनागरी लिपि की विशेषताएँ तथा मानकीकरण',
    thumbnail: 'https://img.youtube.com/vi/J7vw2ZhABmc/hqdefault.jpg',
  },
];

// Free Resources
export const FREE_RESOURCES = {
  pdfs: [
    { id: 1, title: 'हिंदी व्याकरण — उपसर्ग एवं प्रत्यय नोट्स', pages: 24, size: '2.1 MB', topic: 'व्याकरण' },
    { id: 2, title: 'अलंकार सम्पूर्ण नोट्स (PDF)', pages: 18, size: '1.8 MB', topic: 'काव्यशास्त्र' },
    { id: 3, title: 'संधि — स्वर, व्यंजन, विसर्ग संधि नोट्स', pages: 15, size: '1.5 MB', topic: 'व्याकरण' },
    { id: 4, title: 'छंद विवेचन — मात्रिक एवं वर्णिक छंद', pages: 20, size: '2.3 MB', topic: 'काव्यशास्त्र' },
    { id: 5, title: 'हिंदी साहित्य इतिहास — आदिकाल से आधुनिक काल', pages: 45, size: '4.2 MB', topic: 'साहित्य' },
  ],
  videos: [
    { id: 1, title: 'समास — Complete Chapter in One Video', duration: '45:00', topic: 'व्याकरण' },
    { id: 2, title: 'रस — सभी 9 रस विस्तार से', duration: '38:00', topic: 'काव्यशास्त्र' },
    { id: 3, title: 'विलोम शब्द — 500+ Important Words', duration: '55:00', topic: 'व्याकरण' },
  ],
};

// Special Offer
export const SPECIAL_OFFER = {
  title: 'स्पेशल ऑफर',
  subtitle: 'सभी ऑनलाइन टेस्ट सीरीज़ पर महाबचत ऑफर!',
  endDate: '2026-04-30T23:59:59',
  deals: [
    { name: 'स्कूल व्याख्याता टेस्ट सीरीज़-01', original: 3000, offer: 199 },
    { name: 'वरिष्ठ शिक्षक टेस्ट सीरीज़-01', original: 3000, offer: 199 },
    { name: 'स्कूल व्याख्याता टेस्ट सीरीज़-02', original: 3000, offer: 399 },
    { name: 'वरिष्ठ शिक्षक टेस्ट सीरीज़-02', original: 3000, offer: 399 },
  ],
};

// Navigation items
export const NAV_ITEMS = [
  { label: 'होम', labelEn: 'Home', href: '/' },
  { label: 'कोर्स', labelEn: 'Courses', href: '/courses.html' },
  { label: 'फ्री रिसोर्सेज', labelEn: 'Free Resources', href: '/free-resources.html' },
  { label: 'टेस्ट सीरीज़', labelEn: 'Test Series', href: '/test-series.html' },
  { label: 'हमारे बारे में', labelEn: 'About', href: '/about.html' },
  { label: 'संपर्क', labelEn: 'Contact', href: '/contact.html' },
];

// Generate WhatsApp payment link
export function getWhatsAppPaymentLink(courseName, price) {
  const message = encodeURIComponent(
    `🙏 नमस्कार! मुझे "${courseName}" कोर्स खरीदना है।\n💰 कीमत: ₹${price}\n\nकृपया पेमेंट की जानकारी दें।`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

// Generate WhatsApp contact link
export function getWhatsAppLink(message = '') {
  const msg = encodeURIComponent(message || 'नमस्कार! मुझे प्रज्ञा क्लासेज के बारे में जानकारी चाहिए।');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
