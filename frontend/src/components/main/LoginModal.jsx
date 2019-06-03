//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import React from 'react';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.hideLoginModal();
      this.props.history.push('/dashboard');
    }

    this.setState({errors: nextProps.errors})
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(user)
  }

  handleDemoLogin(e) {
    e.preventDefault();
    let user = {
      email: "guest@email.com",
      password: "password"
    }
    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const showHideClassName = this.props.show ? 'login-modal-background display-block' : 'login-modal-background display-none';

    return (
      <div className={showHideClassName}>
        <div className='modal-subcontainer'>
          <div className={'login-form-container'}>
            <div className='login-form-header'>Login!</div>
            <br/>
            <form onSubmit={this.handleSubmit}>
              <label>Email:
                <br/>
                <input type="text" onChange={this.handleInput('email')}/>
              </label>
              <br/>
              <label>Password: 
                <br/>
                <input type="password" onChange={this.handleInput('password')}/>
              </label>
              <br/>
              <button onClick={this.handleSubmit}>Log In</button>
              <br/>
              <button onClick={this.handleDemoLogin}>Demo Log In</button>
              {this.renderErrors()}
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginModal;