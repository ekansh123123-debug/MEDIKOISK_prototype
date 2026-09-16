import { IndianLanguage } from '../types';

export interface TranslationDictionary {
  // Navigation & Header
  brandName: string;
  brandTagline: string;
  navOverview: string;
  navPatientKiosk: string;
  navClinicianWorkstation: string;
  navTriageDesk: string;
  navPrivacyGovernance: string;
  emergencyBtn: string;
  lightMode: string;
  darkMode: string;
  selectLanguage: string;
  liveAbdmVerified: string;

  // Hero & Landing
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  beginIntakeBtn: string;
  accessClinicianBtn: string;
  explorePlatformBtn: string;
  tagFhirReady: string;
  tagDpdpCompliant: string;
  tagVoiceBhashini: string;
  tagTrOcr: string;

  // Patient Kiosk Steps & Common
  kioskTitle: string;
  kioskSub: string;
  proceedBtn: string;
  backBtn: string;
  continueBtn: string;
  cancelBtn: string;
  submitBtn: string;
  guestModeBtn: string;

  // Hospital QR Step
  qrTitle: string;
  qrDesc: string;
  qrScannerActive: string;
  hospitalName: string;
  hospitalId: string;
  manualCodePlaceholder: string;

  // ABHA Login Step
  abhaTitle: string;
  abhaDesc: string;
  abhaInputLabel: string;
  abhaPlaceholder: string;
  sendOtpBtn: string;
  otpLabel: string;
  verifyOtpBtn: string;
  orContinueAsGuest: string;

  // Consent Step
  consentTitle: string;
  consentDesc: string;
  consentAudioBtn: string;
  consentAudioPlaying: string;
  consentAcceptBtn: string;
  consentDeclineBtn: string;
  consentPoint1: string;
  consentPoint2: string;
  consentPoint3: string;
  consentAudioText: string;

  // Basic Details Step
  basicTitle: string;
  basicDesc: string;
  fullNameLabel: string;
  ageLabel: string;
  genderLabel: string;
  genderMale: string;
  genderFemale: string;
  genderOther: string;
  phoneLabel: string;
  existingConditionsLabel: string;
  allergiesLabel: string;

  // Adaptive Intake Step
  adaptiveTitle: string;
  adaptiveDesc: string;
  voiceInputPrompt: string;
  clickToSpeak: string;
  listeningNow: string;
  simulateVoiceInput: string;
  orSelectComplaint: string;
  questionProgress: string;
  readAloudBtn: string;
  dimensionDuration: string;
  dimensionOnset: string;
  dimensionLocation: string;
  dimensionCharacter: string;
  dimensionRadiation: string;
  dimensionFoodRelation: string;
  dimensionSeverity: string;
  dimensionAssociated: string;
  dimensionPriorMeds: string;
  finishIntakeBtn: string;

  // Document Upload Step
  docTitle: string;
  docDesc: string;
  dragDropTitle: string;
  dragDropSub: string;
  takePhotoBtn: string;
  selectSamplePrescription: string;
  uploadedDocuments: string;

  // Medication Verification Step
  medVerifyTitle: string;
  medVerifyDesc: string;
  confidenceScore: string;
  verifyConfirmBtn: string;
  editBtn: string;
  rejectBtn: string;
  dosageLabel: string;
  frequencyLabel: string;

  // AYUSH Step
  ayushTitle: string;
  ayushDesc: string;
  prakritiLabel: string;
  vataLabel: string;
  pittaLabel: string;
  kaphaLabel: string;
  traditionalFormulations: string;
  icdDualCodingNotice: string;

  // Queue Token Step
  tokenTitle: string;
  tokenSuccess: string;
  tokenNumber: string;
  assignedDept: string;
  estimatedWait: string;
  roomNumber: string;
  returnHomeBtn: string;

  // Clinician Workstation
  doctorTitle: string;
  doctorSub: string;
  patientSummaryTitle: string;
  soapSubjective: string;
  soapObjective: string;
  soapAssessment: string;
  soapPlan: string;
  provenanceNotice: string;
  verifyAssertion: string;
  editAssertion: string;
  longitudinalTimeline: string;
  exportFhirBundle: string;
  approveSignSummary: string;

  // Triage Queue
  triageTitle: string;
  triageSub: string;
  queueStatus: string;
  urgencyImmediate: string;
  urgencyUrgent: string;
  urgencySemiUrgent: string;
  urgencyNonUrgent: string;
  dhisEarningsTitle: string;

  // Privacy Center
  privacyTitle: string;
  privacySub: string;
  revokeConsentBtn: string;
  exportDataBtn: string;
  requestErasureBtn: string;
  fideliusTitle: string;
  auditLogTitle: string;
}

export const TRANSLATIONS: Record<IndianLanguage, TranslationDictionary> = {
  // ==========================================
  // ENGLISH
  // ==========================================
  en: {
    brandName: "MEDIKOISK",
    brandTagline: "AI-Driven Adaptive Patient Intake",
    navOverview: "Overview",
    navPatientKiosk: "Patient Kiosk",
    navClinicianWorkstation: "Clinician Workstation",
    navTriageDesk: "Triage & Queue Desk",
    navPrivacyGovernance: "Privacy & Governance",
    emergencyBtn: "Emergency SOS",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    selectLanguage: "Language",
    liveAbdmVerified: "ABDM & FHIR R4 Ready",

    heroBadge: "Sovereign AI-Driven Outpatient Intake Platform",
    heroTitle1: "Instant Clinical Case Synthesis",
    heroTitle2: "for High-Volume Hospital OPDs",
    heroSubtitle: "Transform 45-minute registration and history-taking queues into a 3-minute structured intake. Multilingual voice inquiry, TrOCR document extraction, and NRCeS FHIR R4 pre-consultation notes.",
    beginIntakeBtn: "Begin Patient Intake",
    accessClinicianBtn: "Access Clinician Workstation",
    explorePlatformBtn: "Explore Platform",
    tagFhirReady: "NRCeS FHIR R4 Profiled",
    tagDpdpCompliant: "DPDP Act 2023 Aligned",
    tagVoiceBhashini: "Project Bhashini Speech AI",
    tagTrOcr: "TrOCR Document Intelligence",

    kioskTitle: "Self-Service Patient Registration & Intake",
    kioskSub: "Touch or speak in your preferred language to prepare your case for the doctor.",
    proceedBtn: "Proceed",
    backBtn: "Back",
    continueBtn: "Continue",
    cancelBtn: "Cancel",
    submitBtn: "Submit",
    guestModeBtn: "Continue as Guest",

    qrTitle: "Scan Hospital Reception QR",
    qrDesc: "Position your camera toward the hospital reception QR code or enter hospital code.",
    qrScannerActive: "Camera Scanner Active",
    hospitalName: "Civil Hospital OPD Central",
    hospitalId: "Facility ID: IN-MH-PUN-0042",
    manualCodePlaceholder: "Enter 6-digit hospital code",

    abhaTitle: "ABHA Health Identity Login",
    abhaDesc: "Scan & Share with your ABHA ID for instant retrieval of past records, or continue as a guest.",
    abhaInputLabel: "ABHA Number / Mobile Number",
    abhaPlaceholder: "e.g. 91-98765-43210 or 14-digit ABHA",
    sendOtpBtn: "Send OTP",
    otpLabel: "6-Digit Authentication OTP",
    verifyOtpBtn: "Verify & Fetch Records",
    orContinueAsGuest: "Don't have ABHA? Continue as Guest",

    consentTitle: "Informed Consent for Clinical Intake",
    consentDesc: "Your privacy is protected under Section 6 of the Digital Personal Data Protection (DPDP) Act 2023.",
    consentAudioBtn: "Listen in Your Language",
    consentAudioPlaying: "Playing Audio Guidance...",
    consentAcceptBtn: "I Consent & Agree",
    consentDeclineBtn: "Decline & Exit",
    consentPoint1: "Information is used exclusively to prepare your pre-consultation summary for today's attending doctor.",
    consentPoint2: "All communications use end-to-end encryption under ABDM Fidelius specifications.",
    consentPoint3: "You have the statutory right to view, download, or revoke your consent at any point.",
    consentAudioText: "Welcome to MEDIKOISK. Your health details will be collected solely to help your doctor prepare for your consultation today. Your data will not be shared without your explicit permission and you may revoke consent at any time.",

    basicTitle: "Patient Demographics & Basic Vitals",
    basicDesc: "Please verify your demographic details before answering adaptive medical questions.",
    fullNameLabel: "Full Name",
    ageLabel: "Age (Years)",
    genderLabel: "Gender",
    genderMale: "Male",
    genderFemale: "Female",
    genderOther: "Other",
    phoneLabel: "Phone Number",
    existingConditionsLabel: "Known Chronic Conditions",
    allergiesLabel: "Known Drug / Food Allergies",

    adaptiveTitle: "Clinical Adaptive History Intake",
    adaptiveDesc: "Answer dynamic questions tailored to your symptoms using voice or touch.",
    voiceInputPrompt: "Speak your main health problem in your native language",
    clickToSpeak: "Click to Speak",
    listeningNow: "Listening... speak now",
    simulateVoiceInput: "Simulate Voice Input",
    orSelectComplaint: "Or select your main symptom below",
    questionProgress: "Clinical History Progress",
    readAloudBtn: "Read question aloud",
    dimensionDuration: "Duration",
    dimensionOnset: "Onset Mode",
    dimensionLocation: "Location",
    dimensionCharacter: "Character",
    dimensionRadiation: "Radiation",
    dimensionFoodRelation: "Food Relation",
    dimensionSeverity: "Pain Severity",
    dimensionAssociated: "Associated Symptoms",
    dimensionPriorMeds: "Prior Medication",
    finishIntakeBtn: "Complete History Intake",

    docTitle: "Prescription & Medical Report Upload",
    docDesc: "Upload photos of past paper prescriptions, laboratory reports, or discharge summaries.",
    dragDropTitle: "Drag & Drop Prescription / Report",
    dragDropSub: "Supports JPG, PNG, PDF up to 10MB",
    takePhotoBtn: "Take Photo / Use Camera",
    selectSamplePrescription: "Load Sample Prescription",
    uploadedDocuments: "Processed Clinical Documents",

    medVerifyTitle: "Verify Extracted Medications",
    medVerifyDesc: "Our TrOCR system detected these medications. Please review each item carefully.",
    confidenceScore: "OCR Confidence",
    verifyConfirmBtn: "Verify & Confirm",
    editBtn: "Edit",
    rejectBtn: "Reject",
    dosageLabel: "Dosage",
    frequencyLabel: "Frequency",

    ayushTitle: "AYUSH & Traditional Medicine Intake",
    ayushDesc: "Dual-coded integration bridging Ayurveda, Unani, Siddha, and Homeopathy with ICD-11 MMS.",
    prakritiLabel: "Dominant Prakriti Constitution",
    vataLabel: "Vata (Air/Ether)",
    pittaLabel: "Pitta (Fire/Water)",
    kaphaLabel: "Kapha (Earth/Water)",
    traditionalFormulations: "Traditional Formulations & Kashayams",
    icdDualCodingNotice: "Harmonized with WHO ICD-11 Chapter 26 (Traditional Medicine) and NAMASTE terminology.",

    tokenTitle: "OPD Queue Token Generated",
    tokenSuccess: "Your clinical history intake is complete. Please proceed to the designated consultation room.",
    tokenNumber: "Token Number",
    assignedDept: "Assigned Department",
    estimatedWait: "Estimated Wait Time",
    roomNumber: "Consultation Room",
    returnHomeBtn: "Return to Home",

    doctorTitle: "Clinician Pre-Consultation Workstation",
    doctorSub: "AI-synthesized pre-consultation case summary with clickable source provenance and FHIR R4 export.",
    patientSummaryTitle: "Patient Clinical Summary (SOAP)",
    soapSubjective: "Subjective (HPI & Symptoms)",
    soapObjective: "Objective (Vitals & Documents)",
    soapAssessment: "Assessment (Differential Clues)",
    soapPlan: "Plan & Recommended Diagnostics",
    provenanceNotice: "Click any highlighted assertion to inspect the exact voice transcript or patient answer.",
    verifyAssertion: "Verify Assertion",
    editAssertion: "Edit",
    longitudinalTimeline: "Longitudinal Health Timeline",
    exportFhirBundle: "View NRCeS FHIR R4 Bundle",
    approveSignSummary: "Digitally Sign & Approve Summary",

    triageTitle: "Hospital OPD Triage & Queue Desk",
    triageSub: "Live monitoring of intake queue, deterministic red-flag emergency alerts, and DHIS incentive revenue.",
    queueStatus: "Active Outpatient Queue",
    urgencyImmediate: "Immediate Resuscitation",
    urgencyUrgent: "Urgent (Priority 1)",
    urgencySemiUrgent: "Semi-Urgent (Priority 2)",
    urgencyNonUrgent: "Standard Queue",
    dhisEarningsTitle: "DHIS Incentive Performance (Corrigendum 7)",

    privacyTitle: "Patient Privacy Center & Clinical Governance",
    privacySub: "Statutory compliance with Digital Personal Data Protection (DPDP) Act 2023 & ABDM Fidelius specifications.",
    revokeConsentBtn: "Revoke Consent",
    exportDataBtn: "Export Health Data",
    requestErasureBtn: "Request Erasure",
    fideliusTitle: "ABDM Fidelius End-to-End Cryptography",
    auditLogTitle: "Immutable Clinical Audit Log"
  },

  // ==========================================
  // HINDI (हिंदी)
  // ==========================================
  hi: {
    brandName: "MEDIKOISK",
    brandTagline: "एआई-आधारित अनुकूलनीय रोगी इतिहास प्रणाली",
    navOverview: "अवलोकन",
    navPatientKiosk: "रोगी कियोस्क",
    navClinicianWorkstation: "चिकित्सक वर्कस्टेशन",
    navTriageDesk: "ट्राइएज एवं कतार डेस्क",
    navPrivacyGovernance: "गोपनीयता एवं नियमन",
    emergencyBtn: "आपातकालीन SOS",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    selectLanguage: "भाषा चुनें",
    liveAbdmVerified: "ABDM एवं FHIR R4 प्रमाणित",

    heroBadge: "स्वदेशी एआई-संचालित बाह्यरोगी (OPD) पंजीकरण मंच",
    heroTitle1: "त्वरित नैदानिक केस तैयारी",
    heroTitle2: "अत्यधिक भीड़ वाले अस्पताल ओपीडी हेतु",
    heroSubtitle: "45 मिनट की लंबी पर्ची और इतिहास-पूछताछ की कतार को 3 मिनट के व्यवस्थित डिजिटल साक्षात्कार में बदलें। बहुभाषी आवाज, TrOCR पर्चा पहचान और NRCeS FHIR R4 नैदानिक नोट्स।",
    beginIntakeBtn: "रोगी पंजीकरण शुरू करें",
    accessClinicianBtn: "चिकित्सक वर्कस्टेशन खोलें",
    explorePlatformBtn: "मंच की विशेषताएं देखें",
    tagFhirReady: "NRCeS FHIR R4 समर्थित",
    tagDpdpCompliant: "DPDP अधिनियम 2023 के अनुरूप",
    tagVoiceBhashini: "प्रोजेक्ट भाषिणी वॉयस एआई",
    tagTrOcr: "TrOCR दस्तावेज़ विश्लेषण",

    kioskTitle: "स्वयं-सेवा रोगी पंजीकरण एवं इतिहास",
    kioskSub: "डॉक्टर के पास जाने से पहले अपनी पसंदीदा भाषा में बोलकर या स्पर्श करके विवरण दर्ज करें।",
    proceedBtn: "आगे बढ़ें",
    backBtn: "पीछे जाएं",
    continueBtn: "जारी रखें",
    cancelBtn: "रद्द करें",
    submitBtn: "जमा करें",
    guestModeBtn: "अतिथि (Guest) के रूप में जारी रखें",

    qrTitle: "अस्पताल रिसेप्शन क्यूआर स्कैन करें",
    qrDesc: "अस्पताल के क्यूआर कोड की ओर कैमरा करें या 6-अंकीय कोड दर्ज करें।",
    qrScannerActive: "कैमरा स्कैनर सक्रिय",
    hospitalName: "सिविल अस्पताल केंद्रीय ओपीडी",
    hospitalId: "सुविधा कोड: IN-MH-PUN-0042",
    manualCodePlaceholder: "6 अंकों का अस्पताल कोड दर्ज करें",

    abhaTitle: "आभा (ABHA) स्वास्थ्य पहचान लॉगिन",
    abhaDesc: "पुराने रिकॉर्ड स्वचालित रूप से लाने के लिए अपने आभा नंबर से स्कैन करें, या अतिथि के रूप में आगे बढ़ें।",
    abhaInputLabel: "आभा नंबर / मोबाइल नंबर",
    abhaPlaceholder: "उदा. 91-98765-43210 या 14 अंकों का आभा नंबर",
    sendOtpBtn: "ओटीपी भेजें",
    otpLabel: "6 अंकों का प्रमाणीकरण ओटीपी",
    verifyOtpBtn: "सत्यापित करें एवं रिकॉर्ड लाएं",
    orContinueAsGuest: "आभा नहीं है? अतिथि के रूप में जारी रखें",

    consentTitle: "नैदानिक इतिहास हेतु सूचित सहमति",
    consentDesc: "आपकी निजता डिजिटल व्यक्तिगत डेटा संरक्षण (DPDP) अधिनियम 2023 की धारा 6 के तहत सुरक्षित है।",
    consentAudioBtn: "अपनी भाषा में सुनें",
    consentAudioPlaying: "ऑडियो मार्गदर्शन चल रहा है...",
    consentAcceptBtn: "मैं सहमत हूँ और स्वीकार करता हूँ",
    consentDeclineBtn: "अस्वीकार करें एवं बाहर निकलें",
    consentPoint1: "यह जानकारी केवल आज के डॉक्टर परामर्श की तैयारी के लिए उपयोग की जाएगी।",
    consentPoint2: "सभी डेटा ABDM फिदेलियस एंड-टू-एंड एन्क्रिप्शन द्वारा पूरी तरह सुरक्षित है।",
    consentPoint3: "आपको कभी भी अपनी सहमति वापस लेने या रिकॉर्ड डाउनलोड करने का कानूनी अधिकार है।",
    consentAudioText: "मेडीकोइस्क में आपका स्वागत है। आपकी स्वास्थ्य जानकारी केवल आज डॉक्टर के परामर्श की तैयारी के लिए ली जा रही है। आपकी अनुमति के बिना इसे किसी के साथ साझा नहीं किया जाएगा और आप किसी भी समय अपनी सहमति वापस ले सकते हैं।",

    basicTitle: "रोगी जनसांख्यिकी एवं मूलभूत विवरण",
    basicDesc: "लक्षण संबंधी प्रश्नों के उत्तर देने से पहले कृपया अपने विवरण की पुष्टि करें।",
    fullNameLabel: "पूरा नाम",
    ageLabel: "उम्र (वर्ष)",
    genderLabel: "लिंग",
    genderMale: "पुरुष",
    genderFemale: "महिला",
    genderOther: "अन्य",
    phoneLabel: "फ़ोन नंबर",
    existingConditionsLabel: "पुरानी बीमारियाँ (यदि कोई हो)",
    allergiesLabel: "दवा या खाद्य एलर्जी",

    adaptiveTitle: "अनुकूलनीय स्वास्थ्य इतिहास पूछताछ",
    adaptiveDesc: "अपनी भाषा में बोलकर या स्क्रीन पर छूकर डॉक्टर के लिए अपने लक्षणों का विवरण दें।",
    voiceInputPrompt: "अपनी मातृभाषा में अपनी मुख्य समस्या बताएं",
    clickToSpeak: "बोलने के लिए दबाएं",
    listeningNow: "सुन रहे हैं... कृपया बोलें",
    simulateVoiceInput: "आवाज इनपुट अनुकरण करें",
    orSelectComplaint: "या नीचे अपना मुख्य लक्षण चुनें",
    questionProgress: "इतिहास पूर्णता प्रगति",
    readAloudBtn: "प्रश्न बोलकर सुनाएं",
    dimensionDuration: "अवधि",
    dimensionOnset: "शुरुआत का प्रकार",
    dimensionLocation: "स्थान",
    dimensionCharacter: "दर्द का स्वरूप",
    dimensionRadiation: "फैलाव",
    dimensionFoodRelation: "भोजन से संबंध",
    dimensionSeverity: "दर्द की तीव्रता",
    dimensionAssociated: "अन्य जुड़े लक्षण",
    dimensionPriorMeds: "पहले ली गई दवाएं",
    finishIntakeBtn: "इतिहास पूछताछ समाप्त करें",

    docTitle: "पर्चा एवं मेडिकल रिपोर्ट अपलोड",
    docDesc: "पिछले पर्चे, खून की जांच या डिस्चार्ज समरी की फोटो खींचें या अपलोड करें।",
    dragDropTitle: "पर्चा या रिपोर्ट यहां खींचकर लाएं",
    dragDropSub: "JPG, PNG, PDF (अधिकतम 10MB)",
    takePhotoBtn: "कैमरे से फोटो खींचें",
    selectSamplePrescription: "नमूना पर्चा लोड करें",
    uploadedDocuments: "संसाधित नैदानिक दस्तावेज़",

    medVerifyTitle: "पहचानी गई दवाओं का सत्यापन",
    medVerifyDesc: "हमारे TrOCR सिस्टम ने यह दवाएं पहचानी हैं। कृपया प्रत्येक दवा की पुष्टि करें।",
    confidenceScore: "सटीकता स्कोर",
    verifyConfirmBtn: "सत्यापित करें एवं पुष्टि करें",
    editBtn: "संपादित करें",
    rejectBtn: "खारिज करें",
    dosageLabel: "खुराक",
    frequencyLabel: "समय/दिन",

    ayushTitle: "आयुष एवं पारंपरिक चिकित्सा विवरण",
    ayushDesc: "आयुर्वेद, यूनानी, सिद्ध और होम्योपैथी को ICD-11 और नमस्ते प्रणाली के साथ जोड़ना।",
    prakritiLabel: "प्रमुख प्रकृति संविधान",
    vataLabel: "वात (वायु/आकाश)",
    pittaLabel: "पित्त (अग्नि/जल)",
    kaphaLabel: "कफ (पृथ्वी/जल)",
    traditionalFormulations: "पारंपरिक औषधियां एवं काढ़े",
    icdDualCodingNotice: "डब्ल्यूएचओ ICD-11 अध्याय 26 और नमस्ते (NAMASTE) मानकों के अनुकूल।",

    tokenTitle: "ओपीडी कतार टोकन उत्पन्न हुआ",
    tokenSuccess: "आपकी केस हिस्ट्री पूरी हो गई है। कृपया निर्धारित परामर्श कक्ष में जाएं।",
    tokenNumber: "टोकन नंबर",
    assignedDept: "आवंटित विभाग",
    estimatedWait: "अनुमानित प्रतीक्षा समय",
    roomNumber: "परामर्श कक्ष संख्या",
    returnHomeBtn: "मुख्य पृष्ठ पर जाएं",

    doctorTitle: "चिकित्सक पूर्व-परामर्श वर्कस्टेशन",
    doctorSub: "स्रोत प्रमाण (Provenance) और FHIR R4 निर्यात के साथ एआई-संश्लेषित केस सारांश।",
    patientSummaryTitle: "रोगी नैदानिक सारांश (SOAP)",
    soapSubjective: "सब्जेक्टिव (इतिहास एवं लक्षण)",
    soapObjective: "ऑब्जेक्टिव (विटल्स एवं दस्तावेज़)",
    soapAssessment: "असेसमेंट (नैदानिक सुराग)",
    soapPlan: "योजना एवं अनुशंसित जांच",
    provenanceNotice: "रोगी की मूल आवाज या उत्तर देखने के लिए किसी भी वाक्य पर क्लिक करें।",
    verifyAssertion: "कथन सत्यापित करें",
    editAssertion: "संपादित करें",
    longitudinalTimeline: "दीर्घकालिक स्वास्थ्य इतिहास",
    exportFhirBundle: "NRCeS FHIR R4 बंडल देखें",
    approveSignSummary: "सारांश पर डिजिटल हस्ताक्षर करें",

    triageTitle: "अस्पताल ओपीडी ट्राइएज एवं कतार डेस्क",
    triageSub: "कतार की वास्तविक स्थिति, आपातकालीन रेड-फ्लैग अलर्ट और DHIS राजस्व निगरानी।",
    queueStatus: "सक्रिय बाह्यरोगी कतार",
    urgencyImmediate: "तत्काल पुनर्जीवन (Critical)",
    urgencyUrgent: "अति-आवश्यक (प्राथमिकता 1)",
    urgencySemiUrgent: "मध्यम आवश्यक (प्राथमिकता 2)",
    urgencyNonUrgent: "सामान्य कतार",
    dhisEarningsTitle: "DHIS प्रोत्साहन आय (कॉरिजेंडम 7)",

    privacyTitle: "रोगी गोपनीयता केंद्र एवं ऑडिट शासन",
    privacySub: "डीपीडीपी अधिनियम 2023 और एबीडीएम फिदेलियस सुरक्षा मानकों के तहत सुरक्षित।",
    revokeConsentBtn: "सहमति रद्द करें",
    exportDataBtn: "स्वास्थ्य डेटा डाउनलोड करें",
    requestErasureBtn: "डेटा मिटाने का अनुरोध करें",
    fideliusTitle: "ABDM फिदेलियस एंड-टू-एंड एन्क्रिप्शन",
    auditLogTitle: "अपरिवर्तनीय नैदानिक ऑडिट लॉग"
  },

  // ==========================================
  // MARATHI (मराठी)
  // ==========================================
  mr: {
    brandName: "MEDIKOISK",
    brandTagline: "एआय-आधारित रुग्णांची तपासणी प्रणाली",
    navOverview: "माहिती",
    navPatientKiosk: "रुग्ण किऑस्क",
    navClinicianWorkstation: "डॉक्टर वर्कस्टेशन",
    navTriageDesk: "ट्रायज व रांग डेस्क",
    navPrivacyGovernance: "गोपनीयता व नियमन",
    emergencyBtn: "तातडीची मदत (SOS)",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    selectLanguage: "भाषा निवडा",
    liveAbdmVerified: "ABDM आणि FHIR R4 प्रमाणित",

    heroBadge: "स्वदेशी एआय-आधारित ओपीडी नोंदणी प्रणाली",
    heroTitle1: "रुग्ण तपासणीची झटपट तयारी",
    heroTitle2: "गर्दीच्या सरकारी व खाजगी रुग्णालयांसाठी",
    heroSubtitle: "४५ मिनिटांची नोंदणी आणि इतिहास विचारण्याची रांग ३ मिनिटांच्या सुटसुटीत डिजिटल संवादात बदला. बहुभाषिक आवाज, TrOCR प्रिस्क्रिप्शन स्कॅनिंग आणि NRCeS FHIR R4 नोट्स.",
    beginIntakeBtn: "रुग्ण नोंदणी सुरू करा",
    accessClinicianBtn: "डॉक्टर वर्कस्टेशन उघडा",
    explorePlatformBtn: "वैशिष्ट्ये पहा",
    tagFhirReady: "NRCeS FHIR R4 प्रमाणित",
    tagDpdpCompliant: "DPDP कायदा २०२३ सुसंगत",
    tagVoiceBhashini: "प्रकल्प भाषिणी व्हॉईस एआय",
    tagTrOcr: "TrOCR दस्तऐवज तपासणी",

    kioskTitle: "स्वयं-सेवा रुग्ण नोंदणी व इतिहास",
    kioskSub: "डॉक्टरांकडे जाण्यापूर्वी आपल्या भाषेत बोलून किंवा स्क्रीनला स्पर्श करून लक्षणे सांगा.",
    proceedBtn: "पुढे चला",
    backBtn: "मागे या",
    continueBtn: "पुढे सुरू ठेवा",
    cancelBtn: "रद्द करा",
    submitBtn: "सादर करा",
    guestModeBtn: "पाहुणे (Guest) म्हणून पुढे जा",

    qrTitle: "रुग्णालय रिसेप्शन क्यूआर स्कॅन करा",
    qrDesc: "रुग्णालयातील क्यूआर कोडकडे कॅमेरा दाखवा किंवा ६ अंकी कोड प्रविष्ट करा.",
    qrScannerActive: "कॅमेरा स्कॅनर सुरू आहे",
    hospitalName: "जिल्हा रुग्णालय मध्यवर्ती ओपीडी",
    hospitalId: "रुग्णालय कोड: IN-MH-PUN-0042",
    manualCodePlaceholder: "६ अंकी रुग्णालय कोड टाका",

    abhaTitle: "आभा (ABHA) आरोग्य ओळख लॉगिन",
    abhaDesc: "मागील वैद्यकीय नोंदी मिळवण्यासाठी आभा आयडीने स्कॅन करा किंवा पाहुणे म्हणून पुढे जा.",
    abhaInputLabel: "आभा नंबर किंवा मोबाईल नंबर",
    abhaPlaceholder: "उदा. 91-98765-43210 किंवा १४ अंकी आभा नंबर",
    sendOtpBtn: "ओटीपी पाठवा",
    otpLabel: "६ अंकी प्रमाणीकरण ओटीपी",
    verifyOtpBtn: "पडताळणी करा व माहिती मिळवा",
    orContinueAsGuest: "आभा नंबर नाही? पाहुणे म्हणून पुढे जा",

    consentTitle: "वैद्यकीय माहिती गोळा करण्यासाठी संमती",
    consentDesc: "तुमची गोपनीयता डिजिटल वैयक्तिक डेटा संरक्षण (DPDP) कायदा २०२३ नुसार पूर्णपणे सुरक्षित आहे.",
    consentAudioBtn: "तुमच्या भाषेत ऐका",
    consentAudioPlaying: "ऑडिओ मार्गदर्शन सुरू आहे...",
    consentAcceptBtn: "माझी संमती आहे",
    consentDeclineBtn: "अमान्य व बाहेर पडा",
    consentPoint1: "ही माहिती केवळ आजच्या डॉक्टरांच्या तपासणीच्या तयारीसाठी वापरली जाईल.",
    consentPoint2: "सर्व माहिती ABDM फिदेलियस एन्क्रिप्शनद्वारे सुरक्षित ठेवली जाते.",
    consentPoint3: "तुम्हाला तुमची संमती कधीही मागे घेण्याचा किंवा रेकॉर्ड डाउनलोड करण्याचा पूर्ण अधिकार आहे.",
    consentAudioText: "मेडीकॉईस्क मध्ये आपले स्वागत आहे. तुमची माहिती केवळ आजच्या डॉक्टरांच्या तपासणीच्या तयारीसाठी गोळा केली जात आहे. तुमच्या संमतीशिवाय ती शेअर केली जाणार नाही आणि आपण केव्हाही संमती मागे घेऊ शकता.",

    basicTitle: "रुग्णाची मूलभूत माहिती",
    basicDesc: "लक्षणांची माहिती देण्यापूर्वी कृपया आपले नाव व इतर तपशील तपासा.",
    fullNameLabel: "संपूर्ण नाव",
    ageLabel: "वय (वर्षे)",
    genderLabel: "लिंग",
    genderMale: "पुरुष",
    genderFemale: "स्त्री",
    genderOther: "इतर",
    phoneLabel: "मोबाईल नंबर",
    existingConditionsLabel: "पूर्वीचे जुने आजार (असल्यास)",
    allergiesLabel: "औषधांची किंवा अन्नाची ॲलर्जी",

    adaptiveTitle: "अनुकूलित आरोग्य इतिहास विचारणा",
    adaptiveDesc: "आपल्या लक्षणांनुसार विचारल्या जाणाऱ्या प्रश्नांची उत्तरे आवाजाने किंवा स्पर्शाने द्या.",
    voiceInputPrompt: "आपल्या भाषेत मुख्य त्रास सांगा",
    clickToSpeak: "बोलण्यासाठी दाबा",
    listeningNow: "ऐकत आहोत... कृपया बोला",
    simulateVoiceInput: "आवाज इनपुट दाखवा",
    orSelectComplaint: "किंवा खालील मुख्य त्रास निवडा",
    questionProgress: "इतिहास नोंदणी प्रगती",
    readAloudBtn: "प्रश्न वाचून दाखवा",
    dimensionDuration: "कालावधी",
    dimensionOnset: "सुरू होण्याची पद्धत",
    dimensionLocation: "ठिकाण",
    dimensionCharacter: "वेदनेचे स्वरूप",
    dimensionRadiation: "वेदना पसरणे",
    dimensionFoodRelation: "जेवणाशी संबंध",
    dimensionSeverity: "वेदनेची तीव्रता",
    dimensionAssociated: "इतर संबंधित त्रास",
    dimensionPriorMeds: "यापूर्वी घेतलेली औषधे",
    finishIntakeBtn: "माहिती नोंदणी पूर्ण करा",

    docTitle: "जुने प्रिस्क्रिप्शन व रिपोर्ट अपलोड",
    docDesc: "मागील औषधांचे कागद, रक्त तपासणी किंवा डिस्चार्ज कार्डचा फोटो काढा किंवा अपलोड करा.",
    dragDropTitle: "प्रिस्क्रिप्शन किंवा रिपोर्ट येथे ड्रॅग करा",
    dragDropSub: "JPG, PNG, PDF (कमाल 10MB)",
    takePhotoBtn: "कॅमेऱ्याने फोटो काढा",
    selectSamplePrescription: "नमुना प्रिस्क्रिप्शन वापरा",
    uploadedDocuments: "तपासलेले वैद्यकीय कागदपत्रे",

    medVerifyTitle: "ओळखलेल्या औषधांची खात्री करा",
    medVerifyDesc: "आमच्या TrOCR प्रणालीने ही औषधे ओळखली आहेत. कृपया खात्री करा.",
    confidenceScore: "अचूकता टक्केवारी",
    verifyConfirmBtn: "खात्री झाली व संमत",
    editBtn: "दुरुस्त करा",
    rejectBtn: "नाकारा",
    dosageLabel: "प्रमाण (Dose)",
    frequencyLabel: "वेळा (दिवसातून)",

    ayushTitle: "आयुष व पारंपरिक वैद्यकीय माहिती",
    ayushDesc: "आयुर्वेद, युनानी, सिद्धा व होमिओपॅथीची ICD-11 आणि नमस्ते (NAMASTE) शी सांगड.",
    prakritiLabel: "प्रमुख प्रकृती",
    vataLabel: "वात (वायू/आकाश)",
    pittaLabel: "पित्त (अग्नी/जल)",
    kaphaLabel: "कफ (पृथ्वी/जल)",
    traditionalFormulations: "पारंपरिक काढे व भस्म",
    icdDualCodingNotice: "जागतिक आरोग्य संघटनेच्या ICD-11 प्रकरण २६ नुसार प्रमाणित.",

    tokenTitle: "ओपीडी रांगेचे टोकन मिळाले",
    tokenSuccess: "आपली माहिती यशस्वीरीत्या नोंदवली गेली आहे. कृपया नेमून दिलेल्या खोलीत जा.",
    tokenNumber: "टोकन क्रमांक",
    assignedDept: "नेमून दिलेला विभाग",
    estimatedWait: "अंदाजे वाट पाहण्याचा वेळ",
    roomNumber: "तपासणी खोली क्रमांक",
    returnHomeBtn: "मुख्य पानावर जा",

    doctorTitle: "डॉक्टर पूर्व-तपासणी वर्कस्टेशन",
    doctorSub: "मूळ पुराव्यासह (Provenance) एआय-तयार केलेला रुग्ण इतिहास सारांश आणि FHIR R4 निर्यात.",
    patientSummaryTitle: "रुग्णाचा वैद्यकीय सारांश (SOAP)",
    soapSubjective: "लक्षणे व इतिहास (Subjective)",
    soapObjective: "तपासणी व दस्तऐवज (Objective)",
    soapAssessment: "संभाव्य निदान (Assessment)",
    soapPlan: "उपचार योजना व चाचण्या (Plan)",
    provenanceNotice: "रुग्णाने दिलेले मूळ उत्तर किंवा आवाज ऐकण्यासाठी कोणत्याही वाक्यावर क्लिक करा.",
    verifyAssertion: "नोंद प्रमाणित करा",
    editAssertion: "बदला",
    longitudinalTimeline: "आरोग्य इतिहास टाईमलाईन",
    exportFhirBundle: "NRCeS FHIR R4 बंडल पहा",
    approveSignSummary: "स्वाक्षरी करा व मंजुरी द्या",

    triageTitle: "रुग्णालय ओपीडी ट्रायज व रांग डेस्क",
    triageSub: "रांगेची थेट स्थिती, तातडीचे रेड-फ्लॅग इशारे आणि DHIS शासकीय अनुदान ट्रॅकिंग.",
    queueStatus: "सध्याची ओपीडी रांग",
    urgencyImmediate: "तातडीची मदत आवश्यक (Critical)",
    urgencyUrgent: "अतिशय महत्त्वाचे (Priority 1)",
    urgencySemiUrgent: "मध्यम महत्त्वाचे (Priority 2)",
    urgencyNonUrgent: "सर्वसाधारण रांग",
    dhisEarningsTitle: "DHIS अनुदान कमाई (कॉरिजेंडम 7)",

    privacyTitle: "रुग्ण गोपनीयता केंद्र व नियमन",
    privacySub: "DPDP कायदा २०२३ आणि ABDM फिदेलियस सुरक्षा मानकांनुसार संपूर्ण संरक्षण.",
    revokeConsentBtn: "संमती मागे घ्या",
    exportDataBtn: "आरोग्य माहिती डाउनलोड करा",
    requestErasureBtn: "माहिती नष्ट करण्याची विनंती करा",
    fideliusTitle: "ABDM फिदेलियस मजबूत एन्क्रिप्शन",
    auditLogTitle: "अपरिवर्तनीय वैद्यकीय ऑडिट लॉग"
  },

  // ==========================================
  // TAMIL (தமிழ்)
  // ==========================================
  ta: {
    brandName: "MEDIKOISK",
    brandTagline: "AI-இயங்கும் தகவமைப்பு நோயாளி பரிசோதனை அமைப்பு",
    navOverview: "கண்ணோட்டம்",
    navPatientKiosk: "நோயாளி கியோஸ்க்",
    navClinicianWorkstation: "மருத்துவர் பணிநிலையம்",
    navTriageDesk: "ட்ரையrecord & வரிசை மேசை",
    navPrivacyGovernance: "தனியுரிமை & நிர்வாகம்",
    emergencyBtn: "அவசர உதவி SOS",
    lightMode: "லைட் மோட்",
    darkMode: "டார்க் மோட்",
    selectLanguage: "மொழி தேர்வு",
    liveAbdmVerified: "ABDM & FHIR R4 தயார்",

    heroBadge: "இந்தியாவின் இறையாண்மைமிக்க AI வெளிநோயாளி சேர்க்கை தளம்",
    heroTitle1: "உடனடி மருத்துவ வழக்கு தொகுப்பு",
    heroTitle2: "அதிக கூட்டமுள்ள மருத்துவமனை OPD க்காக",
    heroSubtitle: "45 நிமிட பதிவு மற்றும் வரலாறு கேட்கும் வரிசையை 3 நிமிட டிஜிட்டல் சேர்க்கையாக மாற்றவும். பன்மொழி குரல், TrOCR மருந்துச்சீட்டு மற்றும் NRCeS FHIR R4 மருத்துவ குறிப்புகள்.",
    beginIntakeBtn: "நோயாளி பதிவைத் தொடங்குங்கள்",
    accessClinicianBtn: "மருத்துவர் பணிநிலையம் அணுகவும்",
    explorePlatformBtn: "தளத்தை ஆராயுங்கள்",
    tagFhirReady: "NRCeS FHIR R4 சுயவிவரம்",
    tagDpdpCompliant: "DPDP சட்டம் 2023 இணக்கம்",
    tagVoiceBhashini: "பாஷிணி திட்ட குரல் AI",
    tagTrOcr: "TrOCR ஆவண நுண்ணறிவு",

    kioskTitle: "சுய சேவை நோயாளி பதிவு மற்றும் வரலாறு",
    kioskSub: "மருத்துவரைப் பார்க்கும் முன் உங்கள் விருப்ப மொழியில் பேசி அல்லது தொட்டு அறிகுறிகளைப் பதியுங்கள்.",
    proceedBtn: "தொடரவும்",
    backBtn: "பின்செல்க",
    continueBtn: "தொடர்க",
    cancelBtn: "ரத்து செய்",
    submitBtn: "சமர்ப்பிக்கவும்",
    guestModeBtn: "விருந்தினராக தொடரவும்",

    qrTitle: "மருத்துவமனை வரவேற்பு QR குறியீட்டை ஸ்கேன் செய்யவும்",
    qrDesc: "மருத்துவமனை QR குறியீட்டை நோக்கி கேமராவைக் காட்டவும் அல்லது குறியீட்டை உள்ளிடவும்.",
    qrScannerActive: "கேமரா ஸ்கேனர் செயலில் உள்ளது",
    hospitalName: "அரசு தலைமை மருத்துவமனை OPD",
    hospitalId: "மருத்துவமனை எண்: IN-TN-CHE-0055",
    manualCodePlaceholder: "6 இலக்க மருத்துவமனை குறியீடு",

    abhaTitle: "ஆபா (ABHA) சுகாதார அடையாள உள்நுழைவு",
    abhaDesc: "கடந்த மருத்துவ பதிவுகளை உடனடியாகப் பெற ஆபா ஐடி மூலம் ஸ்கேன் செய்யவும் அல்லது விருந்தினராக தொடரவும்.",
    abhaInputLabel: "ஆபா எண் / கைபேசி எண்",
    abhaPlaceholder: "எ.கா. 91-98765-43210 அல்லது 14 இலக்க ஆபா",
    sendOtpBtn: "OTP அனுப்புக",
    otpLabel: "6 இலக்க சரிபார்ப்பு OTP",
    verifyOtpBtn: "சரிபார்த்து பதிவுகளைப் பெறுக",
    orContinueAsGuest: "ஆபா இல்லையா? விருந்தினராக தொடரவும்",

    consentTitle: "மருத்துவ சேர்க்கைக்கான ஒப்புதல்",
    consentDesc: "உங்கள் தனியுரிமை டிஜிட்டல் தனிநபர் தரவு பாதுகாப்பு (DPDP) சட்டம் 2023 பிரிவு 6 இன் கீழ் பாதுகாக்கப்படுகிறது.",
    consentAudioBtn: "உங்கள் மொழியில் கேட்கவும்",
    consentAudioPlaying: "ஆடியோ வழிகாட்டுதல் ஒலிக்கிறது...",
    consentAcceptBtn: "நான் ஒப்புக்கொள்கிறேன்",
    consentDeclineBtn: "நிராகரித்து வெளியேறுக",
    consentPoint1: "இன்றைய மருத்துவர் ஆலோசனைக்கு மட்டுமே இந்த தகவல் பயன்படுத்தப்படும்.",
    consentPoint2: "அனைத்து தொடர்புகளும் ABDM ஃபிடெலியஸ் முழுமையான குறியாக்கத்தைப் பயன்படுத்துகின்றன.",
    consentPoint3: "உங்கள் ஒப்புதலை எப்போது வேண்டுமானாலும் திரும்பப் பெற சட்டப்பூர்வ உரிமை உள்ளது.",
    consentAudioText: "மெடிகோயிஸ்க்கிற்கு வரவேற்கிறோம். உங்கள் உடல்நல விவரங்கள் இன்றைய மருத்துவ ஆலோசனையின் தயாரிப்புக்காக மட்டுமே சேகரிக்கப்படுகின்றன. உங்கள் அனுமதியின்றி பகிரப்படாது.",

    basicTitle: "நோயாளி அடிப்படை விவரங்கள்",
    basicDesc: "மருத்துவக் கேள்விகளுக்குப் பதிலளிக்கும் முன் உங்கள் விவரங்களைச் சரிபார்க்கவும்.",
    fullNameLabel: "முழு பெயர்",
    ageLabel: "வயது (ஆண்டுகள்)",
    genderLabel: "பாலினம்",
    genderMale: "ஆண்",
    genderFemale: "பெண்",
    genderOther: "மற்றவை",
    phoneLabel: "கைபேசி எண்",
    existingConditionsLabel: "நாள்பட்ட நோய்கள் (இருப்பின்)",
    allergiesLabel: "மருந்து அல்லது உணவு ஒவ்வாமை",

    adaptiveTitle: "தகவமைப்பு மருத்துவ வரலாறு சேகரிப்பு",
    adaptiveDesc: "குரல் அல்லது தொடுதல் மூலம் உங்கள் அறிகுறிகளுக்கு ஏற்ப மாறும் கேள்விகளுக்குப் பதிலளிக்கவும்.",
    voiceInputPrompt: "உங்கள் தாய்மொழியில் முக்கிய உடல்நலப் பிரச்சனையைப் பேசுங்கள்",
    clickToSpeak: "பேச அழுத்தவும்",
    listeningNow: "கேட்கிறது... இப்போது பேசவும்",
    simulateVoiceInput: "குரல் மாதிரி உள்ளீடு",
    orSelectComplaint: "அல்லது கீழே உள்ள முக்கிய அறிகுறியைத் தேர்ந்தெடுக்கவும்",
    questionProgress: "வரலாறு சேகரிப்பு முன்னேற்றம்",
    readAloudBtn: "கேள்வியை வாசிக்கவும்",
    dimensionDuration: "கால அளவு",
    dimensionOnset: "தொடங்கிய விதம்",
    dimensionLocation: "இடம்",
    dimensionCharacter: "வலியின் தன்மை",
    dimensionRadiation: "வலி பரவுதல்",
    dimensionFoodRelation: "உணவுடனான தொடர்பு",
    dimensionSeverity: "வலியின் தீவிரம்",
    dimensionAssociated: "தொடர்புடைய பிற அறிகுறிகள்",
    dimensionPriorMeds: "முன்பு எடுத்த மருந்துகள்",
    finishIntakeBtn: "வரலாறு சேகரிப்பை முடிக்கவும்",

    docTitle: "மருந்துச்சீட்டு & பரிசோதனை அறிக்கை பதிவேற்றம்",
    docDesc: "முந்தைய மருந்துச்சீட்டுகள், இரத்த பரிசோதனை அல்லது டிஸ்சார்ஜ் சுருக்கத்தை பதிவேற்றவும்.",
    dragDropTitle: "ஆவணங்களை இங்கே இழுத்து விடவும்",
    dragDropSub: "JPG, PNG, PDF (அதிகபட்சம் 10MB)",
    takePhotoBtn: "புகைப்படம் எடுக்கவும்",
    selectSamplePrescription: "மாதிரி மருந்துச்சீட்டு ஏற்று",
    uploadedDocuments: "பரிசீலிக்கப்பட்ட ஆவணங்கள்",

    medVerifyTitle: "கண்டறியப்பட்ட மருந்துகளைச் சரிபார்க்கவும்",
    medVerifyDesc: "எங்கள் TrOCR அமைப்பு இந்த மருந்துகளைக் கண்டறிந்துள்ளது. தயவுசெய்து உறுதிப்படுத்தவும்.",
    confidenceScore: "துல்லிய அளவு",
    verifyConfirmBtn: "சரிபார்த்து உறுதிப்படுத்து",
    editBtn: "திருத்து",
    rejectBtn: "நிராகரி",
    dosageLabel: "மருந்து அளவு (Dose)",
    frequencyLabel: "அதிர்வெண் (நாளைக்கு எத்தனை முறை)",

    ayushTitle: "ஆயுஷ் & பாரம்பரிய மருத்துவ முறை",
    ayushDesc: "ஆயுர்வேதம், யுனானி, சித்தா, ஹோமியோபதியை ICD-11 மற்றும் நமஸ்தே அமைப்போடு இணைத்தல்.",
    prakritiLabel: "முதன்மை பிரகிருதி அமைப்பு",
    vataLabel: "வாதம் (காற்று/ஆகாயம்)",
    pittaLabel: "பித்தம் (தீ/நீர்)",
    kaphaLabel: "கபம் (பூமி/நீர்)",
    traditionalFormulations: "பாரம்பரிய மருந்துகள் & கசாயங்கள்",
    icdDualCodingNotice: "WHO ICD-11 அத்தியாயம் 26 மற்றும் நமஸ்தே (NAMASTE) தரநிலைகளுடன் இணைக்கப்பட்டுள்ளது.",

    tokenTitle: "OPD வரிசை டோக்கன் உருவாக்கப்பட்டது",
    tokenSuccess: "உங்கள் மருத்துவ சேர்க்கை முடிந்தது. ஒதுக்கப்பட்ட ஆலோசனை அறைக்குச் செல்லவும்.",
    tokenNumber: "டோக்கன் எண்",
    assignedDept: "ஒதுக்கப்பட்ட துறை",
    estimatedWait: "தோராயமான காத்திருப்பு நேரம்",
    roomNumber: "ஆலோசனை அறை எண்",
    returnHomeBtn: "முகப்புக்குச் செல்க",

    doctorTitle: "மருத்துவர் முன்-ஆலோசனை பணிநிலையம்",
    doctorSub: "மூல ஆதார இணைப்பு மற்றும் FHIR R4 ஏற்றுமதியுடன் கூடிய AI-வழக்கு சுருக்கம்.",
    patientSummaryTitle: "நோயாளி மருத்துவ சுருக்கம் (SOAP)",
    soapSubjective: "நோயாளி கூறியவை (Subjective)",
    soapObjective: "நோயாளி பரிசோதனை (Objective)",
    soapAssessment: "மருத்துவ மதிப்பீடு (Assessment)",
    soapPlan: "சிகிச்சை திட்டம் & பரிசோதனைகள் (Plan)",
    provenanceNotice: "நோயாளி பேசிய மூலக்குரல் அல்லது பதிலை அறிய எந்தவொரு வரியையும் கிளிக் செய்யவும்.",
    verifyAssertion: "கூற்றை உறுதிசெய்",
    editAssertion: "திருத்து",
    longitudinalTimeline: "நீண்டகால சுகாதார வரலாறு",
    exportFhirBundle: "NRCeS FHIR R4 தொகுப்பைக் காண்க",
    approveSignSummary: "டிஜிட்டல் கையொப்பமிட்டு ஒப்புதல் அளிக்கவும்",

    triageTitle: "மருத்துவமனை OPD ட்ரையrecord மேசை",
    triageSub: "நேரடி வரிசை நிலை, அவசர ரெட்-பிளாக் எச்சரிக்கைகள் மற்றும் DHIS அரசு ஊக்கத்தொகை.",
    queueStatus: "செயலில் உள்ள OPD வரிசை",
    urgencyImmediate: "உடனடி அவசர சிகிச்சை (Critical)",
    urgencyUrgent: "அவசரம் (முன்னுரிமை 1)",
    urgencySemiUrgent: "மிதமான அவசரம் (முன்னுரிமை 2)",
    urgencyNonUrgent: "சாதாரண வரிசை",
    dhisEarningsTitle: "DHIS அரசு ஊக்கத்தொகை வருவாய் (Corrigendum 7)",

    privacyTitle: "நோயாளி தனியுரிமை மையம் & தணிக்கை",
    privacySub: "DPDP சட்டம் 2023 மற்றும் ABDM ஃபிடெலியஸ் பாதுகாப்பு வழிகாட்டுதல்களின்படி பாதுகாக்கப்பட்டது.",
    revokeConsentBtn: "ஒப்புதலைத் திரும்பப் பெறு",
    exportDataBtn: "சுகாதாரத் தரவைப் பதிவிறக்கு",
    requestErasureBtn: "தரவை அழிக்கக் கோருதல்",
    fideliusTitle: "ABDM ஃபிடெலியஸ் முழுமையான குறியாக்கம்",
    auditLogTitle: "மாற்ற முடியாத மருத்துவ தணிக்கை பதிவு"
  },

  // ==========================================
  // BENGALI (বাংলা)
  // ==========================================
  bn: {
    brandName: "MEDIKOISK",
    brandTagline: "এআই-চালিত অভিযোজিত রোগী গ্রহণ প্ল্যাটফর্ম",
    navOverview: "ওভারভিউ",
    navPatientKiosk: "রোগী কিয়স্ক",
    navClinicianWorkstation: "চিকিৎসক ওয়ার্কস্টেশন",
    navTriageDesk: "ট্রায়াজ ও কিউ ডেস্ক",
    navPrivacyGovernance: "গোপনীয়তা ও পরিচালনা",
    emergencyBtn: "জরুরি এসওএস (SOS)",
    lightMode: "লাইট মোড",
    darkMode: "ডার্ক মোড",
    selectLanguage: "ভাষা নির্বাচন",
    liveAbdmVerified: "ABDM ও FHIR R4 প্রস্তুত",

    heroBadge: "ভারতের সার্বভৌম এআই-চালিত ওপিডি নিবন্ধন প্ল্যাটফর্ম",
    heroTitle1: "তাত্ক্ষণিক ক্লিনিক্যাল কেস প্রস্তুতি",
    heroTitle2: "উচ্চ ভিড়ের হাসপাতাল ওপিডির জন্য",
    heroSubtitle: "৪৫ মিনিটের লম্বা লাইন ও ইতিহাস জিজ্ঞাসার সময় কমিয়ে ৩ মিনিটের ডিজিটাল কেস সামারিতে পরিণত করুন। বহুভাষিক কণ্ঠস্বর, TrOCR প্রেসক্রিপশন স্ক্যানিং এবং NRCeS FHIR R4 নোট।",
    beginIntakeBtn: "রোগী নিবন্ধন শুরু করুন",
    accessClinicianBtn: "চিকিৎসক ওয়ার্কস্টেশন খুলুন",
    explorePlatformBtn: "প্ল্যাটফর্মটি ঘুরে দেখুন",
    tagFhirReady: "NRCeS FHIR R4 প্রোফাইলযুক্ত",
    tagDpdpCompliant: "DPDP আইন ২০২৩ সঙ্গতিপূর্ণ",
    tagVoiceBhashini: "প্রজেক্ট ভাষিণী ভয়েস এআই",
    tagTrOcr: "TrOCR নথি বিশ্লেষণ",

    kioskTitle: "স্বয়ংক্রিয় রোগী নিবন্ধন ও ইতিহাস গ্রহণ",
    kioskSub: "ডাক্তারের কাছে যাওয়ার আগে আপনার নিজস্ব ভাষায় কথা বলে বা স্ক্রিন ছুঁয়ে লক্ষণ জানান।",
    proceedBtn: "এগিয়ে যান",
    backBtn: "পেছনে যান",
    continueBtn: "চালিয়ে যান",
    cancelBtn: "বাতিল করুন",
    submitBtn: "জমা দিন",
    guestModeBtn: "অতিথি (Guest) হিসেবে এগিয়ে যান",

    qrTitle: "হাসপাতাল অভ্যর্থনা কিউআর কোড স্ক্যান করুন",
    qrDesc: "হাসপাতালের কিউআর কোডের দিকে ক্যামেরা রাখুন অথবা ৬ ডিজিটের কোড দিন।",
    qrScannerActive: "ক্যামেরা স্ক্যানার চালু আছে",
    hospitalName: "সরকারি মেডিকেল কলেজ হাসপাতাল ওপিডি",
    hospitalId: "হাসপাতাল কোড: IN-WB-KOL-0019",
    manualCodePlaceholder: "৬ ডিজিটের হাসপাতাল কোড দিন",

    abhaTitle: "আভা (ABHA) স্বাস্থ্য পরিচয় লগইন",
    abhaDesc: "পুরোনো স্বাস্থ্য তথ্য পেতে আভা আইডি দিয়ে স্ক্যান করুন অথবা অতিথি হিসেবে এগিয়ে যান।",
    abhaInputLabel: "আভা নম্বর / মোবাইল নম্বর",
    abhaPlaceholder: "যেমন: 91-98765-43210 বা ১৪ ডিজিটের আভা",
    sendOtpBtn: "ওটিপি পাঠান",
    otpLabel: "৬ ডিজিটের ওটিপি",
    verifyOtpBtn: "যাচাই করুন ও রেকর্ড আনুন",
    orContinueAsGuest: "আভা নেই? অতিথি হিসেবে চালিয়ে যান",

    consentTitle: "চিকিৎসা ইতিহাস গ্রহণের জন্য সম্মতি",
    consentDesc: "আপনার গোপনীয়তা ডিজিটাল পার্সোনাল ডেটা প্রোটেকশন (DPDP) আইন ২০২৩-এর অধীনে সুরক্ষিত।",
    consentAudioBtn: "আপনার ভাষায় শুনুন",
    consentAudioPlaying: "অডিও বাজছে...",
    consentAcceptBtn: "আমি সম্মত ও গ্রহণ করছি",
    consentDeclineBtn: "প্রত্যাখ্যান ও প্রস্থান",
    consentPoint1: "এই তথ্য শুধুমাত্র আজকের ডাক্তারের পরামর্শ প্রস্তুতির জন্য ব্যবহৃত হবে।",
    consentPoint2: "সমস্ত তথ্য ABDM ফিদেলিয়াস এন্ড-টু-এন্ড এনক্রিপশন দ্বারা সম্পূর্ণ নিরাপদ।",
    consentPoint3: "আপনার যে কোনো সময় সম্মতি প্রত্যাহার বা রেকর্ড ডাউনলোড করার অধিকার রয়েছে।",
    consentAudioText: "মেডিকোইস্কে আপনাকে স্বাগতম। আপনার স্বাস্থ্য সম্পর্কিত তথ্য কেবল আজকের ডাক্তারের পরামর্শের প্রস্তুতির জন্য সংগ্রহ করা হচ্ছে। আপনার অনুমতি ছাড়া এটি কারও সাথে ভাগ করা হবে না।",

    basicTitle: "রোগীর মৌলিক জনমিতিক বিবরণ",
    basicDesc: "লক্ষণ সম্পর্কিত প্রশ্নের উত্তর দেওয়ার আগে আপনার তথ্য নিশ্চিত করুন।",
    fullNameLabel: "পুরো নাম",
    ageLabel: "বয়স (বছর)",
    genderLabel: "লিঙ্গ",
    genderMale: "পুরুষ",
    genderFemale: "মহিলা",
    genderOther: "অন্যান্য",
    phoneLabel: "ফোন নম্বর",
    existingConditionsLabel: "পুরোনো দীর্ঘস্থায়ী রোগ (যদি থাকে)",
    allergiesLabel: "ওষুধ বা খাবারের অ্যালার্জি",

    adaptiveTitle: "অভিযোজিত স্বাস্থ্য ইতিহাস জিজ্ঞাসা",
    adaptiveDesc: "ভয়েস বা স্পর্শের মাধ্যমে আপনার লক্ষণ অনুসারে পরিবর্তিত প্রশ্নের উত্তর দিন।",
    voiceInputPrompt: "আপনার মাতৃভাষায় মূল শারীরিক সমস্যা বলুন",
    clickToSpeak: "কথা বলতে চাপুন",
    listeningNow: "শুনছি... অনুগ্রহ করে বলুন",
    simulateVoiceInput: "নমুনা ভয়েস ইনপুট",
    orSelectComplaint: "অথবা নিচে প্রধান লক্ষণ নির্বাচন করুন",
    questionProgress: "ইতিহাস গ্রহণের অগ্রগতি",
    readAloudBtn: "প্রশ্নটি শুনুন",
    dimensionDuration: "সময়কাল",
    dimensionOnset: "শুরুর ধরন",
    dimensionLocation: "স্থান",
    dimensionCharacter: "ব্যথার ধরন",
    dimensionRadiation: "ব্যথা ছড়ানো",
    dimensionFoodRelation: "খাবারের সাথে সম্পর্ক",
    dimensionSeverity: "ব্যথার তীব্রতা",
    dimensionAssociated: "অন্যান্য সম্পর্কিত লক্ষণ",
    dimensionPriorMeds: "আগে নেওয়া ওষুধ",
    finishIntakeBtn: "ইতিহাস সমাপ্ত করুন",

    docTitle: "প্রেসক্রিপশন ও মেডিকেল রিপোর্ট আপলোড",
    docDesc: "আগের প্রেসক্রিপশন, রক্ত পরীক্ষা বা ডিসচার্জ সার্টিফিকেটের ছবি তুলুন বা আপলোড করুন।",
    dragDropTitle: "প্রেসক্রিপশন বা রিপোর্ট এখানে টেনে আনুন",
    dragDropSub: "JPG, PNG, PDF (সর্বোচ্চ 10MB)",
    takePhotoBtn: "ক্যামেরা দিয়ে ছবি তুলুন",
    selectSamplePrescription: "নমুনা প্রেসক্রিপশন লোড করুন",
    uploadedDocuments: "প্রক্রিয়াজাত নথিপত্র",

    medVerifyTitle: "শনাক্তকৃত ওষুধ যাচাই করুন",
    medVerifyDesc: "আমাদের TrOCR সিস্টেম এই ওষুধগুলি সনাক্ত করেছে। অনুগ্রহ করে যাচাই করুন।",
    confidenceScore: "নির্ভুলতার হার",
    verifyConfirmBtn: "যাচাই ও নিশ্চিত করুন",
    editBtn: "সম্পাদনা",
    rejectBtn: "বাতিল",
    dosageLabel: "ডোজ",
    frequencyLabel: "দিনে কতবার",

    ayushTitle: "আয়ুশ ও ঐতিহ্যবাহী চিকিৎসা পদ্ধতি",
    ayushDesc: "আয়ুর্বেদ, ইউনানি, সিদ্ধ এবং হোমিওপ্যাথি সমন্বিত ICD-11 ও নমস্তে (NAMASTE) স্ট্যান্ডার্ড।",
    prakritiLabel: "প্রধান প্রকৃতি গঠন",
    vataLabel: "বাত (বায়ু/আকাশ)",
    pittaLabel: "পিত্ত (অগ্নি/জল)",
    kaphaLabel: "কফ (পৃথিবী/জল)",
    traditionalFormulations: "ঐতিহ্যবাহী ওষুধ ও ক্বাথ",
    icdDualCodingNotice: "হু (WHO) ICD-11 অধ্যায় ২৬ এবং নমস্তে স্ট্যান্ডার্ডের সাথে সামঞ্জস্যপূর্ণ।",

    tokenTitle: "ওপিডি কিউ টোকেন তৈরি হয়েছে",
    tokenSuccess: "আপনার তথ্য সফলভাবে গৃহীত হয়েছে। অনুগ্রহ করে নির্ধারিত কক্ষে যান।",
    tokenNumber: "টোকেন নম্বর",
    assignedDept: "নির্ধারিত বিভাগ",
    estimatedWait: "আনুমানিক অপেক্ষার সময়",
    roomNumber: "পরামর্শ কক্ষ নম্বর",
    returnHomeBtn: "হোম পেজে ফিরে যান",

    doctorTitle: "চিকিৎসক প্রাক-পরামর্শ ওয়ার্কস্টেশন",
    doctorSub: "উৎস প্রমাণ (Provenance) ও FHIR R4 রপ্তানিসহ এআই-সংশ্লেষিত কেস সামারি।",
    patientSummaryTitle: "রোগীর ক্লিনিক্যাল সারাংশ (SOAP)",
    soapSubjective: "রোগীর বর্ণনা (Subjective)",
    soapObjective: "পরীক্ষা ও নথিপত্র (Objective)",
    soapAssessment: "সম্ভাব্য মূল্যায়ন (Assessment)",
    soapPlan: "চিকিৎসা পরিকল্পনা ও টেস্ট (Plan)",
    provenanceNotice: "রোগীর দেওয়া মূল উত্তর বা অডিও শুনতে যেকোনো বাক্যে ক্লিক করুন।",
    verifyAssertion: "তথ্য যাচাই করুন",
    editAssertion: "সম্পাদনা করুন",
    longitudinalTimeline: "দীর্ঘমেয়াদী স্বাস্থ্য ইতিহাস",
    exportFhirBundle: "NRCeS FHIR R4 বান্ডিল দেখুন",
    approveSignSummary: "ডিজিটাল স্বাক্ষর ও অনুমোদন দিন",

    triageTitle: "হাসপাতাল ওপিডি ট্রায়াজ ও কিউ ডেস্ক",
    triageSub: "লাইভ লাইনের অবস্থা, জরুরি রেড-ফ্ল্যাগ অ্যালার্ট এবং DHIS সরকারি প্রণোদনা ট্র্যাকিং।",
    queueStatus: "সক্রিয় বহির্বিভাগ কিউ",
    urgencyImmediate: "তাত্ক্ষণিক জরুরি চিকিৎসা (Critical)",
    urgencyUrgent: "জরুরি (অগ্রাধিকার ১)",
    urgencySemiUrgent: "মাঝারি জরুরি (অগ্রাধিকার ২)",
    urgencyNonUrgent: "সাধারণ লাইন",
    dhisEarningsTitle: "DHIS সরকারি প্রণোদনা আয় (Corrigendum 7)",

    privacyTitle: "রোগী গোপনীয়তা কেন্দ্র ও গভর্ন্যান্স",
    privacySub: "DPDP আইন ২০২৩ এবং ABDM ফিদেলিয়াস নির্দেশিকা অনুসারে সুরক্ষিত।",
    revokeConsentBtn: "সম্মতি প্রত্যাহার করুন",
    exportDataBtn: "স্বাস্থ্য তথ্য ডাউনলোড করুন",
    requestErasureBtn: "তথ্য মুছে ফেলার অনুরোধ",
    fideliusTitle: "ABDM ফিদেলিয়াস এন্ড-টু-এন্ড এনক্রিপশন",
    auditLogTitle: "অপরিবর্তনীয় ক্লিনিক্যাল অডিট লগ"
  },

  // ==========================================
  // TELUGU (తెలుగు)
  // ==========================================
  te: {
    brandName: "MEDIKOISK",
    brandTagline: "AI-ఆధారిత రోగి ఆరోగ్య చరిత్ర స్వీకరణ వేదిక",
    navOverview: "అవలోకనం",
    navPatientKiosk: "రోగి కియోస్క్",
    navClinicianWorkstation: "వైద్యుల వర్క్‌స్టేషన్",
    navTriageDesk: "ట్రయేజ్ & క్యూ డెస్క్",
    navPrivacyGovernance: "గోప్యత & పాలన",
    emergencyBtn: "అత్యవసర SOS",
    lightMode: "లైట్ మోడ్",
    darkMode: "డార్క్ మోడ్",
    selectLanguage: "భాష ఎంచుకోండి",
    liveAbdmVerified: "ABDM & FHIR R4 సిద్ధం",

    heroBadge: "భారతదేశ సార్వభౌమ AI అవుట్‌పేషెంట్ నమోదు వేదిక",
    heroTitle1: "తక్షణ క్లినికల్ కేసు సంశ్లేషణ",
    heroTitle2: "రద్దీగా ఉండే ఆసుపత్రి OPD ల కోసం",
    heroSubtitle: "45 నిమిషాల రిజిస్ట్రేషన్ మరియు హిస్టరీ క్యూ సమయాన్ని 3 నిమిషాల డిజిటల్ ప్రక్రియగా మార్చండి. బహుభాషా వాయిస్, TrOCR ప్రిస్క్రిప్షన్ స్కానింగ్ మరియు NRCeS FHIR R4 నోట్స్.",
    beginIntakeBtn: "రోగి నమోదు ప్రారంభించండి",
    accessClinicianBtn: "వైద్యుల వర్క్‌స్టేషన్ తెరవండి",
    explorePlatformBtn: "వేదికను పరిశీలించండి",
    tagFhirReady: "NRCeS FHIR R4 ప్రొఫైల్డ్",
    tagDpdpCompliant: "DPDP చట్టం 2023 అనుకూలం",
    tagVoiceBhashini: "ప్రాజెక్ట్ భాషిణి వాయిస్ AI",
    tagTrOcr: "TrOCR పత్ర విశ్లేషణ",

    kioskTitle: "స్వయం-సేవ రోగి నమోదు & ఆరోగ్య చరిత్ర",
    kioskSub: "వైద్యుడి వద్దకు వెళ్లే ముందు మీ భాషలో మాట్లాడి లేదా స్క్రీన్‌ను తాకి మీ సమస్యలను నమోదు చేయండి.",
    proceedBtn: "ముందుకు సాగండి",
    backBtn: "వెనుకకు",
    continueBtn: "కొనసాగించండి",
    cancelBtn: "రద్దు చేయండి",
    submitBtn: "సమర్పించండి",
    guestModeBtn: "అతిథిగా కొనసాగండి",

    qrTitle: "ఆసుపత్రి రిసెప్షన్ QR కోడ్ స్కాన్ చేయండి",
    qrDesc: "ఆసుపత్రి QR కోడ్ వైపు కెమెరాను చూపించండి లేదా 6 అంకెల కోడ్‌ను నమోదు చేయండి.",
    qrScannerActive: "కెమెరా స్కానర్ యాక్టివ్‌గా ఉంది",
    hospitalName: "ప్రభుత్వ ప్రధాన ఆసుపత్రి OPD",
    hospitalId: "ఆసుపత్రి కోడ్: IN-AP-VIZ-0071",
    manualCodePlaceholder: "6 అంకెల ఆసుపత్రి కోడ్ నమోదు చేయండి",

    abhaTitle: "ఆభా (ABHA) ఆరోగ్య గుర్తింపు లాగిన్",
    abhaDesc: "గత వైద్య రికార్డులను వెంటనే పొందడానికి ఆభా ID ద్వారా స్కాన్ చేయండి లేదా అతిథిగా కొనసాగండి.",
    abhaInputLabel: "ఆభా సంఖ్య / మొబైల్ సంఖ్య",
    abhaPlaceholder: "ఉదా. 91-98765-43210 లేదా 14 అంకెల ఆభా",
    sendOtpBtn: "OTP పంపండి",
    otpLabel: "6 అంకెల ధృవీకరణ OTP",
    verifyOtpBtn: "ధృవీకరించి రికార్డులు పొందండి",
    orContinueAsGuest: "ఆభా లేదా? అతిథిగా కొనసాగండి",

    consentTitle: "వైద్య సమాచార సేకరణకు సమ్మతి",
    consentDesc: "మీ గోప్యత డిజిటల్ పర్సనల్ డేటా ప్రొటెక్షన్ (DPDP) చట్టం 2023 సెక్షన్ 6 క్రింద పూర్తిగా సురక్షితం.",
    consentAudioBtn: "మీ భాషలో వినండి",
    consentAudioPlaying: "ఆడియో మార్గదర్శకత్వం నడుస్తోంది...",
    consentAcceptBtn: "నేను అంగీకరిస్తున్నాను",
    consentDeclineBtn: "తిరస్కరించి నిష్క్రమించు",
    consentPoint1: "ఈ సమాచారం నేటి వైద్యుల సంప్రదింపుల తయారీకి మాత్రమే ఉపయోగించబడుతుంది.",
    consentPoint2: "అన్ని వివరాలు ABDM ఫిడేలియస్ ఎండ్-టు-ఎండ్ ఎన్‌క్రిప్షన్ ద్వారా రక్షించబడతాయి.",
    consentPoint3: "మీ సమ్మతిని ఎప్పుడైనా ఉపసంహరించుకునే చట్టపరమైన హక్కు మీకు ఉంది.",
    consentAudioText: "మెడికోయిస్క్‌కు స్వాగతం. మీ ఆరోగ్య వివరాలు నేటి వైద్యుల సంప్రదింపుల తయారీకి మాత్రమే సేకరించబడుతున్నాయి. మీ అనుమతి లేకుండా ఎవరితోనూ పంచుకోబడవు.",

    basicTitle: "రోగి ప్రాథమిక వివరాలు",
    basicDesc: "లక్షణాల ప్రశ్నలకు సమాధానం ఇచ్చే ముందు మీ వివరాలను ధృవీకరించండి.",
    fullNameLabel: "పూర్తి పేరు",
    ageLabel: "వయస్సు (సంవత్సరాలు)",
    genderLabel: "లింగం",
    genderMale: "పురుషుడు",
    genderFemale: "స్త్రీ",
    genderOther: "ఇతర",
    phoneLabel: "మొబైల్ సంఖ్య",
    existingConditionsLabel: "దీర్ఘకాలిక వ్యాధులు (ఉంటే)",
    allergiesLabel: "మందులు లేదా ఆహార అలెర్జీలు",

    adaptiveTitle: "అనుకూల ఆరోగ్య చరిత్ర విచారణ",
    adaptiveDesc: "మీ లక్షణాలకు అనుగుణంగా అడిగే ప్రశ్నలకు వాయిస్ లేదా టచ్ ద్వారా సమాధానం ఇవ్వండి.",
    voiceInputPrompt: "మీ మాతృభాషలో మీ ప్రధాన ఆరోగ్య సమస్యను చెప్పండి",
    clickToSpeak: "మాట్లాడటానికి నొక్కండి",
    listeningNow: "వింటున్నాము... మాట్లాడండి",
    simulateVoiceInput: "వాయిస్ నమూనా ఇన్పుట్",
    orSelectComplaint: "లేదా క్రింది ప్రధాన లక్షణాన్ని ఎంచుకోండి",
    questionProgress: "హిస్టరీ నమోదు పురోగతి",
    readAloudBtn: "ప్రశ్నను వినండి",
    dimensionDuration: "వ్యవధి",
    dimensionOnset: "ప్రారంభమైన విధానం",
    dimensionLocation: "ప్రదేశం",
    dimensionCharacter: "నొప్పి రకం",
    dimensionRadiation: "నొప్పి వ్యాప్తి",
    dimensionFoodRelation: "ఆహారంతో సంబంధం",
    dimensionSeverity: "నొప్పి తీవ్రత",
    dimensionAssociated: "ఇతర సంబంధిత లక్షణాలు",
    dimensionPriorMeds: "గతంలో వాడిన మందులు",
    finishIntakeBtn: "నమోదును ముగించండి",

    docTitle: "ప్రిస్క్రిప్షన్ & రిపోర్టుల అప్‌లోడ్",
    docDesc: "పాత ప్రిస్క్రిప్షన్లు, రక్త పరీక్షలు లేదా డిశ్చార్జ్ సమ్మరీ ఫోటో తీయండి లేదా అప్‌లోడ్ చేయండి.",
    dragDropTitle: "ప్రిస్క్రిప్షన్ లేదా రిపోర్టును ఇక్కడ లాగి వదలండి",
    dragDropSub: "JPG, PNG, PDF (గరిష్టంగా 10MB)",
    takePhotoBtn: "కెమెరాతో ఫోటో తీయండి",
    selectSamplePrescription: "నమూనా ప్రిస్క్రిప్షన్ లోడ్ చేయండి",
    uploadedDocuments: "విశ్లేషించబడిన పత్రాలు",

    medVerifyTitle: "గుర్తించిన మందులను ధృవీకరించండి",
    medVerifyDesc: "మా TrOCR వ్యవస్థ ఈ మందులను గుర్తించింది. దయచేసి ధృవీకరించండి.",
    confidenceScore: "ఖచ్చితత్వ రేటు",
    verifyConfirmBtn: "ధృవీకరించి ఆమోదించండి",
    editBtn: "సవరించండి",
    rejectBtn: "తిరస్కరించండి",
    dosageLabel: "మోతాదు (Dose)",
    frequencyLabel: "ఫ్రీక్వెన్సీ (రోజుకు ఎన్నిసార్లు)",

    ayushTitle: "ఆయుష్ & సంప్రదాయ వైద్య విధానం",
    ayushDesc: "ఆయుర్వేదం, యునాని, సిద్ధ, హోమియోపతిని ICD-11 మరియు నమస్తే ప్రమాణాలతో అనుసంధానం చేయడం.",
    prakritiLabel: "ప్రధాన ప్రకృతి స్వభావం",
    vataLabel: "వాతం (గాలి/ఆకాశం)",
    pittaLabel: "పిత్తం (అగ్ని/నీరు)",
    kaphaLabel: "కఫం (భూమి/నీరు)",
    traditionalFormulations: "సంప్రదాయ కషాయాలు & మందులు",
    icdDualCodingNotice: "WHO ICD-11 అధ్యాయం 26 మరియు నమస్తే (NAMASTE) ప్రమాణాలకు అనుగుణంగా రూపొందించబడింది.",

    tokenTitle: "OPD క్యూ టోకెన్ జారీ చేయబడింది",
    tokenSuccess: "మీ వివరాలు విజయవంతంగా నమోదయ్యాయి. దయచేసి కేటాయించిన గదికి వెళ్లండి.",
    tokenNumber: "టోకెన్ సంఖ్య",
    assignedDept: "కేటాయించిన విభాగం",
    estimatedWait: "సుమారు నిరీక్షణ సమయం",
    roomNumber: "పరీక్ష గది సంఖ్య",
    returnHomeBtn: "హోమ్‌కి వెళ్లండి",

    doctorTitle: "వైద్యుల ముందస్తు సంప్రదింపు వర్క్‌స్టేషన్",
    doctorSub: "మూల ఆధార లింక్ (Provenance) మరియు FHIR R4 ఎగుమతితో కూడిన AI-కేసు సారాంశం.",
    patientSummaryTitle: "రోగి క్లినికల్ సారాంశం (SOAP)",
    soapSubjective: "రోగి తెలిపిన వివరాలు (Subjective)",
    soapObjective: "పరీక్షలు & పత్రాలు (Objective)",
    soapAssessment: "రోగనిర్ధారణ అంచనా (Assessment)",
    soapPlan: "చికిత్స ప్రణాళిక & పరీక్షలు (Plan)",
    provenanceNotice: "రోగి ఇచ్చిన అసలు సమాధానం లేదా వాయిస్ వినడానికి ఏదైనా వాక్యంపై క్లిక్ చేయండి.",
    verifyAssertion: "నిర్ధారించండి",
    editAssertion: "సవరించండి",
    longitudinalTimeline: "దీర్ఘకాలిక ఆరోగ్య చరిత్ర",
    exportFhirBundle: "NRCeS FHIR R4 బండిల్ చూడండి",
    approveSignSummary: "డిజిటల్ సంతకం చేసి ఆమోదించండి",

    triageTitle: "ఆసుపత్రి OPD ట్రయేజ్ & క్యూ డెస్క్",
    triageSub: "ప్రత్యక్ష క్యూ పర్యవేక్షణ, అత్యవసర రెడ్-ఫ్లాగ్ హెచ్చరికలు మరియు DHIS ప్రోత్సాహకాలు.",
    queueStatus: "ప్రస్తుత OPD క్యూ",
    urgencyImmediate: "తక్షణ అత్యవసర చికిత్స (Critical)",
    urgencyUrgent: "అత్యవసరం (ప్రాధాన్యత 1)",
    urgencySemiUrgent: "మధ్యస్థ అత్యవసరం (ప్రాధాన్యత 2)",
    urgencyNonUrgent: "సాధారణ క్యూ",
    dhisEarningsTitle: "DHIS ప్రభుత్వ ప్రోత్సాహక ఆదాయం (Corrigendum 7)",

    privacyTitle: "రోగి గోప్యతా కేంద్రం & గవర్నెన్స్",
    privacySub: "DPDP చట్టం 2023 మరియు ABDM ఫిడేలియస్ మార్గదర్శకాల ప్రకారం భద్రపరచబడింది.",
    revokeConsentBtn: "సమ్మతిని ఉపసంహరించుకోండి",
    exportDataBtn: "ఆరోగ్య డేటాను డౌన్‌లోడ్ చేయండి",
    requestErasureBtn: "డేటాను తొలగించమని అభ్యర్థించండి",
    fideliusTitle: "ABDM ఫిడేలియస్ పూర్తి ఎన్‌క్రిప్షన్",
    auditLogTitle: "మార్చలేని క్లినికల్ ఆడిట్ లాగ్"
  }
};

export const getTranslation = (lang: IndianLanguage): TranslationDictionary => {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
};
