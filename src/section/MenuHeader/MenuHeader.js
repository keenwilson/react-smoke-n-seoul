import React from "react";
import { Parallax } from "react-parallax";
import { Row, Col } from "antd";
import { Anchor, MenuLogo } from "../../components";
function MenuHeader() {
  return (
    <div className="menu-header">
      <Anchor to="/home">
        <MenuLogo />
      </Anchor>
      <Row gutter={16}>
        <Col span={8}>
          <Parallax
            className="our-story-parallax"
            bgImage="https://i.imgur.com/TefGlKN.jpg"
            strength={400}
          >
            <div
              className="menu-header-parallax-height"
              style={{ height: 400, background: "rgba(0,0,0,0.2)" }}
            ></div>
          </Parallax>
        </Col>
        <Col span={8}>
          <Parallax
            className="our-story-parallax"
            bgImage="https://i.imgur.com/2y7Xh2K.jpg"
            strength={400}
          >
            <div
              className="menu-header-parallax-height"
              style={{ height: 400, background: "rgba(0,0,0,0.2)" }}
            ></div>
          </Parallax>
        </Col>
        <Col span={8}>
          <Parallax
            className="our-story-parallax"
            bgImage="https://i.imgur.com/4B6hLBL.jpg"
            strength={400}
          >
            <div
              className="menu-header-parallax-height"
              style={{ height: 400, background: "rgba(0,0,0,0.2)" }}
            ></div>
          </Parallax>
        </Col>
      </Row>
    </div>
  );
}
export default MenuHeader;
