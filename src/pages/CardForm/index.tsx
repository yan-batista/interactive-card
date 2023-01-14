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
  const [formData, setFormData] = useState<FormDataType>({
    cardName: "NAME LASTNAME",
    cardNumber: "0000 0000 0000 0000",
    cardMonthDate: "01",
    cardYearDate: "2023",
    cardCvc: "000",
  });

  const handleCardInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <Container>
      <Background src={mobileBackground}></Background>
      <Card formData={formData} />
      <Form formData={formData} handleCardInfoChange={handleCardInfoChange} />
    </Container>
  );
};

export default CardForm;
