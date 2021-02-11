import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Origin Financial - Saving Goal</title>
        <link rel="shortcut icon" href="/images/icon.svg" />
        <link rel="apple-touch-icon" href="/images/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A platform where the user can set a saving goal."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
