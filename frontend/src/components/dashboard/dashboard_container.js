import React from "react";
import { connect } from "react-redux";
import Dashboard from "./dashboard_component";
// import fetchOutfits

const mSTP = state => {
  return {};
};

const mDTP = dispatch => {
  return {
    fetchOutifts: () => dispatch(fetchOutifts())
  };
};

export default connect(
  mSTP,
  mDTP
)(Dashboard);
