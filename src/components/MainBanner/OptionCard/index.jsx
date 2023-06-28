import React from "react";
import {
  CurrencyDollarIcon,
  PhotoIcon,
  MapIcon,
  BookOpenIcon,
  MusicalNoteIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import Link from "next/dist/client/link";

const menuLinks = [
  { label: "CULTOS", icon: <CalendarDaysIcon className="h-10 md:h-14" /> },
  { label: "OFERTAS", icon: <CurrencyDollarIcon className="h-10 md:h-14" /> },
  { label: "FOTOS", icon: <PhotoIcon className="h-10 md:h-14" /> },
  { label: "MAPA", icon: <MapIcon className="h-10 md:h-14" /> },
  { label: "BÍBLIA", icon: <BookOpenIcon className="h-10 md:h-14" /> },
  { label: "RÁDIO PAZ", icon: <MusicalNoteIcon className="h-10 md:h-14" /> },
];

export const OptionCard = ({ label = "", link }) => {
  const labelUp = label.toUpperCase();

  return (
    <Link href={link} passHref>
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl text-white px-16 md:px-20 py-10 tracking-widest font-medium text-xl md:text-3xl bg-white/10 hover:bg-white hover:text-madureira-700 cursor-pointer">
        {menuLinks.find((item) => item.label === labelUp).icon}
        {label}
      </div>
    </Link>
  );
};
