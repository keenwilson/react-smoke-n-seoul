import React from "react";
import { StyledDiv } from "./Options.styled";
import { Row, Col } from "antd";
import { MenuLogo } from "../../components";
import { OptionsFooter } from "../../section";

function Options({ ...props }) {
  return (
    <StyledDiv {...props}>
      <MenuLogo />
      <Row className="mobile-row">
        <Col span={8}>
          <img
            className="img-greg"
            src="https://i.imgur.com/TefGlKN.jpg"
            alt="Greg Stears"
          />
        </Col>
        <Col span={8}>
          <img
            className="img-greg"
            src="https://i.imgur.com/2y7Xh2K.jpg"
            alt="Greg Stears"
          />
        </Col>
        <Col span={8}>
          {" "}
          <img
            className="img-greg"
            src="https://i.imgur.com/4B6hLBL.jpg"
            alt="Greg Stears"
          />
        </Col>
      </Row>
      <OptionsFooter />
    </StyledDiv>
  );
}

export default Options;
