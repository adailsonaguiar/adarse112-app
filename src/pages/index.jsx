import React from "react";
import MainBanner from "../components/MainBanner";
import Schedule from "../components/Schedule";
import { SectionWrapper } from "../components/Section";
import Offers from "../components/Offers";
import OurPastor from "../components/OurPastor";
import Footer from "../components/Footer";
import EventsCarousel from "../components/EventsCarousel";
import { api } from "../services/api";

export default function Home(props) {
  // const toggleHeader = () => {
  //   const header = document.getElementById("head");
  //   const headerClassList = header.classList;

  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY >= 200) {
  //       headerClassList.toggle("scrollHide");
  //       // if (!headerClassList.contains("scrollHide")) {
  //       //   headerClassList.add("scrollHide");
  //       // }
  //     }
  //     // } else {
  //     //   if (headerClassList.contains('scrollHide')) {
  //     //     headerClassList.remove('scrollHide')
  //     //   }
  //     // }
  //   });
  // };
  // React.useEffect(() => {toggleHeader()}, []);
  return (
    <>
      {/* <Header /> */}
      <main>
        <MainBanner links={props.menu} />
        {/* <SectionWrapper>
          <Carousel />
        </SectionWrapper> */}

        <SectionWrapper id="cultos">
          <Schedule />
        </SectionWrapper>

        <SectionWrapper id="billboard">
          <EventsCarousel events={props.events} />
        </SectionWrapper>

        {/*   <SectionWrapper>
          <WeekSchedule />
        </SectionWrapper> */}

        <SectionWrapper id="dizimos">
          <Offers />
        </SectionWrapper>

        <SectionWrapper>
          <OurPastor />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { data: events } = await api.get("events");
  const { data: menu } = await api.get("menu");
  return {
    props: { events, menu },
  };
}
