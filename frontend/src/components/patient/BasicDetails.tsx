import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, User } from 'lucide-react';

export const BasicDetails: React.FC = () => {
  const { currentPatient, setCurrentPatient, setPatientStep, showToast, t } = useApp();

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
    showToast('Your details were saved.');
    setPatientStep('complaint');
  };

  return (
    <div className="max-w-xl mx-auto py-2 sm:py-6 px-1 sm:px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5 sm:space-y-6">
        {/* Process Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
          <span className="font-bold text-teal-600 dark:text-teal-400">{t.stepDemographicHeader}</span>
          <span className="text-slate-500 dark:text-slate-400 font-mono">{t.masterPatientIndex}</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
            {t.basicTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t.basicDesc}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="basic-full-name" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.fullNameLabel}
              </label>
              <input
                id="basic-full-name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rohan Kulkarni…"
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-xs font-semibold"
              />
            </div>
            <div>
              <label htmlFor="basic-phone" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.phoneLabel}
              </label>
              <input
                id="basic-phone"
                type="tel"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98230 44192…"
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-xs font-mono font-semibold"
              />
            </div>
          </div>

          {/* Age & Gender */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="basic-age" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.ageLabel}
              </label>
              <input
                id="basic-age"
                type="number"
                min={1}
                max={120}
                required
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-xs font-mono font-semibold tabular-nums"
              />
            </div>
            <div>
              <label htmlFor="basic-gender" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.genderLabel}
              </label>
              <select
                id="basic-gender"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-xs font-semibold cursor-pointer"
              >
                <option value="male">{t.genderMale}</option>
                <option value="female">{t.genderFemale}</option>
                <option value="other">{t.genderOther}</option>
              </select>
            </div>
          </div>

          {/* Existing Conditions */}
          <div>
            <label htmlFor="basic-conditions" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              {t.existingConditionsLabel}
            </label>
            <input
              id="basic-conditions"
              type="text"
              value={formData.existingConditions}
              onChange={(e) => setFormData({ ...formData, existingConditions: e.target.value })}
              placeholder="e.g. Hypertension, Diabetes, Asthma, Acid Peptic Disease…"
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-xs"
            />
          </div>

          {/* Known Allergies */}
          <div>
            <label htmlFor="basic-allergies" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              {t.allergiesLabel}
            </label>
            <input
              id="basic-allergies"
              type="text"
              value={formData.allergies}
              onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
              placeholder="e.g. Penicillin, Sulfa drugs (or NKDA if none)…"
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-xs"
            />
          </div>

          {/* Current Regular Medicines */}
          <div>
            <label htmlFor="basic-medications" className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              {t.currentMedicationsLabel}
            </label>
            <input
              id="basic-medications"
              type="text"
              value={formData.currentMedications}
              onChange={(e) => setFormData({ ...formData, currentMedications: e.target.value })}
              placeholder="e.g. Omeprazole 20mg, Metformin 500mg…"
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-xs"
            />
          </div>

          {/* Continue Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 text-sm transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
            >
              <span>{t.proceedBtn}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
