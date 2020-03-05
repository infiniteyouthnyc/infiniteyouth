import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

const OPACITY_THRESHOLD = 0.1;
const OPACITY_WINDOW_BUFFER = 0.2;
const BEGIN_OPACITY_TRANSITION =
  (1 - OPACITY_WINDOW_BUFFER) * window.innerHeight;
const END_OPACITY_TRANSITION = (1 + OPACITY_WINDOW_BUFFER) * window.innerHeight;

/**
 * A navigation bar component for navigating between sections of the app.
 */
function IYNavbar(props) {
  const [activeKey, setActiveKey] = useState(props.selectedSection);
  const [hoverKey, setHoverKey] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(
    `rgba(250, 250, 250, 0.7)`
  );

  const updateSelectedSection = scrollHeight => {
    const ids = props.sections.map(section => section.id);
    var selectedSection = ids[0];
    for (const id of ids) {
      const sectionTop = document.getElementById(id).offsetTop;
      if (scrollHeight >= sectionTop) {
        selectedSection = id;
      } else {
        break;
      }
    }
    setActiveKey(selectedSection);
  };

  const transitionBackground = scrollHeight => {
    var opacity = 0.7;
    if (scrollHeight >= BEGIN_OPACITY_TRANSITION) {
      opacity =
        (END_OPACITY_TRANSITION - scrollHeight) /
        (END_OPACITY_TRANSITION - BEGIN_OPACITY_TRANSITION);
      opacity = opacity < OPACITY_THRESHOLD ? OPACITY_THRESHOLD : opacity;
    }
    setBackgroundColor(`rgba(250, 250, 250, ${opacity})`);
  };

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    updateSelectedSection(scrollHeight);
    transitionBackground(scrollHeight);
  };

  useEffect(() => {
    if (props.singlePage) {
      window.onscroll = handleScroll;
    }
  });

  return (
    <Navbar
      expand="md"
      fixed="top"
      style={{
        backgroundColor: backgroundColor,
        fontFamily: "AUDIOWIDE",
        fontWeight: 400,
        letterSpacing: ".04em",
        fontSize: 20,
        padding: "5px 30px"
      }}
    >
      <Navbar.Brand href="#home">
        <Link to="/">
          <img
            src={require("./logo.png")}
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav activeKey={`#${props.selectedSection}`}>
          {props.sections.map(section => {
            return (
              <LinkContainer to={`/${section.id}`}>
                <Nav.Link
                  style={{
                    marginLeft: 12,
                    marginRight: 12,
                    fontWeight: activeKey === section.id ? "bold" : "",
                    textDecorationLine:
                      hoverKey === section.id ? "underline" : "none",
                    color: "rgba(35, 35, 45, 0.75)",
                    transition: ["all", "3s", "easeIn", "0s"]
                  }}
                  onSelect={() => setActiveKey(section.id)}
                  onMouseEnter={() => setHoverKey(section.id)}
                  onMouseLeave={() => setHoverKey("")}
                >
                  {section.title}
                </Nav.Link>
              </LinkContainer>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

IYNavbar.propTypes = {
  /** The section of the app that starts as selected */
  selectedSection: PropTypes.string,
  /** The sections of the page */
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string
    })
  ),
  /** If the app is a single-page app, this is true, which
   * means that upon selecting a section, the app will scroll to the section.
   * Otherwise, clicking on a navigation item reroutes to the page for that
   * section.
   */
  singlePage: PropTypes.bool
};

export default IYNavbar;
