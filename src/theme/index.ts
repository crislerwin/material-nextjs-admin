import { createTheme, Theme } from "@material-ui/core/styles";
import { PaletteType } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
// Change theme color using state on redux.
export const theming = (type: PaletteType): Theme =>
  createTheme({
    palette: {
      type,
      primary: {
        light: "#ACB3CA",
        main: "#465480",
        dark: "#232A40",
      },
      secondary: {
        light: "#CA97AA",
        main: "#803953",
        dark: "#401D2A",
      },
    },
  });

// Create a theme instance.
export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
