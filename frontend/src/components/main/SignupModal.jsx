//MODAL DESIGN INSPIRED BY: https://codepen.io/alligatorio/pen/aYzMKL

import React from 'react';

class SignupModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }
  
  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    const showHideClassName = this.props.show ? 'login-modal display-block' : 'login-modal display-none';

    return (
      <div className={showHideClassName}>
        <div className={'login-form-container'}>
          
        </div>
      </div>
    );
  }
};

export default SignupModal;