import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

const config: ThemeConfig = { initialColorMode: 'system', useSystemColorMode: true }

const theme = extendTheme({ config })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Percent Calculator</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
