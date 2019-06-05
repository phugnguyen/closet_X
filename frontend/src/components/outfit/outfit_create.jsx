import React from "react";
import OutfitCanvasContainer from "./outfit_canvas_container";

class OutfitCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      draggedImage: "",
    };
    this.getDraggedImage = this.getDraggedImage.bind(this);
  }

  render() {
    return (
      <div className="outfit-create-container">
        <OutfitCanvasContainer />
        <div className="outfit-items-scrollbar">
          <img src="https://cdn.shopify.com/s/files/1/1321/6369/products/duck-404_208c9604-d3d5-4c9a-9a91-afb37f16635a_large.png?v=1518578224" alt=""/>
        </div>
      </div>
    )
  }
}

export default OutfitCreate;