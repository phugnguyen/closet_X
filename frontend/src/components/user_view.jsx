import React from "react";
import { Switch } from "react-router-dom";
import NavBarContainer from "./navbar/NavbarContainer";
import Banner from "./banner/banner_container"
import DashboardContainer from "./dashboard/dashboard_container";
import NewItemContainer from "./items/new_item_container";
import { ProtectedRoute } from "../util/route_util";

const UserView = () => {
  return (
    <div className="user-view">
      <Banner />
      <NavBarContainer />
      <div className="show-container">
        <Switch>
          <ProtectedRoute path="/dashboard" component={DashboardContainer} />
          <ProtectedRoute path="/upload" component={NewItemContainer} />
        </Switch>
      </div>
    </div>
  )
}

export default UserView;