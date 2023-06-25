import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

import { SectionWrapper } from "../SectionWrapper";

function Offers() {
  async function copyPix() {
    const inputPix = document.getElementById("copyText");
    inputPix.select();
    document.execCommand("copy");
    await MySwal.fire({
      title: <strong>Copiado!</strong>,
      html: <i>Cole na área PIX do seu app bancário</i>,
      icon: "success",
      confirmButtonColor: "#4e9cb5",
    });
  }

  return (
    <SectionWrapper title="DÍZIMOS E OFERTAS" style="bg-neutral-200">
      {/* <S.Container> */}
      {/* <ContentWrapper> */}
      <div className="grid px-20 md:grid-cols-2 md:px-96">
        <div className="flex flex-col items-center mb-16">
          <h3 className="font-bold text-4xl mb-10">Transferência PIX</h3>
          <img className="w-60 mb-5" src="/img/pixqr.jpeg" alt="qrcode" />
          <p className="text-lg mb-5 text-center">
            Abra o app do seu banco e toque na área de PIX, depois leia esse
            QRCode
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              id="copyText"
              value="adarse112@gmail.com"
              readOnly="readonly"
              className="w-full md:w-96 h-20 text-lg font-semibold px-5 rounded-md"
            />
            <button
              className="bg-madureira-100 px-10 rounded-md text-white"
              onClick={copyPix}
            >
              <i className="ph-copy"></i>COPIAR CHAVE
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mb-16">
          <h3 className="font-bold text-4xl mb-10">Transferência Bancária</h3>
          <p className="font-bold text-3xl text-madureira-100 mb-2">
            Banco do Brasil
          </p>
          <p className="font-medium text-xl">Ag 3962-4</p>
          <p className="font-medium text-xl">Cc 27556-5</p>
          <p className="font-bold text-3xl text-madureira-100 mb-2">
            Outras Opções
          </p>
          <p className="font-medium text-xl text-center">
            Nossa tesouraria - de segunda a sexta das
            <strong> 08:00 às 10:00</strong> <br />e durante os cultos
          </p>
        </div>
      </div>
      {/* </ContentWrapper> */}
      {/* </S.Container> */}
    </SectionWrapper>
  );
}

export default Offers;
