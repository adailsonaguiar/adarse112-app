import React from "react";

export const Select = ({ children, name, label, onChange, value }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={`select-${name}`}
        className="text-white font-normal text-2xl mb-2"
      >
        {label}
      </label>
      <select
        name={`select-${name}`}
        className="appearance-none w-full px-5 font-normal text-white h-20 bg-madureira-700 border-2 border-solid border-gray-300 rounded-lg transition ease-in-out text-2xl focus:border-madureira-100 focus:border-2 focus:outline-none"
        aria-label="Default select example"
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
    </div>
  );
};
