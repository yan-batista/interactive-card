import styled from "styled-components";
import { devices } from "../../styles/devices";

const Card = styled.div<{ imageSrc: string }>`
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  border-radius: 8px;

  width: 275px;
  height: 137px;

  position: absolute;

  & span,
  & h1 {
    color: white;
    font-size: 10px;
    letter-spacing: 1px;
  }

  @media ${devices.desktop} {
    width: 400px;
    height: 200px;

    & span {
      font-size: 13px;
    }
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  top: -110px;
  left: 5%;
  max-width: 10px;
  max-height: 10px;

  @media ${devices.desktop} {
    top: 45%;
    left: -250px;
  }
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const CardFront = styled(Card)`
  z-index: 1;

  & .card-number {
    position: absolute;
    top: 55%;
    left: 5%;

    font-size: 18px;
    letter-spacing: 2px;
  }

  & > .bottom-info {
    position: absolute;
    top: 80%;
    left: 5%;

    width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${devices.desktop} {
    top: -155px;

    & .card-number {
      font-size: 20px;
    }

    & > .bottom-info {
      top: 80%;
    }
  }
`;

export const CardBack = styled(Card)`
  top: -85px;
  left: 60px;

  z-index: 0;

  & > .cvc {
    position: absolute;
    top: 60px;
    left: 80%;
  }

  @media ${devices.desktop} {
    top: 75px;
    left: 60px;

    & > .cvc {
      top: 93px;
      font-size: 12px;
    }
  }
`;

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 60px;
  position: absolute;
  top: 10%;
  left: 5%;
`;
