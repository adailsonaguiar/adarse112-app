import React, { useState } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = React.useState(false);
  const menuNavs = [
    { label: "Home", link: "/" },
    { label: "Onde estamos", link: "/mapa" },
    { label: "Rádio Paz FM", link: "/radio" },
    { label: "Nossa igreja", link: "/history" },
  ];

  return (
    <>
      <header
        id="head"
        className="fixed top-0 flex flex-row justify-between items-center h-40 px-10 md:px-60 py-7 w-full z-20 bg-madureira-700 scrollHide border-b-[0.2rem] border-white/20"
      >
        <Link href="/" passHref>
          <Image
            className="cursor-pointer"
            width={"80%"}
            height={"80%"}
            src="/img/logo-white.svg"
            alt="logo ad arse 112"
          />
        </Link>
        <nav className="hidden md:flex gap-10 md:text-xl lg:text-2xl text-white items-center tracking-widest uppercase">
          {menuNavs.map((item, index) => (
            <a key={index} href={item.link}>
              {item.label}
            </a>
          ))}
        </nav>
        <div
          className="space-y-2 cursor-pointer md:hidden"
          onClick={() => setIsOpenMobileMenu((r) => !r)}
        >
          <div className="w-14 h-1 bg-white"></div>
          <div className="w-14 h-1 bg-white"></div>
          <div className="w-8 h-1 bg-white"></div>
        </div>
      </header>
     
      <div
        className={`fixed bg-madureira-700 left-0 top-0 right-0 bottom-0 z-30 transition-opacity ease-in-out delay-100 pointer-events-none ${
          isOpenMobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0"
        } `}
        onClick={() => setIsOpenMobileMenu((r) => !r)}
      >
        <div className="flex h-40 bg-madureira-700 items-center justify-between px-10">
          <Link href="/" passHref>
            <Image
              className="cursor-pointer"
              width={"80%"}
              height={"80%"}
              src="/img/logo-white.svg"
              alt="logo ad arse 112"
            />
          </Link>
          <XMarkIcon className="h-20 text-white cursor-pointer" />
        </div>
        <nav className="flex flex-col text-2xl text-white items-center tracking-widest">
          {menuNavs.map((item, index) => (
            <a key={index} href={item.link} className="py-5 border-b-[0.1rem] border-white/20 w-full text-center last:border-b-0 uppercase">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;
