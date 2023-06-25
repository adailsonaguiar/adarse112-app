import React, { useState } from "react";
import Image from 'next/image'

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuNavs = [
    { label: "CULTOS", link: "#cultos" },
    { label: "ONDE ESTAMOS", link: "#onde-estamos" },
    { label: "OFERTAS", link: "#dizimos" },
    { label: "AVISOS", link: "#billboard" },
  ];

  return (
    <>
      <header className="fixed top-0 flex flex-row justify-between items-center h-40 px-10 md:px-60 py-7 w-full z-50 bg-madureira-700">
        <Image width={'80%'} height={'80%'} src="/img/logo-white.svg" alt="logo ad arse 112" />
        <nav className="hidden gap-10 text-2xl text-white items-center tracking-widest">
          {menuNavs.map((item, index) => (
            <a key={index} href={item.link}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="space-y-2">
          <div className="w-14 h-1 bg-white"></div>
          <div className="w-14 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
