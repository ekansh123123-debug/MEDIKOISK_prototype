import { QuestionNode, ComplaintCategory } from '../types';

export const CHIEF_COMPLAINT_PRESETS = [
  { id: 'abdominal_pain', label: 'Stomach / Abdominal Pain', hi: 'पेट में दर्द', mr: 'पोटदुखी', ta: 'வயிற்று வலி', bn: 'পেটে ব্যথা', te: 'కడుపు నొప్పి', icon: 'Activity', desc: 'Epigastric, cramping, lower belly or bloating' },
  { id: 'chest_pain', label: 'Chest Pain / Discomfort', hi: 'छाती में दर्द या भारीपन', mr: 'छातीत दुखणे', ta: 'மார்பு வலி / அசௌகரியம்', bn: 'বুকে ব্যথা বা অস্বস্তি', te: 'ఛాతీ నొప్పి / అసౌకర్యం', icon: 'HeartPulse', desc: 'Tightness, burning, retrosternal ache' },
  { id: 'fever', label: 'Fever & Chills', hi: 'बुखार और कंपकंपी', mr: 'ताप आणि थंडी वाजणे', ta: 'காய்ச்சல் மற்றும் நடுக்கம்', bn: 'জ্বর ও কাঁপুনি', te: 'జ్వరం & వణుకు', icon: 'Thermometer', desc: 'Elevated temperature, weakness, bodyache' },
  { id: 'cough_breathing', label: 'Cough / Breathlessness', hi: 'खांसी या सांस लेने में परेशानी', mr: 'खोकला / दम लागणे', ta: 'இருமல் / மூச்சுத்திணறல்', bn: 'কাশি / শ্বাসকষ্ট', te: 'దగ్గు / శ్వాస ఆడకపోవడం', icon: 'Wind', desc: 'Dry/wet cough, wheezing, throat ache' },
  { id: 'headache', label: 'Severe Headache', hi: 'सिरदर्द', mr: 'डोकेदुखी', ta: 'கடுமையான தலைவலி', bn: 'তীব্র মাথাব্যথা', te: 'తీవ్రమైన తలనొప్పి', icon: 'Brain', desc: 'Throbbing, tension, migraine-like pain' },
  { id: 'vomiting_diarrhea', label: 'Vomiting / Loose Motions', hi: 'उल्टी या दस्त', mr: 'उलटी आणि जुलाब', ta: 'வாந்தி / வயிற்றுப்போக்கு', bn: 'বমি / পাতলা পায়খানা', te: 'వాంతులు / విరేచనాలు', icon: 'AlertCircle', desc: 'Dehydration risk, acute gastrointestinal distress' },
  { id: 'skin_rash', label: 'Skin Rash / Allergy', hi: 'त्वचा पर चकत्ते या खुजली', mr: 'त्वचेवर खाज किंवा पुरळ', ta: 'தோல் தடிப்புகள் / அரிப்பு', bn: 'চামড়ায় ফুসকুড়ি বা চুলকানি', te: 'చర్మ దద్దుర్లు / దురద', icon: 'Sparkles', desc: 'Itching, lesions, urticaria' },
  { id: 'injury_trauma', label: 'Injury / Sprain / Trauma', hi: 'चोट या मोच', mr: 'जखम / मुका मार', ta: 'காயம் / சுளுக்கு', bn: 'আঘাত / মচকানো', te: 'గాయం / బెణుకు', icon: 'Bandage', desc: 'Physical fall, blunt impact, swelling' }
];

export const ADAPTIVE_QUESTION_REGISTRY: Record<string, QuestionNode> = {
  // ==========================================
  // ABDOMINAL / EPIGASTRIC PAIN SEQUENCE
  // ==========================================
  'ABD_01_ONSET_TIME': {
    id: 'ABD_01_ONSET_TIME',
    category: 'abdominal_pain',
    clinicalDimension: 'duration',
    text: 'When did your abdominal pain first start?',
    translations: {
      en: 'When did your abdominal pain first start?',
      hi: 'आपके पेट में दर्द कब शुरू हुआ था?',
      mr: 'तुमच्या पोटात दुखणे केव्हा सुरू झाले?',
      ta: 'உங்கள் வயிற்று வலி எப்போது தொடங்கியது?',
      bn: 'আপনার পেটে ব্যথা কখন শুরু হয়েছিল?',
      te: 'మీ కడుపు నొప్పి ఎప్పుడు మొదలైంది?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.95,
    required: true,
    options: [
      { id: 'hours', label: 'A few hours ago today', hi: 'आज कुछ घंटे पहले', mr: 'आज काही तासांपूर्वी' },
      { id: '1_to_3_days', label: '1 to 3 days ago', hi: '1 से 3 दिन पहले', mr: '१ ते ३ दिवसांपूर्वी' },
      { id: '1_to_2_weeks', label: '1 to 2 weeks ago', hi: '1 से 2 सप्ताह पहले', mr: '१ ते २ आठवड्यांपूर्वी' },
      { id: 'chronic_months', label: 'More than a month (Recurring)', hi: 'एक महीने से ज्यादा समय से (बार-बार)', mr: 'महिन्यापेक्षा जास्त काळ' }
    ]
  },
  'ABD_02_ONSET_MODE': {
    id: 'ABD_02_ONSET_MODE',
    category: 'abdominal_pain',
    clinicalDimension: 'onset',
    text: 'Did the pain start suddenly (within seconds/minutes) or gradually build up?',
    translations: {
      en: 'Did the pain start suddenly or build up gradually?',
      hi: 'क्या दर्द अचानक तीव्र गति से शुरू हुआ या धीरे-धीरे बढ़ा?',
      mr: 'वेदना अचानक सुरू झाली की हळूहळू वाढली?',
      ta: 'வலி திடீரென்று தொடங்கியதா அல்லது மெதுவாக அதிகரித்ததா?',
      bn: 'ব্যথা কি হঠাৎ শুরু হয়েছিল নাকি ধীরে ধীরে বেড়েছিল?',
      te: 'నొప్పి అకస్మాత్తుగా మొదలైందా లేదా క్రమంగా పెరిగిందా?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.92,
    required: true,
    options: [
      { id: 'sudden_acute', label: 'Sudden explosive onset (within seconds)', hi: 'अचानक तीव्र विस्फोट की तरह', isRedFlag: false },
      { id: 'gradual_progressive', label: 'Gradual build-up over hours/days', hi: 'घंटों या दिनों में धीरे-धीरे' },
      { id: 'intermittent_wave', label: 'Came and went in waves (colicky)', hi: 'लहरों की तरह रुक-रुक कर' }
    ]
  },
  'ABD_03_LOCATION': {
    id: 'ABD_03_LOCATION',
    category: 'abdominal_pain',
    clinicalDimension: 'location',
    text: 'Where is the pain located most prominently?',
    translations: {
      en: 'Where is the pain located most prominently?',
      hi: 'पेट में दर्द सबसे ज्यादा किस हिस्से में महसूस हो रहा है?',
      mr: 'पोटात नेमके कोठे सर्वात जास्त दुखत आहे?',
      ta: 'வயிற்றில் வலி எங்கு அதிகமாக உள்ளது?',
      bn: 'পেটের কোন অংশে ব্যথা সবচেয়ে বেশি হচ্ছে?',
      te: 'కడుపులో నొప్పి ప్రధానంగా ఎక్కడ ఉంది?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.94,
    required: true,
    options: [
      { id: 'epigastric_upper_mid', label: 'Upper middle / below ribs (Epigastric)', hi: 'पेट के ऊपरी मध्य भाग में (छाती के नीचे)' },
      { id: 'right_upper_quad', label: 'Right upper side (Under right rib)', hi: 'दाईं ओर पसलियों के नीचे' },
      { id: 'right_lower_quad', label: 'Right lower side (Appendix region)', hi: 'पेट के निचले दाएं हिस्से में' },
      { id: 'periumbilical_center', label: 'Around the navel / belly button', hi: 'नाभि के चारों ओर' },
      { id: 'diffuse_all_over', label: 'All over the abdomen / generalized', hi: 'पूरे पेट में फैला हुआ' }
    ]
  },
  'ABD_04_CHARACTER': {
    id: 'ABD_04_CHARACTER',
    category: 'abdominal_pain',
    clinicalDimension: 'character',
    text: 'What does the pain feel like?',
    translations: {
      en: 'What does the pain feel like?',
      hi: 'दर्द किस प्रकार का महसूस होता है?',
      mr: 'दुखण्याचा प्रकार कसा आहे?',
      ta: 'வலி எப்படி உணரப்படுகிறது?',
      bn: 'ব্যথা কেমন ধরণের অনুভূতি দেয়?',
      te: 'నొప్పి ఏ రకమైన అనుభూతిని ఇస్తుంది?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.88,
    required: true,
    options: [
      { id: 'burning_acidity', label: 'Burning or acidity sensation', hi: 'जलन या एसिडिटी जैसा दर्द' },
      { id: 'cramping_spasm', label: 'Twisting / Cramping spasms', hi: 'मरोड़ या ऐंठन जैसा दर्द' },
      { id: 'dull_aching', label: 'Continuous dull ache / heaviness', hi: 'धीमा लगातार भारी दर्द' },
      { id: 'sharp_stabbing', label: 'Sharp, knife-like stabbing pain', hi: 'तेज चुभने वाला दर्द' }
    ]
  },
  'ABD_05_RADIATION': {
    id: 'ABD_05_RADIATION',
    category: 'abdominal_pain',
    clinicalDimension: 'radiation',
    text: 'Does the pain radiate or travel anywhere else?',
    translations: {
      en: 'Does the pain travel or radiate anywhere else?',
      hi: 'क्या यह दर्द पीठ, कंधे या कमर की तरफ फैलता है?',
      mr: 'हे दुखणे पाठीत किंवा खांद्याकडे पसरते का?',
      ta: 'வலி முதுகு அல்லது தோள்பட்டைக்கு பரவுகிறதா?',
      bn: 'ব্যথা কি পিঠে বা কাঁধে ছড়িয়ে পড়ে?',
      te: 'నొప్పి వీపుకి లేదా భుజాలకు వ్యాపిస్తుందా?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.86,
    required: true,
    options: [
      { id: 'radiates_back', label: 'Radiates straight through to the back', hi: 'सीधे पीठ की तरफ फैलता है' },
      { id: 'radiates_shoulder', label: 'Radiates up to the right shoulder', hi: 'दाएं कंधे की तरफ उठता है' },
      { id: 'radiates_groin', label: 'Radiates downward toward the groin', hi: 'कमर और जांघ के निचले हिस्से की तरफ' },
      { id: 'no_radiation', label: 'No radiation (stays localized)', hi: 'कहीं नहीं फैलता, वहीं रहता है' }
    ]
  },
  'ABD_06_FOOD_RELATION': {
    id: 'ABD_06_FOOD_RELATION',
    category: 'abdominal_pain',
    clinicalDimension: 'aggravating',
    text: 'How does eating food affect the pain?',
    translations: {
      en: 'How does eating food affect the pain?',
      hi: 'खाना खाने से दर्द पर क्या असर पड़ता है?',
      mr: 'जेवल्यानंतर दुखण्यावर काय परिणाम होतो?',
      ta: 'உணவு சாப்பிடுவது வலியை எவ்வாறு பாதிக்கிறது?',
      bn: 'খাবার খাওয়ার সাথে ব্যথার কি সম্পর্ক?',
      te: 'ఆహారం తీసుకోవడం వల్ల నొప్పి పెరుగుతుందా?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.93,
    required: true,
    options: [
      { id: 'worse_after_food', label: 'Worsens 30–60 mins after meals', hi: 'खाना खाने के 30-60 मिनट बाद दर्द बढ़ जाता है' },
      { id: 'relieved_by_food', label: 'Improves after eating, worse on empty stomach', hi: 'खाने के बाद राहत मिलती है, खाली पेट बढ़ता है' },
      { id: 'spicy_fatty_trigger', label: 'Strongly aggravated by oily or spicy foods', hi: 'तले-भुने या तीखे खाने से बहुत बढ़ता है' },
      { id: 'no_relation', label: 'No clear relationship to eating', hi: 'खाने से कोई खास संबंध नहीं' }
    ]
  },
  'ABD_07_SEVERITY_SCALE': {
    id: 'ABD_07_SEVERITY_SCALE',
    category: 'abdominal_pain',
    clinicalDimension: 'severity',
    text: 'On a scale of 1 to 10, how severe is your pain right now?',
    translations: {
      en: 'On a scale of 1 to 10, how severe is your pain?',
      hi: '1 से 10 के पैमाने पर, आपका दर्द कितना गंभीर है?',
      mr: '१ ते १० च्या प्रमाणात, वेदना किती तीव्र आहेत?',
      ta: '1 முதல் 10 வரை, வலி எவ்வளவு தீவிரமானது?',
      bn: '১ থেকে ১০ এর স্কেলে আপনার ব্যথা কতটা তীব্র?',
      te: '1 నుండి 10 స్కేలులో మీ నొప్పి తీవ్రత ఎంత?'
    },
    inputType: 'scale',
    minScale: 1,
    maxScale: 10,
    scaleLabels: { min: '1 - Mild discomfort', max: '10 - Unbearable agony' },
    entropyWeight: 0.90,
    required: true
  },
  'ABD_08_ASSOCIATED_GI': {
    id: 'ABD_08_ASSOCIATED_GI',
    category: 'abdominal_pain',
    clinicalDimension: 'associated_symptoms',
    text: 'Are you experiencing any of these associated symptoms? (Select all that apply)',
    translations: {
      en: 'Are you experiencing any of these associated symptoms?',
      hi: 'क्या आपको इनमें से कोई अन्य लक्षण भी हैं?',
      mr: 'खालीलपैकी इतर कोणती लक्षणे जाणवत आहेत का?',
      ta: 'பின்வரும் பிற அறிகுறிகள் ஏதேனும் உள்ளதா?',
      bn: 'আপনার কি এর সাথে অন্য কোন লক্ষণ আছে?',
      te: 'కింది ఇతర లక్షణాలు ఏమైనా ఉన్నాయా?'
    },
    inputType: 'multi-choice',
    entropyWeight: 0.91,
    required: true,
    options: [
      { id: 'nausea_vomiting', label: 'Nausea or Vomiting', hi: 'उल्टी या जी मिचलाना' },
      { id: 'fever_chills', label: 'Fever or Chills', hi: 'बुखार या कंपकंपी' },
      { id: 'loss_of_appetite', label: 'Loss of Appetite / Early Fullness', hi: 'भूख न लगना' },
      { id: 'constipation', label: 'Constipation or Inability to pass gas', hi: 'कब्ज या गैस न निकलना' },
      { id: 'loose_stools', label: 'Loose motions or watery stools', hi: 'दस्त या पतला शौच' },
      { id: 'none', label: 'None of these', hi: 'इनमें से कोई नहीं' }
    ]
  },
  'ABD_09_RED_FLAG_CHECK': {
    id: 'ABD_09_RED_FLAG_CHECK',
    category: 'abdominal_pain',
    clinicalDimension: 'associated_symptoms',
    text: 'Have you noticed any black tarry stools, vomiting blood, or sudden dizziness?',
    translations: {
      en: 'Have you noticed black tarry stools, vomiting blood, or fainting?',
      hi: 'क्या काला मल, खून की उल्टी या चक्कर आकर बेहोशी हुई है?',
      mr: 'काळा शौच, रक्ताची उलटी किंवा चक्कर येणे असे काही झाले आहे का?',
      ta: 'மலத்தில் இரத்தம் அல்லது மயக்கம் ஏற்பட்டுள்ளதா?',
      bn: 'কালো মল বা রক্তবমি হয়েছে কি?',
      te: 'మలంలో రక్తం లేదా కళ్ళు తిరగడం జరిగిందా?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.99,
    required: true,
    options: [
      { id: 'gi_bleed_yes', label: 'Yes - I noticed black stools or blood in vomit', hi: 'हाँ - काला मल या उल्टी में खून दिखा', isRedFlag: true, redFlagReason: 'Possible active Upper GI Bleeding' },
      { id: 'gi_bleed_no', label: 'No - No blood or fainting noticed', hi: 'नहीं - ऐसा कोई लक्षण नहीं है' }
    ]
  },
  'ABD_10_PRIOR_MEDS': {
    id: 'ABD_10_PRIOR_MEDS',
    category: 'abdominal_pain',
    clinicalDimension: 'relieving',
    text: 'Have you taken any medication (such as antacids or pain killers) for this episode?',
    translations: {
      en: 'Have you taken any medication for this pain?',
      hi: 'क्या आपने इस दर्द के लिए कोई दवाई (जैसे एंटासिड या दर्दनिवारक) ली है?',
      mr: 'या दुखण्यासाठी तुम्ही कोणते औषध (उदा. ॲन्टॅसिड किंवा पेनकिलर) घेतले आहे का?',
      ta: 'இந்த வலிக்கு ஏதேனும் மாத்திரை சாப்பிட்டீர்களா?',
      bn: 'এই ব্যথার জন্য কোনো ওষুধ খেয়েছেন কি?',
      te: 'ఈ నొప్పి కోసం ఏదైనా మందులు వేసుకున్నారా?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.85,
    required: true,
    options: [
      { id: 'antacid_omeprazole', label: 'Took Omeprazole / Antacid (Provided partial relief)', hi: 'ओमेप्राजोल या एंटासिड ली थी (थोड़ा आराम मिला)' },
      { id: 'nsaid_painkiller', label: 'Took Painkiller tablet (e.g. Brufen/Combiflam)', hi: 'दर्दनिवारक गोली ली थी (जैसे ब्रूफेन)' },
      { id: 'home_ayurvedic', label: 'Tried herbal / home remedy (Ajwain, Hing, etc.)', hi: 'घरेलू या आयुर्वेदिक नुस्खा आजमाया' },
      { id: 'no_meds', label: 'Have not taken any medicine yet', hi: 'अभी तक कोई दवाई नहीं ली' }
    ]
  },

  // ==========================================
  // CHEST PAIN SEQUENCE (CARDIAC VS NON-CARDIAC)
  // ==========================================
  'CHEST_01_NATURE': {
    id: 'CHEST_01_NATURE',
    category: 'chest_pain',
    clinicalDimension: 'character',
    text: 'How does the chest sensation feel?',
    translations: {
      en: 'How does the chest sensation feel?',
      hi: 'छाती में कैसा महसूस हो रहा है?',
      mr: 'छातीत नक्की कसे दुखत आहे?',
      ta: 'நெஞ்சு வலி எப்படி உணரப்படுகிறது?',
      bn: 'বুকে কেমন ব্যথা বা অস্বস্তি হচ্ছে?',
      te: 'ఛాతీలో నొప్పి ఎలా ఉంది?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.99,
    required: true,
    options: [
      { id: 'crushing_pressure', label: 'Heavy squeezing, tightness, like an elephant sitting on chest', hi: 'छाती पर भारी वजन या जकड़न जैसा', isRedFlag: true, redFlagReason: 'Suspicion of Acute Coronary Syndrome' },
      { id: 'burning_reflux', label: 'Burning sensation rising behind breastbone after meals', hi: 'खाने के बाद छाती के बीचों-बीच जलन (एसिडिटी)' },
      { id: 'sharp_pleuritic', label: 'Sharp prick that worsens when taking a deep breath or coughing', hi: 'गहरी सांस लेने या खांसने पर चुभने वाला दर्द' },
      { id: 'musculoskeletal', label: 'Tender when pressing on the chest ribs', hi: 'पसलियों पर छूने या दबाने से दर्द' }
    ]
  },
  'CHEST_02_RADIATION': {
    id: 'CHEST_02_RADIATION',
    category: 'chest_pain',
    clinicalDimension: 'radiation',
    text: 'Is the discomfort spreading to your left arm, shoulder, or jaw?',
    translations: {
      en: 'Is the discomfort spreading to your left arm, shoulder, or jaw?',
      hi: 'क्या यह दर्द बाएं हाथ, कंधे या जबड़े की तरफ फैल रहा है?',
      mr: 'वेदना डाव्या हाताकडे, खांद्याकडे किंवा जबड्याकडे जात आहेत का?',
      ta: 'வலி இடது கை, தோள்பட்டை அல்லது தாடைக்கு பரவுகிறதா?',
      bn: 'ব্যথা কি বাম হাত বা চোয়ালে ছড়িয়ে পড়ছে?',
      te: 'నొప్పి ఎడమ చేయి, భుజం లేదా దవడకు వ్యాపిస్తుందా?'
    },
    inputType: 'single-choice',
    entropyWeight: 0.99,
    required: true,
    options: [
      { id: 'spreads_left_arm_jaw', label: 'Yes - Spreading to left arm and/or jaw', hi: 'हाँ - बाएं हाथ या जबड़े में फैल रहा है', isRedFlag: true, redFlagReason: 'Angina / ACS radiation pattern' },
      { id: 'no_radiation', label: 'No - Confined to one small spot', hi: 'नहीं - केवल एक ही जगह पर है' }
    ]
  }
};
