import React from 'react';
import { useApp } from '../../context/AppContext';

interface LogoProps {
  variant?: 'full' | 'icon' | 'image';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'image',
  size = 'md',
  className = '',
  showSubtitle = true
}) => {
  const { theme } = useApp();

  // Size metrics
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl'
  };

  const subtitleSizes = {
    sm: 'text-[7px]',
    md: 'text-[9px]',
    lg: 'text-[11px]'
  };

  // If user requests direct image render (default)
  if (variant === 'image') {
    const logoSrc = theme === 'dark' ? '/medikoisk-logo-dark.png' : '/medikoisk-logo.png';
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src={logoSrc}
          alt="MEDIKOISK Logo"
          width={size === 'sm' ? 140 : size === 'lg' ? 240 : 180}
          height={size === 'sm' ? 32 : size === 'lg' ? 48 : 36}
          // @ts-expect-error fetchpriority attribute
          fetchpriority="high"
          className={`h-auto object-contain rounded-lg transition-opacity duration-200 ${
            size === 'sm' ? 'max-h-7 sm:max-h-8' : size === 'lg' ? 'max-h-12' : 'max-h-8 sm:max-h-9'
          }`}
        />
      </div>
    );
  }

  // The official vector Icon Mark matching user's image
  const IconMark = (
    <div
      className={`relative ${iconSizes[size]} rounded-xl sm:rounded-2xl p-[1.5px] bg-gradient-to-b from-[#2a3444] via-[#1a2230] to-[#0f141d] shadow-[0_4px_16px_rgba(0,0,0,0.6)] shrink-0 flex items-center justify-center overflow-hidden border border-white/10`}
    >
      {/* Dark Squircle Background */}
      <div className="w-full h-full rounded-[10px] sm:rounded-[14px] bg-[#111622] flex items-center justify-center relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
        {/* Soft cyan center glow */}
        <div className="absolute inset-0 bg-radial from-cyan-400/25 via-transparent to-transparent pointer-events-none" />

        {/* SVG Medical Cross with Pulse Waveform */}
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow filter */}
            <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>
          </defs>

          {/* Medical Cross Base with Rounded Capsule Ends */}
          <g filter="url(#cyanGlow)">
            {/* Horizontal Bar */}
            <rect
              x="6"
              y="20"
              width="36"
              height="8"
              rx="4"
              fill="url(#crossGrad)"
              stroke="#00F0FF"
              strokeWidth="1"
              strokeOpacity="0.8"
            />
            {/* Vertical Bar */}
            <rect
              x="20"
              y="6"
              width="8"
              height="36"
              rx="4"
              fill="url(#crossGrad)"
              stroke="#00F0FF"
              strokeWidth="1"
              strokeOpacity="0.8"
            />
          </g>

          {/* Central Circular Node */}
          <circle cx="24" cy="24" r="5" fill="#0284C7" />
          <circle cx="24" cy="24" r="2.5" fill="#00F0FF" />

          {/* Heartbeat / Pulse Waveform passing through center */}
          <path
            d="M7 24H17L21 16L24 31L27 19L29 24H41"
            stroke="url(#pulseGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing central pulse dot */}
          <circle cx="24" cy="24" r="1.5" fill="#F0FDFA" />
        </svg>
      </div>
    </div>
  );

  if (variant === 'icon') {
    return <div className={className}>{IconMark}</div>;
  }

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {IconMark}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center leading-none">
          <span
            className={`font-black ${titleSizes[size]} tracking-tight font-display text-slate-900 dark:text-white flex items-center`}
          >
            <span className="bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent drop-shadow-sm">
              MEDI
            </span>
            <span className="bg-gradient-to-b from-sky-500 via-sky-600 to-blue-600 dark:from-sky-400 dark:via-sky-500 dark:to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              KOISK
            </span>
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`${subtitleSizes[size]} font-bold tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400 mt-0.5 whitespace-nowrap`}
          >
            Smart Clinical Intake
          </span>
        )}
      </div>
    </div>
  );
};
