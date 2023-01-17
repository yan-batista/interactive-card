import styled from "styled-components";
import { devices } from "../../styles/devices";

const Background = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 200px;
  width: 100%;

  @media ${devices.desktop} {
    height: 100vh;
    width: 35%;
  }
`;

export const DesktopBackground = styled(Background)`
  display: none;

  @media ${devices.desktop} {
    display: flex;
  }
`;

export const MobileBackground = styled(Background)`
  display: flex;

  @media ${devices.desktop} {
    display: none;
  }
`;
