import styled from "styled-components";

export const Caroulsel = styled.div`
  padding: 1rem 0;
  background: #355ca1;

  .slick-dots {
    position: absolute;
    bottom: 0;

    li button::before {
      font-size: 20px;
      color: #fff;
    }
  }

  .slick-arrow {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #ffffff2e;
    position: absolute;
    z-index: 5;

    & svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }
  }

  & .slick-prev {
    left: 20px;
  }

  & .slick-next {
    right: 20px;
  }

  & .slick-next::before {
    content: none;
  }

  & .slick-prev::before {
    content: none;
  }

  @media (max-width: 800px) {
    .slick-arrow {
    width: 50px;
    height: 50px;

    & svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }
  }

    & .slick-prev {
      top: 96%;
      left: 10px;
    }

    & .slick-next {
      top: 96%;
      right: 10px;
    }
`;