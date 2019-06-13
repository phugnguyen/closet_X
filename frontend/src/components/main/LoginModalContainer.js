import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginModal from "./LoginModal";

const mapStateToProps = (state, ownProps) => ({
  show: ownProps.show,
  errors: state.errors.session,
  hideLoginModal: ownProps.hideLoginModal
});

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
