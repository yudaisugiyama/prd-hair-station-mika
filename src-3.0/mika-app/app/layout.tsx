import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '新潟駅前美容院  |  Hair Station Mika（ヘアーステーションミカ）',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"></link>
        <link rel="icon" href="./favicon.ico" type="image/x-icon"></link>
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
