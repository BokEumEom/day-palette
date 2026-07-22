import React, { useState } from 'react';
import { ActivityBlock } from '../types';

interface TodayViewProps {
  blocks: ActivityBlock[];
  onOpenEditBlock: (block: ActivityBlock | null) => void;
  locationContext: string;
  setLocationContext: (loc: string) => void;
}

export const TodayView: React.FC<TodayViewProps> = ({
  blocks,
  onOpenEditBlock,
  locationContext,
  setLocationContext
}) => {
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [tempLocation, setTempLocation] = useState(locationContext);
  const [confirmed, setConfirmed] = useState(false);

  // Calculate percentage breakdown for Daily Balance
  const totalWeight = blocks.reduce((acc, b) => acc + (b.colSpan * b.rowSpan), 0) || 1;
  const workWeight = blocks.filter(b => b.type === 'work').reduce((acc, b) => acc + (b.colSpan * b.rowSpan), 0);
  const restWeight = blocks.filter(b => b.type === 'rest' || b.type === 'dining' || b.type === 'read').reduce((acc, b) => acc + (b.colSpan * b.rowSpan), 0);
  const transitWeight = blocks.filter(b => b.type === 'transit' || b.type === 'sport' || b.type === 'water').reduce((acc, b) => acc + (b.colSpan * b.rowSpan), 0);

  const workPct = Math.round((workWeight / totalWeight) * 100);
  const restPct = Math.round((restWeight / totalWeight) * 100);
  const transitPct = Math.max(0, 100 - workPct - restPct);

  const handleConfirmLocation = () => {
    if (isEditingLocation) {
      setLocationContext(tempLocation || 'Bauhaus Archive, Berlin');
      setIsEditingLocation(false);
    }
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 2000);
  };

  return (
    <div className="pb-28 pt-16 px-4 max-w-2xl mx-auto space-y-6">
      {/* Location Suggestion Bar */}
      <section className="border-[3px] border-[#1b1b1b] bg-white p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-[4px_4px_0px_0px_#1b1b1b]">
        <div className="flex items-center gap-3 flex-1 w-full">
          <div className="w-12 h-12 bg-[#1a5abd] border-[3px] border-[#1b1b1b] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-[24px]">location_on</span>
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-extrabold uppercase text-[#1b1b1b] opacity-70 tracking-wider">
              CURRENT CONTEXT
            </p>
            {isEditingLocation ? (
              <input
                type="text"
                value={tempLocation}
                onChange={(e) => setTempLocation(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleConfirmLocation()}
                className="font-bold text-[18px] text-[#1b1b1b] bg-[#f3f3f3] border-[2px] border-[#1b1b1b] px-2 py-0.5 w-full focus:bg-white focus:outline-none"
                autoFocus
              />
            ) : (
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsEditingLocation(true)}>
                <h2 className="font-extrabold text-[18px] text-[#1b1b1b] leading-tight group-hover:underline">
                  {locationContext}
                </h2>
                <span className="material-symbols-outlined text-[16px] text-gray-400 group-hover:text-[#1b1b1b]">
                  edit
                </span>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleConfirmLocation}
          className={`w-full sm:w-auto px-6 py-2.5 font-bold text-[14px] uppercase border-[3px] border-[#1b1b1b] transition-all active:translate-y-1 ${
            confirmed
              ? 'bg-[#b8000e] text-white'
              : 'bg-[#ffe244] text-[#1b1b1b] hover:bg-[#1b1b1b] hover:text-white'
          }`}
        >
          {confirmed ? 'CONFIRMED!' : 'CONFIRM'}
        </button>
      </section>

      {/* Mondrian Day Grid */}
      <div className="mondrian-grid bg-white relative">
        {blocks.map((block) => {
          // Calculate column span class
          let colClass = 'col-span-1';
          if (block.colSpan === 2) colClass = 'col-span-2';
          if (block.colSpan === 3) colClass = 'col-span-3';
          if (block.colSpan === 4) colClass = 'col-span-4';

          let rowClass = 'row-span-1';
          if (block.rowSpan === 2) rowClass = 'row-span-2';
          if (block.rowSpan === 3) rowClass = 'row-span-3';

          return (
            <div
              key={block.id}
              onClick={() => onOpenEditBlock(block)}
              className={`mondrian-cell ${colClass} ${rowClass} ${block.bgClass} ${block.textClass} p-3 flex flex-col justify-between cursor-pointer group hover:brightness-95 select-none min-h-[110px]`}
            >
              {/* Special rendering for visual/image block */}
              {block.type === 'visual' && block.imageUrl ? (
                <div className="w-full h-full min-h-[100px] overflow-hidden relative">
                  <img
                    src={block.imageUrl}
                    alt={block.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute top-1 right-1 bg-[#1b1b1b] text-white p-1 text-[10px]">
                    <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Top Header line in cell */}
                  <div className="flex justify-between items-start gap-1">
                    {block.timeWindow ? (
                      <p className="font-extrabold text-[12px] uppercase tracking-wider">
                        {block.timeWindow}
                      </p>
                    ) : (
                      <span className="text-[12px]"></span>
                    )}

                    {block.icon && (
                      <span className="material-symbols-outlined text-[24px]">
                        {block.icon}
                      </span>
                    )}
                  </div>

                  {/* Main cell content */}
                  <div className="mt-2">
                    <h3 className="font-extrabold text-[20px] uppercase leading-tight tracking-tight">
                      {block.title}
                    </h3>

                    {block.metric && (
                      <p className="font-black text-[22px] text-[#b8000e] mt-1">
                        {block.metric}
                      </p>
                    )}

                    {block.description && block.colSpan >= 2 && (
                      <p className="text-[13px] font-normal opacity-90 mt-1 leading-snug line-clamp-2">
                        {block.description}
                      </p>
                    )}

                    {block.tags && block.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {block.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-[#1b1b1b] text-white text-[10px] font-bold uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Edit hover hint */}
              <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1b1b1b] text-white p-0.5 text-[10px]">
                <span className="material-symbols-outlined text-[14px]">edit</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Daily Balance Progress Section */}
      <section className="mt-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-extrabold text-[20px] uppercase tracking-tight text-[#1b1b1b]">
            DAILY BALANCE
          </h2>
          <span className="text-[11px] font-bold uppercase text-gray-500">
            TOTAL 100%
          </span>
        </div>

        <div className="w-full h-8 border-[3px] border-[#1b1b1b] flex overflow-hidden bg-white">
          <div
            className="h-full bg-[#b8000e] transition-all duration-500 flex items-center justify-center text-white text-[10px] font-bold"
            style={{ width: `${workPct}%` }}
            title={`WORK ${workPct}%`}
          >
            {workPct > 12 && `${workPct}%`}
          </div>
          <div
            className="h-full bg-[#ffe244] transition-all duration-500 flex items-center justify-center text-[#1b1b1b] text-[10px] font-bold"
            style={{ width: `${restPct}%` }}
            title={`REST ${restPct}%`}
          >
            {restPct > 12 && `${restPct}%`}
          </div>
          <div
            className="h-full bg-[#1a5abd] transition-all duration-500 flex items-center justify-center text-white text-[10px] font-bold"
            style={{ width: `${transitPct}%` }}
            title={`TRANSIT ${transitPct}%`}
          >
            {transitPct > 12 && `${transitPct}%`}
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center mt-3 text-[12px] font-bold uppercase text-[#1b1b1b]">
          <span className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 bg-[#b8000e] border-[1px] border-[#1b1b1b]"></span>
            WORK {workPct}%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 bg-[#ffe244] border-[1px] border-[#1b1b1b]"></span>
            REST {restPct}%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 bg-[#1a5abd] border-[1px] border-[#1b1b1b]"></span>
            TRANSIT {transitPct}%
          </span>
        </div>
      </section>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => onOpenEditBlock(null)}
        className="fixed bottom-20 right-5 sm:right-8 w-16 h-16 bg-[#ffe244] border-[3px] border-[#1b1b1b] fab-shadow flex items-center justify-center z-40 active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#b8000e] hover:text-white transition-all group"
        title="Add New Activity Block"
      >
        <span className="material-symbols-outlined text-[36px] font-bold group-hover:scale-110 transition-transform">
          add
        </span>
      </button>
    </div>
  );
};
