import React from "react";
import { Route, Switch } from "react-router-dom";
import IYHeader from "./IYHeader.jsx";
import IYHome from "./IYHome/IYHome.jsx";
import IYArtists from "./IYArtists.jsx";
import IYEvents from "./IYEvents.jsx";
import IYGallery from "./IYGallery.jsx";
import IYBeats from "./IYBeats.jsx";
import IYPress from "./IYPress.jsx";
import IYServices from "./IYServices.jsx";
import IYContact from "./IYContact.jsx";

import artists from "./IYHome/IYArtists.json";

export default function Routes() {
  // TODO: Remove `/infiniteyouth` from paths before final deployment
  return (
    <Switch style={{ paddingTop: 120 }}>
      <Route
        path="/infiniteyouth"
        exact
        render={props => <IYHome artists={artists} />}
      />
      <Route path="/infiniteyouth/artists" exact component={IYArtists} />
      <Route path="/infiniteyouth/events" exact component={IYEvents} />
      <Route path="/infiniteyouth/gallery" exact component={IYGallery} />
      <Route path="/infiniteyouth/beats" exact component={IYBeats} />
      <Route path="/infiniteyouth/press" exact component={IYPress} />
      <Route path="/infiniteyouth/services" exact component={IYServices} />
      <Route path="/infiniteyouth/contact" exact component={IYContact} />
    </Switch>
  );
}
