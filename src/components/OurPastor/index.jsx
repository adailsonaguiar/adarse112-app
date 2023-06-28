import React from "react";

import { SectionWrapper } from "../SectionWrapper";
import { Heading } from "../Heading";

function OurPastor() {
  return (
    <SectionWrapper title="" style="pt-0 bg-white">
      <div className="flex justify-center">
        <div className="pastor-wrapper flex flex-col md:flex-row px-10">
          <div className="flex flex-col justify-center w-full">
            <Heading style="text-center">PASTOR JOÃO PAULO ARANTES</Heading>
            <p className="text-3xl font-medium leading-relaxed text-justify md:pr-16 pt-20 max-w-[90rem]">
              Doutorando em Teologia pela Faculdades EST, Mestre em Teologia
              (EST). Pós-graduado em Gestão e Planejamento Ambiental (Faculdade
              Albert Einstein). Bacharel em Teologia (FTSA). Bacharel em
              Engenharia Ambiental (UFT). Natural de Acreúna-GO. Filho de
              Filisbino do Carmo Arantes e Maria do Socorro Dantas dos Santos.
              Casado com Paula Daiany Leite Rezende Arantes, pai do João Pedro e
              Mariana. Pastor Dirigente da Congregação AD ARSE 112. 6º Vice
              Presidente do Campo Nação Madureira em Palmas-TO.
            </p>
          </div>
          <div className="flex items-end justify-center">
            <img
              className="mt-10 md:mt-0 object-contain"
              src="/img/prjoao.png"
              alt="PASTOR JOÃO PAULO ARANTES"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default OurPastor;
