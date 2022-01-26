import Slider from "react-slick";
import CardSlider from "../CardSlider";

import * as S from "./styles";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const SLIDES = [
    {
      image:
        "https://transulencomendas.com.br/images/2019/07/05/logotransul_400x165gif.gif",
    },
    { image: "https://www.nacaomadureira.com.br/images/radio_paz.png" },
    { image: "https://www.nacaomadureira.com.br/images/logoad.png" },
    {
      image:
        "https://lirp.cdn-website.com/add6e6ac/dms3rep/multi/opt/CE-CC-81U-2BPALMAS-2BHOTEL.-2c58ae3e-17dbc8ed-960w.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/pt/c/ca/Conven%C3%A7%C3%A3o_Nacional_das_Assembleias_de_Deus_no_Brasil_-_Minist%C3%A9rio_de_Madureira.jpg",
    },
    {
      image:
        "https://transulencomendas.com.br/images/2019/07/05/logotransul_400x165gif.gif",
    },
    {
      image:
        "https://cdn.awsli.com.br/400x300/1074/1074764/logo/e0dfa26b01.png",
    },
    {
      image:
        "https://scontent.fpmw4-1.fna.fbcdn.net/v/t31.18172-8/28616490_178313426288622_4044843332954801367_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=N7bmhctQ-mgAX_TsGR4&tn=SuiJC8XNhrf4xrXu&_nc_ht=scontent.fpmw4-1.fna&oh=b8c7a331e3821d20f1b02ff5ae0516ad&oe=616FD49C",
    },
  ];

  return (
    <S.Caroulsel>
      <Slider {...settings}>
        {SLIDES.map((slider, index) => (
          <CardSlider key={index} image={slider.image} />
        ))}
      </Slider>
    </S.Caroulsel>
  );
};

export default Carousel;
