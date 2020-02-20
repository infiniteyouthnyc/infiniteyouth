import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import IYHeader from "./components/IYHeader.jsx";
import IYNavbar from "./components/IYNavbar/IYNavbar.jsx";
import IYArtists from "./components/IYArtists.jsx";
import IYEvents from "./components/IYEvents.jsx";
import IYGallery from "./components/IYGallery.jsx";
import IYBeats from "./components/IYBeats.jsx";
import IYPress from "./components/IYPress.jsx";
import IYServices from "./components/IYServices.jsx";
import IYContact from "./components/IYContact.jsx";

import navbarItems from "./components/IYNavbar/IYNavbarItems.json";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "rgb(25,25,25)",
        paddingBottom: 20
      }}
    >
      <IYNavbar selectedSection="home" sections={navbarItems} />
      <IYHeader />
      <IYArtists />
      <IYEvents />
      <IYGallery />
      <IYBeats />
      <IYPress />
      <IYServices />
      <IYContact />
    </div>
  );
}

export default App;
