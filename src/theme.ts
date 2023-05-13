import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#4feba7',
      darker: '#053e85'
    },
    secondary: {
      main: 'rgb(11,39,66)',
      contrastText: '#fff'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    },
    accent: {
      main: '#4feba7',
      contrastText: '#0b2742'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Bogle'
      }
    }
  }
})

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral: Palette['primary']
    accent: Palette['primary']
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary']
    accent: PaletteOptions['primary']
  }

  interface PaletteColor {
    darker?: string
  }

  interface SimplePaletteColorOptions {
    darker?: string
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
  }
}
