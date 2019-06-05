import { connect } from "react-redux";
import NavBar from "./Navbar";
import { logout } from "../../actions/session_actions";

const mstp = state => {
  return {};
};

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mstp, mdtp)(NavBar);