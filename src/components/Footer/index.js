import React from "react";
import { ContentWrapper } from "../ContentWrapper";

import * as S from "./styles";

function Footer() {
  var menuNavs = [
    { label: "Cultos", link: "#cultos" },
    { label: "Onde Estamos", link: "#onde-estamos" },
    { label: "Ofertas", link: "#dizimos" },
  ];

  return (
    <S.Container>
      <ContentWrapper>
        <div className="row-wrapper">
          <div className="logo-wrapper">
            <a href="#">
              <img
                className="logo"
                src="/img/logo-ligth.png"
                alt="logo ad arse 112"
              />
            </a>
          </div>
          <S.Links>
            <nav>
              {menuNavs.map((item, index) => (
                <a key={index} href={item.link}>
                  {item.label}
                </a>
              ))}
            </nav>
          </S.Links>
        </div>
        <div className="row-wrapper">
          <S.SocialNetworks>
            <a
              href="https://instagram.com/adarse112"
              target="_blank"
              rel="noreferrer"
              title="Siga-nos no Instagram"
              data-footer="instagram"
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="icon icon--social fill-orange--base"
                style={{ width: "22px", height: "22px" }}
                viewBox="0 0 24 24"
              >
                <path d="M12 2.983c2.937 0 3.285.01 4.446.064 2.98.136 4.373 1.55 4.509 4.509.053 1.16.063 1.508.063 4.445 0 2.938-.01 3.285-.063 4.445-.137 2.956-1.525 4.373-4.51 4.509-1.16.053-1.506.064-4.445.064-2.937 0-3.285-.01-4.445-.064-2.988-.137-4.373-1.557-4.509-4.51-.053-1.16-.064-1.507-.064-4.445 0-2.937.012-3.284.064-4.445.137-2.958 1.525-4.373 4.51-4.509 1.16-.052 1.507-.063 4.444-.063zM12 1c-2.987 0-3.361.013-4.535.066-3.995.183-6.215 2.4-6.398 6.398C1.013 8.64 1 9.013 1 12c0 2.987.013 3.362.066 4.536.183 3.994 2.4 6.215 6.398 6.398C8.64 22.987 9.013 23 12 23c2.987 0 3.362-.013 4.536-.066 3.99-.183 6.216-2.4 6.397-6.398.054-1.174.067-1.549.067-4.536 0-2.987-.013-3.361-.066-4.535-.18-3.99-2.399-6.215-6.397-6.398C15.362 1.013 14.987 1 12 1zm0 5.351a5.649 5.649 0 100 11.298A5.649 5.649 0 0012 6.35zm0 9.316a3.666 3.666 0 110-7.333 3.666 3.666 0 010 7.333zm5.872-10.858a1.32 1.32 0 100 2.64 1.32 1.32 0 000-2.64z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/adarse112"
              target="_blank"
              rel="noreferrer"
              title="Se inscreva no nosso canal"
              data-footer="youtube"
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="icon icon--social fill-orange--base"
                style={{ width: "22px", height: "22px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M21.39 4.514a3.007 3.007 0 012.116 2.115c.514 1.878.494 5.793.494 5.793s0 3.894-.494 5.772a3.007 3.007 0 01-2.116 2.116c-1.878.494-9.39.494-9.39.494s-7.493 0-9.39-.514a3.007 3.007 0 01-2.116-2.116C0 16.316 0 12.402 0 12.402s0-3.895.494-5.773A3.068 3.068 0 012.61 4.494C4.488 4 12 4 12 4s7.513 0 9.391.514zm-5.535 7.888L9.608 16V8.804l6.247 3.598z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </S.SocialNetworks>
        </div>
      </ContentWrapper>
    </S.Container>
  );
}

export default Footer;
