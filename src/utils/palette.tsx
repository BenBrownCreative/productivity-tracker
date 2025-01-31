import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styledTheme } from "./styleguide";

const theme = createTheme({
  ...styledTheme,
  cssVariables: true,
});

export default function Palette({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
