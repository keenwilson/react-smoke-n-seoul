import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./BurgerMenu.styled";
import { Anchor } from "../../components";

function Menu({ open, node, setOpen, ...props }) {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Anchor to="/story" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        About us
      </Anchor>
      <Anchor to="/eat" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        See Menu
      </Anchor>
      <Anchor to="/call" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        Contact
      </Anchor>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
