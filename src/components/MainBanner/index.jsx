import React from "react";
import Link from "next/link";
import { OptionCard } from "./OptionCard";

function MainBanner({ links }) {
  return (
    <section className="h-screen w-full bg-black bg-gradient-to-r from-madureira-700 to-madureira-600">
      {/* <img className="h-full w-full opacity-10 object-cover" src="/img/bg.jpg" alt="" /> */}
      <div
        style={{ backgroundImage: "url('/img/bg.jpg')" }}
        className="w-full h-full bg-no-repeat bg-cover bg-center opacity-20 flex items-center justify-center"
      ></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center flex-col md:flex-row lg:justify-center py-20">
        <div className="flex items-center gap-5">
          <img
            className="w-28 pb-10 lg:w-1/7"
            src="img/logo-white.svg"
            alt="logo ad arse 112"
          />
          <div className="flex flex-col">
            <h1 className="text-white opacity-100 text-4xl lg:text-8xl tracking-widest font-black">
              AD ARSE 112
            </h1>
            <p className="text-white opacity-100 tracking-widest font-light text-2xl lg:text-5xl mb-10">
              A IGREJA DA COMUNHÃO
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-9 px-10">
          {links.map((item, index) => (
            <OptionCard
              key={index + item.label}
              label={item.label}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
