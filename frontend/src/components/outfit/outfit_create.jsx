import React from "react";
import OutfitCanvasContainer from "./outfit_canvas_container";
import ImageComp from "./image_comp";

class OutfitCreate extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   draggedImage: "",
    // };
    // this.getDraggedImage = this.getDraggedImage.bind(this);
  }

  render() {
    return (
      <div className="outfit-create-container">
        <OutfitCanvasContainer />
        <div className="outfit-items-scrollbar">
          <ImageComp />
        </div>
      </div>
    )
  }
}

export default OutfitCreate;