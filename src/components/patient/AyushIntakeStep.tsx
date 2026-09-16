import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Leaf, 
  Flame, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';
import { Badge } from '../common/Badge';
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
    <div className="max-w-2xl mx-auto py-6 px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-teal-500/20 shadow-xl dark:shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
          <span className="font-bold text-teal-600 dark:text-teal-400">Step: Traditional Medicine & Dual-Coding</span>
          <span className="text-slate-500 dark:text-slate-400">NAMASTE & WHO TM2 Standard</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex items-center justify-center mx-auto mb-2 border border-amber-500/20">
            <Leaf className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
            {t.ayushTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            {t.ayushDesc}
          </p>
        </div>

        {/* Toggle Question */}
        <div className="p-4 bg-slate-50/90 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between backdrop-blur-md">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              Do you take or consult AYUSH / Traditional medicine?
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Captures herbal preparations to prevent herb-drug interactions.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setHasAyush(true)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                hasAyush ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setHasAyush(false)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                !hasAyush ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
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
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                {t.prakritiLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRAKRITI_PROFILES.map((p) => {
                  const isSel = selectedPrakriti === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPrakriti(p.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all shadow-sm ${
                        isSel
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-500/15 text-teal-800 dark:text-teal-200 font-bold'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-teal-500/40 text-slate-800 dark:text-slate-300'
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
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Agni (Digestive Capacity)
                </label>
                <select
                  value={selectedAgni}
                  onChange={(e) => setSelectedAgni(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl font-semibold text-xs text-slate-900 dark:text-white"
                >
                  {AGNI_PROFILES.map(a => (
                    <option key={a.id} value={a.id}>{a.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Ama (Metabolic Toxic Accumulation)
                </label>
                <select
                  value={selectedAma}
                  onChange={(e) => setSelectedAma(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl font-semibold text-xs text-slate-900 dark:text-white"
                >
                  {AMA_PROFILES.map(a => (
                    <option key={a.id} value={a.id}>{a.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Traditional Formulations */}
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.traditionalFormulations}
              </label>
              <input
                type="text"
                value={traditionalMeds}
                onChange={(e) => setTraditionalMeds(e.target.value)}
                placeholder="e.g. Ashwagandha, Triphala, Avipattikar Churna, Siddha decoctions"
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white"
              />
            </div>

            {/* Dual Coding Preview Badge */}
            <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20 flex items-center justify-between text-[11px] text-teal-700 dark:text-teal-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
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
            onClick={handleFinishIntake}
            className="w-full py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-slate-950 font-bold rounded-2xl shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2 text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.finishIntakeBtn}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
};
