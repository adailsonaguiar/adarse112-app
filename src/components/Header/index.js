import React, { useState } from "react";

import { ContentWrapper } from "../ContentWrapper";

import * as S from "./styles";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuNavs = [
    { label: "Cultos", link: "#cultos" },
    { label: "Onde Estamos", link: "#onde-estamos" },
    { label: "Ofertas", link: "#dizimos" },
  ];

  return (
    <>
      <S.Container>
        <div className="player-wrapper">
          <ContentWrapper>
            <iframe
              src="https://adailsonaguiar.github.io/player-radio-paz"
              frameBorder="0"
              noresize="noresize"
              scrolling="no"
            ></iframe>
            <h3 className="radio-paz">Rádio Paz Palmas... | 89,9</h3>
          </ContentWrapper>
        </div>
        <header>
          <ContentWrapper>
            <S.HeadWrapper>
              <S.LogoWrapper>
                <img src="img/adarse112.png" alt="logo ad arse 112" />
              </S.LogoWrapper>
              <S.MenuNav>
                {menuNavs.map((item, index) => (
                  <S.ItemNav key={index} href={item.link}>
                    {item.label}
                  </S.ItemNav>
                ))}
              </S.MenuNav>
              <S.ButtonMenuMobile onClick={() => setOpenMenu(!openMenu)}>
                <span className="material-icons">menu</span>
              </S.ButtonMenuMobile>
            </S.HeadWrapper>
          </ContentWrapper>
        </header>
      </S.Container>
      <S.MenuWrapper open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <div className="links">
          {menuNavs.map((item, index) => (
            <S.ItemNav key={index} href={item.link}>
              {item.label}
            </S.ItemNav>
          ))}
        </div>
      </S.MenuWrapper>
    </>
  );
}

export default Header;
