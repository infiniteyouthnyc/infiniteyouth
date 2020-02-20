import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

function IYContact(props) {
  return (
    <div id="contact">
      <Jumbotron
        style={{ backgroundColor: "rgb(200, 200, 200)", height: "20vh" }}
      >
        Contact
      </Jumbotron>
    </div>
  );
}

IYContact.propTypes = {};

export default IYContact;
