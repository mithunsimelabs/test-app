import { createTheme } from '@mui/material/styles'
import { MuiButton, MuiTab } from './components'
const OVVERIDE_DEFAULTS = {
  components: {
    MuiButton,
    MuiTab
  },
  typography: {
    h1: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '36px'
    },
    default: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '18px'
    }
  }
}
export const createAppTheme = (theme: any) => {
  return createTheme({
    ...OVVERIDE_DEFAULTS,
    ...theme
  })
}
