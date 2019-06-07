import React from "react";
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import OutfitCanvasContainer from "./outfit_canvas_container";
import ImageComp from "./image_comp";

class OutfitCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(item) {
    debugger;
    let canvas = document.getElementById("canvas");
    let img = new Image();
    img.crossOrigin = "anonymous"
    img.src = item.source;
    let x = parseInt(item.pos.x - canvas.offsetLeft);
    let y = parseInt(item.pos.y - canvas.offsetTop);
    let newItem = {image: img, x, y, width: 100, height: 100};

    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  render() {
    return (
      <div className="outfit-create-container">
        <OutfitCanvasContainer items={this.state.items} onDrop={this.onDrop}/>
        <div className="outfit-items-scrollbar">
          <ImageComp id={`1`}/>
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(OutfitCreate);