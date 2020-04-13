import React from "react";
import { FindOut, ContactFooter } from "../../section";
import { Anchor, MenuLogo } from "../../components";

function DesktopContact({ ...props }) {
  return (
    <div className="desktop-contact">
      <Anchor to="/home">
        <MenuLogo />
      </Anchor>
      <FindOut />

      <ContactFooter className="contact-footer" />
    </div>
  );
}

export default DesktopContact;
