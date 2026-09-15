import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Leaf, 
  Flame, 
  Sparkles, 
  ArrowRight, 
  Activity, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck 
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { PRAKRITI_PROFILES, AGNI_PROFILES, AMA_PROFILES, DUAL_CODING_REGISTRY } from '../../data/ayushOntology';
import { QueueService } from '../../services/queueService';

export const AyushIntakeStep: React.FC = () => {
  const { currentPatient, setPatientStep, setCurrentToken, showToast } = useApp();

  const [hasAyush, setHasAyush] = useState(true);
  const [selectedPrakriti, setSelectedPrakriti] = useState('Pitta');
  const [selectedAgni, setSelectedAgni] = useState('Tikshna (Intense)');
  const [selectedAma, setSelectedAma] = useState('Saama (Toxic Accumulation)');
  const [traditionalMeds, setTraditionalMeds] = useState('Avipattikar Churna 1 tsp BD, Kamdudha Ras');
  const [dietaryHabits, setDietaryHabits] = useState('High spicy & tea consumption, irregular lunch timing');

  const handleFinishIntake = () => {
    // Generate queue token
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
    <div className="max-w-2xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Badge variant="teal">STEP 8 of 8</Badge>
          <span className="text-xs text-slate-500 font-medium">AYUSH Dual-Coding Harmony</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-2">
            <Leaf className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
            AYUSH & Traditional Medicine
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Connecting Ayurveda, Yoga, Unani, Siddha, and Homeopathy with conventional biomedical EHR records under WHO TM2 standards.
          </p>
        </div>

        {/* Toggle Question */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              Do you take or consult AYUSH / Traditional medicine?
            </h4>
            <p className="text-[11px] text-slate-500">
              Captures herbal preparations to prevent herb-drug interactions.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setHasAyush(true)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                hasAyush ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-200 text-slate-700'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setHasAyush(false)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                !hasAyush ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-200 text-slate-700'
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
                Prakriti (Constitutional Profile)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRAKRITI_PROFILES.map((p) => {
                  const isSel = selectedPrakriti === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPrakriti(p.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        isSel
                          ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-200 font-bold'
                          : 'border-slate-200 dark:border-slate-700 hover:border-teal-500/50 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="block">{p.label}</span>
                      <span className="text-[10px] text-slate-400 font-normal line-clamp-1">{p.description}</span>
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
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-xs"
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
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-xs"
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
                Herbal / Mineral Formulations Currently Taken
              </label>
              <input
                type="text"
                value={traditionalMeds}
                onChange={(e) => setTraditionalMeds(e.target.value)}
                placeholder="e.g. Ashwagandha, Triphala, Avipattikar Churna, Siddha decoctions"
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs"
              />
            </div>

            {/* Dual Coding Preview Badge */}
            <div className="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 flex items-center justify-between text-[11px] text-teal-800 dark:text-teal-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Dual-Coding Engine Active:</span>
              </div>
              <span className="font-mono font-bold">
                ICD-11 (MD90.2) ↔ NAMASTE (AYU-GI-0104) ↔ TM2 (TM2-CAT-3340)
              </span>
            </div>
          </div>
        )}

        {/* Finish & Generate Token Button */}
        <div className="pt-2">
          <button
            onClick={handleFinishIntake}
            className="w-full py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Complete Intake & Issue OPD Token</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
