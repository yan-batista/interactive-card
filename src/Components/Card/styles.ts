import styled from "styled-components";

const Card = styled.div<{ imageSrc: string }>`
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  border-radius: 8px;

  width: 275px;
  height: 137px;

  position: absolute;

  & span {
    color: white;
    font-size: 10px;
    letter-spacing: 1px;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  top: -110px;
  left: 5%;
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const CardFront = styled(Card)`
  z-index: 1;

  & .card-number {
    position: absolute;
    top: 50%;
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
`;

export const CardBack = styled(Card)`
  top: -85px;
  left: 60px;

  z-index: 0;

  & > .cvc {
    position: absolute;
    top: 60px;
    left: 78%;
  }
`;

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 60px;
  position: absolute;
  top: 10%;
  left: 5%;
`;
