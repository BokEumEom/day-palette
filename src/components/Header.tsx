import React from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  onOpenSearch?: () => void;
  onOpenProfile?: () => void;
  onOpenMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onOpenSearch,
  onOpenProfile,
  onOpenMenu
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#f9f9f9] border-b-[3px] border-[#1b1b1b] flex justify-between items-center px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#1b1b1b] text-white flex items-center justify-center font-bold">
          <span className="material-symbols-outlined text-[20px]">grid_view</span>
        </div>
        <h1 className="font-extrabold text-[22px] sm:text-[26px] tracking-tight uppercase text-[#1b1b1b] leading-none">
          MONDRIAN LIFE
        </h1>
      </div>

      <div className="flex items-center gap-2">
        {activeTab === 'today' ? (
          <button
            onClick={onOpenProfile}
            className="w-10 h-10 border-[3px] border-[#1b1b1b] flex items-center justify-center hover:bg-[#b8000e] hover:text-white transition-colors duration-100 bg-white"
            title="Profile & Settings"
          >
            <span className="material-symbols-outlined text-[22px]">person</span>
          </button>
        ) : (
          <>
            <button
              onClick={onOpenSearch}
              className="w-10 h-10 border-[3px] border-[#1b1b1b] flex items-center justify-center hover:bg-[#1a5abd] hover:text-white transition-colors duration-100 bg-white"
              title="Search Archive"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <button
              onClick={onOpenMenu}
              className="w-10 h-10 border-[3px] border-[#1b1b1b] flex items-center justify-center hover:bg-[#ffe244] hover:text-[#1b1b1b] transition-colors duration-100 bg-white"
              title="More Options"
            >
              <span className="material-symbols-outlined text-[22px]">more_vert</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
};
