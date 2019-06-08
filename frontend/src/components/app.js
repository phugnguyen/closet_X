import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Redirect, Route } from "react-router-dom";
import DashboardContainer from "../components/dashboard/dashboard_container";

import MainPage from "./main/Main";
import UserView from "./user_view";

const App = () => (
  <Switch>
    <Route path="/ItemIndex" component={DashboardContainer} />
    {/* REMOVE THIS ROUTE LATER , FOR TESTING ONLY */}

    <ProtectedRoute
      path="/(dashboard|closet|outfits|upload)"
      component={UserView}
    />
    <AuthRoute exact path="/" component={MainPage} />
    <Redirect from="/" to="/" />
  </Switch>
);

export default App;
