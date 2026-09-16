import React from 'react';
import { 
  GitBranch, 
  Mic2, 
  Cpu, 
  UserCheck, 
  Leaf, 
  FileCheck2, 
  Share2, 
  ShieldAlert 
} from 'lucide-react';

export const WhyDifferent: React.FC = () => {
  const differentiators = [
    {
      title: 'Adaptive Questioning DAG',
      subtitle: 'Entropy-Minimization Engine',
      desc: 'Replaces static 30-item forms with dynamic Directed Acyclic Graphs. Only asks the next clinically informative question based on duration, radiation, and food relationship.',
      icon: <GitBranch className="w-6 h-6 text-teal-600" />,
      tag: 'Dynamic DAG'
    },
    {
      title: 'Multimodal & Vernacular',
      subtitle: 'Voice + Touch + Text + Documents',
      desc: 'Accommodates varying digital literacy through voice recognition (Bhashini/IndicWav2Vec), simple touch cards, and document cameras across 6 Indian languages.',
      icon: <Mic2 className="w-6 h-6 text-cyan-600" />,
      tag: 'Project Bhashini'
    },
    {
      title: 'Deterministic Emergency Safety',
      subtitle: 'Non-Probabilistic Red-Flag Rules',
      desc: 'Never trusts probabilistic LLMs for medical emergencies. A parallel rule-engine halts intake immediately upon chest pain, stroke signs, or acute distress.',
      icon: <ShieldAlert className="w-6 h-6 text-rose-600" />,
      tag: 'Immediate Hard Stop'
    },
    {
      title: 'Patient-in-the-Loop Verification',
      subtitle: 'Zero Blind OCR Commitments',
      desc: 'Extracted medications with confidence < 95% trigger mandatory patient confirmation cards with Verify, Edit, or Reject before clinician viewing.',
      icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
      tag: 'Conf < 95% Flagged'
    },
    {
      title: 'AYUSH Dual-Coding Architecture',
      subtitle: 'ICD-11 + NAMASTE + TM2',
      desc: 'Harmonizes conventional biomedicine with Ayurveda, Unani, Siddha, and Homeopathy. Captures Prakriti, Agni, and traditional formulations without fragmentation.',
      icon: <Leaf className="w-6 h-6 text-amber-600" />,
      tag: 'Dual-Coding'
    },
    {
      title: 'Doctor-Ready SOAP & Provenance',
      subtitle: 'Clickable Source Provenance',
      desc: 'Every AI assertion in the clinical summary has a direct interactive link back to the exact voice transcript or patient answer. Doctors verify, edit, and digitally sign.',
      icon: <FileCheck2 className="w-6 h-6 text-purple-600" />,
      tag: 'Full Provenance'
    },
    {
      title: 'ABDM & FHIR R4 Compliant',
      subtitle: 'Milestones M1 through M4',
      desc: 'Generates NRCeS-compliant FHIR R4 Document Bundles with Composition as entry[0]. Supports ABHA Scan & Share, Care Contexts, and DHIS incentive tracking.',
      icon: <Share2 className="w-6 h-6 text-blue-600" />,
      tag: 'NRCeS Standard'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#080d1a] border-b border-slate-200 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-700 dark:text-teal-400 tracking-wider uppercase px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-500/20">
            Architectural Differentiation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 font-['Outfit'] tracking-tight">
            Why MEDIKOISK is Not a Generic AI Chatbot
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Generic chatbots hallucinate diagnostic decisions and introduce unacceptable clinical liability. MEDIKOISK is a deterministic, clinically governed intake platform engineered specifically for high-volume hospital operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 shadow-md hover:border-cyan-500/40 hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 group-hover:scale-105 group-hover:border-cyan-500/30 transition-all">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-cyan-700 dark:text-cyan-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit'] group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-1">
                  {item.subtitle}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
