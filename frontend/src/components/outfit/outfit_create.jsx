import React from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import OutfitCanvasContainer from "./outfit_canvas_container";
import OutfitScrollBarContainer from "./outfit_scrollbar_container";
import item_form from "../items/item_form";

class OutfitCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }

    this.onDrop = this.onDrop.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  onDrop(item) {
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = item.source;
    let x = parseInt(item.pos.x);
    let y = parseInt(item.pos.y);

    let newItem = {id: item.id, image: img, x, y, width: 200, height: 200};


    this.setState({
      items: [...this.state.items, newItem]
    });
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({items: []})
  }

  render() {
    return (
      <div className="outfit-create-container">
        <OutfitCanvasContainer items={this.state.items} onDrop={this.onDrop} handleClear={this.handleClear}/>
        <div className="outfit-items-scrollbar">
          <OutfitScrollBarContainer />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(OutfitCreate);
