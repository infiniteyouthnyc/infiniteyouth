import React from "react";
import PropTypes from "prop-types";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaSoundcloud,
} from "react-icons/fa";
import { useState } from "react";

const iconStyle = { width: "100%", height: 45, padding: 0 };
const defaultLinkStyle = {
  width: "100%",
  textDecorationLine: "none",
  transition: ["all", "0.5s", "easeOut"],
};
const notHoveredLinkStyle = {
  width: "100%",
  opacity: 0.5,
  transition: ["all", "0.5s", "easeOut"],
};

function IYFooterSocials(props) {
  const [hoveredSocial, setHoveredSocial] = useState("");

  const iconHovered = hoveredSocial !== "";
  return (
    <>
      <a
        className="iyAnchor"
        href="https://www.instagram.com/infiniteyouthnyc/"
        target="_blank"
        style={
          !iconHovered || hoveredSocial === "instagram"
            ? defaultLinkStyle
            : notHoveredLinkStyle
        }
        onMouseEnter={() => setHoveredSocial("instagram")}
        onMouseLeave={() => setHoveredSocial("")}
      >
        <FaInstagram style={iconStyle} />
      </a>
      <a
        className="iyAnchor"
        href="https://www.youtube.com/channel/UCu-8puIPyc89h3YzInA9AQw/"
        target="_blank"
        style={
          !iconHovered || hoveredSocial === "youtube"
            ? defaultLinkStyle
            : notHoveredLinkStyle
        }
        onMouseEnter={() => setHoveredSocial("youtube")}
        onMouseLeave={() => setHoveredSocial("")}
      >
        <FaYoutube style={iconStyle} />
      </a>
      <a
        className="iyAnchor"
        href="https://twitter.com/iynyc"
        target="_blank"
        style={
          !iconHovered || hoveredSocial === "twitter"
            ? defaultLinkStyle
            : notHoveredLinkStyle
        }
        onMouseEnter={() => setHoveredSocial("twitter")}
        onMouseLeave={() => setHoveredSocial("")}
      >
        <FaTwitter style={iconStyle} />
      </a>
      <a
        className="iyAnchor"
        href="https://soundcloud.com/infiniteyouthnyc"
        target="_blank"
        style={
          !iconHovered || hoveredSocial === "soundcloud"
            ? defaultLinkStyle
            : notHoveredLinkStyle
        }
        onMouseEnter={() => setHoveredSocial("soundcloud")}
        onMouseLeave={() => setHoveredSocial("")}
      >
        <FaSoundcloud style={iconStyle} />
      </a>
    </>
  );
}

IYFooterSocials.propTypes = {};

export default IYFooterSocials;
