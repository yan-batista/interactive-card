import styled from "styled-components";
import { devices } from "../../styles/devices";

export const Container = styled.div`
  position: relative;

  @media ${devices.desktop} {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
`;

export const Background = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 200px;
  width: 100%;

  @media ${devices.desktop} {
    height: 100vh;
    width: 35%;
  }
`;
