import React from "react";

import { Center, FormContainer, LabelInputContainer, DateContainer, Label, Input, Button } from "./styles";

const Form = () => {
  return (
    <Center>
      <FormContainer>
        <LabelInputContainer>
          <Label htmlFor="card-name">CARDHOLDER NAME</Label>
          <Input id="card-name" placeholder="e.g. Jane Appleseed" type="text"></Input>
        </LabelInputContainer>

        <LabelInputContainer className="card-number-container">
          <Label htmlFor="card-number">CARD NUMBER</Label>
          <Input id="card-number" placeholder="e.g. 1234 5678 9123 000"></Input>
        </LabelInputContainer>

        <DateContainer className="card-exp-cvc-date-container">
          <LabelInputContainer className="card-exp-date-container">
            <Label htmlFor="card-exp-month">EXP. DATE (MM/YY)</Label>
            <div className="card-date">
              <Input id="card-exp-month" placeholder="MM" type="number" min={1} max={12}></Input>
              <Input id="card-exp-year" placeholder="YY"></Input>
            </div>
          </LabelInputContainer>

          <LabelInputContainer className="card-cvc-container">
            <Label htmlFor="card-cvc">CVC</Label>
            <Input id="card-cvc" placeholder="e.g. 123" type="number" max={999}></Input>
          </LabelInputContainer>
        </DateContainer>

        <Button>Confirm</Button>
      </FormContainer>
    </Center>
  );
};

export default Form;
