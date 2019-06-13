import React from "react";
import LoginModalContainer from "./LoginModalContainer";
import SignupModalContainer from "./SignupModalContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
      showSignupModal: false
    };
    this.showLoginModal = this.showLoginModal.bind(this);
    this.showSignupModal = this.showSignupModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);
    this.hideSignupModal = this.hideSignupModal.bind(this);
  }

  showLoginModal() {
    this.setState({ showLoginModal: true });
    document.addEventListener("click", this.hideLoginModal, false);
  }

  hideLoginModal(e) {
    let spot = document.querySelector(".login-form-container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    this.setState({ showLoginModal: false });
    document.removeEventListener("click", this.hideLoginModal);
  }

  showSignupModal() {
    this.setState({ showSignupModal: true });
    document.addEventListener("click", this.hideSignupModal, false);
  }

  hideSignupModal(e) {
    let spot = document.querySelector(".signup-form-container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    this.setState({ showSignupModal: false });
    document.removeEventListener("click", this.hideSignupModal);
  }

  render() {
    return (
      <div className="main-page-container">
        <div>
          <div className="sign-in-container">
            <div className="logo-container" />
            <div className="registration-buttons">
              <span onClick={this.showSignupModal}>sign up</span>
              <span onClick={this.showLoginModal}>login</span>
            </div>
          </div>
          <div className="splash-page-container" />
          <div className="splash-page-footer" />
        </div>
        <LoginModalContainer
          show={this.state.showLoginModal}
          hideLoginModal={this.hideLoginModal}
        />
        <SignupModalContainer
          show={this.state.showSignupModal}
          hideSignupModal={this.hideSignupModal}
        />
      </div>
    );
  }
}

export default Main;
