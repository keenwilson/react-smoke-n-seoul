import React from "react";
import { StyledButtonDiv1, StyledButtonDiv2 } from "./OptionsFooter.styled";
import { Anchor } from "../../components";

function OptionsFooter() {
  return (
    <div className="options-footer">
      <Anchor href="https://bit.ly/SMOKENSEOUL">
        <StyledButtonDiv1 className="welcome-see-menu">
          ORDER ONLINE
        </StyledButtonDiv1>
      </Anchor>

      <Anchor href="https://bit.ly/snsegiftcards">
        <StyledButtonDiv2 className="welcome-e-giftcard">
          E-GIFTCARDS NOW AVAILABLE
        </StyledButtonDiv2>
      </Anchor>
    </div>
  );
}

export default OptionsFooter;
