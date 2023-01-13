import React from "react";

// images
import mobileBackground from "../../../images/bg-main-mobile.png";

// components
import Form from "../../Components/Form/index";

const CardForm = () => {
  return (
    <>
      <img src={mobileBackground}></img>
      <Form />
    </>
  );
};

export default CardForm;
