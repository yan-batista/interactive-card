import React from "react";

// images
import mobileBackground from "../../../images/bg-main-mobile.png";

// components
import Form from "../../Components/Form/index";
import Card from "../../Components/Card/index";
import { Container, Background } from "./styles";

const CardForm = () => {
  return (
    <Container>
      <Background src={mobileBackground}></Background>
      <Card />
      <Form />
    </Container>
  );
};

export default CardForm;
