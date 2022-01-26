import styled from "styled-components";
import { ContentWrapper } from "../ContentWrapper";

export const PastorWrapper = styled.div`
  .section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  ${ContentWrapper} {
    align-items: flex-start;
    padding: 7rem 0 0 0;
  }

  & .pastor-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  & img {
    height: 35rem;
    align-self: flex-end;
  }

  @media (max-width: 760px) {
    & .pastor-wrapper {
      flex-direction: column;
    }

    & img {
      height: 20rem;
      align-self: center;
    }
  }
`;

export const PastorInfo = styled.p`
  padding: 0 7rem 0 0;
  font-size: 1.5rem;
  line-height: 4rem;
  font-weight: 500;
  color: var(--color-gray-700);

  @media (max-width: 760px) {
    padding: 0;
  }
`;
