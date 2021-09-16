import React from "react";
import { ContentWrapper } from "../ContentWrapper";
import { Heading } from "../Heading";

import * as S from "./styles";

function Schedule() {
  const schedule = [
    { title: "Culto da Madrugada", day: "de segunda a sexta", hour: "05h00" },
    { title: "Círculo de Oração", day: "de segunda a sexta", hour: "08h00" },
    { title: "Culto de Ensino", day: "Terças Feiras", hour: "19h30" },
    { title: "Oração dos Jovens", day: "Sextas Feiras", hour: "21h00" },
    { title: "Escola Bíblica", day: "Domingos", hour: "08h00" },
    { title: "Culto da Família", day: "Domingos", hour: "19h00" },
  ];
  return (
    <S.Container>
      <ContentWrapper>
        <Heading>Nossos Cultos</Heading>
        <div className="horarios-wrapper">
          {schedule.map((item, index) => (
            <S.Card key={index}>
              <h4>{item.title}</h4>
              <p className="day">{item.day}</p>
              <p className="hour">{item.hour}</p>
            </S.Card>
          ))}
        </div>
      </ContentWrapper>
    </S.Container>
  );
}

export default Schedule;
