import React from "react";
import { FindOutMobile, ContactFooter } from "../../section";
import { StyledDiv } from "./Contact.styled";
import { Anchor, MenuLogo } from "../../components";

function MobileContact({ ...props }) {
  return (
    <div className="mobile-contact">
      <Anchor to="/home">
        <MenuLogo />
      </Anchor>
      <StyledDiv>
        <FindOutMobile />
      </StyledDiv>
      <ContactFooter className="contact-footer" {...props} />
    </div>
  );
}

export default MobileContact;
