import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { ReactTinyLink } from "react-tiny-link";

function IYPress(props) {
  return (
    <Container style={{ padding: "120px 0px" }}>
      <Row
        style={{
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyItems: "center"
        }}
      >
        {props.press.map(press => {
          return (
            <Col md={4} xs={6} style={{ padding: 24 }}>
              <ReactTinyLink
                cardSize="large"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                url={press.link}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

IYPress.propTypes = {
  /** An array of press piece metadata */
  press: PropTypes.arrayOf(
    PropTypes.shape({
      /** The social media link for a piece of press */
      link: PropTypes.string
    })
  )
};

export default IYPress;
