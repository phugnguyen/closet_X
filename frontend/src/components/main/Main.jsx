import React from "react";
import { Link } from "react-router-dom";
// import LoginModal from "./LoginModal";
// import SignupModal from "./SignupModal";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
      showSignupModal: false
    };
  }

  showLoginModal() {
    this.setState({ showLoginModal: true });
  }

  hideLoginModal() {
    this.setState({ showLoginModal: false });
  }

  showSignupModal() {
    this.setState({ showSignupModal: true });
  }

  hideSignupModal() {
    this.setState({ showSignupModal: false });
  }

  render() {
    return <div>{/* <LoginModal />
        <SignupModal /> */}</div>;
  }
}

export default Main;
