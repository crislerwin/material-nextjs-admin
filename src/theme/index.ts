import { createTheme, Theme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme: Theme = createTheme({
  palette: {
    type: "light",
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

export default theme;
