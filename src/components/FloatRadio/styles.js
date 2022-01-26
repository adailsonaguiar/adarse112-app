import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 10%;
  background: var(--color-primary);
  width: 20rem;
  height: 6rem;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  -webkit-box-shadow: 2px 2px 21px -5px #000000;
  box-shadow: 2px 2px 21px -5px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
  & .info-radio {
    font-weight: 700;
    font-size: 13px;
    color: #fff;
  }

  & iframe {
    height: 50px;
    width: 50px;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;
