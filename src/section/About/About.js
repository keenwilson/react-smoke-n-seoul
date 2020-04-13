import React from "react";
import { Row, Col } from "antd";
import {
  StyledSection,
  StyledH1,
  StyledLead,
  StyledButton
} from "./About.styled";
import { Anchor } from "../../components";
const About = () => {
  return (
    <StyledSection id="about">
      <Row>
        <Col>
          <StyledH1>Where BBQ meets the seoul.</StyledH1>
          <StyledLead>
            We take Kansas City BBQ flavors and mix it with traditional Korean
            dishes to make something excited that we can share with our
            community and beyond.
          </StyledLead>
          <Anchor to="/eat">
            <StyledButton className="about-see-menu">See Our Menu</StyledButton>
          </Anchor>
        </Col>
      </Row>
    </StyledSection>
  );
};

export default About;
