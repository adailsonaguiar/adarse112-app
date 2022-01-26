import React from "react";

import * as S from "./styles";

export function ScheduleEvent({ image, title, info }) {
  return (
    <S.Card>
      <div className="info-wrapper">
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      <img className="banner" src={image} />
    </S.Card>
  );
}
