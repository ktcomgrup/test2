import { ChakraProvider } from '@chakra-ui/react';
// import { appWithTranslation } from "next-i18next";
import theme from '/theme/index';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  // console.log(theme)
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

// export default appWithTranslation(MyApp);
export default MyApp;
