import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Redirect } from "react-router-dom";

import MainPage from "./main/Main";
import UserView from "./user_view";

const App = () => (
  <Switch>
    <ProtectedRoute path="/(dashboard|closet|outfits|upload)" component={UserView} />
    <AuthRoute exact path="/" component={MainPage} />
    <Redirect from="/" to="/" />
  </Switch>
);

export default App;