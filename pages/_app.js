import { Head } from "next/document";
import { ChakraProvider } from '@chakra-ui/react';
// import { appWithTranslation } from "next-i18next";
import theme from '/theme/index';
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

// export default appWithTranslation(MyApp);