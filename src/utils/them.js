import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  light: {
    900: "#fff",
    800: "#fcfcfc",
    700: "#F9F3F3",
    600: "#D9D9D9D9",
    500: "#4b6584",
    400: "#778ca3",
  },
  main: {
    900: "#1c75bc",
    800: "#ff0068",
    700: "#d9d9d9d9",
  },
};

const semanticTokens = {
  colors: {
    abdo: {
      default: "green",
      _dark: "red",
    },
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, colors, semanticTokens });
