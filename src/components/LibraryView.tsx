import React, { useState } from 'react';
import { DayArchive } from '../types';
import { FullReportModal } from './FullReportModal';

interface LibraryViewProps {
  archives: DayArchive[];
  onSelectArchiveDay: (day: DayArchive) => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({ archives, onSelectArchiveDay }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);

  const week2 = archives.filter((a) => a.week === 'WEEK 02 (CURRENT)');
  const week1 = archives.filter((a) => a.week === 'WEEK 01');

  // Helper to render mini 4x4 Mondrian art
  const renderMiniMondrian = (colors: string[]) => {
    const c1 = colors[0] || 'bg-[#1a5abd]';
    const c2 = colors[1] || 'bg-white';
    const c3 = colors[2] || 'bg-[#ffe244]';

    return (
      <div className="w-full h-full min-h-[70px] border-[1.5px] border-[#1b1b1b] grid grid-cols-4 grid-rows-4 relative overflow-hidden bg-white">
        <div className={`col-span-2 row-span-3 border-[1px] border-[#1b1b1b] ${c1}`}></div>
        <div className={`col-span-2 row-span-1 border-[1px] border-[#1b1b1b] ${c2}`}></div>
        <div className={`col-span-1 row-span-2 border-[1px] border-[#1b1b1b] ${c3}`}></div>
        <div className="col-span-1 row-span-2 border-[1px] border-[#1b1b1b] bg-white"></div>
        <div className="col-span-2 row-span-1 border-[1px] border-[#1b1b1b] bg-white"></div>
      </div>
    );
  };

  return (
    <div className="pb-28 pt-16 px-4 max-w-3xl mx-auto space-y-8">
      {/* Title Section */}
      <section className="border-b-[3px] border-[#1b1b1b] pb-4">
        <h2 className="text-[28px] sm:text-[34px] font-black uppercase tracking-tight text-[#1b1b1b]">
          PAST 14 DAYS
        </h2>
        <p className="text-[15px] italic text-[#5d3f3c] mt-1">
          A curated archive of your structural existence.
        </p>
      </section>

      {/* Week 2 (Current) */}
      <section className="space-y-3">
        <div className="flex justify-between items-end">
          <h3 className="font-extrabold text-[13px] uppercase bg-[#1b1b1b] text-white px-3 py-1 tracking-wider">
            WEEK 02 (CURRENT)
          </h3>
          <span className="text-[12px] font-bold uppercase text-gray-500">
            OCT 22 - OCT 28
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-[3px] border-[#1b1b1b] bg-[#1b1b1b]">
          {week2.map((day) => (
            <div
              key={day.id}
              onClick={() => onSelectArchiveDay(day)}
              className="bg-white border-[1.5px] border-[#1b1b1b] p-3 aspect-square flex flex-col justify-between cursor-pointer hover:bg-[#f3f3f3] transition-colors group select-none relative"
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-extrabold text-[13px] uppercase text-[#1b1b1b]">
                  {day.dayName}
                </span>
                {day.isToday && (
                  <span className="w-3 h-3 bg-[#b8000e] border border-[#1b1b1b]" title="Today"></span>
                )}
              </div>

              {renderMiniMondrian(day.colors)}

              <div className="mt-1 flex justify-between items-center text-[10px] font-bold text-gray-500">
                <span>{day.date}</span>
                <span className="material-symbols-outlined text-[16px] text-[#1b1b1b] opacity-0 group-hover:opacity-100 transition-opacity">
                  edit_note
                </span>
              </div>
            </div>
          ))}

          {/* Future slot filler */}
          <div className="bg-[#eeeeee] border-[1.5px] border-[#1b1b1b] aspect-square flex items-center justify-center italic text-[12px] font-bold uppercase text-gray-500">
            FUTURE
          </div>
        </div>
      </section>

      {/* Week 1 */}
      <section className="space-y-3">
        <div className="flex justify-between items-end">
          <h3 className="font-extrabold text-[13px] uppercase bg-[#1b1b1b] text-white px-3 py-1 tracking-wider">
            WEEK 01
          </h3>
          <span className="text-[12px] font-bold uppercase text-gray-500">
            OCT 15 - OCT 21
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border-[3px] border-[#1b1b1b] bg-[#1b1b1b]">
          {week1.map((day) => (
            <div
              key={day.id}
              onClick={() => onSelectArchiveDay(day)}
              className="bg-white border-[1.5px] border-[#1b1b1b] p-3 aspect-square flex flex-col justify-between cursor-pointer hover:bg-[#f3f3f3] transition-colors group select-none"
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-extrabold text-[13px] uppercase text-[#1b1b1b]">
                  {day.dayName}
                </span>
              </div>

              {renderMiniMondrian(day.colors)}

              <div className="mt-1 flex justify-between items-center text-[10px] font-bold text-gray-500">
                <span>{day.date}</span>
                <span className="material-symbols-outlined text-[16px] text-[#1b1b1b] opacity-0 group-hover:opacity-100 transition-opacity">
                  edit_note
                </span>
              </div>
            </div>
          ))}

          {/* Archived slot filler */}
          <div className="bg-[#eeeeee] border-[1.5px] border-[#1b1b1b] aspect-square flex items-center justify-center italic text-[12px] font-bold uppercase text-gray-500 text-center px-2">
            ARCHIVED<br />OCT 14
          </div>
        </div>
      </section>

      {/* Featured Insight Card (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[3px] border-[#1b1b1b] bg-white shadow-[6px_6px_0px_0px_#1b1b1b]">
        {/* Blue Info Column */}
        <div className="md:col-span-2 p-5 bg-[#1a5abd] text-white flex flex-col justify-between min-h-[220px]">
          <div>
            <h4 className="font-black text-[22px] uppercase tracking-tight">
              COMPOSITION ANALYSIS
            </h4>
            <p className="text-[15px] font-medium mt-3 leading-relaxed opacity-95">
              Your last 14 days show a 42% increase in Primary Red activities. The structural balance of your routine is currently leaning towards intense focus and decisive action.
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setIsReportOpen(true)}
              className="bg-[#ffe244] text-[#1b1b1b] font-extrabold text-[13px] px-6 py-3 uppercase border-[3px] border-[#1b1b1b] hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_#1b1b1b] active:shadow-none"
            >
              VIEW FULL REPORT
            </button>
          </div>
        </div>

        {/* Matrix Graphic Column */}
        <div className="bg-white p-5 border-t-[3px] md:border-t-0 md:border-l-[3px] border-[#1b1b1b] flex flex-col items-center justify-center">
          <div className="w-32 h-32 border-[2px] border-[#1b1b1b] grid grid-cols-4 grid-rows-4">
            <div className="col-span-3 row-span-3 bg-[#b8000e] border-[1px] border-[#1b1b1b]"></div>
            <div className="col-span-1 row-span-1 bg-[#6d5e00] border-[1px] border-[#1b1b1b]"></div>
            <div className="col-span-1 row-span-3 bg-[#1a5abd] border-[1px] border-[#1b1b1b]"></div>
          </div>
          <span className="font-extrabold text-[12px] uppercase mt-4 tracking-wider text-[#1b1b1b]">
            LIFE-MATRIX V2.4
          </span>
        </div>
      </section>

      {/* Modal for full analysis */}
      <FullReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
    </div>
  );
};
