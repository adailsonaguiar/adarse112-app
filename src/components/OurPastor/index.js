import React from "react";
import { ContentWrapper } from "../ContentWrapper";
import { Heading } from "../Heading";

import * as S from "./styles";

function OurPastor() {
  return (
    <S.PastorWrapper>
      <ContentWrapper>
        <Heading>Pr. João Paulo Arantes</Heading>
        <div className="pastor-wrapper">
          <S.PastorInfo>
              Doutorando em Teologia pela Faculdades EST, Mestre em Teologia
              (EST). Pós-graduado em Gestão e Planejamento Ambiental (Faculdade
              Albert Einstein). Bacharel em Teologia (FTSA). Bacharel em
              Engenharia Ambiental (UFT). Natural de Acreúna-GO. Flho de
              Filisbino do Carmo Arantes e Maria do Socorro Dantas dos Santos.
              Casado com Paula Daiany Leite Rezende Arantes, pai do João Pedro e
              Mariana. Pastor Dirigente da Congregação AD ARSE 112. 6º Vice
              Presidente do Campo Nação Madureira em Palmas-TO.
          </S.PastorInfo>
          <img src="/img/prjoao.jpg" alt="Pr João Paulo Arantes" />
        </div>
      </ContentWrapper>
    </S.PastorWrapper>
  );
}

export default OurPastor;
