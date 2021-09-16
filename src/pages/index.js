import Header from "../components/Header";
import dynamic from "next/dynamic";

// const Map = dynamic(() => import('components/Map'), { ssr: false })
import MainBanner from "../components/MainBanner";
import Schedule from "../components/Schedule";
import { SectionWrapper } from "../components/Section";
import Offers from "../components/Offers";
import OurPastor from "../components/OurPastor";
import Footer from "../components/Footer";

// const Location = dynamic(() => import("../component/Location"), { ssr: false });

const Location = dynamic(() => import("../components/Location"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainBanner />
        <SectionWrapper id="cultos">
          <Schedule />
        </SectionWrapper>

        <SectionWrapper id="onde-estamos">
          <Location />
        </SectionWrapper>

        <SectionWrapper id="dizimos">
          <Offers />
        </SectionWrapper>

        <SectionWrapper>
          <OurPastor />
        </SectionWrapper>
      </main>
      <Footer />
    </>
    // <script src="scripts/scripts.js"></script>
    // <script src="scripts/maps.js"></script>
    // <script src="scripts/menuNav.js"></script>
    // <script src="/scripts/sweetalert2.min.js"></script>

    // <script
    //   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmwfI5GoSJJzvzz5P2TZE_6Hmuf93G5oo&callback=initMap&libraries=&v=weekly&channel=2"
    //   async
    // ></script>
  );
}
