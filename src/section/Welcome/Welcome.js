import React from "react";
import {
  StyledButtonDiv1,
  StyledButtonDiv2,
  StyledAnnounce
} from "./Welcome.styled";
import { Parallax } from "react-parallax";
import { Anchor } from "../../components";

const Welcome = ({ ...props }) => {
  return (
    <Parallax
      className="welcome-parallax"
      bgImage="https://i.imgur.com/1ZnTlc4.jpg"
      strength={500}
    >
      <div
        className="welcome-parallax-height"
        style={{ height: 500, background: "rgba(0,0,0,0.4)" }}
      >
        <StyledAnnounce className="welcome-announce">
          WE ARE NOW OFFERING A DELIVERY-ONLY (NO PICKUP!) TO GARDNER ADDRESSES.
          <br /> WE BELIEVE IT IS THE SAFEST METHOD TO KEEP FEEDING PEOPLE
          DURING THIS TIME.
        </StyledAnnounce>
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
    </Parallax>
  );
};

export default Welcome;
