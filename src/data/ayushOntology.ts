import { DualCodingEntry } from '../types';

export const DUAL_CODING_REGISTRY: Record<string, DualCodingEntry> = {
  'DIABETES_MADHUMEHA': {
    conditionName: 'Type 2 Diabetes Mellitus / Madhumeha',
    icd11Mms: {
      system: 'http://id.who.int/icd/release/11/mms',
      code: '5A11',
      display: 'Type 2 diabetes mellitus'
    },
    namastePortal: {
      system: 'https://namaste.ayush.gov.in',
      code: 'AYU-DM-0412',
      display: 'Madhumeha (Vataja/Kaphaja Prameha)'
    },
    icd11Tm2: {
      system: 'http://id.who.int/icd/release/11/mms/tm2',
      code: 'TM2-CAT-8921',
      display: 'Disorders of body humours matching Madhumeha'
    }
  },
  'DYSPEPSIA_AMLAPITTA': {
    conditionName: 'Non-Ulcer Dyspepsia / Amlapitta (Hyperacidity)',
    icd11Mms: {
      system: 'http://id.who.int/icd/release/11/mms',
      code: 'MD90.2',
      display: 'Functional dyspepsia'
    },
    namastePortal: {
      system: 'https://namaste.ayush.gov.in',
      code: 'AYU-GI-0104',
      display: 'Amlapitta (Vidagdha Jirna)'
    },
    icd11Tm2: {
      system: 'http://id.who.int/icd/release/11/mms/tm2',
      code: 'TM2-CAT-3340',
      display: 'Disorders of Pitta dosha affecting Agni and Annavaha Srotas'
    }
  },
  'HYPERTENSION_UCHA_RAKTACAPA': {
    conditionName: 'Essential Hypertension / Uccha Raktachapa',
    icd11Mms: {
      system: 'http://id.who.int/icd/release/11/mms',
      code: 'BA00',
      display: 'Essential hypertension'
    },
    namastePortal: {
      system: 'https://namaste.ayush.gov.in',
      code: 'AYU-CV-0823',
      display: 'Uccha Raktachapa (Vata-Pitta Pradhana)'
    },
    icd11Tm2: {
      system: 'http://id.who.int/icd/release/11/mms/tm2',
      code: 'TM2-CAT-4512',
      display: 'Vascular tension disorders under Traditional Medicine'
    }
  },
  'OSTEOARTHRITIS_SANDHIGATA_VATA': {
    conditionName: 'Osteoarthritis of Knee / Sandhigata Vata',
    icd11Mms: {
      system: 'http://id.who.int/icd/release/11/mms',
      code: 'FA00.Z',
      display: 'Osteoarthritis of knee, unspecified'
    },
    namastePortal: {
      system: 'https://namaste.ayush.gov.in',
      code: 'AYU-MS-0291',
      display: 'Sandhigata Vata (Janu Sandhi)'
    },
    icd11Tm2: {
      system: 'http://id.who.int/icd/release/11/mms/tm2',
      code: 'TM2-CAT-7719',
      display: 'Vata degenerative joint disorders'
    }
  }
};

export const PRAKRITI_PROFILES = [
  { id: 'Vata', label: 'Vata Predominant', description: 'Light, dry, fast movements, prone to cold, irregular digestion, creative and active' },
  { id: 'Pitta', label: 'Pitta Predominant', description: 'Warm, sharp intellect, strong appetite, prone to heat and acidity, intense energy' },
  { id: 'Kapha', label: 'Kapha Predominant', description: 'Calm, steady, heavy, slow digestion, good immunity, grounded constitution' },
  { id: 'Vata-Pitta', label: 'Vata-Pitta Dual', description: 'Combination of energetic mobility with sharp digestive metabolism' },
  { id: 'Pitta-Kapha', label: 'Pitta-Kapha Dual', description: 'Strong physical constitution with sharp intellect and steady stamina' },
  { id: 'Vata-Kapha', label: 'Vata-Kapha Dual', description: 'Alternating cold tolerance with fluctuating metabolic pace' },
  { id: 'Tridosha', label: 'Tridoshaja (Balanced)', description: 'Equilibrium across all three doshas' }
];

export const AGNI_PROFILES = [
  { id: 'Sama (Balanced)', label: 'Sama Agni', description: 'Balanced digestion, regular appetite, optimal nutrient absorption' },
  { id: 'Vishama (Irregular)', label: 'Vishama Agni', description: 'Fluctuating appetite, gas, bloating, typical of Vata imbalance' },
  { id: 'Tikshna (Intense)', label: 'Tikshna Agni', description: 'Hyper-metabolism, frequent hunger, burning sensation, typical of Pitta' },
  { id: 'Manda (Sluggish)', label: 'Manda Agni', description: 'Slow digestion, heaviness after small meals, lethargy, typical of Kapha' }
];

export const AMA_PROFILES = [
  { id: 'Nirama (Absent)', label: 'Nirama (No metabolic toxins)', description: 'Clean tongue coating, feeling energetic, light digestion' },
  { id: 'Saama (Toxic Accumulation)', label: 'Saama (Metabolic endotoxins present)', description: 'Thick tongue coating, morning stiffness, heaviness, foul breath, lethargy' }
];
