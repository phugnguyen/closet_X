import React from "react";
import { withRouter } from "react-router-dom";
import SliderComponent from "../slider/img_slider_component";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let sampleItems = [];
    sampleItems.push(
      {
        _id: 1,
        title: "My favorite outfit",
        username: "Fashionista",
        imageURL:
          "https://wakamiglobal.com/wp-content/uploads/2017/08/Back-To-School-Outfit-Ideas1.jpg"
      },
      {
        _id: 2,
        title: "Comfy Clothes",
        username: "FakeUser2",
        imageURL:
          "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1472588614/12-COMFY0816.jpg"
      },
      {
        _id: 3,
        title: "My simple outfit",
        username: "SummerClothes",
        imageURL:
          "http://becomechic.com/wp-content/uploads/2016/01/Casual-Denim-Outfits-For-Women-1.jpg"
      },
      {
        _id: 4,
        title: "My fave",
        username: "ILIKE",
        imageURL:
          "https://i.pinimg.com/originals/32/fc/9f/32fc9ff50c9c37884abace8f6a7dcabd.jpg"
      },
    );

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
