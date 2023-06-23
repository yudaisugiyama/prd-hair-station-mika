import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '新潟駅前美容院  |  Hair Station Mika（ヘアーステーションミカ）',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      {/* ヘッダーにGoogle Analyticsのスクリプトコードを埋め込み */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-VEG33L98SB"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VEG33L98SB', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
