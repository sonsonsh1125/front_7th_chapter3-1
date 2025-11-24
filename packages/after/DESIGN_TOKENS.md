# 디자인 토큰 가이드

이 문서는 프로젝트에서 사용되는 디자인 토큰을 정리한 것입니다.

## 색상 (Colors)

### Primary
- `primary`: #1976d2 (기본 Primary 색상)
- `primary-dark`: #1565c0 (Primary 호버/다크 상태)

### Secondary
- `secondary`: #f5f5f5 (기본 Secondary 배경)
- `secondary-dark`: #e0e0e0 (Secondary 호버)
- `secondary-gray`: #757575 (Secondary 텍스트)
- `secondary-border`: #ddd (Secondary 테두리)

### Danger
- `danger`: #d32f2f (기본 Danger 색상)
- `danger-dark`: #c62828 (Danger 호버/다크 상태)

### Success
- `success`: #388e3c (기본 Success 색상)
- `success-dark`: #2e7d32 (Success 호버/다크 상태)

### Warning
- `warning`: #f57c00 (Warning 색상)

### Info
- `info`: #0288d1 (Info 색상)

### Neutral
- `neutral`: #333 (기본 텍스트)
- `neutral-light`: #666 (보조 텍스트)
- `neutral-dark`: #000 (강조 텍스트)
- `neutral-white`: #fff (흰색)
- `neutral-gray`: #fafafa (연한 회색 배경)
- `neutral-border`: #ccc (기본 테두리)
- `neutral-border-dark`: #bdbdbd (진한 테두리)
- `neutral-text`: #424242 (텍스트 색상)

### Gray Scale
- `gray`: #374151 (기본 회색)
- `gray-light`: #6b7280 (연한 회색)
- `gray-border`: #d1d5db (회색 테두리)

### Error
- `error`: #d32f2f (기본 에러 색상)
- `error-light`: #ef4444 (연한 에러 색상)

### Alert Colors
- `alert-info`: 배경 #e3f2fd, 테두리 #90caf9, 텍스트 #0d47a1
- `alert-success`: 배경 #e8f5e9, 테두리 #81c784, 텍스트 #1b5e20
- `alert-warning`: 배경 #fff3e0, 테두리 #ffb74d, 텍스트 #e65100
- `alert-error`: 배경 #ffebee, 테두리 #e57373, 텍스트 #b71c1c
- `alert-default`: 배경 #f5f5f5, 테두리 #bdbdbd, 텍스트 #424242

## 간격 (Spacing)

### 기본 간격
- `xs`: 4px
- `sm`: 6px
- `md`: 8px
- `lg`: 10px
- `xl`: 12px
- `2xl`: 16px
- `3xl`: 20px
- `4xl`: 24px

### 컴포넌트별 간격

#### Button
- `btn-sm-y`: 6px (세로 패딩)
- `btn-sm-x`: 12px (가로 패딩)
- `btn-md-y`: 10px
- `btn-md-x`: 20px
- `btn-lg-y`: 12px
- `btn-lg-x`: 24px

#### Input
- `input-y`: 8px (세로 패딩)
- `input-x`: 10px (가로 패딩)

#### Textarea
- `textarea-y`: 16.5px (세로 패딩)
- `textarea-x`: 14px (가로 패딩)
- `textarea-y-focus`: 15.5px (포커스 시 세로 패딩)
- `textarea-x-focus`: 13px (포커스 시 가로 패딩)

#### Card
- `card`: 20px
- `card-header`: 20px
- `card-body`: 20px

#### Modal
- `modal-header`: 16px 24px
- `modal-body`: 24px
- `modal-footer`: 16px 24px

#### Input Widths
- `input-small`: 200px
- `input-medium`: 300px
- `input-large`: 400px

## 타이포그래피 (Typography)

### Font Family
- `font-sans`: Arial, sans-serif
- `font-roboto`: Roboto, Helvetica, Arial, sans-serif

### Font Size
- `text-xs`: 0.625rem (10px)
- `text-sm`: 0.75rem (12px)
- `text-base`: 0.8125rem (13px)
- `text-md`: 0.875rem (14px)
- `text-lg`: 0.9375rem (15px)
- `text-xl`: 1rem (16px)
- `text-2xl`: 1.125rem (18px)
- `text-3xl`: 1.25rem (20px)
- `text-4xl`: 1.75rem (28px)

### 컴포넌트별 Font Size
- `text-label`: 13px (라벨)
- `text-helper`: 12px (도움말)
- `text-alert-title`: 15px (알림 제목)
- `text-alert-body`: 14px (알림 본문)
- `text-card-title`: 1.125rem (카드 제목)
- `text-card-subtitle`: 0.875rem (카드 부제목)
- `text-modal-title`: 1.25rem (모달 제목)
- `text-table-header`: 0.75rem (테이블 헤더)
- `text-table-cell`: 0.875rem (테이블 셀)

### Font Weight
- `font-normal`: 400
- `font-medium`: 500
- `font-bold`: 700

### Line Height
- `leading-none`: 1
- `leading-tight`: 1.4
- `leading-normal`: 1.5
- `leading-relaxed`: 1.43
- `leading-loose`: 1.6
- `leading-textarea`: 1.1876em

## Border Radius

- `rounded-xs`: 2px
- `rounded-sm`: 3px
- `rounded-md`: 4px
- `rounded-lg`: 10px
- `rounded-full`: 50%

## 그림자 (Shadows)

- `shadow-card-default`: 카드 기본 그림자
- `shadow-card-elevated`: 카드 고각 그림자
- `shadow-modal`: 모달 그림자

## Opacity

- `opacity-disabled`: 0.6 (비활성화 상태)
- `opacity-border`: 0.12 (기본 테두리)
- `opacity-border-light`: 0.08 (연한 테두리)
- `opacity-hover`: 0.04 (호버 배경)
- `opacity-icon`: 0.54 (아이콘)
- `opacity-text`: 0.87 (기본 텍스트)
- `opacity-text-secondary`: 0.6 (보조 텍스트)
- `opacity-input-border`: 0.23 (입력 필드 테두리)
- `opacity-overlay`: 0.5 (오버레이)

## Border Width

- `border-focus`: 2px (포커스 상태)

## Height

- `h-badge-small`: 16px
- `h-badge-medium`: 20px
- `h-badge-large`: 24px
- `h-checkbox`: 16px
- `h-modal-close`: 32px

## Max Width

- `max-w-modal-small`: 400px
- `max-w-modal-medium`: 600px
- `max-w-modal-large`: 900px

## Max Height

- `max-h-modal`: 90vh

## Min Height

- `min-h-textarea`: 6em

## Z-Index

- `z-modal`: 1000

## Transition

### Duration
- `duration-fast`: 150ms
- `duration-normal`: 200ms
- `duration-slow`: 1.4s

### Timing Function
- `ease-in-out`: cubic-bezier(0.0, 0, 0.2, 1)
- `ease-material`: cubic-bezier(0.4, 0, 0.2, 1)

## Letter Spacing

- `tracking-table`: 0.03em (테이블 헤더)

## 사용 예시

### Tailwind 클래스로 사용
```tsx
// 색상
<div className="bg-primary text-white">Primary 버튼</div>
<div className="bg-danger-dark hover:bg-danger">Danger 버튼</div>

// 간격
<div className="p-card m-2xl">카드</div>
<button className="px-btn-md-x py-btn-md-y">중간 버튼</button>

// 타이포그래피
<h1 className="text-card-title font-medium">카드 제목</h1>
<p className="text-helper text-neutral-light">도움말 텍스트</p>

// Border Radius
<div className="rounded-sm">작은 모서리</div>
<div className="rounded-lg">큰 모서리</div>

// 그림자
<div className="shadow-card-default">기본 카드</div>
<div className="shadow-modal">모달</div>
```

### CSS 변수로 사용 (추후 구현 가능)
```css
.custom-button {
  background-color: theme('colors.primary');
  padding: theme('spacing.btn-md-y') theme('spacing.btn-md-x');
  border-radius: theme('borderRadius.sm');
}
```

