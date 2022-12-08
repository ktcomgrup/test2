import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    900: '#0e2860',
    800: '#193877',
    700: '#214283',
    600: '#2a4b8f',
    500: '#305398',
    400: '#526ca5',
    300: '#7186b4',
    200: '#98a7ca',
    100: '#c1cadf',
    50: '#e6eaf2',
  },
  gold: {
    50: "#fefbe7",
    100: "#fcf3c4",
    200: "#f9eb9e",
    300: "#f7e477",
    400: "#f5df59",
    500: "#f4d93c",
    600: "#f1c838",
    700: "#eeb131",
    800: "#ea9a2a",
    900: "#e4721e"
  },
  secondary: {
    50: "#fcfcfc",
    100: "#f7f7f7",
    200: "#f2f2f2",
    300: "#ececec",
    400: "#cacaca",
    500: "#adadad",
    600: "#828282",
    700: "#6e6e6e",
    800: "#4e4e4e",
    900: "#2c2c2c"
  }
}
const config = {
  initialColorMode: "light",
  type: "localStorage"
}

const theme = extendTheme({
  colors,
  config
});

export default theme;