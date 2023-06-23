import Document, { Html, Head, Main, NextScript } from 'next/document'

class CommonDocument extends Document {
    // ヘッダーにGoogle Analyticsのトラッキングコードを埋め込む
    render() {
        return (
    <Html>
        <Head>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
    )
  }
}

export default CommonDocument