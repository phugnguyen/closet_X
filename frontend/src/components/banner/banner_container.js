import { connect } from "react-redux";
import Banner from "./banner";
import { logout } from "../../actions/session_actions";

const mSTP = start => {
  return {

  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(Banner);