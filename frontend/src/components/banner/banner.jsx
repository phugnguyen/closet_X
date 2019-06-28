import React from "react";


class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-banner">
        <div>CLOSET-X</div>
        <div className="banner-sign-out" onClick={this.props.logout}>sign out</div>
      </div>
    )
  }
}

export default Banner;