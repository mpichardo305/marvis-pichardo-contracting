import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Meta tags for shareability */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Professional general contracting services for residential and commercial projects. Reliable, efficient, and top-quality results." />
        <meta property="og:title" content="General Contracting Services" />
        <meta property="og:description" content="Looking for professional general contracting services? We deliver reliable and efficient solutions for all your residential and commercial projects." />
        <meta property="og:image" content="/photos/photo1.webp" />
        {/* <meta property="og:url" content="https://michaelpichardo.com" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="General Contracting Services" />
        <meta name="twitter:description" content="Reliable general contracting services for residential and commercial projects. Quality results you can count on." />
        <meta name="twitter:image" content="/photos/photo1.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}