import React from "react";

import * as S from "./styles";

function CardSlider({ image }) {
  return (
    <S.Card>
      <img src={image} />
    </S.Card>
  );
}

export default CardSlider;
