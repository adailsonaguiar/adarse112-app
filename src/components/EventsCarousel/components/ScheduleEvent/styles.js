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
    color: #282828;

    & h2 {
      font-weight: 600;
      font-size: 5rem;
    }

    & p {
      font-weight: 500;
      font-size: 2rem;
      line-height: 3rem;
      color: #666;
    }
  }

  .banner {
    max-width: 50%;
    max-height: 90%;
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
        font-size: 3.5rem;
      }

      & p {
        font-size: 1.8rem;
      }
    }
  }
`;
