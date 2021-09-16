import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-gray-100);
  padding: 7rem 0;

  & .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 3rem;
  }

  & .pix {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--color-main-darker);
    border-radius: 0.7rem;
    padding: 5rem 4rem;
    -webkit-box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.5);
    color: var(--color-gray-200);
  }

  & .bank {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--color-main-darker);
    border-radius: 0.7rem;
    padding: 5rem 4rem;
    -webkit-box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.5);
    color: var(--color-gray-200);
  }

  & .qrcode {
    width: 14rem;
  }

  @media (max-width: 760px) {
    & .grid {
      grid-template-columns: 1fr;
    }

    & .pix {
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 900px) {
    section.ofertas .pix {
      padding: 5rem 2rem;
    }

    section.ofertas .bank {
      padding: 5rem 2rem;
    }
  }
`;

export const NameOption = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  width: 100%;
  color: var(--color-white);
  text-align: center;
`;

export const SubtitleOffer = styled.h3`
  font-size: 2rem;
  color: var(--color-gray-200);
`;

export const InfoOption = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  margin-top: 0.6rem;
  text-align: center;
`;

export const TextField = styled.input`
  height: 5rem;
  border: 1px solid rgb(220 220 220);
  border-radius: 0.6rem;
  margin-top: 2rem;
  padding: 0.2rem 0.9rem;
  outline: none;
`;

export const Button = styled.button`
  background: var(--color-btn-success);
  border: 0;
  height: 4.6rem;
  padding: 0 11rem;
  border-radius: 0.6rem;
  color: var(--color-white);
  font-weight: 600;
  margin-top: 2rem;
  cursor: pointer;
  transition: background 250ms ease-in-out;
  font-size: 1.3rem;

  &:hover {
    background: #2732ad;
  }

  @media (max-width: 760px) {
    font-size: 1.1rem;
    padding: 0 5rem;
  }
`;
