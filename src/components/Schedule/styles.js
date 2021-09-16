import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-gray-100);
  padding: 7rem 0;

  & .horarios-wrapper {
    display: grid;
    grid-template-columns: Repeat(6, 1fr);
    grid-gap: 0.6rem;
  }

  /* /* @media (max-width: 1170px) {
    .cultos .horarios-wrapper {
      grid-template-columns: Repeat(3, 1fr);
    }
  } */

  @media (max-width: 1143px) {
    & .horarios-wrapper {
      grid-template-columns: Repeat(4, 1fr);
    }
  }

  @media (max-width: 760px) {
    & .horarios-wrapper {
      grid-template-columns: Repeat(3, 1fr);
    }
  }

  @media (max-width: 513px) {
    & .horarios-wrapper {
      grid-template-columns: Repeat(2, 1fr);
    }
  }
`;

export const Card = styled.div`
  min-width: 157px;
  border: 0.1rem solid #cecece;
  border-radius: 0.3rem;
  padding: 1rem 1.5rem;

  & h4 {
    font-size: 1.4rem;
    line-height: 3rem;
    color: var(--color-main-darker);
    font-weight: 600;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 1.4rem;
  }

  & p {
    font-size: 1.15rem;
    width: 100%;
    text-align: center;
    font-weight: 300;
  }
`;
