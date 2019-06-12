import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ItemFormContainer from "../components/items/new_item_container";
import ItemUpdateFormContainer from "../components/items/edit_item_container";
import OutfitScrollbar from "../components/outfit/outfit_scrollbar_container";
import { Switch, Redirect, Route } from "react-router-dom";
import DashboardContainer from "../components/dashboard/dashboard_container";
import ItemIndexContainer from "../components/items/item_index_container";
import ItemShowContainer from "../components/items/item_show_container";

import MainPage from "./main/Main";
import UserView from "./user_view";

const App = () => (
  <Switch>
    <ProtectedRoute
      path="/(dashboard|closet|outfits|upload)"
      component={UserView}
    />
    <ProtectedRoute path="/itemindex" component={ItemIndexContainer} />
    <ProtectedRoute path="/item/:itemId" component={ItemShowContainer} />
    <ProtectedRoute path="/items" component={OutfitScrollbar} />
    <AuthRoute exact path="/" component={MainPage} />
    <Redirect from="/" to="/" />
  </Switch>
);

export default App;
