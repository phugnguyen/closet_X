import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import OutfitScrollbar from "../components/outfit/outfit_scrollbar_container";
import { Switch, Redirect } from "react-router-dom";
import ItemShowContainer from "../components/items/item_show_container";

import MainPage from "./main/Main";
import UserView from "./user_view";

const App = () => (
  <Switch>
    <ProtectedRoute
      path="/(dashboard|closet|outfits|upload|itemindex)"
      component={UserView}
    />
    <ProtectedRoute path="/item/:itemId" component={ItemShowContainer} />
    <ProtectedRoute path="/items" component={OutfitScrollbar} />
    <AuthRoute exact path="/" component={MainPage} />
    <Redirect from="/" to="/" />
  </Switch>
);

export default App;
