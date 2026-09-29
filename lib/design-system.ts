// VyaparPool Design System
// Color palette - institutional, financial, earthy

export const colors = {
  // Backgrounds
  bg: {
    primary: '#FAF9F7', // warm off-white
    secondary: '#F4F2EF',
    dark: '#0F1115', // deep charcoal
    darker: '#0A0B0E',
    card: '#FFFFFF',
  },
  // Text
  text: {
    primary: '#0F1115', // deep ink
    secondary: '#4A4F58', // muted charcoal
    tertiary: '#7A7F88', // mid gray
    inverse: '#FAF9F7',
    inverseSecondary: '#A0A4AB',
  },
  // Brand accent - restrained earthy saffron/ochre (Indian market relevant)
  brand: {
    primary: '#B8860B', // dark goldenrod - restrained, institutional
    secondary: '#D4A843', // lighter accent
    muted: '#E8D5A3', // very muted
  },
  // Borders
  border: {
    light: '#E5E3DF',
    medium: '#D1CEC8',
    dark: '#2A2D33',
  },
  // Status
  status: {
    positive: '#2E7D5F',
    warning: '#B8860B',
    critical: '#A33A2E',
    info: '#3A5A8C',
  },
} as const;

export type ColorSystem = typeof colors;
