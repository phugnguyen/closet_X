import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo">
  
        </div>
        <div className="nav-bar-item-container">
            <div><Link to="/dashboard">Dashboard</Link></div>
            <div><Link to="/outfits/new">Your closet</Link></div>
            <div><Link to="/upload">Add Item</Link></div>
        </div>
        <div className="sign-out-container">
          <div onClick={this.props.logout}>Sign Out</div>
        </div>
      </div>
    )
  }
}

export default NavBar;