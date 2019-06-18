//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import React from "react";

class SignupModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      password2: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.hideLoginModal();
      this.props.history.push("/dashboard");
    }

    this.setState({ errors: nextProps.errors });
  }

  handleInput(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.props.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    const showHideClassName = this.props.show
      ? "signup-modal-background display-block"
      : "signup-modal-background display-none";

    return (
      <div className={showHideClassName}>
        <div className="modal-subcontainer">
          <div className={"signup-form-container"}>
            <div className="signup-form-header">Sign Up!</div>
            <br />
            <form onSubmit={this.handleSubmit}>
              <label>
                Username:
                <br />
                <input type="text" onChange={this.handleInput("username")} />
              </label>
              <br />
              <label>
                Email:
                <br />
                <input type="text" onChange={this.handleInput("email")} />
              </label>
              <br />
              <label>
                Password:
                <br />
                <input
                  type="password"
                  onChange={this.handleInput("password")}
                />
              </label>
              <br />
              <label>
                Re-enter Password:
                <br />
                <input
                  type="password"
                  onChange={this.handleInput("password2")}
                />
              </label>
              <br />
              <div className="login-buttons">
                <button onClick={this.handleSubmit}>Sign Up</button>
              </div>
              {this.renderErrors()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupModal;
