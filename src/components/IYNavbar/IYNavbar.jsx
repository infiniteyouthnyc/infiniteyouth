import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";

const OPACITY_THRESHOLD = 0.1;
const OPACITY_WINDOW_BUFFER = 0.2;
const BEGIN_OPACITY_TRANSITION =
  (1 - OPACITY_WINDOW_BUFFER) * window.innerHeight;
const END_OPACITY_TRANSITION = (1 + OPACITY_WINDOW_BUFFER) * window.innerHeight;

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
    window.onscroll = handleScroll;
  });

  return (
    <Navbar
      expand="md"
      fixed="top"
      style={{ backgroundColor: backgroundColor }}
    >
      <Navbar.Brand href="#home">
        <img
          src={require("./logo.png")}
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav activeKey={`#${props.selectedSection}`}>
          {props.sections.map(section => {
            return (
              <Nav.Item
                style={{
                  marginLeft: 12,
                  marginRight: 12
                }}
              >
                <Nav.Link
                  href={`#${section.id}`}
                  style={{
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
              </Nav.Item>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

IYNavbar.propTypes = {
  selectedSection: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string
    })
  )
};

export default IYNavbar;
