import React from "react";
import { connect } from "react-redux";
import Outfit from "./outfit_component";

const mSTP = ({ state, ownProps }) => {
  return {};
};

const mDTP = dispatch => {
  return {};
};

export default connect(
  mSTP,
  mDTP
)(Outfit);
