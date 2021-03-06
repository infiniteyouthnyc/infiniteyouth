import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./components/Routes.jsx";
import IYNavbar from "./components/IYNavbar/IYNavbar.jsx";
import IYFooter from "./components/IYFooter/IYFooter.jsx";

import navbarItems from "./components/IYNavbar/IYNavbarItems.json";

function App() {
  return (
    <div className="App">
      <Router>
        <IYNavbar
          selectedSection="home"
          sections={navbarItems}
          singlePage={false}
          stickToTop={false}
        />
        <Routes />
        <IYFooter />
      </Router>
    </div>
  );
}

export default App;
