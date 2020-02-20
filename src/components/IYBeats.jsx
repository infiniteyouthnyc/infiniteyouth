import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

function IYBeats(props) {
  return (
    <div id="beats">
      <Jumbotron
        style={{ backgroundColor: "rgb(200, 200, 200)", height: "20vh" }}
      >
        Beats
      </Jumbotron>
    </div>
  );
}

IYBeats.propTypes = {};

export default IYBeats;
