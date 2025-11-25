/**
 * 디자인 토큰
 *
 * Tailwind config에 정의된 디자인 토큰을 TypeScript에서도 사용할 수 있도록
 * 타입과 상수로 export합니다.
 *
 * 이 토큰들은 input.css의 @theme 블록과 :root CSS 변수에 연결되어 있습니다.
 * CVA 컴포넌트들은 Tailwind 유틸리티 클래스(bg-primary, text-primary 등)를 통해
 * 이 토큰 값들을 사용합니다.
 *
 * 연결 관계:
 * - colors.primary.DEFAULT (#1976d2) -> --primary: 217.2 91.2% 59.8% -> bg-primary
 * - colors.danger.DEFAULT (#d32f2f) -> --destructive: 0 84.2% 60.2% -> bg-destructive
 * - colors.secondary.DEFAULT (#f5f5f5) -> --secondary: 210 40% 96.1% -> bg-secondary
 */

// 색상 토큰
export const colors = {
  primary: {
    DEFAULT: "#1976d2",
    dark: "#1565c0",
  },
  secondary: {
    DEFAULT: "#f5f5f5",
    dark: "#e0e0e0",
    gray: "#757575",
    border: "#ddd",
  },
  danger: {
    DEFAULT: "#d32f2f",
    dark: "#c62828",
  },
  success: {
    DEFAULT: "#388e3c",
    dark: "#2e7d32",
  },
  warning: {
    DEFAULT: "#f57c00",
  },
  info: {
    DEFAULT: "#0288d1",
  },
} as const;

// 간격 토큰
export const spacing = {
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "10px",
  xl: "12px",
  "2xl": "16px",
  "3xl": "20px",
  "4xl": "24px",
} as const;

// 타이포그래피 토큰
export const typography = {
  fontFamily: {
    sans: ["Arial", "sans-serif"],
    roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  },
  fontSize: {
    xs: "0.625rem", // 10px
    sm: "0.75rem", // 12px
    base: "0.8125rem", // 13px
    md: "0.875rem", // 14px
    lg: "0.9375rem", // 15px
    xl: "1rem", // 16px
    "2xl": "1.125rem", // 18px
    "3xl": "1.25rem", // 20px
    "4xl": "1.75rem", // 28px
  },
} as const;

// Border Radius 토큰
export const borderRadius = {
  xs: "2px",
  sm: "3px",
  md: "4px",
  lg: "10px",
  full: "50%",
} as const;

