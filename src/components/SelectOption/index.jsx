import React from "react";

export const SelectOption = ({ item }) => {
  return (
    <option value={item.id} className="text-2xl">
      {item.name}
    </option>
  );
};
