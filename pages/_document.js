import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '/theme/index';

export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth' }} lang={"ro"}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap"
          rel="stylesheet" />
        <title>Implica-te - Fundatia E-Learning</title>
        <meta name="description" content="e-learning platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}