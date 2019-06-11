import { connect } from "react-redux";
import OutfitCanvas from "./outfit_canvas";
import { createOutfit } from "../../actions/outfit_actions"

const mstp = state => {
  return {};
};

const mdtp = dispatch => {
  return {
    createOutfit: outfit => dispatch(createOutfit(outfit))
  };
};

export default connect(mstp, mdtp)(OutfitCanvas)