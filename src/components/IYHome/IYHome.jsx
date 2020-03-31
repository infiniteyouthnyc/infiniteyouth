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
            {props.artists.map(artist => {
              return (
                <Carousel.Item>
                  <a target="_blank" href={artist.link}>
                    <img
                      src={require(`./photos/${artist.path}`)}
                      style={{ width: "100%" }}
                    />
                  </a>
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
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      /** The path to the artist images featured on the home page */
      path: PropTypes.string,
      /** The social media link for that artist */
      link: PropTypes.string
    })
  )
};

export default IYHome;