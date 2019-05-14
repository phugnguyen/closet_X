import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupModal from './SignupModal';

const mapStateToProps = (state, ownProps) => {
  return {
    show: ownProps.show,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user))
    // signup: user => console.log('Tried to signup user: ', user)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);