import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import OutfitContainer from "../outfit/outfit_container";
// import SearchBar

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount(){
  //   this.props.fetchOutfits()
  //   .then(fetchItems?)
  // }

  render() {
    // const outfits = this.props.outfits.map(outfit => {
    //   return <OutfitContainer outfit={outfit} />;
    // });

    const sampleOutfits = [
      // {
      //   title: "Bold and Brash",
      //   username: "DeezCups420",
      //   imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      // },
      // {
      //   title: "Bold and Brash",
      //   username: "DeezCups420",
      //   imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      // },
      // {
      //   title: "Bold and Brash",
      //   username: "DeezCups420",
      //   imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      // },
      // {
      //   title: "Bold and Brash",
      //   username: "DeezCups420",
      //   imgURL: "https://pbs.twimg.com/media/C7MqraEXkAExdXg.jpg"
      // }
    ];

    const outfits = sampleOutfits.map(outfit => {
      return <OutfitContainer outfit={outfit} />;
    });

    return (
      <div className="dashboard">
        <div className="dashboard-nav-bar">
          <div className="dashboard-nav-bar-logo">

          </div>
          <div className="nav-bar-item-container">
            <ul>
              <li>Dashboard</li>
              <li>Your closet</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="sign-out-container" onClick={this.props.logout}>
            Sign Out
          </div>
        </div>
        <div className="show-container">
          <div></div>
          <div className="outfit-index">{outfits}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
