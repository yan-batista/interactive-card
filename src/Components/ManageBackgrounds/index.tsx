import React from "react";

import { MobileBackground, DesktopBackground } from "./styles";

// Images
import mobileBackground from "../../../images/bg-main-mobile.png";
import desktopBackground from "../../../images/bg-main-desktop.png";

const ManageBackgrounds = () => {
  return (
    <>
      <MobileBackground src={mobileBackground} alt="mobile background image that is a purple gradient" />
      <DesktopBackground src={desktopBackground} alt="desktop background image that is a purple gradient" />
    </>
  );
};

export default ManageBackgrounds;
