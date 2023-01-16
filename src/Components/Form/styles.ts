import styled from "styled-components";
import { colors } from "../../styles/global";

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form<{ completeForm: boolean }>`
  width: 90%;
  margin-top: 50px;

  display: ${(props) => (props.completeForm ? "none" : "block")};
`;

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  & > input {
    text-transform: uppercase;
  }

  & .error-message {
    color: ${colors.redError};
    font-size: 14px;
  }
`;

export const DateContainer = styled(LabelInputContainer)`
  flex-direction: row;

  .card-exp-date-container {
    min-width: fit-content;
  }

  .card-cvc-container {
    min-width: 50%;

    display: flex;
    flex-grow: 1;
  }

  & .card-date {
    display: flex;
    flex-direction: row;
    width: fit-content;

    & input {
      min-width: 50px;
      max-width: 50px;
    }

    & input:not(:first-child) {
      margin: 0 10px;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  letter-spacing: 2px;

  margin-bottom: 5px;
`;

export const Input = styled.input<{ errorBorder: string }>`
  border: 1px solid ${(props) => props.errorBorder};
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

export const CompleteContainer = styled.div<{ completeForm: boolean }>`
  display: ${(props) => (props.completeForm ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  margin-top: 50px;

  & > img {
    margin-bottom: 35px;
  }

  & > h1 {
    letter-spacing: 3px;
    margin-bottom: 20px;
  }

  & > h4 {
    color: ${colors.darkViolet};
    letter-spacing: 1px;
    margin-bottom: 50px;
  }
`;
