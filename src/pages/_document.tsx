import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={'pl'}>
        <Head>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="144x144"
                href="/favicon/favicon-144x144.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link
                rel="mask-icon"
                href="/favicon/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            <meta name="theme-color" content="#f5f5f7"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
