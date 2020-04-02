import React from "react";
import PropTypes from "prop-types";
import { Carousel, Container, Row, Col } from "react-bootstrap";

function IYHome(props) {
  return (
    <Container style={{ padding: "120px 0px" }}>
      <Row>
        <Col md={3} xs={1}></Col>
        <Col md={6} xs={10}>
          <Carousel fade={true}>
            {props.artists.map(artist => {
              const artistImage = (
                <img
                  src={require(`./photos/${artist.path}`)}
                  style={{ width: "100%" }}
                  alt=""
                />
              );
              return (
                <Carousel.Item>
                  {artist.link ? (
                    <a target="_blank" href={artist.link}>
                      {artistImage}
                    </a>
                  ) : (
                    artistImage
                  )}
                  }
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
        <Col md={3} xs={1}></Col>
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
