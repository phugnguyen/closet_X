import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

// import MainPage from "./main/main_page";
import Dashboard from "./dashboard/dashboard_container";

const App = () => (
  <Switch>
    {/* <AuthRoute exact path="/" component={MainPage} /> */}
    <AuthRoute exact path="/dashboard" component={Dashboard} />
  </Switch>
);

export default App;
