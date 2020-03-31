import React from "react";
import PropTypes from "prop-types";
import { Carousel, Container, Row, Col } from "react-bootstrap";

function IYHome(props) {
  return (
    <Container style={{ padding: "75px 0px" }}>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <Carousel fade={true}>
            {props.artistPhotoPaths.map(path => {
              return (
                <Carousel.Item>
                  <img
                    src={require(`./photos/${path}`)}
                    style={{ width: "100%" }}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
        <Col xs={3}></Col>
      </Row>
    </Container>
  );
}

IYHome.propTypes = {
  /** The names of the artist images featured on the home page */
  artistPhotoPaths: PropTypes.arrayOf(PropTypes.string)
};

export default IYHome;
