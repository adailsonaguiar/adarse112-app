import React from "react";
import { ContentWrapper } from "../ContentWrapper";
import * as S from "./styles";

function MainBanner() {
  return (
    <S.BannerSection>
      <div className="overlay-image"></div>
      <img src="/img/bg.image.jpeg" alt="" />
      <ContentWrapper>
        <h1>Nação Madureira - AD ARSE 112</h1>
        <h3>A IGREJA DA COMUNHÃO</h3>
      </ContentWrapper>
    </S.BannerSection>
  );
}

export default MainBanner;
