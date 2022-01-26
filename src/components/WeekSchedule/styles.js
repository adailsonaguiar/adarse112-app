import styled, { css } from "styled-components";

export const Caroulsel = styled.div`
  padding: 7rem 0 1rem 0;
`;

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

const modalModfiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `,
};

export const Modal = styled.div`
  ${({ visible, theme }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--elevation-z-top);
    ${!!visible && modalModfiers.open()}
    ${!visible && modalModfiers.close()}

    & img {
      max-width: 100%;
      max-height: 77%;
    }
  `}
`;
