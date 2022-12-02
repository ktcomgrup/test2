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