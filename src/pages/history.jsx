import React from "react";
import BodyTemplate from "../components/BodyTemplate";
import { Heading } from "../components/Heading";

export default function Mapa() {
  return (
    <BodyTemplate>
      <div className="flex flex-col items-center w-full pt-20 gap-20 px-10">
        <Heading>História da congregação</Heading>
        <div className="flex h-full w-full lg:w-3/5">
          <iframe
            className="h-[30rem] md:h-[80rem]"
            width="100%"
            src="https://www.youtube.com/embed/Kh47qSKtLOA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </BodyTemplate>
  );
}
