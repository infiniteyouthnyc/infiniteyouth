import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function IYPress(props) {
  return (
    <Container style={{ padding: "120px 0px" }}>
      <Row md={3} xs={2}>
        {props.press.map(press => {
          return (
            <Col>
              <a href={press.link} target="_blank">
                <img
                  src={require(`./photos/${press.path}`)}
                  style={{ width: "100%" }}
                  alt=""
                />
              </a>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

IYPress.propTypes = {
  press: PropTypes.arrayOf(
    PropTypes.shape({
      /** The path to the press images featured on the press page */
      path: PropTypes.string,
      /** The social media link for that piece of press */
      link: PropTypes.string
    })
  )
};

export default IYPress;
