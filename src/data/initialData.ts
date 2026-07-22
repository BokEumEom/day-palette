import { ActivityBlock, DayArchive, Archetype } from '../types';

export const INITIAL_BLOCKS: ActivityBlock[] = [
  {
    id: 'block-1',
    title: 'UI REFACTOR',
    timeWindow: '09:00 — 13:00',
    startTime: '09:00',
    endTime: '13:00',
    description: 'Deep work session: implementing the rigid grid system and primary color palette.',
    type: 'work',
    colSpan: 3,
    rowSpan: 2,
    icon: 'work',
    bgClass: 'bg-[#b8000e]',
    textClass: 'text-white',
    location: 'Bauhaus Archive, Berlin',
    memo: 'Focus on 3px borders and high contrast primary colors.'
  },
  {
    id: 'block-2',
    title: 'OPTIONS',
    timeWindow: '',
    startTime: '13:00',
    endTime: '13:00',
    description: 'Quick Options',
    type: 'other',
    colSpan: 1,
    rowSpan: 1,
    icon: 'more_horiz',
    bgClass: 'bg-white',
    textClass: 'text-[#1b1b1b]'
  },
  {
    id: 'block-3',
    title: 'COFFEE BREAK',
    timeWindow: '13:00',
    startTime: '13:00',
    endTime: '13:30',
    description: 'Midday reset coffee',
    type: 'rest',
    colSpan: 1,
    rowSpan: 1,
    icon: 'coffee',
    bgClass: 'bg-[#c4ab00]',
    textClass: 'text-[#4a3f00]'
  },
  {
    id: 'block-4',
    title: 'TO STUDIO',
    timeWindow: '14:30 — 15:15',
    startTime: '14:30',
    endTime: '15:15',
    description: 'Transit to central workspace',
    type: 'transit',
    colSpan: 2,
    rowSpan: 1,
    icon: 'directions_subway',
    bgClass: 'bg-[#1a5abd]',
    textClass: 'text-white',
    location: 'U-Bahn Line 2'
  },
  {
    id: 'block-5',
    title: 'LOG: WATER INTAKE',
    timeWindow: '15:15',
    startTime: '15:15',
    endTime: '15:30',
    description: 'Daily hydration tracking',
    metric: '2.5L',
    type: 'water',
    colSpan: 2,
    rowSpan: 1,
    icon: 'water_drop',
    bgClass: 'bg-white',
    textClass: 'text-[#1b1b1b]'
  },
  {
    id: 'block-6',
    title: 'RECHARGE',
    timeWindow: '15:30 — 16:45',
    startTime: '15:30',
    endTime: '16:45',
    description: "Reading 'The Non-Objective World' by Malevich.",
    type: 'read',
    colSpan: 2,
    rowSpan: 2,
    tags: ['MEDITATION', 'OFFLINE'],
    bgClass: 'bg-[#ffe244]',
    textClass: 'text-[#211b00]',
    location: 'Studio Quiet Room'
  },
  {
    id: 'block-7',
    title: 'CRITIQUE',
    timeWindow: '17:00',
    startTime: '17:00',
    endTime: '18:00',
    description: 'Design review with structural panel',
    type: 'work',
    colSpan: 2,
    rowSpan: 1,
    icon: 'event',
    bgClass: 'bg-[#e02020]',
    textClass: 'text-white',
    location: 'Review Gallery 3'
  },
  {
    id: 'block-8',
    title: 'FOCUS BOOST',
    timeWindow: '18:00 — 18:30',
    startTime: '18:00',
    endTime: '18:30',
    description: 'Energy realignment',
    type: 'sport',
    colSpan: 1,
    rowSpan: 1,
    icon: 'bolt',
    bgClass: 'bg-[#6699ff]',
    textClass: 'text-[#003071]'
  },
  {
    id: 'block-9',
    title: 'VISUAL INSPIRATION',
    timeWindow: '18:30 — 19:00',
    startTime: '18:30',
    endTime: '19:00',
    description: 'De Stijl architectural study',
    type: 'visual',
    colSpan: 1,
    rowSpan: 1,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF9Jk8Rb5TwHWxIBp87sOiAxMDzLnLd8c0fyLeFbvFrRVjt43fbGNaCr1XFo5Zs7FFAxbKQvVMUIkRBOfBNqMy4hFC7pp0vvCstr1fiWSALTiVziXcPC0u_XjKgBMGEZ4YuWm-DlKm4p5q9zRy8_5ota-l4jyTjycx2gjdzxUcHNiyb1oazTjeu5OUk6BwJGGIP12sDi1uyKRX3_ZDIXOzaahhSJN6AKC7HnI73chRZ69e96b5Pf_0QlOt-BLdjnDQ2o3GZr5edIh7',
    bgClass: 'bg-white',
    textClass: 'text-[#1b1b1b]'
  }
];

export const INITIAL_ARCHIVES: DayArchive[] = [
  { id: 'archive-mon', dayName: 'MON', date: 'OCT 22', week: 'WEEK 02 (CURRENT)', colors: ['bg-[#1a5abd]', 'bg-white', 'bg-[#6d5e00]'], summary: '4h Deep Work, 1.5h Transit', redPercent: 30, bluePercent: 45, yellowPercent: 15, whitePercent: 10 },
  { id: 'archive-tue', dayName: 'TUE', date: 'OCT 23', week: 'WEEK 02 (CURRENT)', colors: ['bg-[#6d5e00]', 'bg-white', 'bg-white'], summary: '3h Research, 2h Reading', redPercent: 20, bluePercent: 10, yellowPercent: 50, whitePercent: 20 },
  { id: 'archive-wed', dayName: 'WED', date: 'OCT 24', week: 'WEEK 02 (CURRENT)', colors: ['bg-[#1a5abd]', 'bg-white', 'bg-white'], summary: '5h Coding, 1h Commute', redPercent: 15, bluePercent: 55, yellowPercent: 10, whitePercent: 20 },
  { id: 'archive-thu', dayName: 'THU', date: 'OCT 25', week: 'WEEK 02 (CURRENT)', colors: ['bg-[#1a5abd]', 'bg-[#b8000e]', 'bg-white'], summary: '4h Refactor, Critique Session', redPercent: 40, bluePercent: 35, yellowPercent: 10, whitePercent: 15 },
  { id: 'archive-fri', dayName: 'FRI', date: 'OCT 26', week: 'WEEK 02 (CURRENT)', colors: ['bg-[#6d5e00]', 'bg-[#b8000e]', 'bg-white'], summary: 'Design Sprint & Gallery Visit', redPercent: 35, bluePercent: 15, yellowPercent: 35, whitePercent: 15 },
  { id: 'archive-sat', dayName: 'SAT', date: 'OCT 27', week: 'WEEK 02 (CURRENT)', colors: ['bg-[#6d5e00]', 'bg-[#1a5abd]', 'bg-white'], summary: 'Rest, Gym & Reading', redPercent: 10, bluePercent: 30, yellowPercent: 50, whitePercent: 10 },
  { id: 'archive-sun', dayName: 'SUN', date: 'OCT 28', week: 'WEEK 02 (CURRENT)', isToday: true, colors: ['bg-[#b8000e]', 'bg-[#6d5e00]', 'bg-white'], summary: 'Today: Bauhaus Refactor & Review', redPercent: 45, bluePercent: 25, yellowPercent: 30, whitePercent: 0 },
  
  // Week 1
  { id: 'archive-w1-mon', dayName: 'MON', date: 'OCT 15', week: 'WEEK 01', colors: ['bg-[#6d5e00]', 'bg-[#b8000e]', 'bg-white'], summary: 'Grid layout exploration', redPercent: 35, bluePercent: 20, yellowPercent: 30, whitePercent: 15 },
  { id: 'archive-w1-tue', dayName: 'TUE', date: 'OCT 16', week: 'WEEK 01', colors: ['bg-[#6d5e00]', 'bg-[#6d5e00]', 'bg-white'], summary: 'Color theory mapping', redPercent: 15, bluePercent: 25, yellowPercent: 50, whitePercent: 10 },
  { id: 'archive-w1-wed', dayName: 'WED', date: 'OCT 17', week: 'WEEK 01', colors: ['bg-white', 'bg-[#b8000e]', 'bg-white'], summary: 'Museum archive review', redPercent: 25, bluePercent: 15, yellowPercent: 20, whitePercent: 40 },
  { id: 'archive-w1-thu', dayName: 'THU', date: 'OCT 18', week: 'WEEK 01', colors: ['bg-[#b8000e]', 'bg-[#6d5e00]', 'bg-white'], summary: 'Malevich manuscript reading', redPercent: 50, bluePercent: 10, yellowPercent: 30, whitePercent: 10 },
  { id: 'archive-w1-fri', dayName: 'FRI', date: 'OCT 19', week: 'WEEK 01', colors: ['bg-[#b8000e]', 'bg-[#6d5e00]', 'bg-white'], summary: 'High-intensity focus sprint', redPercent: 45, bluePercent: 15, yellowPercent: 30, whitePercent: 10 },
  { id: 'archive-w1-sat', dayName: 'SAT', date: 'OCT 20', week: 'WEEK 01', colors: ['bg-[#1a5abd]', 'bg-white', 'bg-white'], summary: 'Berlin urban study walk', redPercent: 10, bluePercent: 60, yellowPercent: 15, whitePercent: 15 },
  { id: 'archive-w1-sun', dayName: 'SUN', date: 'OCT 21', week: 'WEEK 01', colors: ['bg-[#b8000e]', 'bg-white', 'bg-white'], summary: 'Weekly reflection & restructuring', redPercent: 40, bluePercent: 20, yellowPercent: 20, whitePercent: 20 }
];

export const INITIAL_ARCHETYPES: Archetype[] = [
  { id: 'arch-work', name: 'WORK', emoji: '💼', colorHex: '#b8000e', bgClass: 'bg-[#b8000e]', tag: 'HIGH ENERGY / FOCUS' },
  { id: 'arch-gym', name: 'GYM', emoji: '💪', colorHex: '#1a5abd', bgClass: 'bg-[#1a5abd]', tag: 'PHYSICAL / VITALITY' },
  { id: 'arch-cafe', name: 'CAFE', emoji: '☕', colorHex: '#6d5e00', bgClass: 'bg-[#6d5e00]', tag: 'SOCIAL / REFLECTION' },
  
  // Utility Archetypes
  { id: 'arch-home', name: 'HOME 🏠', emoji: '🏠', colorHex: '#e2e2e2', bgClass: 'bg-[#e2e2e2]', tag: 'DEFAULT', isUtility: true },
  { id: 'arch-commute', name: 'COMMUTE 🚆', emoji: '🚆', colorHex: '#e7bdb7', bgClass: 'bg-[#e7bdb7]', tag: 'AUTO-LOG', isUtility: true },
  { id: 'arch-unknown', name: 'UNKNOWN ❓', emoji: '❓', colorHex: '#ffdad6', bgClass: 'bg-[#ffdad6]', tag: 'REVIEW REQ.', isUtility: true }
];
