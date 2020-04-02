import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";

function IYBeats(props) {
  window.location.href = "https://beatstars.com/infiniteyouth/feed";
  return <Spinner animation="border" />;
}

IYBeats.propTypes = {};

export default IYBeats;
