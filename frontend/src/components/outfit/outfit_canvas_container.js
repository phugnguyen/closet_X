import { connect } from "react-redux";
import OutfitCanvas from "./outfit_canvas";
import { createOutfit } from "../../actions/outfit_actions"
import { withRouter } from "react-router";

const mstp = (state, ownProps) => {
  return {
    user: state.session.user.id
  };
};

const mdtp = dispatch => {
  return {
    createOutfit: outfit => dispatch(createOutfit(outfit))
  };
};

export default withRouter(connect(mstp, mdtp)(OutfitCanvas))