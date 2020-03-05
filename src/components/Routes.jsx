import React from "react";
import { Route, Switch } from "react-router-dom";
import IYHeader from "./IYHeader.jsx";
import IYArtists from "./IYArtists.jsx";
import IYEvents from "./IYEvents.jsx";
import IYGallery from "./IYGallery.jsx";
import IYBeats from "./IYBeats.jsx";
import IYPress from "./IYPress.jsx";
import IYServices from "./IYServices.jsx";
import IYContact from "./IYContact.jsx";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={IYHeader} />
      <Route path="/artists" exact component={IYArtists} />
      <Route path="/events" exact component={IYEvents} />
      <Route path="/gallery" exact component={IYGallery} />
      <Route path="/beats" exact component={IYBeats} />
      <Route path="/press" exact component={IYPress} />
      <Route path="/services" exact component={IYServices} />
      <Route path="/contact" exact component={IYContact} />
    </Switch>
  );
}
