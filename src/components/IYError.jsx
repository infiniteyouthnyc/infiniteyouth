import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function IYError(props) {
    return (
        <img
            src={require('./IYHome/photos/error.jpeg')}
            style={{width: "100%"}}
        />
    );
}

export default IYError;