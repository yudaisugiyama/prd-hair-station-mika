import React from 'react'
import Head from 'next/head'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '新潟駅前美容院  |  Hair Station Mika（ヘアーステーションミカ）',
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp