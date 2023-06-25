import React from "react";
import { Player } from "../components/Player";
import { PageWrapper } from "../components/PageWrapper";

export default function Radio() {
  return (
    <PageWrapper>
      <div className="flex justify-center align-middle h-full">
        <img
          className="w-full object-contain"
          src="https://radiopazpalmas.com.br/wp-content/uploads/2022/07/Logo-Radio-Paz.png"
          alt="logo Rádio Paz FM Palmas - TO"
        />
      </div>
      <Player />
    </PageWrapper>
  );
}
