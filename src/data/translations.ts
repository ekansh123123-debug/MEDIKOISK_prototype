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

  // Landing: Problem / Solution
  probSolTitle: string;
  probSolSub: string;
  probLegacyBadge: string;
  probLegacyTag: string;
  probLegacyTitle: string;
  probLegacyFooter: string;
  solArchBadge: string;
  solArchTag: string;
  solArchTitle: string;
  solArchFooter: string;

  // Landing: Why Different
  whyDiffBadge: string;
  whyDiffTitle: string;
  whyDiffSub: string;
  whyCol1Header: string;
  whyCol2Header: string;

  // Landing: Impact Metrics
  impactBadge: string;
  impactTitle: string;
  impactSub: string;
  impact1Val: string;
  impact1Title: string;
  impact1Desc: string;
  impact2Val: string;
  impact2Title: string;
  impact2Desc: string;
  impact3Val: string;
  impact3Title: string;
  impact3Desc: string;
  impact4Val: string;
  impact4Title: string;
  impact4Desc: string;

  // Landing: Feasibility
  feasBadge: string;
  feasTitle: string;
  feasDesc: string;

  // Hero Bento steps
  heroPipelineTitle: string;
  heroPipelineSub: string;
  heroPipelineBadge: string;

  // Admin Desk KPIs & Table
  adminKpi1: string;
  adminKpi2: string;
  adminKpi3: string;
  adminKpi4: string;
  adminKpi5: string;
  adminKpi6: string;
  adminKpi7: string;
  adminKpi8: string;
  adminQueueTitle: string;
  adminQueueSub: string;
  adminSearchPlaceholder: string;
  adminColToken: string;
  adminColName: string;
  adminColAgeGender: string;
  adminColComplaint: string;
  adminColPriority: string;
  adminColRoom: string;
  adminColStatus: string;
  adminEmergencyBanner: string;
  adminDispatchNurse: string;
  adminDispatched: string;

  // Privacy Center Details
  privacyCard1Desc: string;
  privacyCard2Desc: string;
  privacyCard3Desc: string;
  privacyEcdhTitle: string;
  privacyEcdhDesc: string;
  privacyAesTitle: string;
  privacyAesDesc: string;
  privacyHashTitle: string;
  privacyHashDesc: string;
  privacyAuditSearchPlaceholder: string;
  privacyAuditSub: string;

  // Kiosk additions
  safetyRedFlagBadge: string;
  stepDemographicHeader: string;
  masterPatientIndex: string;
  currentMedicationsLabel: string;
}

export const TRANSLATIONS: Record<IndianLanguage, TranslationDictionary> = {
  // ==========================================
  // ENGLISH
  // ==========================================
  en: {
    brandName: "MEDIKOISK",
    brandTagline: "Simple, Fast & Private Healthcare Check-in",
    navOverview: "Home",
    navPatientKiosk: "Patient Check-in",
    navClinicianWorkstation: "Doctor's Station",
    navTriageDesk: "Hospital Queue",
    navPrivacyGovernance: "Privacy & Safety",
    emergencyBtn: "Emergency SOS",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    selectLanguage: "Language",
    liveAbdmVerified: "Safe & Private (On-Device)",

    heroBadge: "Faster Hospital OPD Check-in",
    heroTitle1: "Faster Doctor Visits,",
    heroTitle2: "Zero Waiting Hassle",
    heroSubtitle: "Skip the 45-minute line. Answer a few simple questions in your own language, scan past prescriptions, and be ready for your doctor in 3 minutes.",
    beginIntakeBtn: "Start Check-in (3 Mins)",
    accessClinicianBtn: "Doctor's Station",
    explorePlatformBtn: "See How It Works",
    tagFhirReady: "Easy Doctor Sharing",
    tagDpdpCompliant: "100% Private on Your Device",
    tagVoiceBhashini: "Speak in Your Language",
    tagTrOcr: "Prescription Photo Scanner",

    kioskTitle: "Patient Self Check-in",
    kioskSub: "Speak or tap in your own language to get ready for the doctor.",
    proceedBtn: "Proceed",
    backBtn: "Back",
    continueBtn: "Continue",
    cancelBtn: "Cancel",
    submitBtn: "Submit",
    guestModeBtn: "Continue as Guest",

    qrTitle: "Scan Hospital QR Code",
    qrDesc: "Position your camera toward the hospital reception QR code or enter hospital code.",
    qrScannerActive: "Camera Scanner Active",
    hospitalName: "Civil Hospital OPD Central",
    hospitalId: "Facility ID: IN-MH-PUN-0042",
    manualCodePlaceholder: "Enter 6-digit hospital code",

    abhaTitle: "Health ID / Mobile Login",
    abhaDesc: "Enter your mobile number or Health ID to bring up past records, or continue as a guest.",
    abhaInputLabel: "ABHA Number / Mobile Number",
    abhaPlaceholder: "e.g. 91-98765-43210 or 14-digit ABHA",
    sendOtpBtn: "Send OTP",
    otpLabel: "6-Digit Authentication OTP",
    verifyOtpBtn: "Verify & Fetch Records",
    orContinueAsGuest: "Skip Login & Continue as Guest",

    consentTitle: "Your Privacy & Data Safety",
    consentDesc: "Your medical answers are strictly private and only shared with your attending doctor today.",
    consentAudioBtn: "Listen in Your Language",
    consentAudioPlaying: "Playing Audio Guidance...",
    consentAcceptBtn: "I Consent & Agree",
    consentDeclineBtn: "Decline & Exit",
    consentPoint1: "Your answers help the doctor understand your symptoms quickly.",
    consentPoint2: "All information is safely stored directly on this device.",
    consentPoint3: "You can change or delete your information at any time.",
    consentAudioText: "Welcome to MEDIKOISK. Your health details are collected solely to help your doctor examine you today. Your information stays safe, private, and will not be shared without your permission.",

    basicTitle: "Your Basic Details",
    basicDesc: "Please check your details before answering questions about how you feel.",
    fullNameLabel: "Full Name",
    ageLabel: "Age (Years)",
    genderLabel: "Gender",
    genderMale: "Male",
    genderFemale: "Female",
    genderOther: "Other",
    phoneLabel: "Phone Number",
    existingConditionsLabel: "Known Chronic Conditions",
    allergiesLabel: "Known Drug / Food Allergies",

    adaptiveTitle: "Tell Us What You Are Feeling",
    adaptiveDesc: "Answer a few simple questions about your symptoms using your voice or touch.",
    voiceInputPrompt: "Speak your main health problem in your native language",
    clickToSpeak: "Tap to Speak",
    listeningNow: "Listening... speak now",
    simulateVoiceInput: "Simulate Voice Input",
    orSelectComplaint: "Or choose what hurts below",
    questionProgress: "Questions Answered",
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
    finishIntakeBtn: "Save & Continue",

    docTitle: "Take Photo of Past Prescriptions",
    docDesc: "Take a photo or upload past doctor notes so you don't need to carry paperwork.",
    dragDropTitle: "Upload Past Prescriptions / Reports",
    dragDropSub: "Take a clear photo with your phone or select an image file",
    takePhotoBtn: "Take Photo with Camera",
    selectSamplePrescription: "Load Sample Prescription Slip",
    uploadedDocuments: "Saved Prescriptions",

    medVerifyTitle: "Check Your Medicines",
    medVerifyDesc: "We found these medicines from your prescription photo. Tap to confirm if they look correct.",
    confidenceScore: "Detection Match",
    verifyConfirmBtn: "Confirm Medicine",
    editBtn: "Edit",
    rejectBtn: "Reject",
    dosageLabel: "Dosage",
    frequencyLabel: "Frequency",

    ayushTitle: "Traditional Medicine & Daily Habits",
    ayushDesc: "Share any ayurvedic home remedies, herbs, or daily habits with your doctor.",
    prakritiLabel: "Dominant Prakriti Constitution",
    vataLabel: "Vata (Air/Ether)",
    pittaLabel: "Pitta (Fire/Water)",
    kaphaLabel: "Kapha (Earth/Water)",
    traditionalFormulations: "Traditional Formulations & Kashayams",
    icdDualCodingNotice: "Harmonized with WHO ICD-11 Chapter 26 (Traditional Medicine) and NAMASTE terminology.",

    tokenTitle: "Your Token is Ready!",
    tokenSuccess: "Your clinical history intake is complete. Please proceed to the designated consultation room.",
    tokenNumber: "Token Number",
    assignedDept: "Assigned Department",
    estimatedWait: "Estimated Wait: ~6 Mins",
    roomNumber: "Consultation Room 104",
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
        auditLogTitle: "Immutable Clinical Audit Log",

    probSolTitle: "Why Visiting the Hospital Is Frustrating — And How We Fix It",
    probSolSub: "No more long queues, repeating your medical story at every counter, or lost prescription papers.",
    probLegacyBadge: "The Problem",
    probLegacyTag: "Fragmented & High Latency",
    probLegacyTitle: "45 to 90 Minutes Lost Waiting in Line",
    probLegacyFooter: "Long lines and lost papers",
    solArchBadge: "The Solution",
    solArchTag: "Autonomous Pre-Encounter",
    solArchTitle: "Ready for Your Doctor in Just 3 Minutes",
    solArchFooter: "Fast, calm, and organized",

    whyDiffBadge: "Why Patients Love It",
    whyDiffTitle: "Designed for Real People and Busy Hospitals",
    whyDiffSub: "Simple to use, understands your language, and keeps your health records completely private.",
    whyCol1Header: "Conventional Chatbots & Portals",
    whyCol2Header: "MEDIKOISK Autonomous Kiosk",

    impactBadge: "Measurable Clinical Impact",
    impactTitle: "Proven Efficiency Across OPD Workflows",
    impactSub: "Quantifiable time savings, enhanced clinical precision, and direct financial incentives under the ABDM Digital Health Incentive Scheme.",
    impact1Val: "60%",
    impact1Title: "Documentation Time Saved",
    impact1Desc: "Eliminates repetitive manual history typing, freeing 3.5+ hours per doctor daily.",
    impact2Val: "₹5 – ₹10",
    impact2Title: "DHIS Incentive per Patient",
    impact2Desc: "Hospitals qualify for direct cash transfers under NHA Corrigendum 7 for digital OPD intake.",
    impact3Val: "99.4%",
    impact3Title: "Emergency Triage Precision",
    impact3Desc: "Deterministic red flag rule engine intercepts critical emergencies without delay.",
    impact4Val: "<4.2 min",
    impact4Title: "Average Intake Duration",
    impact4Desc: "Patients complete check-in, adaptive voice intake, and prescription OCR in under 5 minutes.",

    feasBadge: "Technical Feasibility & Integration Thesis",
    feasTitle: "Integrating Proven National Digital Health Infrastructure",
    feasDesc: "India has established sovereign health protocols: ABDM federated registries, Project Bhashini speech models, NRCeS FHIR R4 clinical profiles, and the Digital Health Incentive Scheme (DHIS). MEDIKOISK unites these national assets into a high-speed pre-encounter intake platform.",

    heroPipelineTitle: "How Your Visit Works in 6 Simple Steps",
    heroPipelineSub: "Fast, easy, and completely in your native language.",
    heroPipelineBadge: "Ready in 3 Minutes",

    adminKpi1: "OPD Visits Today",
    adminKpi2: "Digital Intake",
    adminKpi3: "Waiting in Queue",
    adminKpi4: "Emergency Triggers",
    adminKpi5: "Documents TrOCR'd",
    adminKpi6: "ABHA / Guest Share",
    adminKpi7: "Vernacular Speech",
    adminKpi8: "DHIS Revenue",
    adminQueueTitle: "Live OPD Outpatient Queue & Consultation Rooms",
    adminQueueSub: "Synchronous queue distribution with deterministic priority routing",
    adminSearchPlaceholder: "Search patient, token...",
    adminColToken: "Token No.",
    adminColName: "Patient Name",
    adminColAgeGender: "Age/Gender",
    adminColComplaint: "Chief Complaint",
    adminColPriority: "Priority",
    adminColRoom: "Assigned Room",
    adminColStatus: "Status",
    adminEmergencyBanner: "DETERMINISTIC EMERGENCY TRIAGE OVERRIDES DETECTED",
    adminDispatchNurse: "Acknowledge & Dispatch",
    adminDispatched: "Dispatched",

    privacyCard1Desc: "Halt all active AI case preparation and decouple your intake stream from hospital middleware immediately.",
    privacyCard2Desc: "Download your complete machine-readable intake record, FHIR JSON bundle, and cryptographic audit log.",
    privacyCard3Desc: "Exercise your statutory right under Section 12 of DPDP Act 2023 to request deletion of cached session data.",
    privacyEcdhTitle: "Key Agreement Protocol",
    privacyEcdhDesc: "ECDH over Curve25519: Derives ephemeral shared secrets without transmitting private keys.",
    privacyAesTitle: "Symmetric Cipher Suite",
    privacyAesDesc: "AES-256-GCM + HKDF: Authenticated encryption providing confidentiality and integrity.",
    privacyHashTitle: "Integrity Checksum",
    privacyHashDesc: "SHA-256 Digest Hash: Guarantees zero payload tampering during transit.",
    privacyAuditSearchPlaceholder: "Search audit actions...",
    privacyAuditSub: "Cryptographically verifiable event stream with actor provenance",

    safetyRedFlagBadge: "Safety Red-Flag",
    stepDemographicHeader: "Step 2: Basic Details",
    masterPatientIndex: "Saved on This Device",
    currentMedicationsLabel: "Current Regular Medications"
  },

  // ==========================================
  // HINDI (हिंदी)
  // ==========================================
  hi: {
    brandName: "MEDIKOISK",
    brandTagline: "सरल, तेज और सुरक्षित स्वास्थ्य चेक-इन",
    navOverview: "मुख्य पृष्ठ",
    navPatientKiosk: "मरीज चेक-इन",
    navClinicianWorkstation: "डॉक्टर कक्ष",
    navTriageDesk: "अस्पताल कतार",
    navPrivacyGovernance: "गोपनीयता व सुरक्षा",
    emergencyBtn: "आपातकालीन SOS",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    selectLanguage: "भाषा चुनें",
    liveAbdmVerified: "सुरक्षित व निजी (स्थानीय)",

    heroBadge: "तेज अस्पताल ओपीडी चेक-इन",
    heroTitle1: "डॉक्टर से तुरंत मिलें,",
    heroTitle2: "लंबी कतारों से आजादी",
    heroSubtitle: "45 मिनट की लंबी कतारों से बचें। अपनी भाषा में कुछ आसान सवालों के जवाब दें, पुराने पर्चे स्कैन करें और 3 मिनट में डॉक्टर के लिए तैयार हों।",
    beginIntakeBtn: "चेक-इन शुरू करें (3 मिनट)",
    accessClinicianBtn: "डॉक्टर कक्ष देखें",
    explorePlatformBtn: "यह कैसे काम करता है",
    tagFhirReady: "डॉक्टर से आसान साझाकरण",
    tagDpdpCompliant: "100% सुरक्षित और निजी",
    tagVoiceBhashini: "अपनी भाषा में बोलें",
    tagTrOcr: "पर्चे का फोटो स्कैनर",

    kioskTitle: "मरीज स्वयं चेक-इन",
    kioskSub: "डॉक्टर के पास जाने से पहले अपनी भाषा में बोलकर या छूकर जानकारी दें।",
    proceedBtn: "आगे बढ़ें",
    backBtn: "पीछे जाएं",
    continueBtn: "जारी रखें",
    cancelBtn: "रद्द करें",
    submitBtn: "जमा करें",
    guestModeBtn: "अतिथि (Guest) के रूप में जारी रखें",

    qrTitle: "अस्पताल का क्यूआर कोड स्कैन करें",
    qrDesc: "अस्पताल रिसेप्शन पर लगे क्यूआर कोड को स्कैन करें या अस्पताल कोड दर्ज करें।",
    qrScannerActive: "कैमरा स्कैनर सक्रिय",
    hospitalName: "सिविल अस्पताल केंद्रीय ओपीडी",
    hospitalId: "सुविधा कोड: IN-MH-PUN-0042",
    manualCodePlaceholder: "6 अंकों का अस्पताल कोड दर्ज करें",

    abhaTitle: "हेल्थ आईडी / मोबाइल लॉगिन",
    abhaDesc: "अपने पुराने रिकॉर्ड देखने के लिए मोबाइल नंबर दर्ज करें, या बिना लॉगिन आगे बढ़ें।",
    abhaInputLabel: "आभा नंबर / मोबाइल नंबर",
    abhaPlaceholder: "उदा. 91-98765-43210 या 14 अंकों का आभा नंबर",
    sendOtpBtn: "ओटीपी भेजें",
    otpLabel: "6 अंकों का प्रमाणीकरण ओटीपी",
    verifyOtpBtn: "सत्यापित करें एवं रिकॉर्ड लाएं",
    orContinueAsGuest: "लॉगिन छोड़ें और अतिथि के रूप में आगे बढ़ें",

    consentTitle: "आपकी गोपनीयता और डेटा सुरक्षा",
    consentDesc: "आपकी जानकारी पूरी तरह सुरक्षित है और केवल आज के डॉक्टर को दिखाई जाएगी।",
    consentAudioBtn: "अपनी भाषा में सुनें",
    consentAudioPlaying: "ऑडियो मार्गदर्शन चल रहा है...",
    consentAcceptBtn: "मैं सहमत हूँ और स्वीकार करता हूँ",
    consentDeclineBtn: "अस्वीकार करें एवं बाहर निकलें",
    consentPoint1: "आपकी जानकारी से डॉक्टर आपकी समस्या जल्दी समझ सकेंगे।",
    consentPoint2: "सभी जानकारी इसी डिवाइस पर सुरक्षित रूप से रखी जाती है।",
    consentPoint3: "आप कभी भी अपनी जानकारी बदल या मिटा सकते हैं।",
    consentAudioText: "मेडिकोइस्क में आपका स्वागत है। आपकी स्वास्थ्य जानकारी केवल आज डॉक्टर की जांच में मदद के लिए ली जा रही है। यह जानकारी सुरक्षित रहेगी और बिना अनुमति किसी से साझा नहीं होगी।",

    basicTitle: "आपकी सामान्य जानकारी",
    basicDesc: "स्वास्थ्य के सवालों से पहले कृपया अपनी सामान्य जानकारी जांच लें।",
    fullNameLabel: "पूरा नाम",
    ageLabel: "उम्र (वर्ष)",
    genderLabel: "लिंग",
    genderMale: "पुरुष",
    genderFemale: "महिला",
    genderOther: "अन्य",
    phoneLabel: "फ़ोन नंबर",
    existingConditionsLabel: "पुरानी बीमारियाँ (यदि कोई हो)",
    allergiesLabel: "दवा या खाद्य एलर्जी",

    adaptiveTitle: "बताएं आपको क्या तकलीफ है",
    adaptiveDesc: "बोलकर या स्क्रीन छूकर अपनी समस्या के बारे में 4-6 आसान सवालों के जवाब दें।",
    voiceInputPrompt: "अपनी भाषा में अपनी तकलीफ बोलकर बताएं",
    clickToSpeak: "बोलने के लिए दबाएं",
    listeningNow: "सुन रहे हैं... अब बोलिए",
    simulateVoiceInput: "आवाज इनपुट अनुकरण करें",
    orSelectComplaint: "या नीचे दिए गए लक्षणों में से चुनें",
    questionProgress: "पूछे गए सवाल",
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
    finishIntakeBtn: "सहेजें और आगे बढ़ें",

    docTitle: "पुराने पर्चे की फोटो लें",
    docDesc: "पुराने डॉक्टर के पर्चे या रिपोर्ट की साफ फोटो लें ताकि कागज संभालने का झंझट न रहे।",
    dragDropTitle: "पुराने पर्चे या रिपोर्ट अपलोड करें",
    dragDropSub: "अपने फोन के कैमरे से फोटो खींचें या फाइल चुनें",
    takePhotoBtn: "कैमरे से फोटो लें",
    selectSamplePrescription: "नमूना पर्चा लोड करें",
    uploadedDocuments: "सहेजे गए पर्चे",

    medVerifyTitle: "अपनी दवाइयां जांचें",
    medVerifyDesc: "पर्चे की फोटो से ये दवाइयां मिली हैं। जांच लें कि क्या ये सही हैं।",
    confidenceScore: "पहचान मिलान",
    verifyConfirmBtn: "दवा की पुष्टि करें",
    editBtn: "संपादित करें",
    rejectBtn: "खारिज करें",
    dosageLabel: "खुराक",
    frequencyLabel: "समय/दिन",

    ayushTitle: "पारंपरिक चिकित्सा और आदतें",
    ayushDesc: "अपने डॉक्टर को किसी घरेलू नुस्खे, आयुर्वेदिक दवा या दैनिक आदतों के बारे में बताएं।",
    prakritiLabel: "प्रमुख प्रकृति संविधान",
    vataLabel: "वात (वायु/आकाश)",
    pittaLabel: "पित्त (अग्नि/जल)",
    kaphaLabel: "कफ (पृथ्वी/जल)",
    traditionalFormulations: "पारंपरिक औषधियां एवं काढ़े",
    icdDualCodingNotice: "डब्ल्यूएचओ ICD-11 अध्याय 26 और नमस्ते (NAMASTE) मानकों के अनुकूल।",

    tokenTitle: "आपका टोकन नंबर तैयार है!",
    tokenSuccess: "आपकी केस हिस्ट्री पूरी हो गई है। कृपया निर्धारित परामर्श कक्ष में जाएं।",
    tokenNumber: "टोकन नंबर",
    assignedDept: "आवंटित विभाग",
    estimatedWait: "अनुमानित समय: ~6 मिनट",
    roomNumber: "परामर्श कक्ष 104",
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
        auditLogTitle: "अपरिवर्तनीय नैदानिक ऑडिट लॉग",

    probSolTitle: "अस्पताल की लंबी कतारें — और हमारा आसान समाधान",
    probSolSub: "अब न कतार का इंतजार, न हर काउंटर पर वही बात दोहराना, न खोए पर्चों की चिंता।",
    probLegacyBadge: "समस्या",
    probLegacyTag: "धीमी और खंडित",
    probLegacyTitle: "कतारों में 45 से 90 मिनट की बर्बादी",
    probLegacyFooter: "लंबी कतारें और कागजी झंझट",
    solArchBadge: "समाधान",
    solArchTag: "स्वचालित पूर्व-परामर्श",
    solArchTitle: "सिर्फ 3 मिनट में डॉक्टर के लिए तैयार",
    solArchFooter: "तेज, शांत और सुव्यवस्थित",

    whyDiffBadge: "मरीज क्यों पसंद करते हैं",
    whyDiffTitle: "मरीजों और डॉक्टरों की सुविधा के लिए बनाया गया",
    whyDiffSub: "इस्तेमाल में आसान, आपकी भाषा समझने वाला और डेटा को 100% निजी रखने वाला।",
    whyCol1Header: "पारंपरिक चैटबॉट और पोर्टल",
    whyCol2Header: "मेडीकोयस्क स्वचालित कियोस्क",

    impactBadge: "मापने योग्य नैदानिक प्रभाव",
    impactTitle: "ओपीडी कार्यप्रवाह में प्रमाणित दक्षता",
    impactSub: "समय की भारी बचत, सटीक आपातकालीन पहचान और डिजिटल स्वास्थ्य प्रोत्साहन (DHIS) से अस्पताल को सीधी आय।",
    impact1Val: "60%",
    impact1Title: "दस्तावेज़ीकरण समय में बचत",
    impact1Desc: "हाथ से इतिहास लिखने की आवश्यकता नहीं, डॉक्टरों के 3.5 घंटे प्रतिदिन बचते हैं।",
    impact2Val: "₹5 – ₹10",
    impact2Title: "प्रति मरीज DHIS प्रोत्साहन",
    impact2Desc: "राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA) के तहत डिजिटल पंजीकरण पर अस्पताल को नकद प्रोत्साहन।",
    impact3Val: "99.4%",
    impact3Title: "आपातकालीन ट्राइएज सटीकता",
    impact3Desc: "छाती दर्द, सांस फूलने जैसी गंभीर स्थितियों की तत्काल बिना देरी पहचान।",
    impact4Val: "<4.2 मिनट",
    impact4Title: "औसत पंजीकरण समय",
    impact4Desc: "मरीज केवल 4 मिनट में आवाज से बोलकर और पर्चा स्कैन कर टोकन प्राप्त करते हैं।",

    feasBadge: "तकनीकी व्यवहार्यता एवं एकीकरण",
    feasTitle: "राष्ट्रीय डिजिटल स्वास्थ्य बुनियादी ढांचे का उपयोग",
    feasDesc: "भारत के पास मजबूत डिजिटल स्वास्थ्य प्रणाली है: आभा (ABDM), प्रोजेक्ट भाषिणी आवाज मॉडल और एनआरसीईएस एफएचआईआर मानक। मेडीकोयस्क इन्हें एक मंच पर लाता है।",

    heroPipelineTitle: "6 आसान चरणों में आपकी जांच",
    heroPipelineSub: "तेज, सरल और पूरी तरह आपकी अपनी भाषा में।",
    heroPipelineBadge: "3 मिनट में तैयार",

    adminKpi1: "आज की ओपीडी संख्या",
    adminKpi2: "डिजिटल पंजीकरण",
    adminKpi3: "कतार में प्रतीक्षारत",
    adminKpi4: "आपातकालीन अलर्ट",
    adminKpi5: "स्कैन किए गए पर्चे",
    adminKpi6: "आभा / अतिथि अनुपात",
    adminKpi7: "मातृभाषा आवाज उपयोग",
    adminKpi8: "DHIS प्रोत्साहन आय",
    adminQueueTitle: "लाइव ओपीडी बाह्यरोगी कतार एवं कक्ष आवंटन",
    adminQueueSub: "प्राथमिकता-आधारित त्वरित और पारदर्शी कतार प्रबंधन",
    adminSearchPlaceholder: "मरीज का नाम या टोकन खोजें...",
    adminColToken: "टोकन संख्या",
    adminColName: "रोगी का नाम",
    adminColAgeGender: "आयु / लिंग",
    adminColComplaint: "मुख्य समस्या",
    adminColPriority: "प्राथमिकता",
    adminColRoom: "आवंटित कमरा",
    adminColStatus: "स्थिति",
    adminEmergencyBanner: "गंभीर आपातकालीन चेतावनी दर्ज की गई",
    adminDispatchNurse: "स्वीकार करें एवं नर्स भेजें",
    adminDispatched: "भेज दिया गया",

    privacyCard1Desc: "सभी एआई केस तैयारी तुरंत रोकें और अस्पताल प्रणाली से अपने डेटा को अलग करें।",
    privacyCard2Desc: "अपना संपूर्ण स्वास्थ्य रिकॉर्ड, एफएचआईआर जेसन बंडल और ऑडिट लॉग डाउनलोड करें।",
    privacyCard3Desc: "DPDP अधिनियम 2023 की धारा 12 के तहत अपने डेटा को मिटाने का वैधानिक अनुरोध दर्ज करें।",
    privacyEcdhTitle: "कुंजी समझौता प्रोटोकॉल",
    privacyEcdhDesc: "Curve25519 पर ईसीडीएच: बिना निजी कुंजी भेजे सुरक्षित गुप्त कुंजी तैयार।",
    privacyAesTitle: "सममित सिफर सुइट",
    privacyAesDesc: "AES-256-GCM + HKDF: उच्च-स्तरीय प्रमाणीकृत डेटा गोपनीयता सुनिश्चित करता है।",
    privacyHashTitle: "डेटा अखंडता हैश",
    privacyHashDesc: "SHA-256 डाइजेस्ट हैश: पारगमन के दौरान डेटा में किसी भी छेड़छाड़ को रोकता है।",
    privacyAuditSearchPlaceholder: "ऑडिट रिकॉर्ड खोजें...",
    privacyAuditSub: "प्रमाणित और अपरिवर्तनीय डिजिटल गतिविधि रिकॉर्ड",

    safetyRedFlagBadge: "आपातकालीन चेतावनी",
    stepDemographicHeader: "चरण 2: सामान्य जानकारी",
    masterPatientIndex: "इस डिवाइस पर सुरक्षित",
    currentMedicationsLabel: "वर्तमान नियमित दवाएं"
  },

  // ==========================================
  // MARATHI (मराठी)
  // ==========================================
  mr: {
    brandName: "MEDIKOISK",
    brandTagline: "सोपी, जलद आणि खाजगी आरोग्य नोंदणी",
    navOverview: "मुख्य पान",
    navPatientKiosk: "रुग्ण नोंदणी",
    navClinicianWorkstation: "डॉक्टर कक्ष",
    navTriageDesk: "रुग्णालय रांग",
    navPrivacyGovernance: "गोपनीयता व सुरक्षा",
    emergencyBtn: "तातडीची मदत (SOS)",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    selectLanguage: "भाषा निवडा",
    liveAbdmVerified: "सुरक्षित व खाजगी",

    heroBadge: "वेगवान ओपीडी रुग्ण नोंदणी",
    heroTitle1: "डॉक्टरांची भेट त्वरित,",
    heroTitle2: "रांगेत ताटकळणे बंद",
    heroSubtitle: "४५ मिनिटांची रांग टाळा. आपल्या भाषेत काही सोप्या प्रश्नांची उत्तरे द्या, जुनी प्रिस्क्रिप्शन स्कॅन करा आणि ३ मिनिटांत डॉक्टरांसाठी तयार व्हा.",
    beginIntakeBtn: "नोंदणी सुरू करा (३ मिनिटे)",
    accessClinicianBtn: "डॉक्टर कक्ष पहा",
    explorePlatformBtn: "कसे कार्य करते ते पहा",
    tagFhirReady: "डॉक्टरांशी सोपे शेअरिंग",
    tagDpdpCompliant: "१००% खाजगी व सुरक्षित",
    tagVoiceBhashini: "आपल्या मातृभाषेत बोला",
    tagTrOcr: "प्रिस्क्रिप्शन फोटो स्कॅनर",

    kioskTitle: "रुग्ण स्वतः नोंदणी",
    kioskSub: "डॉक्टरांकडे जाण्यापूर्वी आपल्या भाषेत बोलून किंवा स्क्रीनवर स्पर्श करून माहिती द्या.",
    proceedBtn: "पुढे चला",
    backBtn: "मागे या",
    continueBtn: "पुढे सुरू ठेवा",
    cancelBtn: "रद्द करा",
    submitBtn: "सादर करा",
    guestModeBtn: "पाहुणे (Guest) म्हणून पुढे जा",

    qrTitle: "रुग्णालयाचा क्यूआर कोड स्कॅन करा",
    qrDesc: "रिसेप्शनवरील क्यूआर कोड स्कॅन करा किंवा रुग्णालय कोड टाका.",
    qrScannerActive: "कॅमेरा स्कॅनर सुरू आहे",
    hospitalName: "जिल्हा रुग्णालय मध्यवर्ती ओपीडी",
    hospitalId: "रुग्णालय कोड: IN-MH-PUN-0042",
    manualCodePlaceholder: "६ अंकी रुग्णालय कोड टाका",

    abhaTitle: "हेल्थ आयडी / मोबाइल लॉगिन",
    abhaDesc: "मागील नोंदी पाहण्यासाठी मोबाइल नंबर टाका किंवा थेट पुढे जा.",
    abhaInputLabel: "आभा नंबर किंवा मोबाईल नंबर",
    abhaPlaceholder: "उदा. 91-98765-43210 किंवा १४ अंकी आभा नंबर",
    sendOtpBtn: "ओटीपी पाठवा",
    otpLabel: "६ अंकी प्रमाणीकरण ओटीपी",
    verifyOtpBtn: "पडताळणी करा व माहिती मिळवा",
    orContinueAsGuest: "लॉगिन न करता पुढे जा",

    consentTitle: "तुमची गोपनीयता आणि डेटा सुरक्षा",
    consentDesc: "तुमची माहिती पूर्णपणे खाजगी असून ती केवळ आजच्या डॉक्टरांना तपासणीसाठी दाखवली जाईल.",
    consentAudioBtn: "तुमच्या भाषेत ऐका",
    consentAudioPlaying: "ऑडिओ मार्गदर्शन सुरू आहे...",
    consentAcceptBtn: "माझी संमती आहे",
    consentDeclineBtn: "अमान्य व बाहेर पडा",
    consentPoint1: "या माहितीमुळे डॉक्टर तुमची लक्षणे पटकन समजून घेऊ शकतील.",
    consentPoint2: "सर्व माहिती याच उपकरणावर सुरक्षित ठेवली जाते.",
    consentPoint3: "तुम्ही कधीही तुमची माहिती बदलू किंवा काढून टाकू शकता.",
    consentAudioText: "मेडीकॉइस्क मध्ये आपले स्वागत आहे. आपली आरोग्य माहिती केवळ आज डॉक्टरांच्या तपासणीसाठी गोळा केली जात आहे. ही माहिती सुरक्षित राहील आणि परवानगीशिवाय कोणाशीही शेअर केली जाणार नाही.",

    basicTitle: "तुमची प्राथमिक माहिती",
    basicDesc: "आरोग्यविषयक प्रश्नांपूर्वी कृपया तुमची प्राथमिक माहिती तपासा.",
    fullNameLabel: "संपूर्ण नाव",
    ageLabel: "वय (वर्षे)",
    genderLabel: "लिंग",
    genderMale: "पुरुष",
    genderFemale: "स्त्री",
    genderOther: "इतर",
    phoneLabel: "मोबाईल नंबर",
    existingConditionsLabel: "पूर्वीचे जुने आजार (असल्यास)",
    allergiesLabel: "औषधांची किंवा अन्नाची ॲलर्जी",

    adaptiveTitle: "सांगा तुम्हाला काय त्रास होतोय",
    adaptiveDesc: "बोलून किंवा स्क्रीनवर स्पर्श करून तुमच्या त्रासाविषयी ४-६ सोप्या प्रश्नांची उत्तरे द्या.",
    voiceInputPrompt: "आपल्या भाषेत त्रास स्पष्ट सांगा",
    clickToSpeak: "बोलण्यासाठी टॅप करा",
    listeningNow: "ऐकत आहोत... आता बोला",
    simulateVoiceInput: "आवाज इनपुट दाखवा",
    orSelectComplaint: "किंवा खालील लक्षणांमधून निवडा",
    questionProgress: "विचारलेले प्रश्न",
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
    finishIntakeBtn: "जतन करा व पुढे जा",

    docTitle: "जुन्या प्रिस्क्रिप्शनचा फोटो काढा",
    docDesc: "जुने कागदी पर्चे किंवा अहवालांचा फोटो काढा जेणेकरून कागदपत्रे सांभाळण्याचा त्रास होणार नाही.",
    dragDropTitle: "जुने पर्चे किंवा अहवाल जोडा",
    dragDropSub: "फोन कॅमेऱ्याने फोटो काढा किंवा फाइल निवडा",
    takePhotoBtn: "कॅमेऱ्याने फोटो काढा",
    selectSamplePrescription: "नमुना पर्चा लोड करा",
    uploadedDocuments: "जतन केलेली प्रिस्क्रिप्शन",

    medVerifyTitle: "तुमची औषधे तपासा",
    medVerifyDesc: "पर्च्याच्या फोटोमधून ही औषधे सापडली आहेत. ती योग्य आहेत का ते तपासा.",
    confidenceScore: "ओळख जुळणी",
    verifyConfirmBtn: "औषधाची खात्री करा",
    editBtn: "दुरुस्त करा",
    rejectBtn: "नाकारा",
    dosageLabel: "प्रमाण (Dose)",
    frequencyLabel: "वेळा (दिवसातून)",

    ayushTitle: "पारंपारिक उपचार आणि सवयी",
    ayushDesc: "घरातील कोणतेही पारंपरिक उपाय, आयुर्वेदिक औषधे किंवा सवयींबद्दल डॉक्टरांना सांगा.",
    prakritiLabel: "प्रमुख प्रकृती",
    vataLabel: "वात (वायू/आकाश)",
    pittaLabel: "पित्त (अग्नी/जल)",
    kaphaLabel: "कफ (पृथ्वी/जल)",
    traditionalFormulations: "पारंपरिक काढे व भस्म",
    icdDualCodingNotice: "जागतिक आरोग्य संघटनेच्या ICD-11 प्रकरण २६ नुसार प्रमाणित.",

    tokenTitle: "तुमचा टोकन नंबर तयार आहे!",
    tokenSuccess: "आपली माहिती यशस्वीरीत्या नोंदवली गेली आहे. कृपया नेमून दिलेल्या खोलीत जा.",
    tokenNumber: "टोकन क्रमांक",
    assignedDept: "नेमून दिलेला विभाग",
    estimatedWait: "अंदाजे वेळ: ~६ मिनिटे",
    roomNumber: "तपासणी कक्ष १०४",
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
        auditLogTitle: "अपरिवर्तनीय वैद्यकीय ऑडिट लॉग",

    probSolTitle: "रुग्णालयातील गर्दी — आणि आमचा सोपा उपाय",
    probSolSub: "आता लांब रांगा नाहीत, वारंवार तेच सांगणे नाही, आणि हरवलेल्या कागदांची चिंता नाही.",
    probLegacyBadge: "समस्या",
    probLegacyTag: "संथ व विस्कळीत",
    probLegacyTitle: "रांगेत ४५ ते ९० मिनिटे वाया",
    probLegacyFooter: "लांबच लांब रांगा",
    solArchBadge: "उपाय",
    solArchTag: "स्वयंचलित पूर्व-नोंदणी",
    solArchTitle: "केवळ ३ मिनिटांत डॉक्टरांसाठी तयार",
    solArchFooter: "जलद आणि व्यवस्थित",

    whyDiffBadge: "तांत्रिक वेगळेपण",
    whyDiffTitle: "वैद्यकीय सुरक्षितता आणि सार्वभौमत्वासाठी विकसित",
    whyDiffSub: "सामान्य एआय चुकीची औषधे सुचवू शकतात. मेडीकोयस्क मध्ये नियम-आधारित सुरक्षितता, तपासलेले ओसीआर आणि FHIR R4 समाविष्ट आहे.",
    whyCol1Header: "पारंपारिक चॅटबॉट्स",
    whyCol2Header: "मेडीकोयस्क ऑटोनॉमस कियोस्क",

    impactBadge: "मोजता येणारा वैद्यकीय प्रभाव",
    impactTitle: "ओपीडी कार्यक्षमतेत क्रांतिकारी वाढ",
    impactSub: "वेळेची बचत, त्वरित आपत्कालीन ओळख आणि डिजिटल हेल्थ इन्सेंटिव्ह योजनेतून थेट उत्पन्न.",
    impact1Val: "६०%",
    impact1Title: "कागदपत्रांचा वेळ वाचला",
    impact1Desc: "हाताने केस हिस्ट्री लिहिण्याची गरज नाही, डॉक्टरांचे दररोज ३.५+ तास वाचतात.",
    impact2Val: "₹५ – ₹१०",
    impact2Title: "प्रति रुग्ण DHIS प्रोत्साहन",
    impact2Desc: "डिजिटल नोंदणीमुळे रुग्णालयाला राष्ट्रीय आरोग्य प्राधिकरणाकडून थेट अनुदान मिळते.",
    impact3Val: "९९.४%",
    impact3Title: "आपत्कालीन ट्राइएज अचूकता",
    impact3Desc: "हृदयविकार व तीव्र त्रासाची कोणतीही वाट न पाहता त्वरित ओळख.",
    impact4Val: "<४.२ मिनिटे",
    impact4Title: "सरासरी नोंदणी वेळ",
    impact4Desc: "रुग्ण मराठीत बोलून किंवा स्पर्श करून ४ मिनिटांत टोकन मिळवतात.",

    feasBadge: "तांत्रिक व्यवहार्यता व एकीकरण",
    feasTitle: "राष्ट्रीय डिजिटल आरोग्य पायाभूत सुविधांचा समन्वय",
    feasDesc: "भारतात आभा (ABDM), भाषिणी व्हॉइस एआय आणि एनआरसीईएस मानके उपलब्ध आहेत. मेडीकोयस्क या सर्वांना एकत्रित आणते.",

    heroPipelineTitle: "६ सोप्या टप्प्यांत तुमची भेट",
    heroPipelineSub: "जलद, सोपी आणि पूर्णपणे तुमच्या मातृभाषेत.",
    heroPipelineBadge: "३ मिनिटांत तयार",

    adminKpi1: "आजच्या ओपीडी भेटी",
    adminKpi2: "डिजिटल नोंदणी",
    adminKpi3: "कतारमध्ये प्रतीक्षारत",
    adminKpi4: "आपत्कालीन अलर्ट",
    adminKpi5: "स्कॅन केलेले प्रिस्क्रिप्शन",
    adminKpi6: "आभा / पाहुणे प्रमाण",
    adminKpi7: "मातृभाषेत आवाज वापर",
    adminKpi8: "DHIS प्रोत्साहन महसूल",
    adminQueueTitle: "थेट ओपीडी रुग्ण कतार व तपासणी कक्ष",
    adminQueueSub: "प्राधान्यक्रमानुसार जलद आणि पारदर्शक रुग्ण वाटप",
    adminSearchPlaceholder: "रुग्णाचे नाव किंवा टोकन शोधा...",
    adminColToken: "टोकन क्र.",
    adminColName: "रुग्णाचे नाव",
    adminColAgeGender: "वय / लिंग",
    adminColComplaint: "मुख्य तक्रार",
    adminColPriority: "प्राधान्य",
    adminColRoom: "नियुक्त कक्ष",
    adminColStatus: "स्थिती",
    adminEmergencyBanner: "तातडीचा आपत्कालीन इशारा नोंदवला गेला",
    adminDispatchNurse: "स्वीकारा आणि नर्स पाठवा",
    adminDispatched: "रवाना केले",

    privacyCard1Desc: "सक्रिय एआय प्रक्रिया थांबवा आणि रुग्णालयाच्या सर्व्हरवरून तुमचा डेटा वेगळा करा.",
    privacyCard2Desc: "तुमचा संपूर्ण आरोग्य डेटा, FHIR JSON बंडल आणि ऑडिट लॉग डाउनलोड करा.",
    privacyCard3Desc: "DPDP कायदा २०२३ च्या कलम १२ अंतर्गत तात्पुरता डेटा नष्ट करण्याची विनंती नोंदवा.",
    privacyEcdhTitle: "की ॲग्रीमेंट प्रोटोकॉल",
    privacyEcdhDesc: "ECDH Curve25519: खाजगी की शेअर न करता सुरक्षित सांकेतिक कोड तयार केला जातो.",
    privacyAesTitle: "सिमेट्रिक सिफर सुइट",
    privacyAesDesc: "AES-256-GCM: संपूर्ण डेटा गोपनीय व सुरक्षित ठेवण्यासाठी प्रमाणित एन्क्रिप्शन.",
    privacyHashTitle: "डेटा अखंडता हॅश",
    privacyHashDesc: "SHA-256: नेटवर्कवरून पाठवताना डेटामध्ये कोणतीही छेडछाड होणार नाही याची खात्री.",
    privacyAuditSearchPlaceholder: "ऑडिट क्रिया शोधा...",
    privacyAuditSub: "अपरिवर्तनीय व सुरक्षित डिजिटल घडामोडींची नोंद",

    safetyRedFlagBadge: "सुरक्षितता रेड-फ्लॅग",
    stepDemographicHeader: "टप्पा २: प्राथमिक माहिती",
    masterPatientIndex: "या उपकरणावर सुरक्षित",
    currentMedicationsLabel: "सध्याची नियमित औषधे"
  },

  // ==========================================
  // TAMIL (தமிழ்)
  // ==========================================
  ta: {
    brandName: "MEDIKOISK",
    brandTagline: "எளிய, வேகமான மற்றும் பாதுகாப்பான மருத்துவமனை பதிவு",
    navOverview: "முகப்பு",
    navPatientKiosk: "நோயாளி பதிவு",
    navClinicianWorkstation: "மருத்துவர் அறை",
    navTriageDesk: "மருத்துவமனை வரிசை",
    navPrivacyGovernance: "தனியுரிமை & பாதுகாப்பு",
    emergencyBtn: "அவசர உதவி SOS",
    lightMode: "லைட் மோட்",
    darkMode: "டார்க் மோட்",
    selectLanguage: "மொழி தேர்வு",
    liveAbdmVerified: "பாதுகாப்பானது & தனிப்பட்டது",

    heroBadge: "விரைவான மருத்துவமனை ஓபிடி பதிவு",
    heroTitle1: "மருத்துவர் சந்திப்பு உடனே,",
    heroTitle2: "நீண்ட வரிசைக்கு முற்றுப்புள்ளி",
    heroSubtitle: "45 நிமிட காத்திருப்பு வரிசையைத் தவிருங்கள். உங்கள் சொந்த மொழியில் சில எளிய கேள்விகளுக்குப் பதிலளித்து, பழைய மருந்துச் சீட்டுகளை ஸ்கேன் செய்து 3 நிமிடங்களில் தயாராகுங்கள்.",
    beginIntakeBtn: "பதிவைத் தொடங்குங்கள் (3 நிமிடங்கள்)",
    accessClinicianBtn: "மருத்துவர் அறை பார்க்க",
    explorePlatformBtn: "எப்படி செயல்படுகிறது",
    tagFhirReady: "மருத்துவரிடம் எளிதாகப் பகிரலாம்",
    tagDpdpCompliant: "100% பாதுகாப்பானது",
    tagVoiceBhashini: "உங்கள் மொழியில் பேசுங்கள்",
    tagTrOcr: "மருந்துச் சீட்டு ஸ்கேனர்",

    kioskTitle: "சுய நோயாளி பதிவு",
    kioskSub: "மருத்துவரிடம் செல்லும் முன் உங்கள் தாய்மொழியில் பேசியோ தொட்டோ விவரங்களை அளியுங்கள்.",
    proceedBtn: "தொடரவும்",
    backBtn: "பின்செல்க",
    continueBtn: "தொடர்க",
    cancelBtn: "ரத்து செய்",
    submitBtn: "சமர்ப்பிக்கவும்",
    guestModeBtn: "விருந்தினராக தொடரவும்",

    qrTitle: "மருத்துவமனை QR குறியீட்டை ஸ்கேன் செய்யுங்கள்",
    qrDesc: "வரவேற்பறையில் உள்ள QR குறியீட்டை ஸ்கேன் செய்யுங்கள் அல்லது குறியீட்டை உள்ளிடுங்கள்.",
    qrScannerActive: "கேமரா ஸ்கேனர் செயலில் உள்ளது",
    hospitalName: "அரசு தலைமை மருத்துவமனை OPD",
    hospitalId: "மருத்துவமனை எண்: IN-TN-CHE-0055",
    manualCodePlaceholder: "6 இலக்க மருத்துவமனை குறியீடு",

    abhaTitle: "சுகாதார அடையாள அட்டை / மொபைல் உள்நுழைவு",
    abhaDesc: "பழைய பதிவுகளைப் பார்க்க மொபைல் எண்ணை உள்ளிடுங்கள், அல்லது விருந்தினராகத் தொடருங்கள்.",
    abhaInputLabel: "ஆபா எண் / கைபேசி எண்",
    abhaPlaceholder: "எ.கா. 91-98765-43210 அல்லது 14 இலக்க ஆபா",
    sendOtpBtn: "OTP அனுப்புக",
    otpLabel: "6 இலக்க சரிபார்ப்பு OTP",
    verifyOtpBtn: "சரிபார்த்து பதிவுகளைப் பெறுக",
    orContinueAsGuest: "உள்நுழைவைத் தவிர்த்து தொடருங்கள்",

    consentTitle: "உங்கள் தனியுரிமை & பாதுகாப்பு",
    consentDesc: "உங்கள் விவரங்கள் பாதுகாப்பானது மற்றும் இன்றைய மருத்துவப் பரிசோதனைக்கு மட்டுமே பயன்படுத்தப்படும்.",
    consentAudioBtn: "உங்கள் மொழியில் கேட்கவும்",
    consentAudioPlaying: "ஆடியோ வழிகாட்டுதல் ஒலிக்கிறது...",
    consentAcceptBtn: "நான் ஒப்புக்கொள்கிறேன்",
    consentDeclineBtn: "நிராகரித்து வெளியேறுக",
    consentPoint1: "உங்கள் அறிகுறிகளை மருத்துவர் விரைவாகப் புரிந்துகொள்ள உதவுகிறது.",
    consentPoint2: "அனைத்து தகவல்களும் இந்த சாதனத்திலேயே பாதுகாப்பாக வைக்கப்படுகின்றன.",
    consentPoint3: "உங்கள் தகவலை எப்போது வேண்டுமானாலும் மாற்றலாம் அல்லது நீக்கலாம்.",
    consentAudioText: "மெடிகோயிஸ்க்கிற்கு வரவேற்கிறோம். உங்கள் உடல்நல விவரங்கள் இன்றைய மருத்துவப் பரிசோதனைக்கு மட்டுமே சேகரிக்கப்படுகின்றன. உங்கள் அனுமதி இல்லாமல் யாருடனும் பகிரப்படாது.",

    basicTitle: "உங்கள் அடிப்படை விவரங்கள்",
    basicDesc: "ஆரோக்கியக் கேள்விகளுக்கு முன் உங்கள் அடிப்படை விவரங்களைச் சரிபார்க்கவும்.",
    fullNameLabel: "முழு பெயர்",
    ageLabel: "வயது (ஆண்டுகள்)",
    genderLabel: "பாலினம்",
    genderMale: "ஆண்",
    genderFemale: "பெண்",
    genderOther: "மற்றவை",
    phoneLabel: "கைபேசி எண்",
    existingConditionsLabel: "நாள்பட்ட நோய்கள் (இருப்பின்)",
    allergiesLabel: "மருந்து அல்லது உணவு ஒவ்வாமை",

    adaptiveTitle: "உங்கள் உடல் உபாதையைச் சொல்லுங்கள்",
    adaptiveDesc: "பேசியோ அல்லது தொட்டோ உங்கள் பிரச்சனை குறித்த 4-6 எளிய கேள்விகளுக்குப் பதிலளிக்கவும்.",
    voiceInputPrompt: "உங்கள் பிரச்சனை பற்றி உங்கள் மொழியில் தெளிவாகப் பேசுங்கள்",
    clickToSpeak: "பேச தட்டவும்",
    listeningNow: "கேட்கிறது... இப்போது பேசுங்கள்",
    simulateVoiceInput: "குரல் மாதிரி உள்ளீடு",
    orSelectComplaint: "அல்லது கீழே உள்ள அறிகுறிகளில் ஒன்றைத் தேர்ந்தெடுக்கவும்",
    questionProgress: "கேட்கப்பட்ட கேள்விகள்",
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
    finishIntakeBtn: "சேமித்து தொடரவும்",

    docTitle: "பழைய மருந்துச் சீட்டைப் படம் எடுங்கள்",
    docDesc: "காகிதங்களை எடுத்துச் செல்லும் சிரமமின்றி பழைய மருந்துச் சீட்டுகளைப் படம் எடுத்து பதிவேற்றவும்.",
    dragDropTitle: "பழைய மருந்துச் சீட்டுகள் / அறிக்கைகள்",
    dragDropSub: "மொபைல் கேமரா மூலம் படம் எடுக்கவும் அல்லது கோப்பைத் தேர்ந்தெடுக்கவும்",
    takePhotoBtn: "கேமரா மூலம் படம் எடுக்கவும்",
    selectSamplePrescription: "மாதிரி மருந்துச் சீட்டை ஏற்றவும்",
    uploadedDocuments: "சேமிக்கப்பட்ட மருந்துச் சீட்டுகள்",

    medVerifyTitle: "உங்கள் மருந்துகளைச் சரிபார்க்கவும்",
    medVerifyDesc: "படத்தில் இருந்து கண்டறியப்பட்ட மருந்துகள் இவை. அவை சரியானவையா என்று சரிபார்க்கவும்.",
    confidenceScore: "பொருத்தம்",
    verifyConfirmBtn: "மருந்தை உறுதி செய்",
    editBtn: "திருத்து",
    rejectBtn: "நிராகரி",
    dosageLabel: "மருந்து அளவு (Dose)",
    frequencyLabel: "அதிர்வெண் (நாளைக்கு எத்தனை முறை)",

    ayushTitle: "பாரம்பரிய மருத்துவம் மற்றும் பழக்கங்கள்",
    ayushDesc: "வீட்டு வைத்தியம், ஆயுர்வேத மருந்துகள் அல்லது பழக்கங்கள் பற்றி மருத்துவரிடம் தெரிவிக்கவும்.",
    prakritiLabel: "முதன்மை பிரகிருதி அமைப்பு",
    vataLabel: "வாதம் (காற்று/ஆகாயம்)",
    pittaLabel: "பித்தம் (தீ/நீர்)",
    kaphaLabel: "கபம் (பூமி/நீர்)",
    traditionalFormulations: "பாரம்பரிய மருந்துகள் & கசாயங்கள்",
    icdDualCodingNotice: "WHO ICD-11 அத்தியாயம் 26 மற்றும் நமஸ்தே (NAMASTE) தரநிலைகளுடன் இணைக்கப்பட்டுள்ளது.",

    tokenTitle: "உங்கள் டோக்கன் எண் தயார்!",
    tokenSuccess: "உங்கள் மருத்துவ சேர்க்கை முடிந்தது. ஒதுக்கப்பட்ட ஆலோசனை அறைக்குச் செல்லவும்.",
    tokenNumber: "டோக்கன் எண்",
    assignedDept: "ஒதுக்கப்பட்ட துறை",
    estimatedWait: "எதிர்பார்க்கப்படும் நேரம்: ~6 நிமிடங்கள்",
    roomNumber: "பரிசோதனை அறை 104",
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

    triageTitle: "மருத்துவமனை OPD ட்ரையஜ் மேசை",
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
        auditLogTitle: "மாற்ற முடியாத மருத்துவ தணிக்கை பதிவு",

    probSolTitle: "அதிக நோயாளிகள் உள்ள ஓபிடி நெரிசலுக்கு தீர்வு",
    probSolSub: "இந்திய ஓபிடிகளில் மருத்துவர்கள் ஒரு நோயாளிக்கு 2.5 நிமிடங்கள் மட்டுமே செலவிட முடிகிறது — இதில் 60% நேரம் கணினி பதிவிற்கே செலவாகிறது.",
    probLegacyBadge: "பழைய நடைமுறை",
    probLegacyTag: "தாமதமான மற்றும் துண்டு துண்டான",
    probLegacyTitle: "நிர்வாகப் பணிகளால் சிகிச்சை நேரம் வீணாகிறது",
    probLegacyFooter: "சராசரி மருத்துவ சந்திப்பு நேரம்: நோயாளிக்கு <3 நிமிடங்கள்",
    solArchBadge: "மெடிகாயிஸ்க் கட்டமைப்பு",
    solArchTag: "தானியங்கி முந்தைய பதிவு",
    solArchTitle: "மருத்துவரை சந்திக்கும் முன்பே முழு வரலாறு தயார்",
    solArchFooter: "மருத்துவர் முழு கவனத்தையும் துல்லிய நோயறிதலில் மட்டுமே செலுத்தலாம்",

    whyDiffBadge: "கட்டமைப்பு வேறுபாடு",
    whyDiffTitle: "மருத்துவ பாதுகாப்பு மற்றும் இறையாண்மைக்காக உருவாக்கப்பட்டது",
    whyDiffSub: "பொதுவான ஏஐ தவறான மருந்துகளை கூறலாம். மெடிகாயிஸ்க் விதிகளுக்குட்பட்ட பாதுகாப்பு, சரிபார்க்கப்பட்ட ஓசிஆர் மற்றும் FHIR R4 தரநிலைகளை கொண்டது.",
    whyCol1Header: "வழக்கமான சாட்போட்கள்",
    whyCol2Header: "மெடிகாயிஸ்க் தானியங்கி கியோஸ்க்",

    impactBadge: "அளவிடக்கூடிய மருத்துவ தாக்கம்",
    impactTitle: "ஓபிடி செயல்பாடுகளில் நிரூபிக்கப்பட்ட செயல்திறன்",
    impactSub: "அளவிடக்கூடிய நேர சேமிப்பு, உடனடி அவசரநிலை கண்டறிதல் மற்றும் ABDM ஊக்கத்தொகை.",
    impact1Val: "60%",
    impact1Title: "ஆவண நேரம் மிச்சமானது",
    impact1Desc: "கையால் வரலாறு எழுத தேவையில்லை, மருத்துவர்களுக்கு தினமும் 3.5+ மணி நேரம் மிச்சமாகிறது.",
    impact2Val: "₹5 – ₹10",
    impact2Title: "நோயாளிக்கான DHIS ஊக்கத்தொகை",
    impact2Desc: "டிஜிட்டல் பதிவுகளுக்காக மருத்துவமனைகளுக்கு தேசிய சுகாதார ஆணையத்திடமிருந்து நேரடி நிதி உதவி.",
    impact3Val: "99.4%",
    impact3Title: "அவசரநிலை கண்டறிதல் துல்லியம்",
    impact3Desc: "நெஞ்சு வலி, மூச்சுத்திணறல் போன்ற ஆபத்தான நிலைகளை தாமதமின்றி கண்டறிதல்.",
    impact4Val: "<4.2 நிமிடம்",
    impact4Title: "சராசரி பதிவு நேரம்",
    impact4Desc: "நோயாளிகள் தமிழில் பேசி 4 நிமிடங்களில் டோக்கன் பெறுகின்றனர்.",

    feasBadge: "தொழில்நுட்ப சாத்தியக்கூறு",
    feasTitle: "தேசிய டிஜிட்டல் சுகாதார கட்டமைப்பின் ஒருங்கிணைப்பு",
    feasDesc: "இந்தியாவில் ஆபா (ABDM), பாஷினி குரல் ஏஐ மற்றும் NRCeS FHIR தரநிலைகள் உள்ளன. மெடிகாயிஸ்க் இவற்றை ஒருங்கிணைக்கிறது.",

    heroPipelineTitle: "6 எளிய படிகளில் உங்கள் வருகை",
    heroPipelineSub: "விரைவானது, எளிதானது மற்றும் உங்கள் சொந்த மொழியில்.",
    heroPipelineBadge: "3 நிமிடங்களில் தயார்",

    adminKpi1: "இன்றைய ஓபிடி வருகை",
    adminKpi2: "டிஜிட்டல் பதிவுகள்",
    adminKpi3: "வரிசையில் காத்திருப்போர்",
    adminKpi4: "அவசர எச்சரிக்கைகள்",
    adminKpi5: "ஸ்கேன் செய்யப்பட்ட மருந்துகள்",
    adminKpi6: "ஆபா / விருந்தினர் விகிதம்",
    adminKpi7: "தாய்மொழி குரல் பயன்பாடு",
    adminKpi8: "DHIS ஊக்கத்தொகை வருவாய்",
    adminQueueTitle: "நேரலை ஓபிடி வரிசை மற்றும் அறை ஒதுக்கீடு",
    adminQueueSub: "முன்னுரிமை அடிப்படையில் விரைவான வரிசை மேலாண்மை",
    adminSearchPlaceholder: "நோயாளி பெயர் அல்லது டோக்கன் தேடுக...",
    adminColToken: "டோக்கன் எண்",
    adminColName: "நோயாளி பெயர்",
    adminColAgeGender: "வயது / பாலினம்",
    adminColComplaint: "முக்கிய பிரச்சனை",
    adminColPriority: "முன்னுரிமை",
    adminColRoom: "ஒதுக்கப்பட்ட அறை",
    adminColStatus: "நிலை",
    adminEmergencyBanner: "அவசர மருத்துவ எச்சரிக்கை கண்டறியப்பட்டது",
    adminDispatchNurse: "ஏற்றுக்கொண்டு செவிலியரை அனுப்புக",
    adminDispatched: "அனுப்பப்பட்டது",

    privacyCard1Desc: "அனைத்து ஏஐ தயாரிப்புகளையும் உடனடியாக நிறுத்தி உங்கள் தரவை பாதுகாக்கவும்.",
    privacyCard2Desc: "உங்கள் முழு சுகாதார பதிவு, FHIR JSON கோப்பு மற்றும் தணிக்கை பதிவை பதிவிறக்குக.",
    privacyCard3Desc: "DPDP சட்டம் 2023 பிரிவு 12ன் கீழ் உங்கள் தற்காலிக தரவை நீக்க கோரிக்கை விடுக்கவும்.",
    privacyEcdhTitle: "முக்கிய ஒப்பந்த நெறிமுறை",
    privacyEcdhDesc: "Curve25519 மீது ECDH: ரகசிய குறியீடுகளை பகிராமல் பாதுகாப்பான தொடர்பு.",
    privacyAesTitle: "சமச்சீர் சைஃபர் சூட்",
    privacyAesDesc: "AES-256-GCM: முழுமையான ரகசியத்தன்மை மற்றும் அங்கீகரிக்கப்பட்ட குறியாக்கம்.",
    privacyHashTitle: "ஒருமைப்பாடு செக்சம்",
    privacyHashDesc: "SHA-256: நெட்வொர்க்கில் தரவு மாற்றப்படாமல் இருப்பதை உறுதி செய்கிறது.",
    privacyAuditSearchPlaceholder: "தணிக்கை பதிவுகளை தேடுக...",
    privacyAuditSub: "பாதுகாப்பான மற்றும் மாற்ற முடியாத நிகழ்வு பதிவு",

    safetyRedFlagBadge: "பாதுகாப்பு எச்சரிக்கை",
    stepDemographicHeader: "படி 2: அடிப்படை விவரங்கள்",
    masterPatientIndex: "சாதனத்தில் பாதுகாப்பாக உள்ளது",
    currentMedicationsLabel: "தற்போது உண்ணும் மருந்துகள்"
  },

  // ==========================================
  // BENGALI (বাংলা)
  // ==========================================
  bn: {
    brandName: "MEDIKOISK",
    brandTagline: "সহজ, দ্রুত ও সুরক্ষিত স্বাস্থ্যসেবা চেক-ইন",
    navOverview: "হোম",
    navPatientKiosk: "রোগী চেক-ইন",
    navClinicianWorkstation: "ডাক্তার ডেক্স",
    navTriageDesk: "হাসপাতাল কিউ",
    navPrivacyGovernance: "গোপনীয়তা ও সুরক্ষা",
    emergencyBtn: "জরুরি এসওএস (SOS)",
    lightMode: "লাইট মোড",
    darkMode: "ডার্ক মোড",
    selectLanguage: "ভাষা নির্বাচন",
    liveAbdmVerified: "নিরাপদ ও ব্যক্তিগত",

    heroBadge: "দ্রুত হাসপাতাল ওপিডি চেক-ইন",
    heroTitle1: "ডাক্তার দেখানো এখন সহজ,",
    heroTitle2: "লাইনের ঝামেলা শেষ",
    heroSubtitle: "৪৫ মিনিটের লম্বা লাইন এড়িয়ে যান। নিজের ভাষায় কয়েকটি সহজ প্রশ্নের উত্তর দিন, পুরোনো প্রেসক্রিপশন স্ক্যান করুন এবং ৩ মিনিটে প্রস্তুত হন।",
    beginIntakeBtn: "চেক-ইন শুরু করুন (৩ মিনিট)",
    accessClinicianBtn: "ডাক্তারের ডেক্স দেখুন",
    explorePlatformBtn: "কীভাবে কাজ করে",
    tagFhirReady: "ডাক্তারের সাথে সহজে শেয়ার",
    tagDpdpCompliant: "১০০% নিরাপদ ও গোপনীয়",
    tagVoiceBhashini: "নিজের ভাষায় কথা বলুন",
    tagTrOcr: "প্রেসক্রিপশন ফটো স্ক্যানার",

    kioskTitle: "স্বয়ংক্রিয় রোগী চেক-ইন",
    kioskSub: "ডাক্তারের কাছে যাওয়ার আগে নিজের ভাষায় বলে বা স্ক্রিনে স্পর্শ করে তথ্য দিন।",
    proceedBtn: "এগিয়ে যান",
    backBtn: "পেছনে যান",
    continueBtn: "চালিয়ে যান",
    cancelBtn: "বাতিল করুন",
    submitBtn: "জমা দিন",
    guestModeBtn: "অতিথি (Guest) হিসেবে এগিয়ে যান",

    qrTitle: "হাসপাতালের QR কোড স্ক্যান করুন",
    qrDesc: "রিসিপশনের কিউআর কোড স্ক্যান করুন বা হাসপাতাল কোড লিখুন।",
    qrScannerActive: "ক্যামেরা স্ক্যানার চালু আছে",
    hospitalName: "সরকারি মেডিকেল কলেজ হাসপাতাল ওপিডি",
    hospitalId: "হাসপাতাল কোড: IN-WB-KOL-0019",
    manualCodePlaceholder: "৬ ডিজিটের হাসপাতাল কোড দিন",

    abhaTitle: "হেলথ আইডি / মোবাইল লগইন",
    abhaDesc: "পুরোনো রেকর্ড দেখতে মোবাইল নম্বর লিখুন, অথবা অতিথি হিসেবে এগিয়ে যান।",
    abhaInputLabel: "আভা নম্বর / মোবাইল নম্বর",
    abhaPlaceholder: "যেমন: 91-98765-43210 বা ১৪ ডিজিটের আভা",
    sendOtpBtn: "ওটিপি পাঠান",
    otpLabel: "৬ ডিজিটের ওটিপি",
    verifyOtpBtn: "যাচাই করুন ও রেকর্ড আনুন",
    orContinueAsGuest: "লগইন ছাড়া অতিথি হিসেবে চলুন",

    consentTitle: "আপনার গোপনীয়তা ও ডেটা সুরক্ষা",
    consentDesc: "আপনার তথ্য সম্পূর্ণ গোপনীয় এবং শুধুমাত্র আজকের ডাক্তারের পরীক্ষার জন্য ব্যবহৃত হবে।",
    consentAudioBtn: "আপনার ভাষায় শুনুন",
    consentAudioPlaying: "অডিও বাজছে...",
    consentAcceptBtn: "আমি সম্মত ও গ্রহণ করছি",
    consentDeclineBtn: "প্রত্যাখ্যান ও প্রস্থান",
    consentPoint1: "আপনার লক্ষণগুলি ডাক্তারকে দ্রুত বুঝতে সাহায্য করে।",
    consentPoint2: "সব তথ্য নিরাপদে এই ডিভাইসেই সংরক্ষিত থাকে।",
    consentPoint3: "আপনি যেকোনো সময় আপনার তথ্য পরিবর্তন বা মুছে ফেলতে পারেন।",
    consentAudioText: "মেডিকোইসক-এ স্বাগতম। আপনার স্বাস্থ্য তথ্য শুধুমাত্র আজকের ডাক্তারকে সাহায্য করার জন্য সংগ্রহ করা হচ্ছে। আপনার অনুমতি ছাড়া এটি কারও সাথে শেয়ার করা হবে না।",

    basicTitle: "আপনার প্রাথমিক তথ্য",
    basicDesc: "স্বাস্থ্য সংক্রান্ত প্রশ্নের আগে অনুগ্রহ করে আপনার প্রাথমিক তথ্য যাচাই করুন।",
    fullNameLabel: "পুরো নাম",
    ageLabel: "বয়স (বছর)",
    genderLabel: "লিঙ্গ",
    genderMale: "পুরুষ",
    genderFemale: "মহিলা",
    genderOther: "অন্যান্য",
    phoneLabel: "ফোন নম্বর",
    existingConditionsLabel: "পুরোনো দীর্ঘস্থায়ী রোগ (যদি থাকে)",
    allergiesLabel: "ওষুধ বা খাবারের অ্যালার্জি",

    adaptiveTitle: "বলুন আপনার কী সমস্যা হচ্ছে",
    adaptiveDesc: "বলে বা স্পর্শ করে আপনার সমস্যা নিয়ে ৪-৬টি সহজ প্রশ্নের উত্তর দিন।",
    voiceInputPrompt: "নিজের ভাষায় সমস্যার কথা স্পষ্টভাবে বলুন",
    clickToSpeak: "কথা বলতে ট্যাপ করুন",
    listeningNow: "শুনছি... এখন বলুন",
    simulateVoiceInput: "নমুনা ভয়েস ইনপুট",
    orSelectComplaint: "অথবা নিচের লক্ষণগুলো থেকে বেছে নিন",
    questionProgress: "প্রশ্নের অগ্রগতি",
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
    finishIntakeBtn: "সংরক্ষণ করুন ও এগিয়ে যান",

    docTitle: "পুরোনো প্রেসক্রিপশনের ছবি তুলুন",
    docDesc: "কাগজের প্রেসক্রিপশন সাথে নিয়ে ঘোরার ঝামেলা এড়াতে পরিষ্কার ছবি তুলে আপলোড করুন।",
    dragDropTitle: "পুরোনো প্রেসক্রিপশন / রিপোর্ট",
    dragDropSub: "ক্যামেরা দিয়ে ছবি তুলুন বা ফাইল নির্বাচন করুন",
    takePhotoBtn: "ক্যামেরা দিয়ে ছবি তুলুন",
    selectSamplePrescription: "নমুনা প্রেসক্রিপশন লোড করুন",
    uploadedDocuments: "সংরক্ষিত প্রেসক্রিপশন",

    medVerifyTitle: "আপনার ওষুধ যাচাই করুন",
    medVerifyDesc: "প্রেসক্রিপশনের ছবি থেকে এই ওষুধগুলো পাওয়া গেছে। এগুলো ঠিক আছে কিনা দেখে নিন।",
    confidenceScore: "যাচাই ম্যাচ",
    verifyConfirmBtn: "ওষুধ নিশ্চিত করুন",
    editBtn: "সম্পাদনা",
    rejectBtn: "বাতিল",
    dosageLabel: "ডোজ",
    frequencyLabel: "দিনে কতবার",

    ayushTitle: "ঐতিহ্যবাহী চিকিৎসা ও অভ্যাস",
    ayushDesc: "ঘরোয়া টোটকা, ভেষজ ওষুধ বা দৈনন্দিন অভ্যাস সম্পর্কে ডাক্তারকে জানান।",
    prakritiLabel: "প্রধান প্রকৃতি গঠন",
    vataLabel: "বাত (বায়ু/আকাশ)",
    pittaLabel: "পিত্ত (অগ্নি/জল)",
    kaphaLabel: "কফ (পৃথিবী/জল)",
    traditionalFormulations: "ঐতিহ্যবাহী ওষুধ ও ক্বাথ",
    icdDualCodingNotice: "হু (WHO) ICD-11 অধ্যায় ২৬ এবং নমস্তে স্ট্যান্ডার্ডের সাথে সামঞ্জস্যপূর্ণ।",

    tokenTitle: "আপনার টোকেন নম্বর তৈরি!",
    tokenSuccess: "আপনার তথ্য সফলভাবে গৃহীত হয়েছে। অনুগ্রহ করে নির্ধারিত কক্ষে যান।",
    tokenNumber: "টোকেন নম্বর",
    assignedDept: "নির্ধারিত বিভাগ",
    estimatedWait: "আনুমানিক সময়: ~৬ মিনিট",
    roomNumber: "পরামর্শ কক্ষ ১০৪",
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
        auditLogTitle: "অপরিবর্তনীয় ক্লিনিক্যাল অডিট লগ",

    probSolTitle: "উচ্চ-ভলিউম ওপিডি ভিড়ের কার্যকর সমাধান",
    probSolSub: "ভারতীয় ওপিডিতে ডাক্তাররা প্রতি রোগীর জন্য গড়ে মাত্র ২.৫ মিনিট সময় দিতে পারেন — যার ৬০% সময় শুধু কাগজপত্রের কাজে যায়।",
    probLegacyBadge: "প্রচলিত বাস্তবতা",
    probLegacyTag: "ধীরগতির ও খণ্ডিত",
    probLegacyTitle: "প্রশাসনিক চাপে চিকিৎসার সময় নষ্ট",
    probLegacyFooter: "গড়ে ডাক্তার দেখানোর সময়: রোগী প্রতি <৩ মিনিট",
    solArchBadge: "মেডিকোয়েস্ক আর্কিটেকচার",
    solArchTag: "স্বয়ংক্রিয় প্রাক-পরামর্শ",
    solArchTitle: "ডাক্তারের কাছে যাওয়ার আগেই সম্পূর্ণ হিস্ট্রি প্রস্তুত",
    solArchFooter: "চিকিৎসকের পূর্ণ মনোযোগ শুধু সঠিক রোগ নির্ণয়ের দিকে",

    whyDiffBadge: "প্রযুক্তিগত পার্থক্য",
    whyDiffTitle: "ক্লিনিকাল সুরক্ষা ও সার্বভৌমত্বের জন্য নির্মিত",
    whyDiffSub: "সাধারণ এআই ভুল ওষুধ বলতে পারে। মেডিকোয়েস্কে রয়েছে নিয়ম-ভিত্তিক সুরক্ষা, পরীক্ষিত ওসিআর এবং FHIR R4 মানদণ্ড।",
    whyCol1Header: "সাধারণ চ্যাটবট ও পোর্টাল",
    whyCol2Header: "মেডিকোয়েস্ক অটোনোমাস কিয়স্ক",

    impactBadge: "পরিমাপযোগ্য ক্লিনিকাল প্রভাব",
    impactTitle: "ওপিডি কার্যক্রমে প্রমাণিত দক্ষতা",
    impactSub: "সময়ের ব্যাপক সাশ্রয়, দ্রুত জরুরি অবস্থা শনাক্তকরণ এবং DHIS ইনসেন্টিভ আয়।",
    impact1Val: "৬০%",
    impact1Title: "নথিপত্রের সময় সাশ্রয়",
    impact1Desc: "হাতে কেস হিস্ট্রি লেখার দরকার নেই, ডাক্তারদের প্রতিদিন ৩.৫+ ঘণ্টা সময় বাঁচে।",
    impact2Val: "₹৫ – ₹১০",
    impact2Title: "রোগী প্রতি DHIS প্রণোদনা",
    impact2Desc: "ডিজিটাল স্বাস্থ্য নিবন্ধনে হাসপাতাল সরাসরি নগদ অনুদান লাভ করে।",
    impact3Val: "৯৯.৪%",
    impact3Title: "জরুরি ট্রায়াজ নির্ভুলতা",
    impact3Desc: "বুকে ব্যথা বা শ্বাসকষ্টের মতো আশঙ্কাজনক রোগীকে তাৎক্ষণিক শনাক্তকরণ।",
    impact4Val: "<৪.২ মিনিট",
    impact4Title: "গড় রেজিস্ট্রেশন সময়",
    impact4Desc: "রোগী বাংলায় কথা বলে বা স্পর্শ করে ৪ মিনিটে টোকেন পান।",

    feasBadge: "কারিগরি সম্ভাব্যতা ও সংহতি",
    feasTitle: "জাতীয় ডিজিটাল স্বাস্থ্য পরিকাঠামোর সমন্বয়",
    feasDesc: "ভারতে আভা (ABDM), ভাষিণী ভয়েস এআই এবং এনআরসিইএস এফএইচআইআর স্ট্যান্ডার্ড রয়েছে। মেডিকোয়েস্ক এদের একত্রিত করে।",

    heroPipelineTitle: "৬টি সহজ ধাপে আপনার দেখা",
    heroPipelineSub: "দ্রুত, সহজ এবং পুরোপুরি আপনার নিজের ভাষায়।",
    heroPipelineBadge: "৩ মিনিটে তৈরি",

    adminKpi1: "আজকের ওপিডি ভিজিট",
    adminKpi2: "ডিজিটাল গ্রহণ",
    adminKpi3: "লাইনে অপেক্ষারত",
    adminKpi4: "জরুরি অ্যালার্ট",
    adminKpi5: "স্ক্যান করা প্রেসক্রিপশন",
    adminKpi6: "আভা / অতিথি অনুপাত",
    adminKpi7: "মাতৃভাষায় ভয়েস ব্যবহার",
    adminKpi8: "DHIS ইনসেন্টিভ আয়",
    adminQueueTitle: "লাইভ ওপিডি কিউ ও রুম বণ্টন",
    adminQueueSub: "অগ্রাধিকার ভিত্তিতে দ্রুত ও স্বচ্ছ সিরিয়াল বণ্টন",
    adminSearchPlaceholder: "রোগীর নাম বা টোকেন খুঁজুন...",
    adminColToken: "টোকেন নং",
    adminColName: "রোগীর নাম",
    adminColAgeGender: "বয়স / লিঙ্গ",
    adminColComplaint: "মূল সমস্যা",
    adminColPriority: "অগ্রাধিকার",
    adminColRoom: "বরাদ্দকৃত রুম",
    adminColStatus: "অবস্থা",
    adminEmergencyBanner: "জরুরি স্বাস্থ্য সতর্কতা সনাক্ত করা হয়েছে",
    adminDispatchNurse: "গ্রহণ করুন এবং নার্স পাঠান",
    adminDispatched: "পাঠানো হয়েছে",

    privacyCard1Desc: "সমস্ত এআই কেস প্রস্তুতি অবিলম্বে বন্ধ করুন এবং হাসপাতাল সার্ভার থেকে আপনার তথ্য আলাদা করুন।",
    privacyCard2Desc: "আপনার সম্পূর্ণ স্বাস্থ্য রেকর্ড, FHIR JSON ফাইল এবং অডিট লগ ডাউনলোড করুন।",
    privacyCard3Desc: "DPDP আইন ২০২৩ এর ধারা ১২ অনুযায়ী সাময়িক তথ্য মুছে ফেলার আবেদন করুন।",
    privacyEcdhTitle: "কি চুক্তি প্রোটোকল",
    privacyEcdhDesc: "Curve25519 এ ECDH: ব্যক্তিগত কি না পাঠিয়ে নিরাপদ গোপন যোগাযোগ তৈরি।",
    privacyAesTitle: "সিমেট্রিক সাইফার স্যুট",
    privacyAesDesc: "AES-256-GCM: সম্পূর্ণ তথ্য সুরক্ষিত ও গোপনীয় রাখার শীর্ষস্থানীয় মানদণ্ড।",
    privacyHashTitle: "অখণ্ডতা হ্যাশ",
    privacyHashDesc: "SHA-256: নেটওয়ার্ক ট্রানজিটের সময় ডেটায় কোনো বিকৃতি যাতে না ঘটে তা নিশ্চিত করে।",
    privacyAuditSearchPlaceholder: "অডিট রেকর্ড খুঁজুন...",
    privacyAuditSub: "নিরাপদ ও অপরিবর্তনীয় ডিজিটাল কার্যকলাপের তালিকা",

    safetyRedFlagBadge: "সুরক্ষা রেড-ফ্ল্যাগ",
    stepDemographicHeader: "ধাপ ২: প্রাথমিক তথ্য",
    masterPatientIndex: "ডিভাইসে সুরক্ষিত",
    currentMedicationsLabel: "বর্তমান নিয়মিত ওষুধসমূহ"
  },

  // ==========================================
  // TELUGU (తెలుగు)
  // ==========================================
  te: {
    brandName: "MEDIKOISK",
    brandTagline: "సరళమైన, వేగవంతమైన మరియు సురక్షితమైన ఆసుపత్రి చెక్-ఇన్",
    navOverview: "హోమ్",
    navPatientKiosk: "రోగి చెక్-ఇన్",
    navClinicianWorkstation: "వైద్యుల గది",
    navTriageDesk: "ఆసుపత్రి క్యూ",
    navPrivacyGovernance: "గోప్యత & భద్రత",
    emergencyBtn: "అత్యవసర SOS",
    lightMode: "లైట్ మోడ్",
    darkMode: "డార్క్ మోడ్",
    selectLanguage: "భాష ఎంచుకోండి",
    liveAbdmVerified: "సురక్షితమైన & ప్రైవేట్",

    heroBadge: "వేగవంతమైన ఆసుపత్రి ఓపీడీ చెక్-ఇన్",
    heroTitle1: "వైద్యుడిని త్వరగా కలవండి,",
    heroTitle2: "లైన్లో నిలబడే శ్రమ లేకుండా",
    heroSubtitle: "45 నిమిషాల నిరీక్షణ లైన్లను దాటవేయండి. మీ స్వంత భాషలో కొన్ని సాధారణ ప్రశ్నలకు సమాధానం ఇవ్వండి, పాత ప్రిస్క్రిప్షన్లను స్కాన్ చేయండి మరియు 3 నిమిషాల్లో సిద్ధంగా ఉండండి.",
    beginIntakeBtn: "చెక్-ఇన్ ప్రారంభించండి (3 నిమిషాలు)",
    accessClinicianBtn: "వైద్యుల గది చూడండి",
    explorePlatformBtn: "ఎలా పనిచేస్తుందో చూడండి",
    tagFhirReady: "వైద్యుడితో సులభంగా పంచుకోండి",
    tagDpdpCompliant: "100% సురక్షితమైనది",
    tagVoiceBhashini: "మీ స్వంత భాషలో మాట్లాడండి",
    tagTrOcr: "ప్రిస్క్రిప్షన్ ఫోటో స్కానర్",

    kioskTitle: "స్వయం రోగి చెక్-ఇన్",
    kioskSub: "వైద్యుడి వద్దకు వెళ్లే ముందు మీ భాషలో మాట్లాడి లేదా తాకి వివరాలను నమోదు చేయండి.",
    proceedBtn: "ముందుకు సాగండి",
    backBtn: "వెనుకకు",
    continueBtn: "కొనసాగించండి",
    cancelBtn: "రద్దు చేయండి",
    submitBtn: "సమర్పించండి",
    guestModeBtn: "అతిథిగా కొనసాగండి",

    qrTitle: "ఆసుపత్రి QR కోడ్‌ను స్కాన్ చేయండి",
    qrDesc: "రిసెప్షన్ వద్ద ఉన్న QR కోడ్‌ను స్కాన్ చేయండి లేదా కోడ్‌ను నమోదు చేయండి.",
    qrScannerActive: "కెమెరా స్కానర్ యాక్టివ్‌గా ఉంది",
    hospitalName: "ప్రభుత్వ ప్రధాన ఆసుపత్రి OPD",
    hospitalId: "ఆసుపత్రి కోడ్: IN-AP-VIZ-0071",
    manualCodePlaceholder: "6 అంకెల ఆసుపత్రి కోడ్ నమోదు చేయండి",

    abhaTitle: "హెల్త్ ఐడీ / మొబైల్ లాగిన్",
    abhaDesc: "పాత రికార్డులను చూడటానికి మొబైల్ నంబర్ నమోదు చేయండి, లేదా నేరుగా కొనసాగించండి.",
    abhaInputLabel: "ఆభా సంఖ్య / మొబైల్ సంఖ్య",
    abhaPlaceholder: "ఉదా. 91-98765-43210 లేదా 14 అంకెల ఆభా",
    sendOtpBtn: "OTP పంపండి",
    otpLabel: "6 అంకెల ధృవీకరణ OTP",
    verifyOtpBtn: "ధృవీకరించి రికార్డులు పొందండి",
    orContinueAsGuest: "లాగిన్ లేకుండా కొనసాగండి",

    consentTitle: "మీ గోప్యత & భద్రత",
    consentDesc: "మీ వివరాలు పూర్తిగా ప్రైవేట్ మరియు నేటి వైద్య పరీక్ష కోసం మాత్రమే ఉపయోగించబడతాయి.",
    consentAudioBtn: "మీ భాషలో వినండి",
    consentAudioPlaying: "ఆడియో మార్గదర్శకత్వం నడుస్తోంది...",
    consentAcceptBtn: "నేను అంగీకరిస్తున్నాను",
    consentDeclineBtn: "తిరస్కరించి నిష్క్రమించు",
    consentPoint1: "మీ వివరాలు వైద్యుడు మీ లక్షణాలను వేగంగా అర్థం చేసుకోవడానికి సహాయపడతాయి.",
    consentPoint2: "అన్ని వివరాలు ఈ పరికరంలోనే సురక్షితంగా భద్రపరచబడతాయి.",
    consentPoint3: "మీరు ఎప్పుడైనా మీ సమాచారాన్ని మార్చవచ్చు లేదా తొలగించవచ్చు.",
    consentAudioText: "మెడికోయిస్క్‌కు స్వాగతం. మీ ఆరోగ్య వివరాలు కేవలం నేటి వైద్య పరీక్ష కోసమే సేకరించబడుతున్నాయి. మీ అనుమతి లేకుండా ఎవరితోనూ పంచుకోబడవు.",

    basicTitle: "మీ ప్రాథమిక వివరాలు",
    basicDesc: "ఆరోగ్య ప్రశ్నలకు ముందు దయచేసి మీ ప్రాథమిక వివరాలను సరిచూసుకోండి.",
    fullNameLabel: "పూర్తి పేరు",
    ageLabel: "వయస్సు (సంవత్సరాలు)",
    genderLabel: "లింగం",
    genderMale: "పురుషుడు",
    genderFemale: "స్త్రీ",
    genderOther: "ఇతర",
    phoneLabel: "మొబైల్ సంఖ్య",
    existingConditionsLabel: "దీర్ఘకాలిక వ్యాధులు (ఉంటే)",
    allergiesLabel: "మందులు లేదా ఆహార అలెర్జీలు",

    adaptiveTitle: "మీకు ఏమి ఇబ్బందిగా ఉందో చెప్పండి",
    adaptiveDesc: "మాట్లాడి లేదా స్క్రీన్‌ను తాకి మీ సమస్యపై 4-6 సాధారణ ప్రశ్నలకు సమాధానం ఇవ్వండి.",
    voiceInputPrompt: "మీ భాషలో మీ సమస్యను స్పష్టంగా మాట్లాడండి",
    clickToSpeak: "మాట్లాడటానికి నొక్కండి",
    listeningNow: "వింటున్నాము... ఇప్పుడు మాట్లాడండి",
    simulateVoiceInput: "వాయిస్ నమూనా ఇన్పుట్",
    orSelectComplaint: "లేదా క్రింది లక్షణాలలో ఒకదాన్ని ఎంచుకోండి",
    questionProgress: "అడిగిన ప్రశ్నలు",
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
    finishIntakeBtn: "సేవ్ చేసి ముందుకు సాగండి",

    docTitle: "పాత ప్రిస్క్రిప్షన్ ఫోటో తీయండి",
    docDesc: "కాగితాలు మోసే అవసరం లేకుండా పాత ప్రిస్క్రిప్షన్ లేదా నివేదికలను ఫోటో తీసి అప్‌లోడ్ చేయండి.",
    dragDropTitle: "పాత ప్రిస్క్రిప్షన్లు / నివేదికలు",
    dragDropSub: "మొబైల్ కెమెరాతో ఫోటో తీయండి లేదా ఫైల్ ఎంచుకోండి",
    takePhotoBtn: "కెమెరాతో ఫోటో తీయండి",
    selectSamplePrescription: "నమూనా ప్రిస్క్రిప్షన్ లోడ్ చేయండి",
    uploadedDocuments: "భద్రపరిచిన ప్రిస్క్రిప్షన్లు",

    medVerifyTitle: "మీ మందులను సరిచూసుకోండి",
    medVerifyDesc: "ఫోటో నుండి గుర్తించిన మందులు ఇవి. అవి సరైనవేనా అని సరిచూసుకోండి.",
    confidenceScore: "సరిపోలిక",
    verifyConfirmBtn: "మందును ధృవీకరించండి",
    editBtn: "సవరించండి",
    rejectBtn: "తిరస్కరించండి",
    dosageLabel: "మోతాదు (Dose)",
    frequencyLabel: "ఫ్రీక్వెన్సీ (రోజుకు ఎన్నిసార్లు)",

    ayushTitle: "సాంప్రదాయ వైద్యం మరియు అలవాట్లు",
    ayushDesc: "ఇంటి చిట్కాలు, ఆయుర్వేద మందులు లేదా అలవాట్ల గురించి వైద్యుడికి చెప్పండి.",
    prakritiLabel: "ప్రధాన ప్రకృతి స్వభావం",
    vataLabel: "వాతం (గాలి/ఆకాశం)",
    pittaLabel: "పిత్తం (అగ్ని/నీరు)",
    kaphaLabel: "కఫం (భూమి/నీరు)",
    traditionalFormulations: "సంప్రదాయ కషాయాలు & మందులు",
    icdDualCodingNotice: "WHO ICD-11 అధ్యాయం 26 మరియు నమస్తే (NAMASTE) ప్రమాణాలకు అనుగుణంగా రూపొందించబడింది.",

    tokenTitle: "మీ టోకెన్ నంబర్ సిద్ధం!",
    tokenSuccess: "మీ వివరాలు విజయవంతంగా నమోదయ్యాయి. దయచేసి కేటాయించిన గదికి వెళ్లండి.",
    tokenNumber: "టోకెన్ సంఖ్య",
    assignedDept: "కేటాయించిన విభాగం",
    estimatedWait: "అంచనా సమయం: ~6 నిమిషాలు",
    roomNumber: "పరీక్ష గది 104",
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
        auditLogTitle: "మార్చలేని క్లినికల్ ఆడిట్ లాగ్",

    probSolTitle: "రద్దీగా ఉండే ఓపీడీ సమస్యలకు పరిష్కారం",
    probSolSub: "భారతీయ ఓపీడీలలో వైద్యులు ప్రతి రోగికి కేవలం 2.5 నిమిషాలు మాత్రమే కేటాయించగలరు — అందులో 60% సమయం కంప్యూటర్ నమోదుకే సరిపోతుంది.",
    probLegacyBadge: "పాత పద్ధతి",
    probLegacyTag: "ఆలస్యమైన మరియు విచ్ఛిన్నమైన",
    probLegacyTitle: "పరిపాలనా పనులతో వైద్య సమయం వృధా",
    probLegacyFooter: "సగటు డాక్టర్ సంప్రదింపు సమయం: రోగికి <3 నిమిషాలు",
    solArchBadge: "మెడికోయిస్క్ ఆర్కిటెక్చర్",
    solArchTag: "స్వయంప్రతిపత్తి గల ముందస్తు నమోదు",
    solArchTitle: "వైద్యుడిని కలిసేలోపే పూర్తి కేస్ హిస్టరీ సిద్ధం",
    solArchFooter: "వైద్యుడి దృష్టి కేవలం సరైన రోగనిర్ధారణపైనే ఉంటుంది",

    whyDiffBadge: "నిర్మాణ వ్యత్యాసం",
    whyDiffTitle: "క్లినికల్ భద్రత మరియు సార్వభౌమత్వం కోసం రూపొందించబడింది",
    whyDiffSub: "సాధారణ ఏఐ తప్పుడు మందులను సూచించవచ్చు. మెడికోయిస్క్ లో ఖచ్చితమైన భద్రతా నియమాలు, ధృవీకరించబడిన ఓసీఆర్ మరియు FHIR R4 ఉన్నాయి.",
    whyCol1Header: "సాధారణ చాట్‌బాట్‌లు",
    whyCol2Header: "మెడికోయిస్క్ అటానమస్ కియోస్క్",

    impactBadge: "కొలవగల క్లినికల్ ప్రభావం",
    impactTitle: "ఓపీడీ పనితీరులో నిరూపితమైన సామర్థ్యం",
    impactSub: "సమయం ఆదా, వేగవంతమైన అత్యవసర గుర్తింపు మరియు ABDM ప్రోత్సాహకాలు.",
    impact1Val: "60%",
    impact1Title: "డాక్యుమెంటేషన్ సమయం ఆదా",
    impact1Desc: "చేతితో హిస్టరీ రాయాల్సిన అవసరం లేదు, వైద్యులకు రోజుకు 3.5+ గంటల సమయం ఆదా అవుతుంది.",
    impact2Val: "₹5 – ₹10",
    impact2Title: "రోగికి DHIS ప్రోత్సాహకం",
    impact2Desc: "డిజిటల్ ఓపీడీ నమోదుల కోసం ఆసుపత్రులకు జాతీయ ఆరోగ్య సంస్థ నుండి నగదు ప్రోత్సాహకం.",
    impact3Val: "99.4%",
    impact3Title: "అత్యవసర ట్రయాజ్ ఖచ్చితత్వం",
    impact3Desc: "ఛాతీ నొప్పి, శ్వాస ఆడకపోవడం వంటి ప్రాణాంతక సమస్యలను ఆలస్యం లేకుండా గుర్తిస్తుంది.",
    impact4Val: "<4.2 నిమిషాలు",
    impact4Title: "సగటు నమోదు సమయం",
    impact4Desc: "రోగులు తెలుగులో మాట్లాడి 4 నిమిషాల్లో టోకెన్ పొందుతారు.",

    feasBadge: "సాంకేతిక సాధ్యత",
    feasTitle: "జాతీయ డిజిటల్ ఆరోగ్య మౌలిక సదుపాయాల ఏకీకరణ",
    feasDesc: "భారతదేశంలో ఆభా (ABDM), భాషిణి వాయిస్ ఏఐ మరియు NRCeS FHIR ప్రమాణాలు ఉన్నాయి. మెడికోయిస్క్ వీటిని ఏకం చేస్తుంది.",

    heroPipelineTitle: "6 సులభమైన దశల్లో మీ దర్శనం",
    heroPipelineSub: "వేగవంతమైనది, సరళమైనది మరియు మీ స్వంత భాషలో.",
    heroPipelineBadge: "3 నిమిషాల్లో సిద్ధం",

    adminKpi1: "నేటి ఓపీడీ సందర్శనలు",
    adminKpi2: "డిజిటల్ స్వీకరణ",
    adminKpi3: "వరుసలో వేచి ఉన్నవారు",
    adminKpi4: "అత్యవసర హెచ్చరికలు",
    adminKpi5: "స్కాన్ చేసిన ప్రిస్క్రిప్షన్లు",
    adminKpi6: "ఆభా / గెస్ట్ నిష్పత్తి",
    adminKpi7: "మాతృభాష వాయిస్ ఉపయోగం",
    adminKpi8: "DHIS ప్రోత్సాహక ఆదాయం",
    adminQueueTitle: "లైవ్ ఓపీడీ క్యూ మరియు గదుల కేటాయింపు",
    adminQueueSub: "ప్రాధాన్యత ఆధారంగా వేగవంతమైన వరుస నిర్వహణ",
    adminSearchPlaceholder: "రోగి పేరు లేదా టోకెన్ వెతకండి...",
    adminColToken: "టోకెన్ నెం.",
    adminColName: "రోగి పేరు",
    adminColAgeGender: "వయస్సు / లింగం",
    adminColComplaint: "ప్రధాన సమస్య",
    adminColPriority: "ప్రాధాన్యత",
    adminColRoom: "కేటాయించిన గది",
    adminColStatus: "స్థితి",
    adminEmergencyBanner: "అత్యవసర వైద్య హెచ్చరిక గుర్తించబడింది",
    adminDispatchNurse: "అంగీకరించి నర్సును పంపండి",
    adminDispatched: "పంపబడింది",

    privacyCard1Desc: "అన్ని ఏఐ ప్రక్రియలను వెంటనే ఆపివేయండి మరియు మీ డేటాను వేరు చేయండి.",
    privacyCard2Desc: "మీ పూర్తి ఆరోగ్య రికార్డు, FHIR JSON ఫైల్ మరియు ఆడిట్ లాగ్‌ను డౌన్‌లోడ్ చేయండి.",
    privacyCard3Desc: "DPDP చట్టం 2023 సెక్షన్ 12 క్రింద మీ డేటాను తొలగించాలని అభ్యర్థించండి.",
    privacyEcdhTitle: "కీ ఒప్పంద ప్రోటోకాల్",
    privacyEcdhDesc: "Curve25519 పై ECDH: ప్రైవేట్ కీలను పంపకుండా సురక్షితమైన కమ్యూనికేషన్.",
    privacyAesTitle: "సిమెట్రిక్ సైఫర్ సూట్",
    privacyAesDesc: "AES-256-GCM: పూర్తి సమాచార భద్రత మరియు ఎన్‌క్రిప్షన్.",
    privacyHashTitle: "సమగ్రత చెక్‌సమ్",
    privacyHashDesc: "SHA-256: ప్రసార సమయంలో డేటా మార్చబడకుండా చూస్తుంది.",
    privacyAuditSearchPlaceholder: "ఆడిట్ రికార్డులను వెతకండి...",
    privacyAuditSub: "సురక్షితమైన మరియు మార్చలేని ఈవెంట్ రికార్డు",

    safetyRedFlagBadge: "భద్రతా హెచ్చరిక",
    stepDemographicHeader: "దశ 2: ప్రాథమిక వివరాలు",
    masterPatientIndex: "పరికరంలో సురక్షితంగా ఉంది",
    currentMedicationsLabel: "ప్రస్తుతం వాడుతున్న మందులు"
  }
};

export const getTranslation = (lang: IndianLanguage): TranslationDictionary => {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
};
