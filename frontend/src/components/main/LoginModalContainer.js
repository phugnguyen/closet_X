import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginModal from './LoginModal';

const mapStateToProps = (state, ownProps) => ({
  show: ownProps.show,
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
    // login: user => console.log('Tried to login user: ', user)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);