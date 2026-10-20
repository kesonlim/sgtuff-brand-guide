// SGTUFF Official Tailwind CSS Design Tokens Preset
// Direction A: Institutional Co-operative & National Authority

module.exports = {
  theme: {
    extend: {
      colors: {
        sgtuff: {
          crimson: '#C81E1E',       // Primary State Crimson
          crimsonDark: '#991B1B',
          navy: '#0F172A',          // Co-operative Midnight Navy
          navyLight: '#1E293B',
          gold: '#D97706',          // Civic Gold Accent
          goldLight: '#F59E0B',
          white: '#FFFFFF',
          parchment: '#F8FAFC',
          border: '#1E293B',
          surface: '#111827'
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  }
};
