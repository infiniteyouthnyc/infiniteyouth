import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

function IYServices(props) {
  return (
    <div id="services">
      <Jumbotron
        style={{ backgroundColor: "rgb(200, 200, 200)", height: "20vh" }}
      >
        Services
      </Jumbotron>
    </div>
  );
}

IYServices.propTypes = {};

export default IYServices;
