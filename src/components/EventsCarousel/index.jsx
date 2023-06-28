import Slider from "react-slick";
import { ScheduleEvent } from "./components/ScheduleEvent";

const EventsCarousel = ({ events }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-wrapper bg-white">
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
    </div>
  );
};

export default EventsCarousel;
