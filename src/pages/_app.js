import Head from "next/head";

import "../styles/globals.css";
import "../styles/integration/player.css";
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

        <link
          rel="stylesheet"
          id="sanfran-google-font-inter-css"
          href="//fonts.googleapis.com/css?family=Inter%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900&amp;subset=latin&amp;ver=5.5.3"
          type="text/css"
          media="all"
        />
        <meta
          name="description"
          content="A IGREJA DA COMUNHÃO | Nação Madureira | Palmas - Tocantins"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
