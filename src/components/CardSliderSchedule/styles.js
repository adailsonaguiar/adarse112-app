import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50rem;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ModalImage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  z-index: 999;
`;
