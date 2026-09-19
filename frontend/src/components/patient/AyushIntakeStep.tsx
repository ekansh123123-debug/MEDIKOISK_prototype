import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Leaf, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';
import { PRAKRITI_PROFILES, AGNI_PROFILES, AMA_PROFILES } from '../../data/ayushOntology';
import { QueueService } from '../../services/queueService';

export const AyushIntakeStep: React.FC = () => {
  const { currentPatient, setPatientStep, setCurrentToken, showToast, t } = useApp();

  const [hasAyush, setHasAyush] = useState(true);
  const [selectedPrakriti, setSelectedPrakriti] = useState('Pitta');
  const [selectedAgni, setSelectedAgni] = useState('Tikshna (Intense)');
  const [selectedAma, setSelectedAma] = useState('Saama (Toxic Accumulation)');
  const [traditionalMeds, setTraditionalMeds] = useState('Avipattikar Churna 1 tsp BD, Kamdudha Ras');

  const handleFinishIntake = () => {
    const token = QueueService.issueToken(
      currentPatient.id,
      currentPatient.name,
      currentPatient.age,
      currentPatient.gender,
      'Epigastric abdominal pain for 3 days'
    );
    setCurrentToken(token);
    showToast(`Intake finalized! Queue Token ${token.tokenNumber} issued.`);
    setPatientStep('queue_token');
  };

  return (
    <div className="max-w-2xl mx-auto py-2 sm:py-6 px-1 sm:px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-white/[0.07] dark:bg-[#111622] shadow-xl space-y-5 sm:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.07] text-xs">
          <span className="font-bold text-teal-600 dark:text-teal-400">Step: Traditional Remedies & Habits</span>
          <span className="text-slate-500 dark:text-slate-400">Holistic Care</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-2 border border-amber-500/20">
            <Leaf className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
            {t.ayushTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            {t.ayushDesc}
          </p>
        </div>

        {/* Toggle Question */}
        <div className="p-4 bg-slate-50 dark:bg-[#161d2b] rounded-xl border border-slate-200 dark:border-white/[0.07] flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white">
              Do you take home remedies or ayurvedic medicines?
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Helps your doctor ensure home remedies and medicines work safely together.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setHasAyush(true)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer ${
                hasAyush ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-200 dark:bg-[#131926] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/[0.07]'
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setHasAyush(false)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer ${
                !hasAyush ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-200 dark:bg-[#131926] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/[0.07]'
              }`}
            >
              No
            </button>
          </div>
        </div>

        {hasAyush && (
          <div className="space-y-4 animate-fade-in text-xs">
            {/* Prakriti (Constitutional Type) */}
            <div>
              <span className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                {t.prakritiLabel}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRAKRITI_PROFILES.map((p) => {
                  const isSel = selectedPrakriti === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPrakriti(p.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all shadow-sm tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer ${
                        isSel
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-200 font-bold ring-1 ring-teal-500'
                          : 'border-slate-200 dark:border-white/[0.07] bg-white dark:bg-[#131926] hover:border-teal-500/40 text-slate-800 dark:text-slate-300'
                      }`}
                    >
                      <span className="block">{p.label}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal line-clamp-1">{p.description}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Agni & Ama */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="ayush-agni-select" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Agni (Digestive Capacity)
                </label>
                <select
                  id="ayush-agni-select"
                  value={selectedAgni}
                  onChange={(e) => setSelectedAgni(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-[#131926] border border-slate-300 dark:border-white/[0.07] rounded-xl font-semibold text-xs text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                >
                  {AGNI_PROFILES.map(a => (
                    <option key={a.id} value={a.id}>{a.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="ayush-ama-select" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Ama (Metabolic Toxic Accumulation)
                </label>
                <select
                  id="ayush-ama-select"
                  value={selectedAma}
                  onChange={(e) => setSelectedAma(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-[#131926] border border-slate-300 dark:border-white/[0.07] rounded-xl font-semibold text-xs text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                >
                  {AMA_PROFILES.map(a => (
                    <option key={a.id} value={a.id}>{a.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Traditional Formulations */}
            <div>
              <label htmlFor="ayush-traditional-meds" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.traditionalFormulations}
              </label>
              <input
                id="ayush-traditional-meds"
                type="text"
                value={traditionalMeds}
                onChange={(e) => setTraditionalMeds(e.target.value)}
                placeholder="e.g. Ashwagandha, Triphala, Avipattikar Churna, Siddha decoctions…"
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#131926] border border-slate-300 dark:border-white/[0.07] rounded-xl text-xs text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              />
            </div>

            {/* Dual Coding Preview Badge */}
            <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-teal-700 dark:text-teal-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <span>{t.icdDualCodingNotice}:</span>
              </div>
              <span className="font-mono font-bold">
                ICD-11 (MD90.2) ↔ NAMASTE (AYU-GI-0104) ↔ TM2 (TM2-CAT-3340)
              </span>
            </div>
          </div>
        )}

        {/* Finish Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleFinishIntake}
            className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 text-sm transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
          >
            <span>{t.finishIntakeBtn}</span>
            <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
