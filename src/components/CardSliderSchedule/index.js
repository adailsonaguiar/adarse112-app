import React, { useState } from "react";

import * as S from "./styles";

function CardSliderSchedule({ image }) {
  const [openModalImage, setOpenModalImage] = useState(false);
  function handleClickBanner() {
    setOpenModalImage(!openModalImage);
    console.log("aqui");
  }
  return (
    <>
      <S.Card onClick={handleClickBanner}>
        <img src={image} />
      </S.Card>
      <S.ModalImage>
        <img src={image} />
        <h1>teste</h1>
      </S.ModalImage>
    </>
  );
}

export default CardSliderSchedule;
