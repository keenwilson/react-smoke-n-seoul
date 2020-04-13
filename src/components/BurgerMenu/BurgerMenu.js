import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./BurgerMenu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/story" tabIndex={tabIndex}>
        About us
      </a>
      <a href="/eat" tabIndex={tabIndex}>
        See Menu
      </a>
      <a href="/call" tabIndex={tabIndex}>
        Contact
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
