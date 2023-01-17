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
