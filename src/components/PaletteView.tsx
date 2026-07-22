import React, { useState } from 'react';
import { Archetype } from '../types';

interface PaletteViewProps {
  archetypes: Archetype[];
  onAddArchetype: (newArch: Archetype) => void;
  onDeleteArchetype?: (id: string) => void;
}

export const PaletteView: React.FC<PaletteViewProps> = ({
  archetypes,
  onAddArchetype,
  onDeleteArchetype
}) => {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('🎨');
  const [colorHex, setColorHex] = useState('#b8000e');
  const [tag, setTag] = useState('CUSTOM');

  const customArchetypes = archetypes.filter((a) => !a.isUtility);
  const utilityArchetypes = archetypes.filter((a) => a.isUtility);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newArch: Archetype = {
      id: `arch-${Date.now()}`,
      name: name.trim().toUpperCase(),
      emoji: emoji || '🏷️',
      colorHex,
      bgClass: `bg-[${colorHex}]`,
      tag: tag.toUpperCase() || 'CUSTOM'
    };

    onAddArchetype(newArch);
    setName('');
    setIsNewModalOpen(false);
  };

  return (
    <div className="pb-28 pt-16 px-4 max-w-xl mx-auto space-y-6">
      {/* Privacy Manifesto Section */}
      <section className="border-[3px] border-[#1b1b1b] bg-[#e2e2e2] p-4 shadow-[4px_4px_0px_0px_#1b1b1b]">
        <div className="flex justify-between items-start mb-3">
          <h2 className="font-extrabold text-[20px] uppercase text-[#1b1b1b]">
            PRIVACY MANIFESTO
          </h2>
          <span className="material-symbols-outlined text-[#b8000e] text-[26px]">
            security
          </span>
        </div>
        <p className="font-medium text-[15px] text-[#1b1b1b] mb-4 leading-relaxed">
          Mondrian Life is built on a{' '}
          <span className="font-extrabold underline decoration-[#b8000e] decoration-2">
            pure plastic
          </span>{' '}
          philosophy. Your movement is your data. All categorization happens locally on your device. We don't store your patterns on servers; we provide the grid, you fill the colors.
        </p>
        <div className="bg-[#ffe244] border-[3px] border-[#1b1b1b] p-2 text-center">
          <span className="font-extrabold text-[12px] uppercase text-[#211b00] tracking-wider">
            ZERO-KNOWLEDGE ARCHITECTURE
          </span>
        </div>
      </section>

      {/* Your Palette Header */}
      <div className="border-[3px] border-[#1b1b1b] bg-[#b8000e] p-4 text-white shadow-[4px_4px_0px_0px_#1b1b1b]">
        <h2 className="font-black text-[24px] uppercase leading-none">
          YOUR PALETTE
        </h2>
        <p className="font-extrabold text-[12px] uppercase tracking-wider opacity-90 mt-1">
          MANAGE ACTIVITY ARCHETYPES
        </p>
      </div>

      {/* Archetype Cards Grid */}
      <div className="grid grid-cols-2 gap-0 border-[1.5px] border-[#1b1b1b] bg-[#1b1b1b]">
        {customArchetypes.map((arch) => (
          <div
            key={arch.id}
            className="border-[1.5px] border-[#1b1b1b] bg-white p-4 flex flex-col justify-between h-40 hover:bg-[#f3f3f3] transition-colors group cursor-pointer relative"
          >
            <div className="flex justify-between items-start">
              <span className="text-[32px]">{arch.emoji}</span>
              {onDeleteArchetype && (
                <button
                  type="button"
                  onClick={() => onDeleteArchetype(arch.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-[#b8000e]"
                  title="Remove Archetype"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              )}
            </div>
            <div>
              <div
                className="h-4 w-full border-[2px] border-[#1b1b1b] mb-2"
                style={{ backgroundColor: arch.colorHex }}
              ></div>
              <h3 className="font-black text-[18px] uppercase text-[#1b1b1b]">
                {arch.name}
              </h3>
            </div>
          </div>
        ))}

        {/* New Archetype Button */}
        <div
          onClick={() => setIsNewModalOpen(true)}
          className="border-[1.5px] border-[#1b1b1b] bg-[#e2e2e2] p-4 flex flex-col items-center justify-center h-40 hover:bg-[#1b1b1b] hover:text-white transition-all group cursor-pointer select-none"
        >
          <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">
            add_box
          </span>
          <h3 className="font-extrabold text-[13px] uppercase">NEW ARCHETYPE</h3>
        </div>
      </div>

      {/* Utility Archetypes Section */}
      <section className="border-[3px] border-[#1b1b1b] bg-[#1b1b1b] p-4 text-white">
        <h3 className="font-extrabold text-[12px] uppercase tracking-widest text-gray-300 mb-3">
          UTILITY ARCHETYPES
        </h3>
        <div className="space-y-2.5">
          {utilityArchetypes.map((util) => (
            <div
              key={util.id}
              className="flex items-center justify-between border-b border-gray-700 pb-2"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 border border-white shrink-0"
                  style={{ backgroundColor: util.colorHex }}
                ></div>
                <span className="font-bold text-[14px] uppercase">{util.name}</span>
              </div>
              <span className="text-[11px] font-bold text-gray-400 tracking-wider">
                {util.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pro Tip Highlight */}
      <div className="flex gap-0 border-[3px] border-[#1b1b1b] shadow-[4px_4px_0px_0px_#1b1b1b]">
        <div className="w-4 bg-[#b8000e] shrink-0"></div>
        <div className="flex-1 bg-white p-4">
          <p className="font-extrabold text-[12px] uppercase text-[#1b1b1b]">
            PRO TIP:
          </p>
          <p className="font-medium text-[14px] text-[#1b1b1b] italic mt-0.5">
            "Colors define the structure. Red is for high energy, Blue for focus, Yellow for socialization."
          </p>
        </div>
      </div>

      {/* Modal to Create New Archetype */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#f9f9f9] border-[3px] border-[#1b1b1b] w-full max-w-md p-5 shadow-[8px_8px_0px_0px_#1b1b1b]">
            <div className="flex justify-between items-center border-b-[3px] border-[#1b1b1b] pb-3 mb-4">
              <h3 className="font-black text-[18px] uppercase">NEW ARCHETYPE</h3>
              <button
                type="button"
                onClick={() => setIsNewModalOpen(false)}
                className="font-bold text-[18px]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-[12px] font-extrabold uppercase mb-1">
                  Archetype Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. MEDITATION, READING"
                  required
                  className="w-full bg-white border-[2px] border-[#1b1b1b] p-2 text-[14px] font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-extrabold uppercase mb-1">
                    Emoji Icon
                  </label>
                  <input
                    type="text"
                    value={emoji}
                    onChange={(e) => setEmoji(e.target.value)}
                    placeholder="e.g. 🧘, 📚"
                    className="w-full bg-white border-[2px] border-[#1b1b1b] p-2 text-[18px] text-center"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-extrabold uppercase mb-1">
                    Primary Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={colorHex}
                      onChange={(e) => setColorHex(e.target.value)}
                      className="w-10 h-10 border-[2px] border-[#1b1b1b] cursor-pointer"
                    />
                    <span className="font-mono text-[12px] font-bold">{colorHex}</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-extrabold uppercase mb-1">
                  Tag / Label
                </label>
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="e.g. CREATIVE / REFLECTION"
                  className="w-full bg-white border-[2px] border-[#1b1b1b] p-2 text-[12px] font-bold"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t-[2px] border-[#1b1b1b]">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2 border-[2px] border-[#1b1b1b] font-bold text-[12px] uppercase"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#ffe244] border-[2px] border-[#1b1b1b] font-extrabold text-[12px] uppercase hover:bg-[#b8000e] hover:text-white transition-colors"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
