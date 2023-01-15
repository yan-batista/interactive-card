import React from "react";
import { Center, FormContainer, LabelInputContainer, DateContainer, Label, Input, CompleteContainer } from "./styles";

// Images
import iconComplete from "../../../images/icon-complete.svg";

// Type
import { FormDataType } from "../../shared/types/FormData.type";

type Props = {
  formData: FormDataType;
  handleCardInfoChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

const renderForm = (handleCardInfoChange: any) => {
  return (
    <FormContainer>
      <LabelInputContainer>
        <Label htmlFor="cardName">CARDHOLDER NAME</Label>
        <Input
          id="cardName"
          placeholder="e.g. Jane Appleseed"
          type="text"
          onChange={(e) => {
            handleCardInfoChange(e);
          }}
          onKeyDown={(e) => {
            const regexp = new RegExp(/^([ \u00c0-\u01ffa-zA-Z\-])+$/);
            const validChar = regexp.test(e.key);
            if (!validChar) e.preventDefault();
          }}
        ></Input>
      </LabelInputContainer>

      <LabelInputContainer className="card-number-container">
        <Label htmlFor="cardNumber">CARD NUMBER</Label>
        <Input
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 000"
          maxLength={19}
          onChange={(e) => {
            e.target.value = e.target.value
              .replace(/[^\dA-Z]/g, "")
              .replace(/(.{4})/g, "$1 ")
              .trim();
            handleCardInfoChange(e);
          }}
          onKeyDown={(e) => {
            if (e.key !== "Backspace") {
              const regexp = new RegExp(/^([0-9])+$/);
              const validChar = regexp.test(e.key);
              if (!validChar) e.preventDefault();
            }
          }}
        ></Input>
      </LabelInputContainer>

      <DateContainer className="card-exp-cvc-date-container">
        <LabelInputContainer className="card-exp-date-container">
          <Label htmlFor="cardMonthDate">EXP. DATE (MM/YY)</Label>
          <div className="card-date">
            <Input
              id="cardMonthDate"
              placeholder="MM"
              type="text"
              maxLength={2}
              onChange={(e) => {
                handleCardInfoChange(e);
              }}
            ></Input>
            <Input
              id="cardYearDate"
              placeholder="YY"
              type="text"
              minLength={2}
              maxLength={2}
              onChange={(e) => {
                handleCardInfoChange(e);
              }}
            ></Input>
          </div>
        </LabelInputContainer>

        <LabelInputContainer className="card-cvc-container">
          <Label htmlFor="cardCvc">CVC</Label>
          <Input
            id="cardCvc"
            placeholder="e.g. 123"
            type="text"
            maxLength={3}
            onChange={(e) => {
              handleCardInfoChange(e);
            }}
          ></Input>
        </LabelInputContainer>
      </DateContainer>

      <button className="btn">Confirm</button>
    </FormContainer>
  );
};

const renderCompleteForm = () => {
  return (
    <CompleteContainer>
      <img src={iconComplete} />
      <h1>THANK YOU!</h1>
      <h4>We've added your card details</h4>
      <button className="btn">Continue</button>
    </CompleteContainer>
  );
};

const Form: React.FC<Props> = ({ formData, handleCardInfoChange }) => {
  return <Center>{renderForm(handleCardInfoChange)}</Center>;
};

export default Form;
