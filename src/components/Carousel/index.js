import Slider from "react-slick";
import CardSlider from "../CardSlider";

import * as S from "./styles";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
        "https://vereadorfilipemartins.com.br/image/Logo/logo_vereador_filipe_martins_2020_1080.png",
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
        "https://vereadorfilipemartins.com.br/image/Logo/logo_vereador_filipe_martins_2020_1080.png",
    },
    { image: "https://www.nacaomadureira.com.br/images/radio_paz.png" },
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
