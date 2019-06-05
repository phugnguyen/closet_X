import React from "react";

class OutfitCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onImageDrop = this.onImageDrop.bind(this);
    this.onImageDragOver = this.onImageDragOver.bind(this);
  }

  onImageDrop = (e) => {
    e.stopPropagation();
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    console.log(e.target);
  }

  onImageDragOver = (e) => {
    e.preventDefault();
    console.log("image dragged over")
  }

  render() {
    return (
      <div className="canvas-container">
        <canvas id="canvas" onDrop={(e) => this.onImageDrop(e)} onDragOver={(e) => this.onImageDragOver(e)}>
        </canvas>
        <div className="outfit-create-options">
          <button>Clear</button>
          <button>Save</button>
        </div>
      </div>
    )
  }
}

export default OutfitCanvas;