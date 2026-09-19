import { DocumentRecord } from '../types';

export const SAMPLE_DOCUMENTS: DocumentRecord[] = [
  {
    id: 'DOC-2025-0891',
    patientId: 'PAT-002',
    fileName: 'OPD_Prescription_Dr_Shukla_KEM.pdf',
    fileType: 'prescription',
    fileSize: '1.4 MB',
    uploadTimestamp: '2025-02-10T10:15:00Z',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60',
    processingStage: 'completed',
    confidenceScore: 0.94,
    isVerified: false,
    rawOcrText: `K.E.M. HOSPITAL OPD CLINIC
Dr. A. K. Shukla, MD (Medicine) - Reg HPR: 14-8892-0012
Date: 10/02/2025  Patient: Sunita Deshmukh (Age: 38F)

Rx:
1. Tab. Pantoprazole 40 mg - 1 tab OD (Before Breakfast) x 14 days [Conf: 98%]
2. Tab. Paracetamol 650 mg - 1 tab TDS (After Food) x 3 days [Conf: 96%]
3. Syp. Sucralfate 1000 mg/5ml - 2 tsp BD x 7 days [Conf: 89%] - Hand-scrawled dosage
4. Tab. Domperidone 10 mg - 1 tab BD x 5 days [Conf: 92%] - Needs confirmation

Advice: Avoid oily/spicy food. Review in 14 days if symptoms persist.
Dr. Signature: [Verified NRCeS]`,
    extractedMedications: [
      {
        id: 'MED-EXT-01',
        documentId: 'DOC-2025-0891',
        name: 'Pantoprazole',
        genericName: 'Pantoprazole Sodium',
        strength: '40 mg',
        route: 'Oral',
        frequency: 'Once Daily (OD before breakfast)',
        duration: '14 days',
        confidence: 0.98,
        verificationStatus: 'verified',
        boundingBox: { x: 42, y: 150, width: 380, height: 45 }
      },
      {
        id: 'MED-EXT-02',
        documentId: 'DOC-2025-0891',
        name: 'Paracetamol',
        genericName: 'Acetaminophen',
        strength: '650 mg',
        route: 'Oral',
        frequency: 'Three Times Daily (TDS)',
        duration: '3 days',
        confidence: 0.96,
        verificationStatus: 'verified',
        boundingBox: { x: 42, y: 205, width: 390, height: 45 }
      },
      {
        id: 'MED-EXT-03',
        documentId: 'DOC-2025-0891',
        name: 'Sucralfate Syrup',
        genericName: 'Sucralfate Suspension',
        strength: '1000 mg / 5ml',
        route: 'Oral',
        frequency: 'Twice Daily (BD)',
        duration: '7 days',
        confidence: 0.89, // < 0.95 -> Needs Patient Verification!
        verificationStatus: 'pending',
        boundingBox: { x: 42, y: 260, width: 360, height: 50 }
      },
      {
        id: 'MED-EXT-04',
        documentId: 'DOC-2025-0891',
        name: 'Domperidone',
        genericName: 'Domperidone',
        strength: '10 mg',
        route: 'Oral',
        frequency: 'Twice Daily (BD before food)',
        duration: '5 days',
        confidence: 0.91, // < 0.95 -> Needs Patient Verification!
        verificationStatus: 'pending',
        boundingBox: { x: 42, y: 320, width: 370, height: 48 }
      }
    ]
  },
  {
    id: 'DOC-2025-0744',
    patientId: 'PAT-003',
    fileName: 'Dr_Lal_PathLabs_HbA1c_Lipid.pdf',
    fileType: 'lab_report',
    fileSize: '820 KB',
    uploadTimestamp: '2025-01-18T08:30:00Z',
    thumbnailUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&auto=format&fit=crop&q=60',
    processingStage: 'completed',
    confidenceScore: 0.99,
    isVerified: true,
    rawOcrText: `DR. LAL PATHLABS - PATIENT REPORT
Patient: Ramesh Verma (Age: 56M)  ABHA: 91-4821-9920-3314
Date: 18-Jan-2025

Biochemistry Profile:
- Fasting Blood Sugar (FBS): 148 mg/dL [High, Ref: 70-100]
- HbA1c (Glycosylated Hemoglobin): 7.8% [High, Target < 6.5%]
- Estimated Average Glucose (eAG): 177 mg/dL
- Total Cholesterol: 215 mg/dL [Borderline High]
- Serum Creatinine: 0.9 mg/dL [Normal, Ref: 0.7-1.2]`,
    extractedMedications: []
  }
];
