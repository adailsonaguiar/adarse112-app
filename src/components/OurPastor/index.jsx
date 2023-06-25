import React from "react";

import { SectionWrapper } from "../SectionWrapper";

function OurPastor() {
  return (
    <SectionWrapper title="Pr. João Paulo Arantes">
      <div className="pastor-wrapper flex flex-col px-10 md:flex-row md:px-[35rem] md:justify-center">
        <p className="text-3xl font-medium leading-relaxed text-justify md:pr-24">
          Doutorando em Teologia pela Faculdades EST, Mestre em Teologia (EST).
          Pós-graduado em Gestão e Planejamento Ambiental (Faculdade Albert
          Einstein). Bacharel em Teologia (FTSA). Bacharel em Engenharia
          Ambiental (UFT). Natural de Acreúna-GO. Filho de Filisbino do Carmo
          Arantes e Maria do Socorro Dantas dos Santos. Casado com Paula Daiany
          Leite Rezende Arantes, pai do João Pedro e Mariana. Pastor Dirigente
          da Congregação AD ARSE 112. 6º Vice Presidente do Campo Nação
          Madureira em Palmas-TO.
        </p>
        <img
          className="mt-10 md:w-96 md:mt-0"
          src="/img/prjoao.jpg"
          alt="Pr João Paulo Arantes"
        />
      </div>
    </SectionWrapper>
  );
}

export default OurPastor;
