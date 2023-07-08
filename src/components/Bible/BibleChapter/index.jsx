import React from "react";

export function BibleChapter({
  bookSelected,
  chapterSelected,
  verses,
  selectVerse,
  verseSelected
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-white font-bold text-center py-16">
        {bookSelected?.name} : {chapterSelected}
      </h1>
      <div className="flex flex-col md:w-1/2">
        {verses?.map((verse) => (
          <p
            key={verse.number}
            className={`text-2xl md:text-3xl text-white tracking-wide mb-4 py-1 leading-loose cursor-pointer ${verseSelected.number === verse.number? 'underline decoration-1 decoration-dotted decoration-yellow-300': ''}`}
            onClick={() => {
              selectVerse?.(verse);
            }}
          >
            <span className="text-lg align-top leading-loose">
              {verse.number}
            </span>{" "}
            {verse.text}
          </p>
        ))}
      </div>
    </div>
  );
}
