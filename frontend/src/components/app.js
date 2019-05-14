import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import ItemFormContainer from "../components/items/new_item_container";

import MainPage from "./main/Main";
import Dashboard from "./dashboard/dashboard_container";
import OutfitShow from "./outfit/outfit_show_component";

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={MainPage} />
    <AuthRoute exact path="/dashboard" component={Dashboard} />
<<<<<<< HEAD
    <AuthRoute path="/upload" component={ItemFormContainer} />
=======
    <AuthRoute exact path="/outfits/id" component={OutfitShow} />
>>>>>>> master
  </Switch>
);

export default App;

//Hi there
