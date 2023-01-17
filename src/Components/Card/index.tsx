import React from "react";
import { CardFront, CardBack, CardContainer, CardWrapper, Logo } from "./styles";

// Images
import CardFrontImg from "../../../images/bg-card-front.png";
import CardBackImg from "../../../images/bg-card-back.png";
import CardLogo from "../../../images/card-logo.svg";

// Type
import { FormDataType } from "../../shared/types/FormData.type";

type Props = {
  formData: FormDataType;
};

const Card: React.FC<Props> = ({ formData }) => {
  return (
    <CardWrapper>
      <CardContainer>
        <CardFront imageSrc={CardFrontImg}>
          <div className="logo">
            <Logo
              src={CardLogo}
              alt="credit card logo: 2 circles, one big filled with white, and another one smaller with just borders"
            />
          </div>
          <h1 className="card-number">{formData.cardNumber || "0000 0000 0000 0000"}</h1>
          <div className="bottom-info">
            <span className="card-name"> {formData.cardName || "NAME LASTNAME"} </span>
            <span className="card-date">
              {(formData.cardMonthDate || "MM") + "/" + (formData.cardYearDate || "YY")}
            </span>
          </div>
        </CardFront>
        <CardBack imageSrc={CardBackImg}>
          <span className="cvc">{formData.cardCvc || "000"}</span>
        </CardBack>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
