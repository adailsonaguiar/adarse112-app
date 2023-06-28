import React from "react";
import { Player } from "../components/Player";
import BodyTemplate from "../components/BodyTemplate";

export default function Radio() {
  return (
    <BodyTemplate>
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center w-full p-10">
          <div className="flex bg-white rounded-xl w-full md:w-3/12 z-10">
            <img
              className="w-full object-contain"
              src="https://radiopazpalmas.com.br/wp-content/uploads/2022/07/Logo-Radio-Paz.png"
              alt="logo Rádio Paz FM Palmas - TO"
            />
          </div>
        </div>
        <Player />
      </div>
    </BodyTemplate>
  );
}
