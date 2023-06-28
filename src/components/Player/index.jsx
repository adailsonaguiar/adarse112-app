import React from "react";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import { WaveForm } from "../WaveForm";

export const Player = () => {
  const [played, setPlayed] = React.useState(false);
  const [hasPlayed, setHasPlayed] = React.useState(false);
  const audioElmRef = React.useRef(null);

  const [analyzerData, setAnalyzerData] = React.useState(null);

  const play = () => {
    const radio = window.document.getElementById("radio");

    if (!played) {
      if (radio.played.length === 0) radio.play();
      else radio.muted = false;
    }

    if (!hasPlayed) audioAnalyzer();
    setHasPlayed(true);

    setPlayed(true);
  };

  const mute = () => {
    const radio = window.document.getElementById("radio");
    radio.muted = true;

    setPlayed(false);
  };

  const audioAnalyzer = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyzer = audioCtx.createAnalyser();
    analyzer.fftSize = 2048;

    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const source = audioCtx.createMediaElementSource(audioElmRef.current);
    source.crossOrigin = "anonymous";

    source.connect(analyzer);
    source.connect(audioCtx.destination);
    source.onended = () => {
      source.disconnect();
    };

    setAnalyzerData({ analyzer, bufferLength, dataArray });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-2 z-10">
        {played ? (
          <button className="hover:opacity-70" onClick={() => mute()}>
            <PauseCircleIcon className="h-52 text-white" />
          </button>
        ) : (
          <button className="hover:opacity-70" onClick={() => play()}>
            <PlayCircleIcon className="h-52 text-white" />
          </button>
        )}
      </div>

      {analyzerData && <WaveForm analyzerData={analyzerData} />}

      <audio
        id="radio"
        style={{ display: "none" }}
        crossOrigin="anonymous"
        ref={audioElmRef}
      >
        <source
          src="https://8030.brasilstream.com.br/mp3?identifica=1180839757961402400"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};
