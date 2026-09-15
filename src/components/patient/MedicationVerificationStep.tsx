import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Check, 
  Edit3, 
  X, 
  AlertTriangle, 
  ShieldCheck, 
  Pill, 
  ArrowRight, 
  Clock, 
  Info 
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { ExtractedMedication } from '../../types';

export const MedicationVerificationStep: React.FC = () => {
  const { documents, updateMedication, setPatientStep, showToast } = useApp();

  // Selected document (use the latest uploaded document or sample)
  const activeDoc = documents[0];
  const medications = activeDoc?.extractedMedications || [];

  const [editingMedId, setEditingMedId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{ name: string; strength: string; frequency: string }>({
    name: '',
    strength: '',
    frequency: ''
  });

  const handleStartEdit = (med: ExtractedMedication) => {
    setEditingMedId(med.id);
    setEditForm({
      name: med.name,
      strength: med.strength,
      frequency: med.frequency
    });
  };

  const handleSaveEdit = (medId: string) => {
    updateMedication(activeDoc.id, medId, 'edit', editForm);
    setEditingMedId(null);
  };

  const allProcessed = medications.every(m => m.verificationStatus !== 'pending');

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Badge variant="teal">STEP 7 of 8</Badge>
          <span className="text-xs text-slate-500 font-medium">Mandatory Human-in-the-Loop</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
            Verify Extracted Medications
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            AI extracted these prescriptions from your uploaded document. 
            Confirm or correct them below before they are presented to your doctor.
          </p>
        </div>

        {/* Clinical Safety Banner */}
        <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Mandatory Verification Rule:</strong>
            <p className="mt-0.5 text-amber-800 dark:text-amber-300">
              Prescription entries with OCR confidence &lt; 95% are highlighted with a warning. Never blindly commit unverified medications into clinical records.
            </p>
          </div>
        </div>

        {/* Medication Cards List */}
        <div className="space-y-3">
          {medications.map((med) => {
            const isLowConfidence = med.confidence < 0.95;
            const isEditing = editingMedId === med.id;

            return (
              <div
                key={med.id}
                className={`p-4 rounded-2xl border transition-all ${
                  isLowConfidence && med.verificationStatus === 'pending'
                    ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-950/20'
                    : med.verificationStatus === 'verified'
                    ? 'border-emerald-300 bg-emerald-50/30 dark:bg-emerald-950/20'
                    : med.verificationStatus === 'rejected'
                    ? 'border-slate-300 bg-slate-100 dark:bg-slate-800/40 opacity-60'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                }`}
              >
                {isEditing ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div>
                        <label className="font-bold text-slate-700 dark:text-slate-300">Medicine Name</label>
                        <input
                          type="text"
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          className="w-full px-3 py-2 bg-white dark:bg-slate-900 border rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 dark:text-slate-300">Strength</label>
                        <input
                          type="text"
                          value={editForm.strength}
                          onChange={(e) => setEditForm({ ...editForm, strength: e.target.value })}
                          className="w-full px-3 py-2 bg-white dark:bg-slate-900 border rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 dark:text-slate-300">Frequency</label>
                        <input
                          type="text"
                          value={editForm.frequency}
                          onChange={(e) => setEditForm({ ...editForm, frequency: e.target.value })}
                          className="w-full px-3 py-2 bg-white dark:bg-slate-900 border rounded-lg text-xs"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => setEditingMedId(null)}
                        className="px-3 py-1.5 bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveEdit(med.id)}
                        className="px-3 py-1.5 bg-teal-600 text-white rounded-lg text-xs font-bold"
                      >
                        Save & Confirm
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-teal-50 dark:bg-teal-900/40 text-teal-600 rounded-lg">
                          <Pill className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                            {med.name} {med.strength}
                          </h4>
                          <span className="text-[11px] text-slate-500">
                            {med.route} • {med.frequency} • {med.duration}
                          </span>
                        </div>
                      </div>

                      {/* Confidence badge */}
                      <div className="flex items-center gap-2">
                        {isLowConfidence && med.verificationStatus === 'pending' && (
                          <Badge variant="amber" icon={<AlertTriangle className="w-3 h-3" />}>
                            Verification Required
                          </Badge>
                        )}
                        <span className="text-[11px] font-mono text-slate-500">
                          {(med.confidence * 100).toFixed(0)}% Conf
                        </span>
                        <Badge
                          variant={
                            med.verificationStatus === 'verified'
                              ? 'green'
                              : med.verificationStatus === 'rejected'
                              ? 'slate'
                              : med.verificationStatus === 'edited'
                              ? 'blue'
                              : 'amber'
                          }
                        >
                          {med.verificationStatus.toUpperCase()}
                        </Badge>
                      </div>
                    </div>

                    {/* Actions: Verify / Edit / Reject */}
                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => updateMedication(activeDoc.id, med.id, 'verify')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                          med.verificationStatus === 'verified'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>{med.verificationStatus === 'verified' ? 'Verified' : 'Verify'}</span>
                      </button>

                      <button
                        onClick={() => handleStartEdit(med)}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => updateMedication(activeDoc.id, med.id, 'reject')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                          med.verificationStatus === 'rejected'
                            ? 'bg-slate-600 text-white'
                            : 'bg-rose-50 hover:bg-rose-100 text-rose-700'
                        }`}
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="pt-2 flex justify-between items-center">
          <button
            onClick={() => setPatientStep('document_upload')}
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
          >
            &larr; Upload Another Document
          </button>

          <button
            onClick={() => setPatientStep('ayush_intake')}
            className="px-6 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/25 flex items-center gap-2 text-xs transition-all"
          >
            <span>Proceed to AYUSH & Traditional Medicine</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
