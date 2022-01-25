import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-gray-100);
  padding: 5rem 0;

  & .horarios-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 0.6rem;
    width: 100%;
  }

  /* /* @media (max-width: 1170px) {
    .cultos .horarios-wrapper {
      grid-template-columns: Repeat(3, 1fr);
    }
  } */

  @media (max-width: 1143px) {
    & .horarios-wrapper {
      /* grid-template-columns: Repeat(4, 1fr); */
    }
  }

  @media (max-width: 760px) {
    & .horarios-wrapper {
      /* grid-template-columns: Repeat(3, 1fr); */
    }
  }

  @media (max-width: 513px) {
    & .horarios-wrapper {
      /* grid-template-columns: Repeat(2, 1fr); */
    }
  }
`;

export const Card = styled.div`
  min-width: 157px;
  border-radius: 0.2rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%);
  background: #fff;

  & h4 {
    font-size: 1.2em;
    line-height: 3rem;
    color: var(--color-btn-success);
    text-transform: uppercase;
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
