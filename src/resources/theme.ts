import { createMuiTheme } from '@material-ui/core'
import { primary, secondary, error } from './palette'

export default createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Battlefin-Black',
      fontSize: 36,
    },
    h2:  {
      fontFamily: 'Battlefin-Black',
    },
    fontFamily: '"NB-International", "Roboto", "Helvetica", sans-serif',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    primary,
    secondary,
    error,
    type: 'dark',
    background: {
      paper: '#1E191E',
      default: '#1E191E',
    },
  },
})
