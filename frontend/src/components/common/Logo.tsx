import React from 'react';

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
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/medikoisk-logo.png"
          alt="MEDIKOISK Logo"
          width={size === 'sm' ? 140 : size === 'lg' ? 240 : 180}
          height={size === 'sm' ? 32 : size === 'lg' ? 48 : 36}
          // @ts-expect-error fetchpriority attribute
          fetchpriority="high"
          className={`h-auto object-contain rounded-lg shadow-sm ${
            size === 'sm' ? 'max-h-7 sm:max-h-8' : size === 'lg' ? 'max-h-12' : 'max-h-8 sm:max-h-9'
          }`}
        />
      </div>
    );
  }

  // The official vector Icon Mark matching user's image
  const IconMark = (
    <div
      className={`relative ${iconSizes[size]} rounded-xl sm:rounded-2xl p-[1.5px] bg-gradient-to-tr from-sky-600 via-cyan-400 to-teal-300 shadow-md shadow-sky-500/25 shrink-0 flex items-center justify-center overflow-hidden`}
    >
      {/* Dark Squircle Background */}
      <div className="w-full h-full rounded-[10px] sm:rounded-[14px] bg-[#070e1e] flex items-center justify-center relative overflow-hidden">
        {/* Soft cyan center glow */}
        <div className="absolute inset-0 bg-radial from-cyan-500/20 via-transparent to-transparent pointer-events-none" />

        {/* SVG Medical Cross with Pulse Waveform */}
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow filter */}
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00B4D8" />
              <stop offset="100%" stopColor="#0077B6" />
            </linearGradient>
            <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="50%" stopColor="#A7F3D0" />
              <stop offset="100%" stopColor="#67E8F9" />
            </linearGradient>
          </defs>

          {/* Medical Cross Base with Rounded Ends */}
          <g filter="url(#cyanGlow)">
            {/* Horizontal Bar */}
            <rect
              x="6"
              y="20"
              width="36"
              height="8"
              rx="4"
              fill="url(#crossGrad)"
            />
            {/* Vertical Bar */}
            <rect
              x="20"
              y="6"
              width="8"
              height="36"
              rx="4"
              fill="url(#crossGrad)"
            />
          </g>

          {/* Central Circular Node */}
          <circle cx="24" cy="24" r="5" fill="#0096C7" />
          <circle cx="24" cy="24" r="2.5" fill="#38BDF8" />

          {/* Heartbeat / Pulse Waveform passing through center */}
          <path
            d="M8 24H18L21 17L24 30L27 20L29 24H40"
            stroke="url(#pulseGrad)"
            strokeWidth="2.2"
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
            className={`font-black ${titleSizes[size]} tracking-tight font-display text-slate-900 dark:text-white`}
          >
            MEDI<span className="text-[#0284C7] dark:text-[#38BDF8]">KOISK</span>
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`${subtitleSizes[size]} font-bold tracking-[0.18em] uppercase text-slate-500 dark:text-slate-400 mt-0.5 whitespace-nowrap`}
          >
            Smart Clinical Intake
          </span>
        )}
      </div>
    </div>
  );
};
