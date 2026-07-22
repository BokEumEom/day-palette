export type TabType = 'today' | 'library' | 'palette';

export type ActivityType = 
  | 'work'
  | 'sport'
  | 'dining'
  | 'read'
  | 'rest'
  | 'transit'
  | 'water'
  | 'visual'
  | 'other';

export interface ActivityBlock {
  id: string;
  timeWindow: string;
  startTime: string; // e.g. "09:00"
  endTime: string;   // e.g. "13:00"
  title: string;
  description: string;
  type: ActivityType;
  location?: string;
  memo?: string;
  colSpan: number; // 1 to 4
  rowSpan: number; // 1 to 3
  tags?: string[];
  icon?: string;
  metric?: string; // e.g. "2.5L"
  imageUrl?: string;
  bgClass: string;
  textClass: string;
}

export interface DayArchive {
  id: string;
  dayName: string; // e.g. "MON", "TUE"
  date: string;    // e.g. "OCT 22"
  week: string;    // e.g. "WEEK 02 (CURRENT)", "WEEK 01"
  isToday?: boolean;
  colors: string[]; // e.g. ['bg-[#b8000e]', 'bg-[#1a5abd]', 'bg-[#ffe244]']
  summary: string;
  redPercent: number;
  bluePercent: number;
  yellowPercent: number;
  whitePercent: number;
}

export interface Archetype {
  id: string;
  name: string;
  emoji: string;
  colorHex: string;
  bgClass: string;
  tag: string;
  isUtility?: boolean;
}
