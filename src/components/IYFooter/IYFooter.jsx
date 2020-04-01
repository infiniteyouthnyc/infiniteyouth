import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import IYFooterSocials from "./IYFooterSocials.jsx";

function IYFooter(props) {
  return (
    <Container fluid>
      <Row
        md={3}
        xs={1}
        style={{
          height: 60,
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyItems: "center"
        }}
      >
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center"
          }}
          md={4}
          xs={12}
        >
          <IYFooterSocials />
        </Col>
        <Col md={4} xs={12}></Col>
        <Col md={4} xs={12}>
          <div
            style={{
              alignItems: "center",
              justifyItems: "center"
            }}
          >
            <a href="mailto:mgmt@infiniteyouthmusic.com">
              mgmt@infiniteyouthmusic.com
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

IYFooter.propTypes = {};

export default IYFooter;
