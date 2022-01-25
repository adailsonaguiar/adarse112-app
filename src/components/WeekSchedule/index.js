import { useState } from "react";
import Slider from "react-slick";
import CardSliderSchedule from "../CardSliderSchedule";
import { ContentWrapper } from "../ContentWrapper";
import { Heading } from "../Heading";

import * as S from "./styles";

const WeekSchedule = () => {
  const [openModalImage, setOpenModalImage] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  function handleClickBanner() {
    setOpenModalImage(!openModalImage);
    console.log("aqui");
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  const SLIDES = [
    {
      image: "https://www.conemadto.com.br/imagens/Home/Banner%203.png",
    },
    { image: "https://www.conemadto.com.br/imagens/Home/Principal.png" },
    { image: "https://www.conemadto.com.br/imagens/Home/Banner%202.png" },
  ];

  return (
    <S.Caroulsel>
      <ContentWrapper>
        <Heading>Agenda mensal</Heading>
      </ContentWrapper>

      <Slider {...settings}>
        {SLIDES.map((slider, index) => (
          <S.Card
            key={index}
            onClick={() => {
              handleClickBanner(), setImageSelected(slider.image);
            }}
          >
            <img src={slider.image} />
          </S.Card>
        ))}
      </Slider>
      <S.Modal
        aria-label="modal"
        aria-hidden={!openModalImage}
        visible={openModalImage}
        onClick={handleClickBanner}
      >
        <img src={imageSelected} />
      </S.Modal>
    </S.Caroulsel>
  );
};

export default WeekSchedule;
