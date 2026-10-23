// SGTUFF brand tokens v2 for Tailwind CSS (locked 23 Oct 2026). Source of truth: BRAND.md
// The v1 "Institutional" preset is kept at legacy-v1/tailwind.preset.v1.js for reference only.

module.exports = {
  theme: {
    extend: {
      colors: {
        tuff: {
          red: '#E8352A',
          'red-ink': '#C1271D',
          ink: '#14161A',
          paper: '#FAF7F2',
          marker: '#FFD43B',
          pandan: '#0E7C56',
          stone: '#6B665E',
        },
        // Semantic aliases for shadcn/ui-style tokens
        background: '#FAF7F2',
        foreground: '#14161A',
        primary: { DEFAULT: '#E8352A', foreground: '#FFFFFF' },
        muted: { DEFAULT: '#EFEAE2', foreground: '#6B665E' },
        accent: { DEFAULT: '#FFD43B', foreground: '#14161A' },
        success: { DEFAULT: '#0E7C56', foreground: '#FFFFFF' },
        border: 'rgb(107 102 94 / 0.2)',
        ring: '#C1271D',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        zh: ['"Noto Sans SC"', 'Inter', 'sans-serif'],
        ta: ['"Noto Sans Tamil"', 'Inter', 'sans-serif'],
      },
      fontSize: {
        display: ['64px', { lineHeight: '68px', letterSpacing: '-0.02em', fontWeight: '800' }],
        h1: ['44px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '700' }],
        h2: ['32px', { lineHeight: '36px', fontWeight: '700' }],
        h3: ['22px', { lineHeight: '28px', fontWeight: '600' }],
        label: ['12px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      borderRadius: {
        card: '12px',
        input: '4px',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
};
