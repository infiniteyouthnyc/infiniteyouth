import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function IYFooter(props) {
  return (
    <Container>
      <Row>
        <Col md={4} xs={12}>
          Social Media
        </Col>
        <Col md={4} xs={12}></Col>
        <Col md={4} xs={12}>
          <a href="mailto:mgmt@infiniteyouthmusic.com">
            mgmt@infiniteyouthmusic.com
          </a>
        </Col>
      </Row>
    </Container>
  );
}

IYFooter.propTypes = {};

export default IYFooter;
