// SGTUFF Official Tailwind CSS Design Tokens Preset
// Accurately extracted from www.sgtuff.org.sg

module.exports = {
  theme: {
    extend: {
      colors: {
        sgtuff: {
          red: '#EB2315',      // Official SGTUFF Red
          redDark: '#C81E12',
          black: '#000000',    // Authority Black
          charcoal: '#1E293B',
          white: '#FFFFFF',
          slate: '#F8FAFC',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  }
};
