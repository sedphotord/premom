'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  lightMode?: boolean;
}

export function Logo({
  className = '',
  size = 'md',
  showSubtitle = true,
  lightMode = false,
}: LogoProps) {
  const sizeClasses = {
    sm: {
      text: 'text-xl',
      subtext: 'text-[9px] tracking-wider',
      iconH: 'h-6',
      iconW: 'w-6',
    },
    md: {
      text: 'text-2xl md:text-3xl',
      subtext: 'text-[10px] md:text-xs tracking-wider',
      iconH: 'h-8',
      iconW: 'w-8',
    },
    lg: {
      text: 'text-4xl md:text-5xl',
      subtext: 'text-xs md:text-sm tracking-widest',
      iconH: 'h-11',
      iconW: 'w-11',
    },
    xl: {
      text: 'text-5xl md:text-6xl',
      subtext: 'text-sm md:text-base tracking-widest',
      iconH: 'h-14',
      iconW: 'w-14',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`inline-flex flex-col select-none ${className}`} id="premom-brand-logo">
      <div className="flex items-center gap-1 leading-none font-black tracking-tighter">
        <span className={lightMode ? 'text-slate-900' : 'text-white'}>
          <span className={currentSize.text}>PRE</span>
        </span>

        {/* The Stylized 'M' with Industrial Pipe & Valve in Solid Vibrant Green */}
        <div className="relative inline-flex items-center justify-center">
          <svg
            className={`${currentSize.iconW} ${currentSize.iconH} text-lime-600 fill-current transition-transform duration-300 hover:scale-105`}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left pipe column */}
            <path
              d="M6 8 H14 V40 H6 Z"
              fill="#65A30D"
            />
            {/* Right pipe column */}
            <path
              d="M34 8 H42 V40 H34 Z"
              fill="#65A30D"
            />
            {/* Flange plates - sharp edges */}
            <rect x="4" y="6" width="12" height="3" fill="#84CC16" />
            <rect x="32" y="6" width="12" height="3" fill="#84CC16" />
            <rect x="4" y="39" width="12" height="3" fill="#4D7C0F" />
            <rect x="32" y="39" width="12" height="3" fill="#4D7C0F" />
            
            {/* Central angled pipes meeting at industrial valve */}
            <path
              d="M13 10 L24 23 L35 10 L37 13 L24 28 L11 13 Z"
              fill="#84CC16"
            />
            <path
              d="M21 24 H27 V38 H21 Z"
              fill="#65A30D"
            />
            {/* Central industrial valve wheel / hub */}
            <circle cx="24" cy="24" r="5" fill="#4D7C0F" stroke="#A3E635" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
          </svg>
        </div>

        <span className={lightMode ? 'text-slate-900' : 'text-white'}>
          <span className={currentSize.text}>OM</span>
        </span>
      </div>

      {showSubtitle && (
        <div className="mt-1 flex flex-col">
          <div className="h-[2px] w-full bg-lime-500 mb-1" />
          <span
            className={`font-bold uppercase tracking-wider ${
              lightMode ? 'text-slate-800' : 'text-slate-200'
            } ${currentSize.subtext}`}
          >
            Tuberías y Estructuras Metálicas
          </span>
          <span
            className={`text-[8px] md:text-[9px] uppercase tracking-wider font-semibold ${
              lightMode ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            Soldaduras en General
          </span>
        </div>
      )}
    </div>
  );
}
