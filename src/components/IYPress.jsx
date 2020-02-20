import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

function IYPress(props) {
  return (
    <div id="press">
      <Jumbotron
        style={{ backgroundColor: "rgb(200, 200, 200)", height: "20vh" }}
      >
        Press
      </Jumbotron>
    </div>
  );
}

IYPress.propTypes = {};

export default IYPress;
