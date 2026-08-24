import React, { useState, useEffect } from 'react';
import { RECENT_SIMULATIONS } from '../data';

export const LiveSimulationAlert: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let showTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    const runCycle = () => {
      // Show every 6 seconds
      showTimeout = setTimeout(() => {
        setIsVisible(true);

        // Disappears after exactly 3 seconds (3000ms) as requested
        hideTimeout = setTimeout(() => {
          setIsVisible(false);
          setCurrentIndex((prev) => (prev + 1) % RECENT_SIMULATIONS.length);
          runCycle();
        }, 3000);
      }, 5000);
    };

    // First alert appears after 1.5s and stays visible for 3 seconds
    showTimeout = setTimeout(() => {
      setIsVisible(true);
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
        setCurrentIndex((prev) => (prev + 1) % RECENT_SIMULATIONS.length);
        runCycle();
      }, 3000);
    }, 1500);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  const current = RECENT_SIMULATIONS[currentIndex];

  return (
    <div
      className="w-full bg-[#111215] text-white text-[11px] sm:text-xs h-7 sm:h-8 flex items-center justify-center border-b border-gray-800/80 overflow-hidden select-none transition-all duration-300"
      id="top-simulation-bar"
    >
      <div
        className={`flex items-center gap-2 px-4 transition-all duration-300 transform ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
        <span className="text-gray-300 font-medium truncate">
          <strong className="text-white font-bold">{current.name}</strong> ({current.city}) simulou{' '}
          <strong className="text-[#FF4D5A] font-bold">{current.amount}</strong> no {current.type}
        </span>
        <span className="text-gray-400 text-[10px] pl-1.5 border-l border-gray-700 hidden sm:inline flex-shrink-0">
          {current.time}
        </span>
      </div>
    </div>
  );
};
