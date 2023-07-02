import Head from "next/head";

import "../styles/globals.css";
import "../styles/carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <meta name="keywords" content="COMUNHÃO, IGREJA, MADUREIRA" />

        <link rel="shortcut icon" href="/img/logo-transparent.png" />
        <link rel="apple-touch-icon" href="/img/logo-transparent.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#020024" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <title>Nação Madureira - AD ARSE 112</title>
        <meta name="title" content="Nação Madureira - AD ARSE 112" />
        <meta
          name="description"
          content="A IGREJA DA COMUNHÃO | Nação Madureira | Palmas - Tocantins"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adarse112.com/" />
        <meta property="og:title" content="Nação Madureira - AD ARSE 112" />
        <meta
          property="og:description"
          content="A IGREJA DA COMUNHÃO | Nação Madureira | Palmas - Tocantins"
        />
        <meta property="og:image" content="/img/meta.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://adarse112.com/" />
        <meta
          property="twitter:title"
          content="Nação Madureira - AD ARSE 112"
        />
        <meta
          property="twitter:description"
          content="A IGREJA DA COMUNHÃO | Nação Madureira | Palmas - Tocantins"
        />
        <meta property="twitter:image" content="/img/meta.png"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
