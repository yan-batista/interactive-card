import React from "react";
import { CardFront, CardBack, CardContainer, CardWrapper, Logo } from "./styles";

import CardFrontImg from "../../../images/bg-card-front.png";
import CardBackImg from "../../../images/bg-card-back.png";
import CardLogo from "../../../images/card-logo.svg";

const Card = () => {
  return (
    <CardWrapper>
      <CardContainer>
        <CardFront imageSrc={CardFrontImg}>
          <div className="logo">
            <Logo src={CardLogo} />
          </div>
          <span className="card-number">0000 0000 0000 0000</span>
          <div className="bottom-info">
            <span className="card-name">JANE APPLESEED</span>
            <span className="card-date">00/00</span>
          </div>
        </CardFront>
        <CardBack imageSrc={CardBackImg}>
          <span className="cvc">000</span>
        </CardBack>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
