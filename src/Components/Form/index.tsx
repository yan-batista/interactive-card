import React, { useState, useEffect } from "react";
import { Center, FormContainer, LabelInputContainer, DateContainer, Label, Input, CompleteContainer } from "./styles";
import { colors } from "../../styles/global";

// Images
import iconComplete from "../../../images/icon-complete.svg";

// Type
import { FormDataType } from "../../shared/types/FormData.type";

type Props = {
  formData: FormDataType;
  handleCardInfoChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

type FormErrorData = {
  cardNameError: string;
  cardNumberError: string;
  cardDateError: string;
  cardCvcError: string;
};

const renderForm = (formData: FormDataType, handleCardInfoChange: any) => {
  const [validation, setValidation] = useState<boolean>(false);
  const [cardErrors, setCardErrors] = useState<FormErrorData>({
    cardNameError: "",
    cardNumberError: "",
    cardDateError: "",
    cardCvcError: "",
  });
  //validation
  // check if card format number is valid
  // check if month format is valid
  // check if year format is valid
  // check if cvc format is valid
  const handleValidation = () => {
    const errorMessages = {
      cantBeEmpty: "Can't be blank",
      wrongFormat: {
        noLetters: "Numbers only",
        noNumbers: "Letters only",
        notEnoughCharacters: "Not enough characters",
        invalidDate: "Invalid Date",
      },
    };
    let errors: FormErrorData = {
      cardNameError: "",
      cardNumberError: "",
      cardDateError: "",
      cardCvcError: "",
    };
    // name
    // wrong format
    let regexp = new RegExp(/^([ \u00c0-\u01ffa-zA-Z\-])+$/);
    let validString = regexp.test(formData.cardName);
    if (!validString) {
      errors.cardNameError = errorMessages.wrongFormat.noNumbers;
    }

    // can't be blank
    if (formData.cardName.length <= 0) {
      errors.cardNameError = errorMessages.cantBeEmpty;
    }

    // card number
    // cant be wrong format
    regexp = new RegExp(/[0-9]{16}/);
    validString = regexp.test(formData.cardNumber.replace(/\s/g, ""));
    if (!validString) {
      errors.cardNumberError = errorMessages.wrongFormat.notEnoughCharacters;
    }

    // cant be blank
    if (formData.cardNumber.length <= 0) {
      errors.cardNumberError = errorMessages.cantBeEmpty;
    }

    // date
    // wrong format, invalid date
    const cardExpDate = `${formData.cardMonthDate}/${formData.cardYearDate}`;
    regexp = new RegExp(/^((0[1-9]|[1-9])|1[0-2])\/[0-9]{2}$/); // m/yy | mm/yy
    validString = regexp.test(cardExpDate);
    if (!validString) errors.cardDateError = errorMessages.wrongFormat.invalidDate;

    // wrong format, no letters
    regexp = new RegExp(/[a-zA-Z]/g);
    validString = !regexp.test(cardExpDate);
    if (!validString) errors.cardDateError = errorMessages.wrongFormat.noLetters;

    // cant be blank
    if (formData.cardMonthDate.length <= 0 || formData.cardYearDate.length <= 0) {
      errors.cardDateError = errorMessages.cantBeEmpty;
    }

    // cvc
    // wrong format, invalid cvc
    regexp = new RegExp(/^[0-9]{3}$/);
    validString = regexp.test(formData.cardCvc);
    if (!validString) errors.cardCvcError = errorMessages.wrongFormat.notEnoughCharacters;

    // wrong format, no letters
    regexp = new RegExp(/[a-zA-Z]/g);
    validString = !regexp.test(formData.cardCvc);
    if (!validString) errors.cardCvcError = errorMessages.wrongFormat.noLetters;

    // cant be blank
    if (formData.cardCvc.length <= 0) {
      errors.cardCvcError = errorMessages.cantBeEmpty;
    }

    // check if there are any errors
    const isValid = () => {
      for (const error in errors) {
        if (errors[error as keyof typeof errors] != "") return false;
      }
      return true;
    };

    setCardErrors(errors);

    return isValid();
  };

  return (
    <>
      <FormContainer
        completeForm={validation}
        onSubmit={(e) => {
          e.preventDefault();
          // only submits if is validated
          if (handleValidation()) {
            setValidation(true);
          }
        }}
      >
        <LabelInputContainer>
          <Label htmlFor="cardName">CARDHOLDER NAME</Label>
          <Input
            id="cardName"
            placeholder="e.g. Jane Appleseed"
            type="text"
            errorBorder={cardErrors.cardNameError !== "" ? `${colors.redError}` : "grey"}
            onChange={(e) => {
              handleCardInfoChange(e);
            }}
          ></Input>
          <span className="error-message">{cardErrors.cardNameError}</span>
        </LabelInputContainer>

        <LabelInputContainer className="card-number-container">
          <Label htmlFor="cardNumber">CARD NUMBER</Label>
          <Input
            id="cardNumber"
            errorBorder={cardErrors.cardNumberError !== "" ? `${colors.redError}` : "grey"}
            placeholder="e.g. 1234 5678 9123 000"
            maxLength={19}
            onChange={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9]/g, "")
                .replace(/(.{4})/g, "$1 ")
                .trim();
              handleCardInfoChange(e);
            }}
          ></Input>
          <span className="error-message">{cardErrors.cardNumberError}</span>
        </LabelInputContainer>

        <DateContainer className="card-exp-cvc-date-container">
          <LabelInputContainer className="card-exp-date-container">
            <Label htmlFor="cardMonthDate">EXP. DATE (MM/YY)</Label>
            <div className="card-date">
              <Input
                id="cardMonthDate"
                errorBorder={cardErrors.cardDateError !== "" ? `${colors.redError}` : "grey"}
                placeholder="MM"
                type="text"
                maxLength={2}
                onChange={(e) => {
                  handleCardInfoChange(e);
                }}
              ></Input>
              <Input
                id="cardYearDate"
                errorBorder={cardErrors.cardDateError !== "" ? `${colors.redError}` : "grey"}
                placeholder="YY"
                type="text"
                minLength={2}
                maxLength={2}
                onChange={(e) => {
                  handleCardInfoChange(e);
                }}
              ></Input>
            </div>
            <span className="error-message">{cardErrors.cardDateError}</span>
          </LabelInputContainer>

          <LabelInputContainer className="card-cvc-container">
            <Label htmlFor="cardCvc">CVC</Label>
            <Input
              id="cardCvc"
              errorBorder={cardErrors.cardCvcError !== "" ? `${colors.redError}` : "grey"}
              placeholder="e.g. 123"
              type="text"
              maxLength={3}
              onChange={(e) => {
                handleCardInfoChange(e);
              }}
            ></Input>
            <span className="error-message">{cardErrors.cardCvcError}</span>
          </LabelInputContainer>
        </DateContainer>

        <button className="btn">Confirm</button>
      </FormContainer>

      <CompleteContainer completeForm={validation}>
        <img src={iconComplete} />
        <h1>THANK YOU!</h1>
        <h4>We've added your card details</h4>
        <button className="btn">Continue</button>
      </CompleteContainer>
    </>
  );
};

const Form: React.FC<Props> = ({ formData, handleCardInfoChange }) => {
  return <Center>{renderForm(formData, handleCardInfoChange)}</Center>;
};

export default Form;
