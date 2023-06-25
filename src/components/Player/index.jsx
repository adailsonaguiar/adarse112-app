import React from "react";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import { ForwardIcon, BackwardIcon } from "@heroicons/react/24/outline";

export const Player = () => {
  const [played, setPlayed] = React.useState(false);

  // radio.addEventListener("volumechange", (value) => mute());

  const play = () => {
    const radio = window.document.getElementById("radio");

    if (!played)
      if (radio.played.length === 0) radio.play();
      else radio.muted = false;

    setPlayed(true);
  };

  const mute = () => {
    const radio = window.document.getElementById("radio");
    radio.muted = true;

    setPlayed(false);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 pb-20 flex flex-col items-center">
      <div className="flex justify-center gap-2">
        <button className="hover:opacity-70">
          <BackwardIcon className="h-10 text-sky-500" />
        </button>
        {played ? (
          <button className="hover:opacity-70" onClick={() => mute()}>
            <PauseCircleIcon className="h-28 text-sky-500" />
          </button>
        ) : (
          <button className="hover:opacity-70" onClick={() => play()}>
            <PlayCircleIcon className="h-28 text-sky-500" />
          </button>
        )}

        <button className="hover:opacity-70">
          <ForwardIcon className="h-10 text-sky-500" />
        </button>
      </div>
      <audio id="radio" style={{ display: "none" }}>
        <source
          src="https://8030.brasilstream.com.br/mp3?identifica=1180839757961402400"
          type="audio/mpeg"
        />
      </audio>
    </footer>
  );
};
