/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="kr">
        <Head>
          <meta name="author" content="cozi" />
          <meta name="description" content="blog for photographer" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="DeveloPic" />
          <meta property="og:title" content="DeveloPic" />
          <meta property="og:description" content="사진과 글의 만남 디벨로픽입니다." />
          <meta
            property="og:image"
            content="https://i.ibb.co/G5DwjyP/linkedin-profile-image2-removebg-preview.png"
          />
          <meta property="og:url" content="https://developic.shop" />

          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="DeveloPic" />
          <meta property="twitter:title" content="DeveloPic" />
          <meta
            property="twitter:description"
            content="사진과 글의 만남 디벨로픽입니다."
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/G5DwjyP/linkedin-profile-image2-removebg-preview.png"
          />
          <meta property="twitter:url" content="https://developic.shop" />
          <meta name="theme-color" content="#273bb9" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Nanum+Myeongjo:wght@400;700;800&family=Noto+Serif+KR:wght@300;400;500;600;700&family=Source+Code+Pro:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.png" />
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
