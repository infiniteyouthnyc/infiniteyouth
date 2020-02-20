import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

function IYEvents(props) {
  return (
    <div id="events">
      <Jumbotron
        style={{ backgroundColor: "rgb(200, 200, 200)", height: "100vh" }}
      >
        Events
      </Jumbotron>
    </div>
  );
}

IYEvents.propTypes = {};

export default IYEvents;
