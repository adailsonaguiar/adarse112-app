import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const H2 = styled.h2`
  font-size: 3.4rem;
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
`;

const Line = styled.div`
  margin-top: 1rem;
  background: var(--color-primary);
  height: 0.13rem;
  width: 5rem;
`;

export const Heading = ({ children }) => {
  return (
    <Container>
      <H2>{children}</H2>
      <Line />
    </Container>
  );
};
