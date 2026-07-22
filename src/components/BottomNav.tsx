import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-[#f9f9f9] border-t-[3px] border-[#1b1b1b] flex justify-around items-stretch overflow-hidden z-40">
      {/* Today Tab */}
      <button
        onClick={() => setActiveTab('today')}
        className={`flex-1 flex flex-col items-center justify-center transition-colors duration-100 ${
          activeTab === 'today'
            ? 'bg-[#b8000e] text-white font-bold'
            : 'text-[#1b1b1b] hover:bg-[#ffe244] font-semibold'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={{ fontVariationSettings: activeTab === 'today' ? "'FILL' 1" : "'FILL' 0" }}
        >
          calendar_today
        </span>
        <span className="text-[12px] uppercase tracking-wider mt-0.5">Today</span>
      </button>

      {/* Library Tab */}
      <button
        onClick={() => setActiveTab('library')}
        className={`flex-1 flex flex-col items-center justify-center transition-colors duration-100 ${
          activeTab === 'library'
            ? 'bg-[#b8000e] text-white font-bold'
            : 'text-[#1b1b1b] hover:bg-[#6699ff] font-semibold'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={{ fontVariationSettings: activeTab === 'library' ? "'FILL' 1" : "'FILL' 0" }}
        >
          collections_bookmark
        </span>
        <span className="text-[12px] uppercase tracking-wider mt-0.5">Library</span>
      </button>

      {/* Palette Tab */}
      <button
        onClick={() => setActiveTab('palette')}
        className={`flex-1 flex flex-col items-center justify-center transition-colors duration-100 ${
          activeTab === 'palette'
            ? 'bg-[#b8000e] text-white font-bold'
            : 'text-[#1b1b1b] hover:bg-[#ffe244] font-semibold'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={{ fontVariationSettings: activeTab === 'palette' ? "'FILL' 1" : "'FILL' 0" }}
        >
          palette
        </span>
        <span className="text-[12px] uppercase tracking-wider mt-0.5">Palette</span>
      </button>
    </nav>
  );
};
