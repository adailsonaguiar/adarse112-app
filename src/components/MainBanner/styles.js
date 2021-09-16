import styled from "styled-components";
import { ContentWrapper } from "../ContentWrapper";

export const BannerSection = styled.div`
  position: relative;
  width: 100%;

  & img {
    width: 100%;
    height: 47rem;
    object-fit: cover;
  }

  & .overlay-image {
    width: 100%;
    height: 100%;
    z-index: var(--elevation-z-base);
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
  }

  & ${ContentWrapper} {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    z-index: var(--elevation-z-inter);
  }

  & h1 {
    font-size: 5rem;
    letter-spacing: 7px;
    text-transform: uppercase;
  }

  & h3 {
    font-size: 2rem;
    letter-spacing: 18px;
    text-transform: uppercase;
    margin-top: 2rem;
  }

  @media (max-width: 760px) {
    & h1 {
      font-size: 2rem;
    }

    & h3 {
      font-size: 1.2rem;
      letter-spacing: 11px;
    }
  }
`;
