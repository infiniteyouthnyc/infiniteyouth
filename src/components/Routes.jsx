import React from "react";
import { Route, Switch } from "react-router-dom";
import IYHeader from "./IYHeader.jsx";
import IYHome from "./IYHome/IYHome.jsx";

import IYArtistsGrid from "./IYHome/IYArtistsGrid.jsx";

import IYArtists from "./IYArtists.jsx";
import IYEvents from "./IYEvents/IYEvents.jsx";
import IYGallery from "./IYGallery.jsx";
import IYBeats from "./IYBeats.jsx";
import IYPress from "./IYPress/IYPress.jsx";
import IYServices from "./IYServices.jsx";
import IYContact from "./IYContact.jsx";
import IYError from "./IYError.jsx"

import IYArtistPage from "./IYHome/IYArtistPage.jsx"

import artists from "./IYHome/IYArtists.json";
import press from "./IYPress/IYPress.json";
import events from "./IYEvents/IYEvents.json";

export default function Routes() {
  function loadArtistPage(path) {
    let artist = artists.filter(artist => artist.name.replace(/\s/g , "-") == path.match.params.artist)[0];

    return (
      <IYArtistPage artist={artist}/>
    );
  }

  return (
    <Switch style={{ paddingTop: 120 }}>
      <Route path="/" exact render={(props) => <IYArtistsGrid artists={artists} />} />
      <Route
        path="/events"
        exact
        render={(props) => <IYEvents events={events} />}
      />
      <Route path="/beats" exact component={IYBeats} />
      <Route
        path="/press"
        exact
        render={(props) => <IYPress press={press} />}
      />
      <Route
        path="/artists/:artist" 
        component={loadArtistPage}
      />
      <Route 
        path="/artistPage" 
        exact 
        render={(props) => <IYArtistPage artists={artists}/>}
      />
      <Route path="/*" render={(props) => <IYError/>} />
    </Switch>
  );
}
