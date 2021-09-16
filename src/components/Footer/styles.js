import styled from "styled-components";
import { ContentWrapper } from "../ContentWrapper";

export const Container = styled.footer`
  background-color: var(--color-primary);
  padding: 2rem 0;

  & .logo-wrapper {
    display: flex;
    align-items: center;
  }

  & .logo {
    width: 13.5rem;
  }

  & ${ContentWrapper} {
    padding: 3rem 0;
  }

  & .row-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    flex-direction: row;
  }
`;

export const Links = styled.footer`
  & a {
    text-decoration: none;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 2.25px;
    text-decoration: none;
    margin-left: 2rem;
    color: var(--color-white);
  }

  @media screen and (max-width: 760px) {
    /* footer .container .row-wrapper {
      display: flex;
      flex-direction: column;
    } */

    & nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem 0;
    }
  }
`;

export const SocialNetworks = styled.div`
  & a {
    margin-right: 1rem;
  }

  & svg {
    fill: #fff;
  }

  & svg:hover {
    fill: var(--color-btn-success);
  }
`;
