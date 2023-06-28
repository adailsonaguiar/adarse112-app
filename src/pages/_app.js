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
        <title>AD ARSE 112</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="keywords" content="COMUNHÃO, IGREJA, MADUREIRA" />

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
