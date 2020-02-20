import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

function IYArtists(props) {
  return (
    <div id="artists">
      <Jumbotron
        style={{ backgroundColor: "rgb(200, 200, 200)", height: "100vh" }}
      >
        Artists
      </Jumbotron>
    </div>
  );
}

IYArtists.propTypes = {};

export default IYArtists;
