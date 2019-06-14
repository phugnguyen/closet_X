import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./navbar/NavbarContainer";
import Banner from "./banner/banner_container"
import DashboardContainer from "./dashboard/dashboard_container";
import NewItemContainer from "./items/new_item_container";
import OutfitCreate from "./outfit/outfit_create";
import ItemIndexContainer from "../components/items/item_index_container"

const UserView = () => {
  return (
    <div className="user-view">
      <Banner />
      <NavBarContainer />
      <Switch>
        <Route path="/itemindex" component={ItemIndexContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/upload" component={NewItemContainer} />
        <Route path="/outfits/new" component={OutfitCreate} />
      </Switch>
    </div>
  )
}

export default UserView;