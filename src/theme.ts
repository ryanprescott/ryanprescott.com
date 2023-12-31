import { createTheme } from '@mui/material/styles'
import palette from './palette.module.scss'

const Palette = palette as Record<string, string>;

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Palette.brand,
    },
    secondary: {
      main: Palette.card,
    },
  },
});