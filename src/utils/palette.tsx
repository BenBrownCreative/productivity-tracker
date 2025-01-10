import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#21a6d2",
    },
    secondary: {
      main: "#d24d21",
    },
    background: {
      default: "#262829",
    },
  },
});

export default function Palette({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
