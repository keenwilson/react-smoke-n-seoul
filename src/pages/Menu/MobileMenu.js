import React from "react";
import { ContactFooter, SeeMenu } from "../../section";
import { StyledDiv } from "./Menu.styled";
import { Anchor, MenuLogo } from "../../components";

function MobileMenu({ ...props }) {
  return (
    <div className="mobile-menu">
      <Anchor to="/home">
        <MenuLogo />
      </Anchor>
      <StyledDiv>
        <SeeMenu />
      </StyledDiv>
      <ContactFooter className="menu-contect-footer" {...props} />
    </div>
  );
}

export default MobileMenu;
