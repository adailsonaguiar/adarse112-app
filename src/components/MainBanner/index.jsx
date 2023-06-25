import React from "react";
import { ContentWrapper } from "../ContentWrapper";
import Link from "next/link";

function MainBanner({ links }) {
  console.log({ links });
  return (
    <section className="h-screen w-full bg-black bg-gradient-to-r from-madureira-700 to-madureira-600">
      {/* <img className="h-full w-full opacity-10 object-cover" src="/img/bg.jpg" alt="" /> */}
      <div
        style={{ backgroundImage: "url('/img/bg.jpg')" }}
        className="w-full h-full bg-no-repeat bg-cover bg-center opacity-20 flex items-center justify-center"
      ></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex  flex-col items-center lg:justify-center py-20">
        <img
          className="w-44 pb-10 lg:w-1/7"
          src="img/logo-white.svg"
          alt="logo ad arse 112"
        />
        <h1 className="text-white opacity-100 text-7xl lg:text-7xl tracking-widest font-black">
          AD ARSE 112
        </h1>
        <p className="text-white opacity-100 tracking-widest font-light text-4xl lg:text-4xl mb-10">
          A IGREJA DA COMUNHÃO
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full lg:w-1/2 px-10">
          {links.map((item, index) => (
            <Link
              key={index + item.label}
              href={item.link}
              
            >
              <div className="flex items-center justify-center border-white border-2 text-white px-3 rounded-lg py-10 tracking-widest font-medium text-xl hover:bg-white hover:text-madureira-700 cursor-pointer">{item.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    // <S.BannerSection>
    //   <div className="overlay-image"></div>
    //   <img src="https://lh3.googleusercontent.com/pw/AJFCJaXkdxzPl4G62y1UjR8WeP5xNALfVvilluEcqyUsTBki046RYA1E8OhclFAPwwKVcSrWqbIzXorLl2p2rkxS0dcXFeMJZuMv8AJ3iIehjVN_LAsGR2iu7UqMK91SPRGP_W890Uzrh4EZiQqLe4cvz7EewuJ1XvERjqdPmQq_E-pTwX8xRllxHfU7uOoj-W4fnb7qLCNVEoiOZGzEZjdpYmaz3DhqofFXYtQdZoeC--HjvGWsFe838mqNYRoeFQCXoczaZkDXAVMjzXmJRBZH7PwgVB0nvpxZDz6vCX8jEi1GXhiRBA5NlC6-1wXTk6pJPJ6sYFD_X0t4k5Q8n4WnaBSG_SOx6Sc3wAuD0iXFxTJWrr9uLHv7plfqDJ7lty3pX9lkCR_Cy2DJKTKcE3WX3VAiKk-tUyw0CcaGXH61wuC8-oIt4UAUfiRlsreYbeaaZMoISXjbhqkn-6mB3bsbv7BJ-hz4FxqY-G92FvQ4Ou18TfOUsxBHueEIStC4SR5e2NLEoahKGEfEv5dD8dDswu7KgWuR8cU85iNlWUI7psXL1db3ey_Zjtv8N98ijkuvznUbT45j1Bx0oTu4nhyShUhvQ-MySeFZUFLxCpZjVGhm3wFg3Y4HE1B8PSlBIe6L0s3DvsOSIiH40ZNQxfqjiQVCHb0XrnxAxEMZnz9RvH19gJnSWwenC_XP3tkN1X7P9zI3vwbjL-n48hzocAo03zjO0o82zFPyP__86Q7vBlbi91zT71KiPpnoiPJd9Cj3LhVS6wIerBTH0a1X9HONwgJXPXcD-fctVYThS0Si3RuxgU92ZKAaXj5ZeBQfm6yaHA0UtsFFh4DFFXXJZFkSqHgphm8Ye-KZWZd7M-UCflIorjy5fa9l8gdWkTkcIFfB4N-KmVOOimaUcKzN46hVuDpg83hVDjG0xUbcKeF0d6Fx3Jc3zYtbYYVBi_dQhA=w1301-h976-s-no?authuser=0" alt="" />
    //   <ContentWrapper>
    //     <h1>Nação Madureira - AD ARSE 112</h1>
    //     <h3>A IGREJA DA COMUNHÃO</h3>
    //   </ContentWrapper>
    // </S.BannerSection>
  );
}

export default MainBanner;
