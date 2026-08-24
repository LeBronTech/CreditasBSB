import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  layout?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  layout = 'horizontal',
  size = 'md',
}) => {
  const isDarkBg = variant === 'dark';
  const isVertical = layout === 'vertical';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const subtitleSizes = {
    sm: 'text-[7px]',
    md: 'text-[9px] tracking-wider',
    lg: 'text-[11px] tracking-widest',
    xl: 'text-xs tracking-widest',
  };

  return (
    <div
      className={`inline-flex ${isVertical ? 'flex-col items-center text-center gap-2' : 'items-center gap-3'} select-none ${className}`}
      id="credita-bsb-logo"
    >
      {/* Precision Vector Emblem strictly matching Credita BSB geometric icon */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top-Left Quadrant: Medium Slate/Gray Solid Polygon */}
          <path
            d="M 0 29.3 L 29.3 0 L 47 0 L 47 28.5 L 28.5 47 L 0 47 Z"
            fill="#6B7280"
          />

          {/* Bottom-Left Quadrant: Dark Charcoal Solid Polygon */}
          <path
            d="M 0 53 L 28.5 53 L 47 71.5 L 47 100 L 29.3 100 L 0 70.7 Z"
            fill="#27272A"
          />

          {/* Top-Right Quadrant: Outer Red Angular Stripe */}
          <path
            d="M 53 0 L 70.7 0 L 100 29.3 L 100 47 L 86.5 47 L 86.5 35 L 65 13.5 L 53 13.5 Z"
            fill="#D91E2A"
          />

          {/* Top-Right Quadrant: Inner Red Angular Stripe */}
          <path
            d="M 53 22 L 61 22 L 78 39 L 78 47 L 66 47 L 66 44 L 53 31 Z"
            fill="#D91E2A"
          />

          {/* Bottom-Right Quadrant: Outer Red Angular Stripe */}
          <path
            d="M 100 53 L 100 70.7 L 70.7 100 L 53 100 L 53 86.5 L 65 86.5 L 86.5 65 L 86.5 53 Z"
            fill="#D91E2A"
          />

          {/* Bottom-Right Quadrant: Inner Red Angular Stripe */}
          <path
            d="M 78 53 L 78 61 L 61 78 L 53 78 L 53 66 L 66 66 L 66 53 Z"
            fill="#D91E2A"
          />
        </svg>
      </div>

      {/* Official Typography of Credita BSB */}
      <div className={`flex flex-col ${isVertical ? 'items-center' : 'items-start'} leading-none`}>
        {isVertical ? (
          <>
            <span className={`font-black text-[#D91E2A] ${titleSizes[size]} font-['Outfit'] tracking-tight`}>
              CREDITA
            </span>
            <span className={`font-black text-[#C41824] ${titleSizes[size]} font-['Outfit'] tracking-tight`}>
              BSB
            </span>
          </>
        ) : (
          <div className="flex items-baseline gap-1.5">
            <span className={`font-black text-[#D91E2A] ${titleSizes[size]} font-['Outfit'] tracking-tight`}>
              CREDITA
            </span>
            <span className={`font-black text-[#C41824] ${titleSizes[size]} font-['Outfit'] tracking-tight`}>
              BSB
            </span>
          </div>
        )}
        <span
          className={`font-extrabold uppercase ${subtitleSizes[size]} ${
            isDarkBg ? 'text-gray-300' : 'text-[#27272A]'
          } font-['Plus_Jakarta_Sans'] ${isVertical ? 'mt-1' : 'mt-0.5'}`}
        >
          SEU AGENTE DE CRÉDITO
        </span>
      </div>
    </div>
  );
};

