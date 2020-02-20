import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

function IYGallery(props) {
  return (
    <div id="gallery">
      <Jumbotron
        style={{ backgroundColor: "rgb(200, 200, 200)", height: "20vh" }}
      >
        Gallery
      </Jumbotron>
    </div>
  );
}

IYGallery.propTypes = {};

export default IYGallery;
