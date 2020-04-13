import React from "react";
import { StyledDiv } from "./FixedHeightForParallax.styled";
import { WelcomeLogo } from "../../components/";

function FixedHeightForParallax({ ...props }) {
  return (
    <StyledDiv {...props}>
      <WelcomeLogo />
    </StyledDiv>
  );
}

export default FixedHeightForParallax;
