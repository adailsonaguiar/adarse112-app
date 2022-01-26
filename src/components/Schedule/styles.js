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
`;

export const Card = styled.div`
  min-width: 157px;
  border-radius: 0.2rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%);
  background: #fff;
  cursor: pointer;
  animation: all 0.5s ease-in-out;

  & h4 {
    font-size: 1.2em;
    line-height: 3rem;
    color: var(--color-primary);
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

  &:hover {
    h4 {
      color: var(--color-btn-success);
    }
  }
`;
