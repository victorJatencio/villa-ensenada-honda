import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          <meta name="description" content="A easy and convenient way to book your vacation in Culebra, Puerto Rico"/>
          <meta charSet="utf-8"/>
          <meta name="keywords" content="Vacation, Beach, Culebra, Puerto Rico, Villa, Island, Relaxation, Fun" />

          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}