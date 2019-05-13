import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import MainPage from "./main/main_page";
<<<<<<< HEAD
import Dashboard from "./dashboard/dashboard_container";
=======
>>>>>>> dashboard

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={MainPage} />
<<<<<<< HEAD
    <AuthRoute exact path="/dashboard" component={Dashboard} />
=======
>>>>>>> dashboard
  </Switch>
);

export default App;
