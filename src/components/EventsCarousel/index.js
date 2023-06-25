import Slider from "react-slick";
import { ScheduleEvent } from "./components/ScheduleEvent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import * as S from "./styles";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
}

const EventsCarousel = ({ events }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <S.Caroulsel>
      <Slider {...settings}>
        {events.map((slider, index) => (
          <ScheduleEvent
            key={index}
            image={slider.image}
            title={slider.title}
            info={slider.info}
          />
        ))}
      </Slider>
    </S.Caroulsel>
  );
};

export default EventsCarousel;
