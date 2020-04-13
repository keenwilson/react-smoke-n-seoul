import React from "react";
import logo from "../../assets/smoke-n-seoul.jpg";
import { StyledLogo } from "./MenuLogo.styled";

const WelcomeLogo = ({ width, ...props }) => {
  return (
    <div>
      <StyledLogo
        src={logo}
        alt="Smoke 'n' Seoul"
        width={width ? width : 200}
        {...props}
      />
    </div>
  );
};

export default WelcomeLogo;
