import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="SBAI - AI Powered Sports Betting" />
          <meta property="og:description" content="Harness the power of artificial intelligence to beat the odds in sports betting" />
          <meta property="og:image" content="/images/logo.webp" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SBAI - AI Powered Sports Betting" />
          <meta name="twitter:description" content="Harness the power of artificial intelligence to beat the odds in sports betting." />
          <title>SBAI - AI Powered Sports Betting</title>
          <meta name="description" content="Harness the power of artificial intelligence to beat the odds in sports betting." />
        </Head>
        <body>
          <Main />
          <NextScript />    
        </body>
      </Html>
    );
  }
}

export default MyDocument;