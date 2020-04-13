import React from "react";
import { MenuHeader, SeeMenu, ContactFooter } from "../../section";

function DesktopMenu({ ...props }) {
  return (
    <div className="desktop-menu">
      <MenuHeader />
      <SeeMenu className="menu" />
      <ContactFooter className="menu-contect-footer" />
    </div>
  );
}

export default DesktopMenu;
