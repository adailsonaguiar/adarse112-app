import React from "react";
import Header from "../components/Header";
// import Player from "../components/Player";

export default function Mapa() {
  return (
    <main className="h-screen px-24">
      <Header/>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1-PyPSgvGPm04ZRyjTspBa77uvUvJyt0&ehbc=2E312F"
        width="100%"
        height="100%"
      ></iframe>
    </main>
  );
}
