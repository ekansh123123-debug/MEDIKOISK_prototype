import { DocumentRecord, ExtractedMedication } from '../types';
import { SAMPLE_DOCUMENTS } from '../data/samplePrescriptions';

export class OcrService {
  /**
   * Simulates the multi-stage deep learning OCR pipeline:
   * Deskew -> Contrast -> Layout -> TrOCR -> BioBERT Extraction
   */
  static async processDocument(
    file: File | { name: string; size: number },
    patientId: string,
    onStageUpdate?: (stage: DocumentRecord['processingStage']) => void
  ): Promise<DocumentRecord> {
    const docId = `DOC-${Date.now().toString().slice(-6)}`;
    
    // Stage 1: Uploading
    onStageUpdate?.('uploading');
    await new Promise(r => setTimeout(r, 600));

    // Stage 2: Preprocessing (Deskew via Radon transform & Sauvola thresholding)
    onStageUpdate?.('preprocessing');
    await new Promise(r => setTimeout(r, 700));

    // Stage 3: Layout Analysis (Mask R-CNN / LayoutLM isolating Rx symbols & clinic header)
    onStageUpdate?.('layout_analysis');
    await new Promise(r => setTimeout(r, 700));

    // Stage 4: TrOCR Sequence Recognition (Transformer-based CTC sequence modeling)
    onStageUpdate?.('trocr_recognition');
    await new Promise(r => setTimeout(r, 800));

    // Stage 5: Clinical NLP Entity Extraction (BioBERT / ClinicalBERT entity tagging)
    onStageUpdate?.('nlp_entity_extraction');
    await new Promise(r => setTimeout(r, 600));

    // Return structured document with high and low confidence medications
    const newDoc: DocumentRecord = {
      id: docId,
      patientId,
      fileName: file.name,
      fileType: 'prescription',
      fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      uploadTimestamp: new Date().toISOString(),
      thumbnailUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60',
      processingStage: 'completed',
      confidenceScore: 0.93,
      isVerified: false,
      rawOcrText: `HOSPITAL OPD CLINIC RECORD\nPrescription Date: ${new Date().toLocaleDateString()}\nPatient: Verified ID\nRx:\n1. Tab. Pantoprazole 40 mg OD x 14d [Conf: 98%]\n2. Tab. Sucralfate 1000 mg BD x 7d [Conf: 89%]\n3. Tab. Domperidone 10 mg BD x 5d [Conf: 91%]`,
      extractedMedications: [
        {
          id: `MED-${Date.now()}-1`,
          documentId: docId,
          name: 'Pantoprazole',
          genericName: 'Pantoprazole Sodium',
          strength: '40 mg',
          route: 'Oral',
          frequency: 'Once daily before breakfast',
          duration: '14 days',
          confidence: 0.98,
          verificationStatus: 'verified',
          boundingBox: { x: 40, y: 120, width: 320, height: 40 }
        },
        {
          id: `MED-${Date.now()}-2`,
          documentId: docId,
          name: 'Sucralfate Suspension',
          genericName: 'Sucralfate 1000mg/5ml',
          strength: '1000 mg',
          route: 'Oral',
          frequency: 'Twice daily before food',
          duration: '7 days',
          confidence: 0.89, // < 0.95 -> Needs Patient Verification!
          verificationStatus: 'pending',
          boundingBox: { x: 40, y: 175, width: 330, height: 45 }
        },
        {
          id: `MED-${Date.now()}-3`,
          documentId: docId,
          name: 'Domperidone',
          genericName: 'Domperidone',
          strength: '10 mg',
          route: 'Oral',
          frequency: 'Twice daily (BD)',
          duration: '5 days',
          confidence: 0.91, // < 0.95 -> Needs Patient Verification!
          verificationStatus: 'pending',
          boundingBox: { x: 40, y: 230, width: 310, height: 42 }
        }
      ]
    };

    onStageUpdate?.('completed');
    return newDoc;
  }

  /**
   * Retrieves sample documents for pre-populated demo patients
   */
  static getSampleDocuments(patientId: string): DocumentRecord[] {
    return SAMPLE_DOCUMENTS.filter(d => d.patientId === patientId || patientId === 'PAT-001');
  }

  /**
   * Verifies, edits, or rejects an extracted medication
   */
  static updateMedicationStatus(
    medications: ExtractedMedication[],
    medId: string,
    action: 'verify' | 'reject' | 'edit',
    editedValues?: { name?: string; strength?: string; frequency?: string; duration?: string },
    rejectionReason?: string
  ): ExtractedMedication[] {
    return medications.map(med => {
      if (med.id !== medId) return med;
      
      if (action === 'verify') {
        return {
          ...med,
          verificationStatus: 'verified',
          verifiedBy: 'patient',
          verifiedAt: new Date().toISOString()
        };
      } else if (action === 'reject') {
        return {
          ...med,
          verificationStatus: 'rejected',
          rejectionReason: rejectionReason || 'Patient marked as incorrect or discontinued'
        };
      } else if (action === 'edit' && editedValues) {
        return {
          ...med,
          verificationStatus: 'edited',
          editedValues,
          name: editedValues.name || med.name,
          strength: editedValues.strength || med.strength,
          frequency: editedValues.frequency || med.frequency,
          duration: editedValues.duration || med.duration,
          verifiedBy: 'patient',
          verifiedAt: new Date().toISOString()
        };
      }
      return med;
    });
  }
}
