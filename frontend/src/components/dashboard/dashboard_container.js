import { connect } from "react-redux";
import Dashboard from "./dashboard_component";
import { logout } from '../../actions/session_actions';
// import fetchOutfits

const mSTP = state => {
  return {

  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
    // fetchOutfits: () => dispatch(fetchOutfits())
  };
};

export default connect(
  mSTP,
  mDTP
)(Dashboard);