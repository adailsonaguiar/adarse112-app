import styled, { css } from "styled-components";
import { ContentWrapper } from "../ContentWrapper";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--elevation-z-inter);
  width: 100%;

  & header {
    display: flex;
    background-color: var(--color-white);
    height: 6.4rem;
    width: 100%;
    border-bottom: 1px solid var(--color-gray-800);
  }

  & .player-wrapper {
    & ${ContentWrapper} {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  @media screen and (max-width: 760px) {
    header nav {
      display: none;
    }
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 13.5rem !important;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 1rem;
  transform: translateY(0);
  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
`;

export const ItemNav = styled.a`
  color: var(--color-gray-800);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2.25px;
  text-transform: uppercase;
  margin-left: 2rem;
  padding: 0.7rem;
  border-radius: 0.5rem;

  &:hover {
    color: var(--color-btn-success);
  }
`;

export const ButtonMenuMobile = styled.a`
  cursor: pointer;
  @media screen and (min-width: 760px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  ${({ open }) => css`
    background-color: var(--color-white);
    height: 100vh;
    width: 100%;
    z-index: var(--elevation-z-top);
    position: fixed;
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? "all" : "none"};
    transition: opacity 150ms ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & .links {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & ${ItemNav} {
      font-size: 2.5rem;
      margin: 0;
    }
  `}

  .social {
    position: absolute;
    bottom: 8%;
    display: flex;
    gap: 1rem;
  }
`;
