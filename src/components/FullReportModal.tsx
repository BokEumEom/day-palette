import React from 'react';

interface FullReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullReportModal: React.FC<FullReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-[#f9f9f9] border-[3px] border-[#1b1b1b] w-full max-w-xl max-h-[90vh] flex flex-col shadow-[8px_8px_0px_0px_#1b1b1b]">
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-3 bg-[#1a5abd] text-white border-b-[3px] border-[#1b1b1b]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px]">analytics</span>
            <h2 className="font-extrabold text-[18px] uppercase tracking-tight">
              COMPOSITION ANALYSIS
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white text-[#1b1b1b] border-[2px] border-[#1b1b1b] flex items-center justify-center font-black hover:bg-[#b8000e] hover:text-white transition-colors"
          >
            ✕
          </button>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Main Key Metric */}
          <div className="bg-white border-[3px] border-[#1b1b1b] p-4 shadow-[4px_4px_0px_0px_#1b1b1b]">
            <p className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">
              Primary Energy Shift
            </p>
            <h3 className="text-[28px] font-black uppercase text-[#b8000e] mt-1 leading-none">
              +42% PRIMARY RED FOCUS
            </h3>
            <p className="text-[14px] font-medium text-[#1b1b1b] mt-2 leading-relaxed">
              Your last 14 days demonstrate a marked structural tilt toward decisive execution and high-output creation. The pure plastic balance shows optimal momentum.
            </p>
          </div>

          {/* Color Breakdown Bars */}
          <div className="bg-white border-[3px] border-[#1b1b1b] p-4 space-y-3">
            <h4 className="font-extrabold text-[14px] uppercase text-[#1b1b1b] border-b-[2px] border-[#1b1b1b] pb-2">
              Color Archetype Breakdown (Last 14 Days)
            </h4>

            {/* Red Bar */}
            <div>
              <div className="flex justify-between text-[12px] font-extrabold uppercase mb-1">
                <span className="flex items-center gap-1.5 text-[#b8000e]">
                  <span className="w-3 h-3 bg-[#b8000e] border border-[#1b1b1b]"></span>
                  Primary Red (Work & High Intensity)
                </span>
                <span>42%</span>
              </div>
              <div className="w-full h-4 bg-gray-100 border-[2px] border-[#1b1b1b]">
                <div className="h-full bg-[#b8000e]" style={{ width: '42%' }}></div>
              </div>
            </div>

            {/* Blue Bar */}
            <div>
              <div className="flex justify-between text-[12px] font-extrabold uppercase mb-1">
                <span className="flex items-center gap-1.5 text-[#1a5abd]">
                  <span className="w-3 h-3 bg-[#1a5abd] border border-[#1b1b1b]"></span>
                  Primary Blue (Transit & Fitness)
                </span>
                <span>28%</span>
              </div>
              <div className="w-full h-4 bg-gray-100 border-[2px] border-[#1b1b1b]">
                <div className="h-full bg-[#1a5abd]" style={{ width: '28%' }}></div>
              </div>
            </div>

            {/* Yellow Bar */}
            <div>
              <div className="flex justify-between text-[12px] font-extrabold uppercase mb-1">
                <span className="flex items-center gap-1.5 text-[#6d5e00]">
                  <span className="w-3 h-3 bg-[#ffe244] border border-[#1b1b1b]"></span>
                  Primary Yellow (Rest & Reflection)
                </span>
                <span>20%</span>
              </div>
              <div className="w-full h-4 bg-gray-100 border-[2px] border-[#1b1b1b]">
                <div className="h-full bg-[#ffe244]" style={{ width: '20%' }}></div>
              </div>
            </div>

            {/* White Bar */}
            <div>
              <div className="flex justify-between text-[12px] font-extrabold uppercase mb-1">
                <span className="flex items-center gap-1.5 text-gray-700">
                  <span className="w-3 h-3 bg-white border border-[#1b1b1b]"></span>
                  Neutral Space (Buffer & Notes)
                </span>
                <span>10%</span>
              </div>
              <div className="w-full h-4 bg-gray-100 border-[2px] border-[#1b1b1b]">
                <div className="h-full bg-white border-r-[2px] border-[#1b1b1b]" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>

          {/* De Stijl Principle Box */}
          <div className="border-[3px] border-[#1b1b1b] bg-[#ffe244] p-4 text-[#211b00]">
            <h4 className="font-extrabold text-[13px] uppercase mb-1">
              De Stijl Structural Equilibrium
            </h4>
            <p className="text-[13px] font-medium leading-normal italic">
              "Equilibrium is reached not by visual symmetry, but through the active counter-weight of distinct color masses."
            </p>
            <p className="text-[12px] font-bold mt-2 uppercase">
              Tip: Increase Yellow rest sessions by 10% on Thursdays to avoid cognitive fatigue.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-white border-t-[3px] border-[#1b1b1b] text-right">
          <button
            onClick={onClose}
            className="bg-[#1b1b1b] text-white px-6 py-2 font-bold uppercase text-[12px] hover:bg-[#b8000e] transition-colors"
          >
            CLOSE REPORT
          </button>
        </div>
      </div>
    </div>
  );
};
