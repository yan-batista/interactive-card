import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Background = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 200px;
  width: 100%;
`;
