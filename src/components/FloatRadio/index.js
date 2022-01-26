import React from "react";

import * as S from "./styles";

function FloatRadio() {
  return (
    <S.Container>
      <p className="info-radio">PAZ FM AO VIVO</p>
      <iframe
        src="https://adailsonaguiar.github.io/player-radio-paz"
        frameBorder="0"
        noresize="noresize"
        scrolling="no"
      ></iframe>
    </S.Container>
  );
}

export default FloatRadio;
