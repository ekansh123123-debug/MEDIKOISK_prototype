import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { User, Phone, AlertCircle, Pill, HeartHandshake, ArrowRight, Shield } from 'lucide-react';
import { Badge } from '../common/Badge';

export const BasicDetails: React.FC = () => {
  const { currentPatient, setCurrentPatient, setPatientStep, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: currentPatient.name,
    age: currentPatient.age,
    gender: currentPatient.gender,
    phone: currentPatient.phone,
    allergies: currentPatient.allergies.join(', '),
    existingConditions: currentPatient.existingConditions.join(', '),
    currentMedications: currentPatient.currentMedications.join(', ')
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...currentPatient,
      name: formData.name,
      age: Number(formData.age),
      gender: formData.gender as 'male' | 'female' | 'other',
      phone: formData.phone,
      allergies: formData.allergies ? formData.allergies.split(',').map(s => s.trim()) : [],
      existingConditions: formData.existingConditions ? formData.existingConditions.split(',').map(s => s.trim()) : [],
      currentMedications: formData.currentMedications ? formData.currentMedications.split(',').map(s => s.trim()) : []
    };
    setCurrentPatient(updated);
    showToast('Basic profile updated.');
    setPatientStep('complaint');
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        {/* Step Indicator */}
        <div className="flex items-center justify-between">
          <Badge variant="teal">STEP 4 of 8</Badge>
          <span className="text-xs text-slate-500 font-medium">Demographic & Background Baseline</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
            Patient Profile
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {currentPatient.abhaAddress ? `Discovered via ${currentPatient.abhaAddress}` : 'Temporary OPD Guest Pass'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 text-xs font-semibold"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number
              </label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 text-xs font-semibold"
              />
            </div>
          </div>

          {/* Age & Gender */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Age (Years)
              </label>
              <input
                type="number"
                min={1}
                max={120}
                required
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 text-xs font-semibold"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Gender
              </label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 text-xs font-semibold cursor-pointer"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Existing Conditions */}
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Existing Health Conditions (Optional)
            </label>
            <input
              type="text"
              value={formData.existingConditions}
              onChange={(e) => setFormData({ ...formData, existingConditions: e.target.value })}
              placeholder="e.g. Hypertension, Diabetes, Asthma, Acid Peptic Disease"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 text-xs"
            />
          </div>

          {/* Known Allergies */}
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Known Drug / Food Allergies
            </label>
            <input
              type="text"
              value={formData.allergies}
              onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
              placeholder="e.g. Penicillin, Sulfa drugs, Peanuts (or NKDA if none)"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 text-xs"
            />
          </div>

          {/* Current Regular Medicines */}
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Current Regular Medications
            </label>
            <input
              type="text"
              value={formData.currentMedications}
              onChange={(e) => setFormData({ ...formData, currentMedications: e.target.value })}
              placeholder="e.g. Omeprazole 20mg, Metformin 500mg, Ayurvedic Churna"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 text-xs"
            />
          </div>

          {/* Continue Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 text-sm transition-all"
            >
              <span>Proceed to Adaptive Symptom Intake</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
