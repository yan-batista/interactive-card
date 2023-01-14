import { createGlobalStyle } from "styled-components";

export const colors = {
  linearGradient: "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
  redError: "hsl(0, 100%, 66%)",
  white: "hsl(0, 0%, 100%)",
  lightViolet: "hsl(270, 3%, 87%)",
  darkViolet: "hsl(279, 6%, 55%)",
  veryDarkViolet: "hsl(278, 68%, 11%)",
};

export default createGlobalStyle`
    *, input, button {
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 18px;
        font-weight: 500;
        color: hsl(278, 94%, 30%);
    }

    .btn {
      width: 100%;
      padding: 10px;

      border-radius: 8px;
      border: 1px solid ${colors.veryDarkViolet};
      background-color: ${colors.veryDarkViolet};
      color: white;
    }
`;
