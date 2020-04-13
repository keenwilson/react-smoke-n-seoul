import React from "react";
import logo from "../../assets/smoke-n-seoul.jpg";
import { StyledImgDiv } from "./WelcomeLogo.styled";
const WelcomeLogo = ({ width, ...props }) => {
  return (
    <div>
      <StyledImgDiv background={logo}></StyledImgDiv>
    </div>
  );
};

export default WelcomeLogo;
