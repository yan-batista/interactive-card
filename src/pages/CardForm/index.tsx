import React, { useState } from "react";

// Images
import mobileBackground from "../../../images/bg-main-mobile.png";

// Components
import Form from "../../Components/Form/index";
import Card from "../../Components/Card/index";
import { Container, Background } from "./styles";

// Type
import { FormDataType } from "../../shared/types/FormData.type";

const CardForm = () => {
  const formDataInitialState = {
    cardName: "",
    cardNumber: "",
    cardMonthDate: "",
    cardYearDate: "",
    cardCvc: "",
    errors: { cardNameError: "" },
  };
  const [formData, setFormData] = useState<FormDataType>(formDataInitialState);

  const handleCardInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value.toString().toUpperCase(),
      };
    });
  };

  const resetFormState = () => {
    setFormData(formDataInitialState);
  };

  return (
    <Container>
      <Background src={mobileBackground}></Background>
      <Card formData={formData} />
      <Form formData={formData} handleCardInfoChange={handleCardInfoChange} resetFormState={resetFormState} />
    </Container>
  );
};

export default CardForm;
