import styled from "styled-components";

export const Card = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  height: calc(100vh - 100px);
  width: 90%;
  max-width: 1080px;
  margin: auto;
  padding-bottom: 3rem;

  .info-wrapper {
    color: #fff;
    margin-right: 8rem;

    & h2 {
      font-weight: 700;
      font-size: 56px;
    }

    & p {
      font-weight: 600;
      font-size: 25px;
    }
  }

  .banner {
    max-width: 50%;
    height: 90%;

    -webkit-box-shadow: 34px 34px 0px #ffffff;
    box-shadow: 34px 34px 0px #ffffff;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .banner {
      height: 45%;
      max-width: 100%;
      -webkit-box-shadow: 15px 15px 0px #ffffff;
      box-shadow: 15px 15px 0px #ffffff;
    }

    .info-wrapper {
      margin-right: 0;
      margin-bottom: 5rem;

      & h2 {
        font-size: 4rem;
      }

      & p {
        font-size: 1.8rem;
      }
    }
  }
`;
