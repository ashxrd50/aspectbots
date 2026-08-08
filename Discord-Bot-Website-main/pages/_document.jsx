import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Aspect Bot ile müziği hiç durdurmadan dinle. 750+ desteklenen müzik platformuyla kendi çalma listeni oluştur ve dinlemeye başla."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@AspectBot" />
          <meta name="twitter:creator" content="@AspectBot" />
          <meta property="og:url" content="https://musicmaker.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Aspect Bot" />
          <link
            rel="icon"
            href="/img/aspectlogo.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Aspect Bot ile müziği hiç durdurmadan dinle. 750+ desteklenen müzik platformuyla kendi çalma listeni oluştur."
          />
          <meta property="og:image" content="/img/aspectlogo.png" />
          <meta property="og:image:alt" content="Aspect Bot" />
          <meta property="og:locale" content="tr_TR" />
          <meta
            property="og:site_name"
            content="Aspect Bot"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="/img/aspectlogo.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
