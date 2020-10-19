import React from "react";
import { Switch, Route } from "react-router-dom";

import Langing from "../pages/Landing";
import OrphanagesMap from "../pages/OrphanagesMap";
import CreateOrphanage from "../pages/CreateOrphanage";
import Orphanage from "../pages/Orphanage";
import SuccessfulRegistration from "../pages/SuccessfulRegistration";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Langing} />
    <Route path="/orphanagesMap" component={OrphanagesMap} />
    <Route path="/orphanages/create" component={CreateOrphanage} />
    <Route path="/orphanages/:id" component={Orphanage} />
    <Route path="/successful" component={SuccessfulRegistration} />
  </Switch>
);

export default Routes;
