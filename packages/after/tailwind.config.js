/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // shadcn/ui CSS 변수
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 기존 색상 토큰 (shadcn과 충돌 방지를 위해 brand 네임스페이스 사용)
        brand: {
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
          neutral: {
            DEFAULT: "#333",
            light: "#666",
            dark: "#000",
            white: "#fff",
            gray: "#fafafa",
            border: "#ccc",
            "border-dark": "#bdbdbd",
            text: "#424242",
          },
          gray: {
            DEFAULT: "#374151",
            light: "#6b7280",
            border: "#d1d5db",
          },
          error: {
            DEFAULT: "#d32f2f",
            light: "#ef4444",
          },
          alert: {
            info: {
              bg: "#e3f2fd",
              border: "#90caf9",
              text: "#0d47a1",
            },
            success: {
              bg: "#e8f5e9",
              border: "#81c784",
              text: "#1b5e20",
            },
            warning: {
              bg: "#fff3e0",
              border: "#ffb74d",
              text: "#e65100",
            },
            error: {
              bg: "#ffebee",
              border: "#e57373",
              text: "#b71c1c",
            },
            default: {
              bg: "#f5f5f5",
              border: "#bdbdbd",
              text: "#424242",
            },
          },
        },
      },
      // borderRadius는 아래에서 확장 정의
      // 간격 토큰
      spacing: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
        // Button padding
        "btn-sm-y": "6px",
        "btn-sm-x": "12px",
        "btn-md-y": "10px",
        "btn-md-x": "20px",
        "btn-lg-y": "12px",
        "btn-lg-x": "24px",
        // Input padding
        "input-y": "8px",
        "input-x": "10px",
        // Textarea padding
        "textarea-y": "16.5px",
        "textarea-x": "14px",
        "textarea-y-focus": "15.5px",
        "textarea-x-focus": "13px",
        // Card padding
        card: "20px",
        "card-header": "20px",
        "card-body": "20px",
        // Modal padding
        "modal-header": "16px 24px",
        "modal-body": "24px",
        "modal-footer": "16px 24px",
        // Input widths
        "input-small": "200px",
        "input-medium": "300px",
        "input-large": "400px",
      },
      // 타이포그래피 토큰
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: ["0.625rem", { lineHeight: "1" }], // 10px
        sm: ["0.75rem", { lineHeight: "1" }], // 12px
        base: ["0.8125rem", { lineHeight: "1" }], // 13px
        md: ["0.875rem", { lineHeight: "1.43" }], // 14px
        lg: ["0.9375rem", { lineHeight: "1.5" }], // 15px
        xl: ["1rem", { lineHeight: "1.1876em" }], // 16px
        "2xl": ["1.125rem", { lineHeight: "1.6" }], // 18px
        "3xl": ["1.25rem", { lineHeight: "1" }], // 20px
        "4xl": ["1.75rem", { lineHeight: "1" }], // 28px
        // Component specific
        label: ["13px", { lineHeight: "1", fontWeight: "bold" }],
        helper: ["12px", { lineHeight: "1" }],
        "alert-title": ["15px", { lineHeight: "1", fontWeight: "bold" }],
        "alert-body": ["14px", { lineHeight: "1.5" }],
        "card-title": ["1.125rem", { lineHeight: "1.6", fontWeight: "500" }],
        "card-subtitle": [
          "0.875rem",
          { lineHeight: "1.43", fontWeight: "400" },
        ],
        "modal-title": ["1.25rem", { lineHeight: "1", fontWeight: "500" }],
        "table-header": ["0.75rem", { lineHeight: "1", fontWeight: "500" }],
        "table-cell": ["0.875rem", { lineHeight: "1" }],
      },
      // fontWeight는 Tailwind 기본값과 동일하므로 제거 (normal: 400, medium: 500, bold: 700)
      lineHeight: {
        // none, normal은 Tailwind 기본값과 동일하므로 제거
        tight: "1.4", // Tailwind 기본: 1.25 (커스텀 값 유지)
        relaxed: "1.43", // Tailwind 기본: 1.625 (커스텀 값 유지)
        loose: "1.6", // Tailwind 기본: 2 (커스텀 값 유지)
        textarea: "1.1876em", // 커스텀 값
      },
      // Border Radius 토큰 (기존 커스텀)
      borderRadius: {
        // shadcn/ui 기본값 (위에 이미 정의됨)
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // 커스텀 값
        xs: "2px",
        "custom-sm": "3px",
        "custom-md": "4px",
        "custom-lg": "10px",
        // full은 Tailwind 기본값(9999px)과 다르지만 50%는 일반적으로 사용되므로 유지
        "full-circle": "50%", // full과 구분하기 위해 이름 변경
      },
      // 그림자 토큰
      boxShadow: {
        "card-default":
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        "card-elevated":
          "0px 2px 4px -1px rgba(0,0,0,0.12), 0px 1px 2px 0px rgba(0,0,0,0.08), 0px 1px 4px 0px rgba(0,0,0,0.08)",
        modal:
          "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",
      },
      // Opacity 토큰
      opacity: {
        // disabled, text-secondary는 Tailwind 기본값 60(0.6)과 동일하지만 의미적으로 구분하기 위해 유지
        disabled: "0.6", // Tailwind 기본: opacity-60과 동일
        border: "0.12", // 커스텀 값
        "border-light": "0.08", // 커스텀 값
        hover: "0.04", // 커스텀 값
        icon: "0.54", // 커스텀 값
        text: "0.87", // 커스텀 값
        "text-secondary": "0.6", // Tailwind 기본: opacity-60과 동일
        "input-border": "0.23", // 커스텀 값
        overlay: "0.5", // Tailwind 기본: opacity-50과 동일
      },
      // Border Width는 Tailwind 기본값 사용 (border-2 = 2px)
      // Width 토큰
      width: {
        "input-small": "200px",
        "input-medium": "300px",
        "input-large": "400px",
      },
      // Height 토큰
      height: {
        "badge-small": "16px",
        "badge-medium": "20px",
        "badge-large": "24px",
        checkbox: "16px",
        "modal-close": "32px",
      },
      // Max Width 토큰
      maxWidth: {
        "modal-small": "400px",
        "modal-medium": "600px",
        "modal-large": "900px",
      },
      // Max Height 토큰
      maxHeight: {
        modal: "90vh",
      },
      // Min Height 토큰
      minHeight: {
        textarea: "6em",
      },
      // Z-Index 토큰
      zIndex: {
        modal: "1000",
      },
      // Transition 토큰
      transitionDuration: {
        // fast, normal은 Tailwind 기본값과 동일하므로 제거 (duration-150, duration-200)
        slow: "1.4s", // 커스텀 값
      },
      transitionTimingFunction: {
        "ease-in-out": "cubic-bezier(0.0, 0, 0.2, 1)",
        "ease-material": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      // Letter Spacing 토큰
      letterSpacing: {
        table: "0.03em",
      },
    },
  },
  plugins: [],
};
