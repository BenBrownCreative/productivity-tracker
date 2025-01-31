import { PaletteOptions, ThemeOptions } from "@mui/material/styles";

const defaultSize = 4;
export const sizing = {
  "1x": 1 * defaultSize,
  "2x": 2 * defaultSize,
};

const darkTheme = {
  mode: "dark",
  primary: {
    // light?: string;
    main: "#000",
    // dark?: string;
    // contrastText?: string;
  },
};

export const styledTheme: ThemeOptions = {
  palette: darkTheme as PaletteOptions,
};
