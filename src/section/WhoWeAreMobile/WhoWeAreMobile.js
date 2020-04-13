import React from "react";
import { StyledH3, StyledP } from "./WhoWeAreMobile.styled";
import { Anchor, MenuLogo } from "../../components";
import { OptionsFooter } from "../../section";

const WhoWeAreMobile = () => {
  return (
    <div className="mobile-header">
      <Anchor to="/home">
        <MenuLogo />
      </Anchor>
      <div className="mobile-row">
        <img
          className="img-story"
          src="https://i.imgur.com/QsAPZHJ.jpg"
          alt="Smoke N Seoul Team"
        />
      </div>
      <div className="mobile-row">
        <StyledP>
          Kansas City get ready for your new food obsession! Our vision is to
          serve you food that you can't stop thinking about all while bringing
          together people from different walks of life.
        </StyledP>
      </div>
      <div className="mobile-row">
        <StyledP>
          We're not your traditional BBQ restaurant but we have worked hard to
          make sure our meat stands up to the high standards that have been set
          here in Kansas City.
        </StyledP>
      </div>
      <div className="mobile-row">
        <img
          className="img-story"
          src="https://i.imgur.com/pUWYPqB.jpg"
          alt="Greeting at the window"
        />
      </div>
      <div className="mobile-row">
        <StyledP>
          We believe food is culture and we take that seriously. Introducing
          Korean flavors to the public is not just about taste, it's about
          introducing Korean culture at its most basic level as well.
        </StyledP>
      </div>
      <div className="mobile-row">
        <StyledP>
          For the KC natives, we've got the tender, smoky meat that we all love
          so dearly, with some bold Korean flavors in there that'll stretch you
          just the right amount.
        </StyledP>
      </div>

      <div className="mobile-row">
        <StyledP>
          For those already familiar with Korean food, we promise you haven't
          had it like this! Brisket and burnt ends are the perfect compliment
          for the veggies and rice in bibimbap. Kimchi comfortably finds it home
          between a bun with pulled pork and spicy mayo. If you haven't tried
          Korean fried chicken, go do it now. Then try our smoked version!
        </StyledP>
      </div>
      <div className="mobile-row">
        <img
          className="img-story"
          src="https://i.imgur.com/fOWaj2u.jpg"
          alt="Cooking inside the truck"
        />
      </div>
      <OptionsFooter />
    </div>
  );
};

export default WhoWeAreMobile;
