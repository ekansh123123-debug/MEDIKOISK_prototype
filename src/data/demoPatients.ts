import { Patient, SoapSummary, QueueToken } from '../types';
import { DUAL_CODING_REGISTRY } from './ayushOntology';

export const DEMO_PATIENTS: Patient[] = [
  {
    id: 'PAT-001',
    name: 'Rohan Kulkarni',
    age: 42,
    gender: 'male',
    isGuest: false,
    abhaNumber: '91-8842-1209-7731',
    abhaAddress: 'rohan.kulkarni@abdm',
    phone: '+91 98230 44192',
    language: 'en',
    emergencyContact: {
      name: 'Anjali Kulkarni',
      relationship: 'Spouse',
      phone: '+91 98230 44193'
    },
    existingConditions: ['Mild GERD'],
    allergies: ['Penicillin (mild cutaneous rash)'],
    currentMedications: ['Omeprazole 20 mg OD as needed'],
    registeredAt: '2025-02-14T08:30:00Z',
    hospitalCode: 'MH-PUN-DYP-01'
  },
  {
    id: 'PAT-002',
    name: 'Sunita Deshmukh',
    age: 38,
    gender: 'female',
    isGuest: false,
    abhaNumber: '91-3392-8812-4040',
    abhaAddress: 'sunita.deshmukh@abdm',
    phone: '+91 94220 18820',
    language: 'mr',
    emergencyContact: {
      name: 'Pradeep Deshmukh',
      relationship: 'Spouse',
      phone: '+91 94220 18821'
    },
    existingConditions: ['Peptic Ulcer Disease (2023)'],
    allergies: ['No known drug allergies (NKDA)'],
    currentMedications: ['Pantoprazole 40 mg', 'Paracetamol 650 mg'],
    registeredAt: '2025-02-14T08:45:00Z',
    hospitalCode: 'MH-PUN-DYP-01'
  },
  {
    id: 'PAT-003',
    name: 'Ramesh Verma',
    age: 56,
    gender: 'male',
    isGuest: false,
    abhaNumber: '91-4821-9920-3314',
    abhaAddress: 'ramesh.verma@abdm',
    phone: '+91 98110 55219',
    language: 'hi',
    emergencyContact: {
      name: 'Sunil Verma',
      relationship: 'Son',
      phone: '+91 98110 55220'
    },
    existingConditions: ['Type 2 Diabetes Mellitus', 'Essential Hypertension'],
    allergies: ['Sulfa drugs'],
    currentMedications: ['Metformin 500 mg BD', 'Telmisartan 40 mg OD'],
    registeredAt: '2025-02-14T09:00:00Z',
    hospitalCode: 'MH-PUN-DYP-01'
  },
  {
    id: 'PAT-004',
    name: 'Meera Nair',
    age: 49,
    gender: 'female',
    isGuest: false,
    abhaNumber: '91-5512-4439-0182',
    abhaAddress: 'meera.nair@abdm',
    phone: '+91 97450 33819',
    language: 'en',
    emergencyContact: {
      name: 'Dr. K. Nair',
      relationship: 'Brother',
      phone: '+91 97450 33820'
    },
    existingConditions: ['Madhumeha (Ayurvedic)', 'Borderline Hyperlipidemia'],
    allergies: ['NKDA'],
    currentMedications: ['Chandraprabha Vati 1 tab BD', 'Nisakatakadi Kashayam 15ml BD'],
    registeredAt: '2025-02-14T09:15:00Z',
    hospitalCode: 'MH-PUN-DYP-01'
  },
  {
    id: 'PAT-005',
    name: 'Rajesh Sharma',
    age: 58,
    gender: 'male',
    isGuest: true,
    abhaNumber: undefined,
    abhaAddress: undefined,
    phone: '+91 99201 77341',
    language: 'hi',
    emergencyContact: {
      name: 'Pooja Sharma',
      relationship: 'Daughter',
      phone: '+91 99201 77342'
    },
    existingConditions: ['Smoker (20 pack-years)', 'Dyslipidemia'],
    allergies: ['Aspirin sensitivity'],
    currentMedications: ['Atorvastatin 10 mg OD'],
    registeredAt: '2025-02-14T09:30:00Z',
    hospitalCode: 'MH-PUN-DYP-01'
  }
];

export const DEMO_SOAP_ROHAN: SoapSummary = {
  id: 'SOAP-PAT-001-2025',
  patientId: 'PAT-001',
  encounterId: 'ENC-2025-001',
  subjective: {
    chiefComplaint: 'Epigastric abdominal pain for 3 days',
    historyOfPresentIllness: 'Patient reports progressive dull burning epigastric discomfort that started 3 days ago. The pain is localized below the xiphisternum without radiating to back or shoulder. It distinctly worsens 30–45 minutes following meals (especially post oily/spicy Indian food). Severity is rated 6/10 on the visual analog scale. Associated with mild intermittent nausea and early satiety. Denies haematemesis, melena, or syncope.',
    duration: '3 days (intermittent, post-prandial exacerbations)',
    associatedSymptoms: ['Mild Nausea', 'Post-prandial burning', 'Early satiety'],
    pastMedicalHistory: ['Mild GERD episode 2 years ago treated with antacids'],
    medicationHistory: ['Omeprazole 20 mg capsule taken 2 days ago with transient partial relief'],
    familyHistory: 'Father had peptic ulcer disease; mother has hypertension',
    lifestyleDiet: 'Sedentary software professional, irregular meal timings, tea 3x daily',
    ayushNarrative: 'Complains of mild Vidagdha Jirna (burning sensation) and Vishama Agni (irregular digestive capacity).'
  },
  objective: {
    reportedVitals: {
      temperature: '98.4 °F (Afebrile)',
      pulse: '76 bpm (Regular)',
      bloodPressure: '124/82 mmHg',
      spO2: '98% on room air'
    },
    physicalObservationsNote: 'Patient appears alert, in mild distress during post-meal periods. Hydration status normal. No scleral icterus or conjunctival pallor reported. (To be confirmed on physical exam).'
  },
  assessment: {
    aiPatterns: [
      'Symptom constellation strongly suggests Non-Ulcer Dyspepsia vs. Peptic Gastritis with post-prandial distress syndrome.',
      'Absence of red flags (no black stools, no dysphagia, no unexplained weight loss). Low immediate hemodynamic acuity.'
    ],
    differentialConsiderations: [
      'Peptic Gastritis / Non-Ulcer Dyspepsia (ICD-11: MD90.2)',
      'Gastroesophageal Reflux Disease with esophagitis (ICD-11: DA22)',
      'Early Cholelithiasis (less likely given no right upper quadrant radiation)'
    ],
    clinicalDisclaimer: 'AI-assisted clinical intake synthesis. Not a definitive diagnosis. Treating physician must conduct abdominal palpation and verify findings.',
    dualCodes: [
      DUAL_CODING_REGISTRY['DYSPEPSIA_AMLAPITTA']
    ]
  },
  plan: {
    preliminaryRecommendations: [
      'Abdominal palpation to check for localized epigastric vs right hypochondrium tenderness or guarding.',
      'Evaluate trial of proton-pump inhibitor (e.g. Pantoprazole 40mg OD AC) alongside prokinetic if nausea persists.',
      'Dietary counseling: smaller, frequent meals, avoid caffeine & late-night dining.',
      'Ultrasound whole abdomen if pain fails to settle within 7–10 days.'
    ],
    clinicianSignOffPrompt: 'Treating clinician must review, edit or verify these preliminary suggestions before prescribing.'
  },
  provenanceList: [
    {
      id: 'PROV-01',
      assertionText: 'Epigastric abdominal pain for 3 days',
      section: 'subjective',
      sourceSnippet: 'Voice transcript: "Mujhe teen din se pet ke upari hisse me jalan aur dard ho raha hai."',
      sourceType: 'voice_transcript',
      sourceDetail: 'Speech Recognition (Bhashini IndicWav2Vec) - Timestamp 08:32',
      confidence: 0.98,
      verificationStatus: 'verified'
    },
    {
      id: 'PROV-02',
      assertionText: 'Pain worsens 30-45 minutes after meals',
      section: 'subjective',
      sourceSnippet: 'Patient response to Question 6: "Worsens 30–60 mins after meals"',
      sourceType: 'patient_questionnaire',
      sourceDetail: 'Adaptive DAG Node: ABD_06_FOOD_RELATION',
      confidence: 1.0,
      verificationStatus: 'verified'
    },
    {
      id: 'PROV-03',
      assertionText: 'Severity rated 6/10 without radiation to back',
      section: 'subjective',
      sourceSnippet: 'Patient response: Scale value 6 + Selected option "No radiation (stays localized)"',
      sourceType: 'patient_questionnaire',
      sourceDetail: 'Adaptive DAG Nodes: ABD_05_RADIATION & ABD_07_SEVERITY_SCALE',
      confidence: 1.0,
      verificationStatus: 'verified'
    },
    {
      id: 'PROV-04',
      assertionText: 'Self-medicated with Omeprazole 20mg with transient relief',
      section: 'medication',
      sourceSnippet: 'Patient response: Took Omeprazole / Antacid (Provided partial relief)',
      sourceType: 'patient_questionnaire',
      sourceDetail: 'Adaptive DAG Node: ABD_10_PRIOR_MEDS',
      confidence: 0.96,
      verificationStatus: 'verified'
    },
    {
      id: 'PROV-05',
      assertionText: 'No gastrointestinal bleeding or red flags',
      section: 'subjective',
      sourceSnippet: 'Deterministic check response: No black stools, no vomiting blood',
      sourceType: 'patient_questionnaire',
      sourceDetail: 'Deterministic Triage Rule Node: ABD_09_RED_FLAG_CHECK',
      confidence: 1.0,
      verificationStatus: 'verified'
    }
  ],
  generatedAt: '2025-02-14T08:35:10Z',
  approvedByDoctor: false
};

export const DEMO_TOKENS: QueueToken[] = [
  {
    tokenNumber: 'A-021',
    patientId: 'PAT-OLD-11',
    patientName: 'Kavita Joshi',
    age: 34,
    gender: 'female',
    chiefComplaint: 'Migraine follow-up',
    priority: 'STANDARD',
    counterRoom: 'OPD Room 4 (Dr. A. K. Shukla)',
    status: 'IN_CONSULTATION',
    positionAhead: 0,
    estimatedWaitMinutes: 0,
    issuedAt: '2025-02-14T08:00:00Z'
  },
  {
    tokenNumber: 'A-026',
    patientId: 'PAT-OLD-12',
    patientName: 'Balwant Singh',
    age: 62,
    gender: 'male',
    chiefComplaint: 'Knee osteoarthritis',
    priority: 'FAST_TRACK',
    counterRoom: 'OPD Room 4 (Dr. A. K. Shukla)',
    status: 'CALLING',
    positionAhead: 1,
    estimatedWaitMinutes: 4,
    issuedAt: '2025-02-14T08:20:00Z'
  },
  {
    tokenNumber: 'A-027',
    patientId: 'PAT-001',
    patientName: 'Rohan Kulkarni',
    age: 42,
    gender: 'male',
    chiefComplaint: 'Stomach pain for 3 days',
    priority: 'STANDARD',
    counterRoom: 'OPD Room 4 (Dr. A. K. Shukla)',
    status: 'WAITING',
    positionAhead: 2,
    estimatedWaitMinutes: 9,
    issuedAt: '2025-02-14T08:35:00Z'
  }
];
