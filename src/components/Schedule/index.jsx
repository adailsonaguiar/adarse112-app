import React from "react";
import { ContentWrapper } from "../ContentWrapper";
import { Heading } from "../Heading";
import { SectionWrapper } from "../SectionWrapper";

function Schedule() {
  const schedule = [
    { title: "Culto da Madrugada", day: "De segunda a sexta", hour: "05h00" },
    { title: "Círculo de Oração", day: "De segunda a sexta", hour: "08h00" },
    { title: "Culto de Ensino", day: "Terça Feira", hour: "19h30" },
    { title: "Oração dos Jovens", day: "Sexta Feira", hour: "21h00" },
    { title: "Escola Bíblica", day: "Domingo", hour: "08h00" },
    { title: "Culto da Família", day: "Domingo", hour: "19h00" },
  ];
  return (
    <SectionWrapper title="NOSSOS CULTOS" style="bg-neutral-200 pb-20">
      <div className="px-14 w-full flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {schedule.map((item, index) => (
            <div key={index} className="mb-10 flex items-center">
              <div className="flex flex-col w-full">
                <h4 className="text-5xl font-black tracking-wide text-madureira-100 mb-4">
                  {item.title}
                </h4>
                <p className="text-4xl font-black text-neutral-500">
                  {item.hour}
                </p>
                <p className="text-3xl font-bold text-neutral-800">
                  {item.day}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Schedule;
