import React, { useEffect, useState } from 'react';

/**
 * FloatingScrollLogoPieces
 * Renders the 3 geometric pieces of Credita BSB's logo floating in the background.
 * As the user scrolls, the pieces smoothly interpolate their positions and converge
 * to assemble into the complete logo at specific milestones, then disperse and reconnect again.
 */
export const FloatingScrollLogoPieces: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const current = window.scrollY / totalScroll;
      setScrollProgress(Math.min(Math.max(current, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate convergence factor (0 = dispersed, 1 = perfectly joined into single logo)
  // Peaks occur at 0 (top), 0.35 (middle transition), 0.70 (testimonials/form), and 1.0 (footer)
  const calculateConvergence = (p: number) => {
    // Distance to nearest milestone
    const milestones = [0.0, 0.35, 0.70, 1.0];
    let minDistance = 1.0;
    milestones.forEach((m) => {
      const d = Math.abs(p - m);
      if (d < minDistance) minDistance = d;
    });

    // Convergence window is +/- 0.08 of scroll progress
    const windowSize = 0.08;
    if (minDistance < windowSize) {
      // Bell curve factor between 0 and 1
      const normalized = 1 - minDistance / windowSize;
      return Math.sin(normalized * (Math.PI / 2));
    }
    return 0;
  };

  const convergence = calculateConvergence(scrollProgress);
  const dispersion = 1 - convergence;

  // Rotation based on scroll
  const rotation = scrollProgress * 720; // 2 full spins over page

  // Dynamic offsets for each piece when dispersed vs joined
  // Piece 1: Top-Left Segment (Silver/Gray)
  const p1X = -50 * dispersion * Math.cos(scrollProgress * Math.PI * 4);
  const p1Y = -45 * dispersion * Math.sin(scrollProgress * Math.PI * 3);
  const p1Rot = (1 - convergence) * (scrollProgress * 360);

  // Piece 2: Bottom-Left Segment (Dark Charcoal/Graphite)
  const p2X = -45 * dispersion * Math.sin(scrollProgress * Math.PI * 3.5);
  const p2Y = 50 * dispersion * Math.cos(scrollProgress * Math.PI * 4.5);
  const p2Rot = (1 - convergence) * (-scrollProgress * 280);

  // Piece 3: Right Quadrant (Vibrant & Carbonized Red Stripes)
  const p3X = 55 * dispersion * Math.cos(scrollProgress * Math.PI * 3);
  const p3Y = 20 * dispersion * Math.sin(scrollProgress * Math.PI * 4);
  const p3Rot = (1 - convergence) * (scrollProgress * 420);

  // Floating background position down the page based on scroll progress
  // Stays fixed in the viewport with smooth drift
  const centerY = 30 + scrollProgress * 40; // between 30% and 70% viewport height

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Dynamic Glow behind the emblem */}
      <div
        style={{
          top: `${centerY}%`,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.18 + convergence * 0.25,
          filter: 'blur(70px)',
        }}
        className="absolute w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#D91E2A] via-[#8B0000] to-transparent pointer-events-none transition-opacity duration-300"
      />

      {/* Assembly Container with clear visibility and floating animation */}
      <div
        style={{
          top: `${centerY}%`,
          left: '50%',
          transform: `translate(-50%, -50%) scale(${0.9 + convergence * 0.35})`,
          transition: 'transform 0.15s ease-out',
        }}
        className="absolute w-52 h-52 sm:w-80 sm:h-80 select-none opacity-40 sm:opacity-55 pointer-events-none"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible drop-shadow-[0_15px_35px_rgba(217,30,42,0.4)]"
        >
          {/* Piece 1: Top-Left Segment (Silver / Gray) */}
          <g
            style={{
              transform: `translate(${p1X}px, ${p1Y}px) rotate(${p1Rot}deg)`,
              transformOrigin: '23.5px 23.5px',
              transition: 'transform 0.15s ease-out',
            }}
          >
            <path
              d="M 0 29.3 L 29.3 0 L 47 0 L 47 28.5 L 28.5 47 L 0 47 Z"
              fill={convergence > 0.7 ? '#D1D5DB' : '#9CA3AF'}
              className="drop-shadow-md"
            />
          </g>

          {/* Piece 2: Bottom-Left Segment (Dark Charcoal / Onyx) */}
          <g
            style={{
              transform: `translate(${p2X}px, ${p2Y}px) rotate(${p2Rot}deg)`,
              transformOrigin: '23.5px 76.5px',
              transition: 'transform 0.15s ease-out',
            }}
          >
            <path
              d="M 0 53 L 28.5 53 L 47 71.5 L 47 100 L 29.3 100 L 0 70.7 Z"
              fill={convergence > 0.7 ? '#1F2937' : '#374151'}
              className="drop-shadow-md"
            />
          </g>

          {/* Piece 3: Right Quadrant (Red Stripes) */}
          <g
            style={{
              transform: `translate(${p3X}px, ${p3Y}px) rotate(${p3Rot}deg)`,
              transformOrigin: '76.5px 50px',
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* Outer Red Top Stripe */}
            <path
              d="M 53 0 L 70.7 0 L 100 29.3 L 100 47 L 86.5 47 L 86.5 35 L 65 13.5 L 53 13.5 Z"
              fill="#D91E2A"
            />
            {/* Inner Red Top Stripe */}
            <path
              d="M 53 22 L 61 22 L 78 39 L 78 47 L 66 47 L 66 44 L 53 31 Z"
              fill="#FF4D5A"
            />
            {/* Outer Red Bottom Stripe */}
            <path
              d="M 100 53 L 100 70.7 L 70.7 100 L 53 100 L 53 86.5 L 65 86.5 L 86.5 65 L 86.5 53 Z"
              fill="#B91C1C"
            />
            {/* Inner Red Bottom Stripe */}
            <path
              d="M 78 53 L 78 61 L 61 78 L 53 78 L 53 66 L 66 66 L 66 53 Z"
              fill="#D91E2A"
            />
          </g>

          {/* Assembly Sparkle Burst when pieces connect */}
          {convergence > 0.75 && (
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#D91E2A"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-spin opacity-70"
              style={{ animationDuration: '10s' }}
            />
          )}
        </svg>

        {/* Milestone Convergence Tag indicator */}
        {convergence > 0.85 && (
          <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap animate-bounce">
            <span className="text-[11px] font-black tracking-widest uppercase bg-[#D91E2A] text-white px-3 py-1 rounded-full shadow-lg border border-white/30">
              Credita BSB
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
