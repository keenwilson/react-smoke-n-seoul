import React from "react";
import { Row, Col } from "antd";
import { Anchor, MenuLogo } from "../../components";
import { OptionsFooter } from "../../section";
import { StyledDiv, StyledH2 } from "./WhoWeAre.styled";

const WhoWeAre = () => {
  return (
    <StyledDiv className="menu-header">
      <Anchor to="/home">
        <MenuLogo />
      </Anchor>
      <Row className="top-row">
        <Col span={6}>
          <img
            className="img-story"
            src="https://i.imgur.com/VY5w9ga.jpg"
            alt="The 
            Seoul Train"
          />
          <div className="story-column">
            <p>
              Kansas City get ready for your new food obsession! Our vision is
              to serve you food that you can't stop thinking about all while
              bringing together people from different walks of life.
            </p>
            <p>
              We're not your traditional BBQ restaurant but we have worked hard
              to make sure our meat stands up to the high standards that have
              been set here in Kansas City.
            </p>
          </div>
        </Col>

        <Col span={12}>
          <div className="about-smoke-n-seoul">
            <StyledH2>
              KC BBQ + Korean. These flavors were meant for each other.
            </StyledH2>
            <img
              className="img-story"
              src="https://i.imgur.com/QsAPZHJ.jpg"
              alt="The team and the truck"
            />
            <Row gutter={16}>
              <Col span={12}>
                <div className="story-column">
                  <p>
                    We believe food is culture and we take that seriously.
                    Introducing Korean flavors to the public is not just about
                    taste, it's about introducing Korean culture at its most
                    basic level as well.
                  </p>

                  <p>
                    For the KC natives, we've got the tender, smoky meat that we
                    all love so dearly, with some bold Korean flavors in there
                    that'll stretch you just the right amount.
                  </p>
                </div>
              </Col>
              <Col span={12}>
                <div className="story-column">
                  <p>
                    For those already familiar with Korean food, we promise you
                    haven't had it like this! Brisket and burnt ends are the
                    perfect compliment for the veggies and rice in bibimbap.
                    Kimchi comfortably finds it home between a bun with pulled
                    pork and spicy mayo. If you haven't tried Korean fried
                    chicken, go do it now. Then try our smoked version!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col span={6}>
          <img
            className="img-story"
            src="https://i.imgur.com/PVFFx0l.jpg"
            alt="Greg Stears"
          />
          <img
            className="img-story"
            src="https://i.imgur.com/pUWYPqB.jpg"
            alt="Greeting at the window"
          />
        </Col>
      </Row>
      <OptionsFooter />
    </StyledDiv>
  );
};

export default WhoWeAre;
