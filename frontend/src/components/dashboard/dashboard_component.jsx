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
    const sampleOutfits = [];
    const outfits = sampleOutfits.map(outfit => {
      return <OutfitContainer outfit={outfit} />;
    });
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div>Dashboard {/* <SearchBar /> */} </div>
        <div className="outfit-index">{outfits}</div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
