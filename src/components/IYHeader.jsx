import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

function IYHeader(props) {
  return (
    <div id="home">
      <Jumbotron
        style={{ backgroundColor: "rgb(200, 200, 200)", height: "40vh" }}
      >
        Featured
      </Jumbotron>
    </div>
  );
}

IYHeader.propTypes = {};

export default IYHeader;
