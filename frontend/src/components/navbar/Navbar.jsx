import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard-nav-bar">
        <div className="dashboard-nav-bar-logo">
  
        </div>
        <div className="nav-bar-item-container">
          <ul>
            <li>Dashboard</li>
            <li>Your closet</li>
            <li><Link to="/upload">Upload</Link></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="sign-out-container">
          <div onClick={this.props.logout}>Sign Out</div>
        </div>
      </div>
    )
  }
}

export default NavBar;