import React from "react";
import { Options, ContactFooter } from "../../section";
import { StyledDiv } from "./Main.styled";
import { FixedHeightForParallax } from "../../components";

function MobileMain({ ...props }) {
  return (
    <div className="mobile-main">
      <FixedHeightForParallax />
      <StyledDiv className="home-page">
        <Options className="home-options" {...props} />
      </StyledDiv>
      <ContactFooter className="home-contect-footer" {...props} />
    </div>
  );
}

export default MobileMain;
