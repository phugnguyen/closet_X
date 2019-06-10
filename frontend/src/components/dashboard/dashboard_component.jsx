import React from "react";
import { withRouter } from "react-router-dom";
import OutfitContainer from "../outfit/outfit_container";
import SliderComponent from "../slider/img_slider_component";
// import SearchBar

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const times = 10;
    let sampleItems = [];
    for (let i = 0; i < times; i++) {
      sampleItems.push(
        {
          title: "SecretaryKim",
          username: "Vice Chairman",
          imageURL:
            "http://d263ao8qih4miy.cloudfront.net/wp-content/uploads/2018/06/SecretaryKim05-00250.jpg"
        },
        {
          title: "SecretaryKim",
          username: "Vice Chairman",
          imageURL:
            "http://d263ao8qih4miy.cloudfront.net/wp-content/uploads/2018/06/SecretaryKim05-00232.jpg"
        }
      );
    }

    return (
      <div className="dashboard">
        <h1>Trending</h1>
        <SliderComponent items={sampleItems} />
        <h1>Friends</h1>
        <SliderComponent items={sampleItems} />
      </div>
    );
  }
}

export default withRouter(Dashboard);
