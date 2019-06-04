import React from "react";
import { withRouter } from "react-router-dom";
import OutfitContainer from "../outfit/outfit_container";
// import SearchBar

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { translateDelta: 0, delta: 300 };
  }

  // componentDidMount(){
  //   this.props.fetchOutfits()
  //   .then(fetchItems?)
  // }

  handleButton(arg) {
    const { translateDelta, delta } = this.state;

    // TODO:
    // implment some sort of throttling function
    // to prevent bad UX
    // prev <= 0 to prevent over scrolling
    if (arg === "prev" && translateDelta + delta <= 0) {
      this.setState({ translateDelta: translateDelta + delta });
    } else if (arg === "next") {
      this.setState({ translateDelta: translateDelta - delta });
    }
  }

  render() {
    const times = 10;
    let sampleItems = [];
    for (let i = 0; i < times; i++) {
      sampleItems.push(
        {
          title: "SecretaryKim",
          username: "Vice Chairman",
          imgURL:
            "http://d263ao8qih4miy.cloudfront.net/wp-content/uploads/2018/06/SecretaryKim05-00250.jpg"
        },
        {
          title: "SecretaryKim",
          username: "Vice Chairman",
          imgURL:
            "http://d263ao8qih4miy.cloudfront.net/wp-content/uploads/2018/06/SecretaryKim05-00232.jpg"
        }
      );
    }

    // Will replace this later when an items array
    // is being passed into props
    // switch lines 53 and 54

    // const items = this.props.items.map(item => {
    const items = sampleItems.map(item => {
      return (
        <OutfitContainer
          outfit={item}
          translateDelta={this.state.translateDelta}
        />
      );
    });

    return (
      <div className="dashboard">
        <div className="outfit-index">{items}</div>
        <div className="dashboard-buttons">
          <button onClick={() => this.handleButton("prev")}>Left</button>
          <button onClick={() => this.handleButton("next")}>Right</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
