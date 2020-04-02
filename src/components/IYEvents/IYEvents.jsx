import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function IYEvents(props) {
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
        {props.events.map(event => {
          const eventImage = (
            <img
              src={require(`./photos/${event.path}`)}
              style={{ width: "100%" }}
              alt=""
            />
          );
          return (
            <Col md={4} xs={6} style={{ padding: 24 }}>
              {event.link ? (
                <a target="_blank" href={event.link}>
                  {eventImage}
                </a>
              ) : (
                eventImage
              )}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

IYEvents.propTypes = {
  /** An array of event metadata */
  events: PropTypes.arrayOf(
    PropTypes.shape({
      /** The path to the photo for the event */
      path: PropTypes.string,
      /** The link for an event */
      link: PropTypes.string
    })
  )
};

export default IYEvents;
