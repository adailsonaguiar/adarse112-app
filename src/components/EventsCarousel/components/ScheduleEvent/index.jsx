import React from "react";

export function ScheduleEvent({ image, title, info }) {
  return (
    <div className="flex p-5">
      <div className="relative">
        <img
          className="w-[50rem] h-[40rem] md:w-screen md:h-[40rem] object-cover rounded-xl"
          src={image}
        />
        <div className="absolute bottom-0 top-0 left-0 right-0 rounded-xl cursor-pointer pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 pt-10 pb-10 px-10 bg-madureira-100 rounded-b-xl pointer-events-none">
          <h2 className="font-bold text-4xl mb-4 text-white">
            {title.split()}
          </h2>
          <p className="font-medium text-3xl text-white">
            {info.slice(0, 50)}
          </p>
        </div>
      </div>
    </div>
  );
}
