import React from "react";

import * as S from "./styles";

function CardSlider({ image }) {
  return (
    <S.Card target="_blank" href="http://instagram.com/adarse112">
      <img src={image} />
    </S.Card>
  );
}

export default CardSlider;
