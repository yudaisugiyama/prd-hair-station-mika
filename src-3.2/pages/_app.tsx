import React from 'react'
import Head from 'next/head'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>新潟駅前美容院  |  Hair Station Mika（ヘアーステーションミカ）</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp