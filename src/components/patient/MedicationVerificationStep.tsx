import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Check, 
  Edit3, 
  X, 
  AlertTriangle, 
  Pill, 
  ArrowRight
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { ExtractedMedication } from '../../types';

export const MedicationVerificationStep: React.FC = () => {
  const { documents, updateMedication, setPatientStep, showToast, t } = useApp();

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

  return (
    <div className="max-w-2xl mx-auto py-2 sm:py-6 px-1 sm:px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5 sm:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
          <span className="font-bold text-teal-600 dark:text-teal-400">Step: Extracted Medication Verification</span>
          <span className="text-slate-500 dark:text-slate-400 font-mono">Human-In-The-Loop Safety Protocol</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
            {t.medVerifyTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            {t.medVerifyDesc}
          </p>
        </div>

        {/* Clinical Safety Banner */}
        <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="text-slate-900 dark:text-white">Safety Verification Protocol:</strong>
            <p className="mt-0.5 text-amber-700 dark:text-amber-200/90">
              Prescription entries with OCR recognition confidence &lt; 95% require mandatory human confirmation before EHR insertion.
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
                className={`p-4 rounded-xl border transition-all ${
                  isLowConfidence && med.verificationStatus === 'pending'
                    ? 'border-amber-500/50 bg-amber-50/50 dark:bg-amber-500/5 shadow-sm'
                    : med.verificationStatus === 'verified'
                    ? 'border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-500/5 shadow-sm'
                    : med.verificationStatus === 'rejected'
                    ? 'border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/30 opacity-60'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm'
                }`}
              >
                {isEditing ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div>
                        <label htmlFor={`edit-med-name-${med.id}`} className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                          Medicine Name
                        </label>
                        <input
                          id={`edit-med-name-${med.id}`}
                          type="text"
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                        />
                      </div>
                      <div>
                        <label htmlFor={`edit-med-strength-${med.id}`} className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                          {t.dosageLabel}
                        </label>
                        <input
                          id={`edit-med-strength-${med.id}`}
                          type="text"
                          value={editForm.strength}
                          onChange={(e) => setEditForm({ ...editForm, strength: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                        />
                      </div>
                      <div>
                        <label htmlFor={`edit-med-freq-${med.id}`} className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                          {t.frequencyLabel}
                        </label>
                        <input
                          id={`edit-med-freq-${med.id}`}
                          type="text"
                          value={editForm.frequency}
                          onChange={(e) => setEditForm({ ...editForm, frequency: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button
                        type="button"
                        onClick={() => setEditingMedId(null)}
                        className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                      >
                        {t.cancelBtn}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveEdit(med.id)}
                        className="px-3.5 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg text-xs shadow-md tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                      >
                        {t.verifyConfirmBtn}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-xl border border-teal-500/20">
                          <Pill className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                            {med.name} {med.strength}
                          </h4>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">
                            {med.route} • {med.frequency} • {med.duration}
                          </span>
                        </div>
                      </div>

                      {/* Confidence & Status */}
                      <div className="flex items-center gap-2">
                        {isLowConfidence && med.verificationStatus === 'pending' && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                            Review Required
                          </span>
                        )}
                        <span className="text-[11px] font-mono tabular-nums text-slate-500 dark:text-slate-400">
                          {(med.confidence * 100).toFixed(0)}% {t.confidenceScore}
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

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => updateMedication(activeDoc.id, med.id, 'verify')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer ${
                          med.verificationStatus === 'verified'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{med.verificationStatus === 'verified' ? 'Verified' : 'Verify'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStartEdit(med)}
                        className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors border border-slate-200 dark:border-slate-700 tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{t.editBtn}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => updateMedication(activeDoc.id, med.id, 'reject')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer ${
                          med.verificationStatus === 'rejected'
                            ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                            : 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/30'
                        }`}
                      >
                        <X className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{t.rejectBtn}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="pt-3 flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-3 border-t border-slate-200/80 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setPatientStep('document_upload')}
            className="py-2.5 sm:py-1 px-3 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold cursor-pointer text-center sm:text-left"
          >
            &larr; Upload Another Document
          </button>

          <button
            type="button"
            onClick={() => setPatientStep('ayush_intake')}
            className="w-full sm:w-auto px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 text-sm sm:text-xs transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer min-h-[48px]"
          >
            <span>Proceed to AYUSH Dual-Coding</span>
            <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
