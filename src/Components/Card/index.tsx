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
            <Logo src={CardLogo} />
          </div>
          <span className="card-number">{formData.cardNumber}</span>
          <div className="bottom-info">
            <span className="card-name"> {formData.cardName} </span>
            <span className="card-date"> {`${formData.cardMonthDate}/${formData.cardYearDate}`} </span>
          </div>
        </CardFront>
        <CardBack imageSrc={CardBackImg}>
          <span className="cvc">{formData.cardCvc}</span>
        </CardBack>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
