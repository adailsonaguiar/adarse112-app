import styled from "styled-components";
import { ContentWrapper } from "../ContentWrapper";

export const SectionWrapper = styled.div`
  width: 100%;

  ${ContentWrapper} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
