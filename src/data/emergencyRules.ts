import { EmergencyRedFlagRule } from '../types';

export const EMERGENCY_RED_FLAG_RULES: EmergencyRedFlagRule[] = [
  {
    id: 'RED_CARDIO_01',
    category: 'cardiovascular',
    triggerKeywords: [
      'chest pain', 'radiating to left arm', 'radiating to jaw', 'sweating', 
      'diaphoresis', 'crushing chest', 'heart attack', 'chhati me dard', 
      'baaye haath me dard', 'paseena', 'छाती में दर्द', 'बाएं हाथ में दर्द'
    ],
    triggerPhrases: [
      'crushing retrosternal chest pain',
      'chest pain radiating to left arm',
      'chest pain radiating to jaw',
      'severe diaphoresis with chest pressure',
      'chhati me tez dard aur paseena',
      'baaye haath me dard ho raha hai'
    ],
    severityLevel: 'CRITICAL_RED',
    emergencyDirectives: 'EMERGENCY: Immediate suspected Acute Coronary Syndrome / Myocardial Infarction. Direct patient to Casualty / Emergency Resuscitation Bay immediately. ECG and troponin stat.',
    spokenGuidance: {
      en: 'Emergency detected. Your symptoms require immediate medical intervention. Please proceed to the Emergency Casualty Ward immediately.',
      hi: 'आपातकालीन स्थिति पाई गई है। आपके लक्षण तुरंत डॉक्टर की देखरेख की मांग करते हैं। कृपया तुरंत इमरजेंसी/आकस्मिक चिकित्सा कक्ष में जाएं।',
      mr: 'तातडीची वैद्यकीय स्थिती आढळली आहे. कृपया त्वरित अतिदक्षता / अपघात विभागात जा.',
      ta: 'அவசர சிகிச்சை தேவைப்படுகிறது. உடனடியாக அவசர சிகிச்சை பிரிவுக்கு செல்லவும்.',
      bn: 'জরুরি অবস্থা সনাক্ত করা হয়েছে। দয়া করে অবিলম্বে জরুরি বিভাগে যান।',
      te: 'అత్యవసర పరిస్థితి గుర్తించబడింది. దయచేసి వెంటనే అత్యవసర విభాగానికి వెళ్ళండి.'
    }
  },
  {
    id: 'RED_NEURO_01',
    category: 'neurological',
    triggerKeywords: [
      'facial droop', 'one-sided weakness', 'speech difficulty', 'slurred speech',
      'sudden weakness', 'stroke', 'face numb', 'bolne me dikkat', 'munh tedha',
      'लकवा', 'बोलने में परेशानी', 'एक तरफ कमजोरी'
    ],
    triggerPhrases: [
      'sudden facial droop',
      'unilateral arm weakness',
      'sudden loss of speech',
      'slurred speech and confusion',
      'ek taraf ka haath kaam nahi kar raha'
    ],
    severityLevel: 'CRITICAL_RED',
    emergencyDirectives: 'EMERGENCY: Suspected Acute Ischemic Stroke / CVA within thrombolysis window. Transfer patient to Stroke Triage / CT Neuro stat.',
    spokenGuidance: {
      en: 'Immediate stroke alert. Please proceed to the Emergency Department at once for urgent neuroimaging.',
      hi: 'स्ट्रोक के लक्षण पाए गए हैं। तुरंत आपातकालीन कक्ष में जाएं और डॉक्टर को सूचित करें।',
      mr: 'स्ट्रोकची लक्षणे आढळली आहेत. त्वरित आपत्कालीन विभागाशी संपर्क साधा.',
      ta: 'பக்கவாத அறிகுறிகள் கண்டறியப்பட்டுள்ளன. உடனே அவசர சிகிச்சைக்கு செல்லவும்.',
      bn: 'স্ট্রোকের লক্ষণ সনাক্ত হয়েছে। অবিলম্বে জরুরি বিভাগে যোগাযোগ করুন।',
      te: 'పక్షవాతం లక్షణాలు కనిపించాయి. వెంటనే ఎమర్జెన్సీ విభాగానికి వెళ్లండి.'
    }
  },
  {
    id: 'RED_RESP_01',
    category: 'respiratory',
    triggerKeywords: [
      'cannot breathe', 'severe breathlessness', 'stridor', 'gasping', 
      'blue lips', 'cyanosis', 'choking', 'saans nahi aa rahi', 'दम घुट रहा है',
      'सांस फूलना'
    ],
    triggerPhrases: [
      'unable to breathe while resting',
      'severe resting dyspnea',
      'gasping for air and cyanosis',
      'saans lene me bahut takleef'
    ],
    severityLevel: 'CRITICAL_RED',
    emergencyDirectives: 'EMERGENCY: Acute Respiratory Failure / Impending Airway Compromise. Immediate high-flow oxygen and nebulization in Red Zone.',
    spokenGuidance: {
      en: 'Critical breathing difficulty detected. Please proceed straight to the Emergency Ward for oxygen support.',
      hi: 'सांस लेने में गंभीर कठिनाई पाई गई है। ऑक्सीजन सहायता के लिए तुरंत इमरजेंसी वार्ड में जाएं।',
      mr: 'श्वास घेण्यास गंभीर त्रास होत आहे. त्वरित ऑक्सिजन सपोर्टसाठी आपत्कालीन विभागात जा.',
      ta: 'சுவாசிப்பதில் கடுமையான சிரமம். உடனே அவசர பிரிவுக்கு செல்லவும்.',
      bn: 'শ্বাস নিতে মারাত্মক কষ্ট হচ্ছে। অবিলম্বে জরুরি বিভাগে যান।',
      te: 'తీవ్రమైన శ్వాస సమస్య గుర్తించబడింది. వెంటనే ఆక్సిజన్ సపోర్ట్ కోసం ఎమర్జెన్సీకి వెళ్లండి.'
    }
  },
  {
    id: 'RED_SURG_01',
    category: 'obstetric_surgical',
    triggerKeywords: [
      'heavy bleeding', 'pregnancy bleeding', 'uncontrolled hemorrhage', 'severe trauma',
      'stab', 'fracture bleeding', 'khun beh raha hai', 'khoon nahi ruk raha',
      'खून बह रहा है', 'गर्भावस्था में रक्तस्राव'
    ],
    triggerPhrases: [
      'third trimester severe bleeding',
      'uncontrolled arterial bleeding',
      'severe focal acute abdomen with guarding',
      'bhari raktasrav ho raha hai'
    ],
    severityLevel: 'CRITICAL_RED',
    emergencyDirectives: 'EMERGENCY: Acute Obstetric Hemorrhage / Acute Surgical Abdomen / Hemodynamic Instability. Immediate surgeon/OBGYN call.',
    spokenGuidance: {
      en: 'Urgent medical alert. Please seek immediate trauma and emergency care in the Casualty wing.',
      hi: 'गंभीर रक्तस्राव या चोट की सूचना है। तुरंत आपातकालीन सर्जरी और ट्रॉमा यूनिट में जाएं।',
      mr: 'तातडीची शस्त्रक्रिया/अपघात कक्षात ताबडतोब दाखल व्हा.',
      ta: 'உடனடி அறுவை சிகிச்சை மற்றும் அவசர பிரிவுக்கு செல்லவும்.',
      bn: 'জরুরি অস্ত্রোপচার বিভাগে অবিলম্বে উপস্থিত হন।',
      te: 'వెంటనే ఎమర్జెన్సీ మరియు ట్రామా కేర్ విభాగానికి వెళ్లండి.'
    }
  }
];
