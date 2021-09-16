import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

import { ContentWrapper } from "../ContentWrapper";
import { Heading } from "../Heading";
import * as S from "./styles";

function Offers() {
  async function copyPix() {
    const inputPix = document.getElementById('copyText')
    inputPix.select();
    document.execCommand("copy");
    await MySwal.fire({
      title: <strong>Copiado!</strong>,
      html: <i>Cole na área PIX do seu app bancário</i>,
      icon: "success",
      confirmButtonColor: "#00155e",
    });
  }

  return (
    <S.Container>
      <Heading>Dízimos e Ofertas</Heading>

      <ContentWrapper>
        <div className="container">
          <div className="grid">
            <div className="pix">
              <S.NameOption>Transferência PIX</S.NameOption>
              <img className="qrcode" src="/img/pixqr.jpeg" alt="qrcode" />
              <S.InfoOption>
                Abra o app do seu banco e toque na área de PIX, depois leia esse
                QRCode
              </S.InfoOption>

              <S.TextField
                type="text"
                id="copyText"
                value="adarse112@gmail.com"
                readOnly="readonly"
              />
              <S.InfoOption>
                Se preferir você pode somente copiar esse email e colar na área
                de PIX - E-mail no app do seu banco
              </S.InfoOption>
              <S.Button onClick={copyPix}>
                <i className="ph-copy"></i>COPIAR CHAVE PIX
              </S.Button>
            </div>
            <div className="bank">
              <S.NameOption>Transferência Bancária</S.NameOption>
              <S.SubtitleOffer>Banco do Brasil</S.SubtitleOffer>
              <S.InfoOption>Ag 3962-4</S.InfoOption>
              <S.InfoOption>Cc 27556-5</S.InfoOption>
              <S.SubtitleOffer>Outras Opções</S.SubtitleOffer>
              <S.InfoOption>
                Nossa tesouraria - de segunda a sexta das
                <strong> 08:00 às 10:00</strong> <br />e durante os cultos
              </S.InfoOption>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </S.Container>
  );
}

export default Offers;
