import React from "react";
import PropTypes from "prop-types";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaSoundcloud
} from "react-icons/fa";

const iconStyle = { width: "100%", height: 60, padding: 12 };

function IYFooterSocials(props) {
  return (
    <>
      <FaInstagram style={iconStyle} />
      <FaYoutube style={iconStyle} />
      <FaTwitter style={iconStyle} />
      <FaSoundcloud style={iconStyle} />
    </>
  );
}

IYFooterSocials.propTypes = {};

export default IYFooterSocials;
