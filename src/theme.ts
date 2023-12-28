import { createTheme } from '@mui/material/styles'
import palette from './palette.module.scss'

const Palette = palette as Record<string, string>;

export const theme = createTheme({
  palette: {
    primary: {
      main: Palette.brand,
    },
    secondary: {
      main: Palette.card,
    },
  }
});