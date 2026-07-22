import React, { useState } from 'react';
import { ActivityBlock, DayArchive } from '../types';

interface HeaderModalsProps {
  isSearchOpen: boolean;
  onCloseSearch: () => void;
  isProfileOpen: boolean;
  onCloseProfile: () => void;
  blocks: ActivityBlock[];
  archives: DayArchive[];
  onSelectBlock: (block: ActivityBlock) => void;
}

export const HeaderModals: React.FC<HeaderModalsProps> = ({
  isSearchOpen,
  onCloseSearch,
  isProfileOpen,
  onCloseProfile,
  blocks,
  archives,
  onSelectBlock
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlocks = searchQuery.trim()
    ? blocks.filter(
        (b) =>
          b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (b.location && b.location.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : blocks;

  return (
    <>
      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#f9f9f9] border-[3px] border-[#1b1b1b] w-full max-w-lg p-5 shadow-[8px_8px_0px_0px_#1b1b1b] max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center border-b-[3px] border-[#1b1b1b] pb-3 mb-4 shrink-0">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px] text-[#1a5abd]">search</span>
                <h3 className="font-black text-[18px] uppercase">SEARCH ARCHIVE</h3>
              </div>
              <button
                type="button"
                onClick={onCloseSearch}
                className="font-bold text-[18px] hover:text-[#b8000e]"
              >
                ✕
              </button>
            </div>

            <div className="mb-4 shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search activity, location, memo..."
                autoFocus
                className="w-full bg-white border-[3px] border-[#1b1b1b] p-3 font-bold text-[16px] focus:outline-none"
              />
            </div>

            <div className="overflow-y-auto space-y-2 flex-1 pr-1">
              {filteredBlocks.length === 0 ? (
                <p className="text-center italic text-gray-500 py-6">
                  No Mondrian blocks found matching "{searchQuery}"
                </p>
              ) : (
                filteredBlocks.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => {
                      onSelectBlock(b);
                      onCloseSearch();
                    }}
                    className="bg-white border-[2px] border-[#1b1b1b] p-3 flex justify-between items-center cursor-pointer hover:bg-[#ffe244] transition-colors"
                  >
                    <div>
                      <h4 className="font-extrabold text-[15px] uppercase">{b.title}</h4>
                      <p className="text-[12px] font-medium text-gray-600">
                        {b.timeWindow} • {b.location || 'Local Grid'}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-[20px] text-[#1b1b1b]">
                      arrow_forward
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Profile & Zero-Knowledge Settings Modal */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#f9f9f9] border-[3px] border-[#1b1b1b] w-full max-w-md p-5 shadow-[8px_8px_0px_0px_#1b1b1b]">
            <div className="flex justify-between items-center border-b-[3px] border-[#1b1b1b] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px] text-[#b8000e]">person</span>
                <h3 className="font-black text-[18px] uppercase">PROFILE & LOCAL VAULT</h3>
              </div>
              <button
                type="button"
                onClick={onCloseProfile}
                className="font-bold text-[18px]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-white border-[2px] border-[#1b1b1b] p-4 text-center">
                <div className="w-16 h-16 bg-[#ffe244] border-[3px] border-[#1b1b1b] rounded-full mx-auto flex items-center justify-center mb-2 font-black text-[22px]">
                  PL
                </div>
                <h4 className="font-extrabold text-[16px] uppercase">PURE PLASTIC USER</h4>
                <p className="text-[12px] font-bold text-[#b8000e] uppercase mt-0.5">
                  STATUS: ZERO-KNOWLEDGE ENCRYPTED
                </p>
              </div>

              <div className="border-[2px] border-[#1b1b1b] bg-[#e2e2e2] p-3 text-[12px] font-medium space-y-2">
                <div className="flex justify-between font-bold">
                  <span>Storage Mode:</span>
                  <span className="text-[#1a5abd]">Local Device (IndexedDB/Storage)</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Archived Blocks:</span>
                  <span>{blocks.length} Blocks</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Archive Weeks:</span>
                  <span>{archives.length} Days</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onCloseProfile}
                  className="w-full bg-[#1b1b1b] text-white py-2.5 font-bold uppercase text-[12px] hover:bg-[#b8000e] transition-colors"
                >
                  CLOSE PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
