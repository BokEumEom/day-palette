import { useState, useEffect } from 'react';
import { TabType, ActivityBlock, DayArchive, Archetype } from './types';
import { INITIAL_BLOCKS, INITIAL_ARCHIVES, INITIAL_ARCHETYPES } from './data/initialData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { TodayView } from './components/TodayView';
import { LibraryView } from './components/LibraryView';
import { PaletteView } from './components/PaletteView';
import { EditBlockModal } from './components/EditBlockModal';
import { HeaderModals } from './components/HeaderModals';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('today');

  // Local state initialized with localStorage fallback to initial mock data
  const [blocks, setBlocks] = useState<ActivityBlock[]>(() => {
    try {
      const saved = localStorage.getItem('mondrian_life_blocks');
      return saved ? JSON.parse(saved) : INITIAL_BLOCKS;
    } catch {
      return INITIAL_BLOCKS;
    }
  });

  const [archives] = useState<DayArchive[]>(() => {
    try {
      const saved = localStorage.getItem('mondrian_life_archives');
      return saved ? JSON.parse(saved) : INITIAL_ARCHIVES;
    } catch {
      return INITIAL_ARCHIVES;
    }
  });

  const [archetypes, setArchetypes] = useState<Archetype[]>(() => {
    try {
      const saved = localStorage.getItem('mondrian_life_archetypes');
      return saved ? JSON.parse(saved) : INITIAL_ARCHETYPES;
    } catch {
      return INITIAL_ARCHETYPES;
    }
  });

  const [locationContext, setLocationContext] = useState<string>(() => {
    return localStorage.getItem('mondrian_life_location') || 'Bauhaus Archive, Berlin';
  });

  // Modal States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<ActivityBlock | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('mondrian_life_blocks', JSON.stringify(blocks));
  }, [blocks]);

  useEffect(() => {
    localStorage.setItem('mondrian_life_archetypes', JSON.stringify(archetypes));
  }, [archetypes]);

  useEffect(() => {
    localStorage.setItem('mondrian_life_location', locationContext);
  }, [locationContext]);

  // Handler: Save Block (Add or Update)
  const handleSaveBlock = (savedBlock: ActivityBlock) => {
    setBlocks((prev) => {
      const index = prev.findIndex((b) => b.id === savedBlock.id);
      if (index >= 0) {
        const next = [...prev];
        next[index] = savedBlock;
        return next;
      }
      return [...prev, savedBlock];
    });
  };

  // Handler: Delete Block
  const handleDeleteBlock = (blockId: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== blockId));
  };

  // Handler: Add Custom Archetype
  const handleAddArchetype = (newArch: Archetype) => {
    setArchetypes((prev) => [...prev, newArch]);
  };

  // Handler: Delete Custom Archetype
  const handleDeleteArchetype = (id: string) => {
    setArchetypes((prev) => prev.filter((a) => a.id !== id));
  };

  // Handler: Open Edit Block Modal
  const handleOpenEditBlock = (block: ActivityBlock | null) => {
    setSelectedBlock(block);
    setIsEditModalOpen(true);
  };

  // Handler: Select Archive Day
  const handleSelectArchiveDay = (day: DayArchive) => {
    // If user clicks an archive day from library, navigate to Today or open block editor!
    if (day.isToday) {
      setActiveTab('today');
    } else {
      // Find or create a preview block for that day
      const firstBlock = blocks[0] || null;
      setSelectedBlock(firstBlock);
      setIsEditModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1b1b1b] flex flex-col font-sans select-none">
      {/* Fixed Top Header */}
      <Header
        activeTab={activeTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenMenu={() => setIsProfileOpen(true)}
      />

      {/* Main Tab Content */}
      <main className="flex-1">
        {activeTab === 'today' && (
          <TodayView
            blocks={blocks}
            onOpenEditBlock={handleOpenEditBlock}
            locationContext={locationContext}
            setLocationContext={setLocationContext}
          />
        )}

        {activeTab === 'library' && (
          <LibraryView
            archives={archives}
            onSelectArchiveDay={handleSelectArchiveDay}
          />
        )}

        {activeTab === 'palette' && (
          <PaletteView
            archetypes={archetypes}
            onAddArchetype={handleAddArchetype}
            onDeleteArchetype={handleDeleteArchetype}
          />
        )}
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Edit Block / Edit Sheet Modal */}
      <EditBlockModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        blockToEdit={selectedBlock}
        onSave={handleSaveBlock}
        onDelete={handleDeleteBlock}
      />

      {/* Header Action Modals (Search, Profile/Settings) */}
      <HeaderModals
        isSearchOpen={isSearchOpen}
        onCloseSearch={() => setIsSearchOpen(false)}
        isProfileOpen={isProfileOpen}
        onCloseProfile={() => setIsProfileOpen(false)}
        blocks={blocks}
        archives={archives}
        onSelectBlock={(block) => {
          setSelectedBlock(block);
          setIsEditModalOpen(true);
        }}
      />
    </div>
  );
}
