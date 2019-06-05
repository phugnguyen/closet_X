import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import ItemFormContainer from "../components/items/new_item_container";
import ItemUpdateFormContainer from "../components/items/edit_item_container";
import OutfitScrollbar from "../components/outfit/outfit_scrollbar_container";

import MainPage from "./main/Main";
import Dashboard from "./dashboard/dashboard_container";
import OutfitShow from "./outfit/outfit_show_component";

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    <ProtectedRoute path="/upload" component={ItemFormContainer} />
    <ProtectedRoute path="/scrollbar" component={OutfitScrollbar} />
    <ProtectedRoute
      path="/update/:itemId"
      component={ItemUpdateFormContainer}
    />
    <AuthRoute exact path="/outfits/id" component={OutfitShow} />
    <AuthRoute exact path="/" component={MainPage} />
  </Switch>
);

export default App;
