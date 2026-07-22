# MONDRIAN LIFE (몬드리안 라이프)

> **De Stijl & 신조형주의(Neo-Plasticism) 감성을 담은 삶의 구조화 & 리듬 기록 앱**

**MONDRIAN LIFE**는 피에트 몬드리안(Piet Mondrian)의 신조형주의 미학 및 바우하우스 격자 시스템을 기반으로 한 스케줄러 및 라이프 스타일 아카이빙 웹 애플리케이션입니다. 3px의 과감한 검은 선, 원색(빨강, 파랑, 노랑) 및 무채색 그리드를 통해 사용자의 일상을 예술적인 캔버스 형태로 시각화합니다.

---

## 🎨 주요 기능 (Key Features)

1. **TODAY (오늘의 리듬 그리드)**
   - **Mondrian Day Grid**: 일상을 비율과 신조형주의 그리드로 시각화.
   - **Current Context (위치 및 상태)**: 현재 위치(예: Bauhaus Archive, Berlin) 및 상황 확인 및 실시간 수정.
   - **Daily Balance Bar**: 빨강(Work), 노랑(Rest), 파랑(Transit/Sport) 비율을 자동으로 계산하여 일상의 균형 그래프 제공.
   - **Quick Edit & Add**: 탭 한 번으로 그리드 블록 수정 및 Floating Action Button(+)을 이용한 새 일상 블록 생성.

2. **LIBRARY (14일 아카이브 & 분석)**
   - **Past 14 Days**: 지난 14일간의 일상을 미니 몬드리안 격자 아트 카드 형태로 수집.
   - **Composition Analysis**: 지난 14일간의 색상 점유율 및 활동 성향 리포트 모달 제공.
   - **Life-Matrix**: 데 스틸 미학에 맞춘 일상 구조 매트릭스 뷰.

3. **PALETTE (활동 아키타입 & 개인정보 선언)**
   - **Privacy Manifesto**: "Zero-Knowledge Architecture" 지향. 모든 일상 데이터는 서버로 전송되지 않고 사용자의 브라우저 로컬 저장소(LocalStorage)에 안전하게 저장.
   - **Activity Archetypes**: WORK(💼), GYM(💪), CAFE(☕) 등 커스텀 색상 및 이모지 기반 신규 일상 카테고리 추가 및 삭제.
   - **Utility Archetypes**: HOME, COMMUTE, UNKNOWN 등 기본 유틸리티 영역 제공.

4. **EDIT BLOCK (시간창 & 그리드 편집 모달)**
   - **Time Window Slider**: 시작/종료 시간을 드래그 및 시간 설정으로 간편하게 조절.
   - **Grid Cell Dimensions**: 몬드리안 격자의 너비(1x~4x) 및 높이(1x~3x) 비율 자유 변경.
   - **Location & Memo**: 개별 블록에 대한 위치 및 간단한 노트 기록.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4, Hanken Grotesk 폰트, Material Symbols Outlined
- **Build Tool**: Vite, ESBuild
- **State & Storage**: React Hooks, Browser LocalStorage API (Zero-Knowledge Local Persistence)

---

## 🚀 시작하기 (Getting Started)

### 개발 서버 실행 (Development)
```bash
npm run dev
```
개발 서버가 포트 `3000`에서 실행됩니다.

### 빌드 (Production Build)
```bash
npm run build
```

---

## 📐 디자인 철학 (Design System)

- **Grid & Border**: 3px 두께의 명확한 검은색(#1b1b1b) 테두리와 0px 갭 기반 픽셀 서피스.
- **Color Palette**: 
  - Primary Red (`#b8000e` / `#e02020`): 고집중, 작업, 결단력
  - Primary Blue (`#1a5abd` / `#6699ff`): 이동, 신체 활동, 집중
  - Primary Yellow (`#ffe244` / `#c4ab00`): 휴식, 카페, 영감
  - Canvas Neutrals (`#f9f9f9`, `#ffffff`, `#1b1b1b`): 배경 및 공백
- **Typography**: Hanken Grotesk 기반 대문자 중심의 굵은 고딕 가독성 레이아웃.
