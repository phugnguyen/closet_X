import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    let clicker = document.getElementById("modal-text");
    clicker.click();
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo">
  
        </div>
        <div className="nav-bar-item-container">
            <div><Link to="/dashboard">Dashboard</Link></div>
            <div class="your-closet"><Link to="/closet">Your closet</Link></div>
            {this.props.match.params[0] === "closet" || this.props.match.params[0] === "outfits" ? <div><Link onClick={this.handleClick}> &nbsp; • &nbsp; Add Item</Link></div> : null}
            {this.props.match.params[0] === "closet" || this.props.match.params[0] === "outfits" ? <div><Link to="/outfits/new"> &nbsp; • &nbsp; Add Outfit</Link></div> : null}
        </div>
        <div className="sign-out-container">
          <div onClick={this.props.logout}>Sign Out</div>
        </div>
      </div>
    )
  }
}

export default NavBar;