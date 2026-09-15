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
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
            Architectural Differentiation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 font-['Outfit']">
            Why MEDIKOISK is Not Just Another Chatbot
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Generic chatbots hallucinate diagnoses and create clinical liability. MEDIKOISK is an interoperable clinical case-preparation platform built for high-volume hospital reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:border-teal-500/50 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <h4 className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                  {item.subtitle}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
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
