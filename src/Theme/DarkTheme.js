import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e91e63"
    },
    secondary: {
      main: "#5A2B8B" // Assuming a secondary color based on common UI themes
    },
    black: {
      main: "#0D0D0D" // A common shade for black in dark themes
    },
    background: {
        main:"#0000000",
      default: "#0D0D0D", // Pure black for default background
      paper: "#0D0D0D" // A slightly lighter black for "paper" elements
    },
    textColor: {
        main:"#111111"
    }
    }
})

export default darkTheme