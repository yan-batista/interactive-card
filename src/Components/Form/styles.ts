import styled from "styled-components";
import { colors } from "../../styles/global";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  width: 90%;
`;

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 0;
`;

export const DateContainer = styled(LabelInputContainer)`
  flex-direction: row;

  .card-exp-date-container {
    min-width: 50%;
  }

  .card-cvc-container {
    min-width: 50%;
  }

  & .card-date {
    display: flex;
    flex-direction: row;

    & > input {
      min-width: 50px;
    }

    & > input:not(:first-child) {
      margin: 0 10px;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  letter-spacing: 2px;

  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid grey;
  border-radius: 8px;

  padding: 8px;

  //Hide arrows for input type number
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  //Hide arrows for input type number for Firefox
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;

  border-radius: 8px;
  border: 1px solid ${colors.veryDarkViolet};
  background-color: ${colors.veryDarkViolet};
  color: white;
`;
