import React, { useState, useEffect } from 'react';
import { ActivityBlock, ActivityType } from '../types';

interface EditBlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  blockToEdit: ActivityBlock | null;
  onSave: (block: ActivityBlock) => void;
  onDelete?: (blockId: string) => void;
}

const ACTIVITY_TYPES: { type: ActivityType; label: string; icon: string; bg: string; text: string }[] = [
  { type: 'work', label: 'WORK', icon: 'work', bg: 'bg-[#b8000e]', text: 'text-white' },
  { type: 'sport', label: 'SPORT', icon: 'fitness_center', bg: 'bg-[#6699ff]', text: 'text-[#003071]' },
  { type: 'dining', label: 'DINING', icon: 'restaurant', bg: 'bg-[#ffe244]', text: 'text-[#211b00]' },
  { type: 'read', label: 'READ', icon: 'menu_book', bg: 'bg-white', text: 'text-[#1b1b1b]' },
  { type: 'rest', label: 'REST', icon: 'airline_seat_recline_extra', bg: 'bg-[#c4ab00]', text: 'text-[#4a3f00]' },
  { type: 'transit', label: 'TRANSIT', icon: 'directions_subway', bg: 'bg-[#1a5abd]', text: 'text-white' },
  { type: 'water', label: 'WATER', icon: 'water_drop', bg: 'bg-white', text: 'text-[#1b1b1b]' },
  { type: 'other', label: 'OTHER', icon: 'grid_view', bg: 'bg-white', text: 'text-[#1b1b1b]' },
];

export const EditBlockModal: React.FC<EditBlockModalProps> = ({
  isOpen,
  onClose,
  blockToEdit,
  onSave,
  onDelete
}) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('12:30');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [memo, setMemo] = useState('');
  const [selectedType, setSelectedType] = useState<ActivityType>('work');
  const [colSpan, setColSpan] = useState<number>(3);
  const [rowSpan, setRowSpan] = useState<number>(2);

  useEffect(() => {
    if (blockToEdit) {
      setTitle(blockToEdit.title || 'NEW BLOCK');
      setStartTime(blockToEdit.startTime || '08:00');
      setEndTime(blockToEdit.endTime || '12:30');
      setDescription(blockToEdit.description || '');
      setLocation(blockToEdit.location || '');
      setMemo(blockToEdit.memo || '');
      setSelectedType(blockToEdit.type || 'work');
      setColSpan(blockToEdit.colSpan || 2);
      setRowSpan(blockToEdit.rowSpan || 1);
    } else {
      setTitle('NEW BLOCK');
      setStartTime('08:00');
      setEndTime('12:30');
      setDescription('Custom activity block session');
      setLocation('');
      setMemo('');
      setSelectedType('work');
      setColSpan(2);
      setRowSpan(1);
    }
  }, [blockToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    const config = ACTIVITY_TYPES.find((t) => t.type === selectedType) || ACTIVITY_TYPES[0];
    const timeWindowStr = startTime && endTime ? `${startTime} — ${endTime}` : startTime || '12:00';

    const updatedBlock: ActivityBlock = {
      id: blockToEdit ? blockToEdit.id : `block-${Date.now()}`,
      title: title.trim().toUpperCase() || 'ACTIVITY BLOCK',
      startTime,
      endTime,
      timeWindow: timeWindowStr,
      description,
      location,
      memo,
      type: selectedType,
      colSpan,
      rowSpan,
      icon: config.icon,
      bgClass: config.bg,
      textClass: config.text,
      metric: blockToEdit?.metric,
      tags: blockToEdit?.tags,
      imageUrl: blockToEdit?.imageUrl
    };

    onSave(updatedBlock);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#f9f9f9] border-[3px] border-[#1b1b1b] w-full max-w-lg max-h-[90vh] flex flex-col shadow-[8px_8px_0px_0px_#1b1b1b]">
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-3 bg-white border-b-[3px] border-[#1b1b1b] shrink-0">
          <button
            onClick={onClose}
            className="flex items-center text-[#1b1b1b] font-bold uppercase text-[14px] hover:text-[#b8000e] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] mr-1">close</span>
            CANCEL
          </button>
          <h2 className="font-black text-[20px] uppercase text-[#1b1b1b]">
            {blockToEdit ? 'EDIT BLOCK' : 'CREATE BLOCK'}
          </h2>
          <button
            onClick={handleSave}
            className="bg-[#ffe244] text-[#1b1b1b] border-[3px] border-[#1b1b1b] px-4 py-1.5 font-bold uppercase text-[14px] hover:bg-[#b8000e] hover:text-white transition-colors shadow-[2px_2px_0px_0px_#1b1b1b]"
          >
            SAVE
          </button>
        </header>

        {/* Form Body */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {/* Title input */}
          <div className="bg-white border-[3px] border-[#1b1b1b] p-3">
            <label className="block text-[12px] font-extrabold uppercase text-[#1b1b1b] mb-1">
              Block Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., UI REFACTOR"
              className="w-full bg-[#f3f3f3] border-[2px] border-[#1b1b1b] p-2 text-[16px] font-bold text-[#1b1b1b] focus:outline-none focus:bg-white"
            />
          </div>

          {/* Time Window Section */}
          <section className="border-[3px] border-[#1b1b1b] bg-white overflow-hidden">
            <div className="bg-[#1a5abd] text-white px-3 py-2 border-b-[3px] border-[#1b1b1b] flex justify-between items-center">
              <span className="text-[12px] font-bold uppercase tracking-widest">Time Window</span>
              <span className="text-[16px] font-extrabold">{startTime} — {endTime}</span>
            </div>

            <div className="p-3 bg-[#f3f3f3] space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#1b1b1b] mb-1">
                    Start Time
                  </label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full bg-white border-[2px] border-[#1b1b1b] p-2 text-[14px] font-bold text-[#1b1b1b]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#1b1b1b] mb-1">
                    End Time
                  </label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full bg-white border-[2px] border-[#1b1b1b] p-2 text-[14px] font-bold text-[#1b1b1b]"
                  />
                </div>
              </div>

              {/* Time Slider Visual Bar */}
              <div className="relative h-12 bg-white border-[2px] border-[#1b1b1b] flex items-center justify-between px-3 overflow-hidden">
                <div className="text-[10px] font-bold uppercase text-gray-500">00:00</div>
                <div className="flex-1 mx-3 h-4 bg-[#ffe244] border-[2px] border-[#1b1b1b] flex items-center justify-center relative">
                  <span className="text-[10px] font-black text-[#1b1b1b] uppercase tracking-wider">
                    {startTime} - {endTime}
                  </span>
                </div>
                <div className="text-[10px] font-bold uppercase text-gray-500">24:00</div>
              </div>

              <div className="p-2 bg-[#f9f9f9] border-[1.5px] border-[#1b1b1b] text-center">
                <span className="bg-[#1b1b1b] text-white px-2 py-0.5 text-[10px] font-bold uppercase mr-2">
                  EASY TO FIX
                </span>
                <span className="text-[12px] italic text-[#5d3f3c]">
                  Drag or adjust times to resize block duration.
                </span>
              </div>
            </div>
          </section>

          {/* Location & Memo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border-[3px] border-[#1b1b1b] p-3">
              <label className="block text-[12px] font-extrabold uppercase text-[#1b1b1b] mb-1">
                Location / Place
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Central Archive"
                  className="w-full bg-[#f3f3f3] border-[2px] border-[#1b1b1b] p-2 pr-8 text-[14px] font-medium focus:bg-white"
                />
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[#1a5abd] text-[20px]">
                  location_on
                </span>
              </div>
            </div>

            <div className="bg-white border-[3px] border-[#1b1b1b] p-3">
              <label className="block text-[12px] font-extrabold uppercase text-[#1b1b1b] mb-1">
                Memo / Notes
              </label>
              <textarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="Add essential details..."
                rows={1}
                className="w-full bg-[#f3f3f3] border-[2px] border-[#1b1b1b] p-2 text-[14px] font-medium focus:bg-white resize-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="bg-white border-[3px] border-[#1b1b1b] p-3">
            <label className="block text-[12px] font-extrabold uppercase text-[#1b1b1b] mb-1">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Deep work session: implementing the rigid grid system"
              className="w-full bg-[#f3f3f3] border-[2px] border-[#1b1b1b] p-2 text-[14px] font-medium focus:bg-white"
            />
          </div>

          {/* Grid Layout Dimensions */}
          <div className="bg-white border-[3px] border-[#1b1b1b] p-3">
            <label className="block text-[12px] font-extrabold uppercase text-[#1b1b1b] mb-2">
              Grid Cell Dimensions (Mondrian Ratio)
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-[11px] font-bold text-gray-600 block mb-1">Width (Columns: 1-4)</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((cols) => (
                    <button
                      key={cols}
                      type="button"
                      onClick={() => setColSpan(cols)}
                      className={`flex-1 py-1 text-[12px] font-extrabold border-[2px] border-[#1b1b1b] ${
                        colSpan === cols ? 'bg-[#b8000e] text-white' : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      {cols}x
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold text-gray-600 block mb-1">Height (Rows: 1-3)</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((rows) => (
                    <button
                      key={rows}
                      type="button"
                      onClick={() => setRowSpan(rows)}
                      className={`flex-1 py-1 text-[12px] font-extrabold border-[2px] border-[#1b1b1b] ${
                        rowSpan === rows ? 'bg-[#1a5abd] text-white' : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      {rows}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Activity Type Picker */}
          <section className="space-y-2">
            <h3 className="font-extrabold text-[12px] uppercase text-[#1b1b1b]">
              Select Activity Type
            </h3>
            <div className="grid grid-cols-4 gap-0 border-t-[3px] border-l-[3px] border-[#1b1b1b] bg-white">
              {ACTIVITY_TYPES.map((act) => {
                const isSelected = selectedType === act.type;
                return (
                  <button
                    key={act.type}
                    type="button"
                    onClick={() => setSelectedType(act.type)}
                    className={`aspect-square border-b-[3px] border-r-[3px] border-[#1b1b1b] flex flex-col items-center justify-center transition-all ${
                      act.bg
                    } ${act.text} ${
                      isSelected ? 'ring-4 ring-inset ring-[#1b1b1b] scale-[0.98]' : 'hover:opacity-90'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[28px]">{act.icon}</span>
                    <span className="text-[11px] font-bold uppercase mt-1">{act.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Delete Option */}
          {blockToEdit && onDelete && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  if (confirm('Delete this Mondrian block from today’s grid?')) {
                    onDelete(blockToEdit.id);
                    onClose();
                  }
                }}
                className="w-full py-2 bg-[#ffdad6] text-[#ba1a1a] border-[3px] border-[#1b1b1b] font-bold uppercase text-[12px] hover:bg-[#ba1a1a] hover:text-white transition-colors"
              >
                Delete Block
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
