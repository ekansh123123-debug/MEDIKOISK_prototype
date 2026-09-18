import React from 'react';
import { useApp, AppRole } from '../../context/AppContext';
import { 
  Stethoscope, 
  User, 
  LayoutDashboard, 
  ShieldCheck, 
  Activity,
  Siren,
  LucideIcon
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { role, setRole, emergencyHistory, t } = useApp();

  const navItems: Array<{ 
    id: AppRole; 
    label: string; 
    shortLabel: string;
    icon: LucideIcon; 
    badge?: number;
    badgeColor?: string;
  }> = [
    { 
      id: 'landing', 
      label: t.navOverview || 'Overview', 
      shortLabel: 'Overview',
      icon: Activity 
    },
    { 
      id: 'patient', 
      label: t.navPatientKiosk || 'Patient Kiosk', 
      shortLabel: 'Kiosk',
      icon: User 
    },
    { 
      id: 'doctor', 
      label: t.navClinicianWorkstation || 'Clinician', 
      shortLabel: 'Clinician',
      icon: Stethoscope 
    },
    { 
      id: 'admin', 
      label: t.navTriageDesk || 'Triage Desk', 
      shortLabel: 'Triage',
      icon: LayoutDashboard,
      badge: emergencyHistory.length > 0 ? emergencyHistory.length : undefined,
      badgeColor: 'bg-rose-600 animate-pulse'
    },
    { 
      id: 'privacy', 
      label: t.navPrivacyGovernance || 'DPDP Privacy', 
      shortLabel: 'Privacy',
      icon: ShieldCheck 
    }
  ];

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#070b16]/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-teal-500/20 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1.5 transition-colors duration-200"
      style={{ paddingBottom: 'max(0.375rem, env(safe-area-inset-bottom, 0.375rem))' }}
    >
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {navItems.map((item) => {
          const active = role === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setRole(item.id)}
              aria-current={active ? 'page' : undefined}
              className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all duration-150 tactile-btn cursor-pointer select-none min-h-[48px] ${
                active 
                  ? 'text-teal-600 dark:text-teal-400 font-bold' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
              }`}
            >
              {/* Active pill glow background */}
              {active && (
                <span 
                  className="absolute inset-x-2 top-0.5 bottom-0.5 bg-teal-500/10 dark:bg-teal-500/15 rounded-xl -z-10 border border-teal-500/20"
                  aria-hidden="true"
                />
              )}

              {/* Icon Container with Badge */}
              <div className="relative">
                <Icon 
                  className={`w-5 h-5 transition-transform duration-150 ${active ? 'scale-110 text-teal-600 dark:text-teal-400' : 'text-slate-500 dark:text-slate-400'}`} 
                  strokeWidth={active ? 2.2 : 1.8}
                />
                {item.badge !== undefined && (
                  <span 
                    className={`absolute -top-1.5 -right-2.5 min-w-[16px] h-4 px-1 rounded-full text-[9px] font-bold text-white flex items-center justify-center shadow-sm ${item.badgeColor || 'bg-teal-600'}`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span className={`text-[10px] tracking-tight mt-0.5 truncate max-w-[64px] ${active ? 'font-bold' : 'font-medium'}`}>
                {item.shortLabel}
              </span>

              {/* Active Indicator dot */}
              {active && (
                <span 
                  className="w-1 h-1 rounded-full bg-teal-600 dark:bg-teal-400 mt-0.5" 
                  aria-hidden="true" 
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
