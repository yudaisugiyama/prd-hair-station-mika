import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <Html lang="jp">
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
        <Head />
        <body>
            {children}
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}