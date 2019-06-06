import React from "react";

class OutfitCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragging: false,
      startX: null,
      startY: null,
      images: []
    };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.onImageDragOver = this.onImageDragOver.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.addImage = this.addImage.bind(this);
    this.renderAll = this.renderAll.bind(this);
    

  }

  onImageDrop = (e) => {
    e.stopPropagation();
    let data = e.dataTransfer.getData("text");

    this.addImage(0, 0, 0.5, `${data}`)
    this.renderAll();
  }

  addImage(x, y, scaleFactor, imgURL) {
    debugger;
    let img = new Image();
    img.crossOrigin = "anonymous";
    // img.onload = startInteraction;
    let images = this.state.images.slice(0);
    images.push({image: img, x, y, scale: scaleFactor, isDragging: false, url: imgURL})
    this.setState({images: images});

    this.renderAll();
  }


  renderAll() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < this.state.images.length; i++) {
      let r = this.state.images[i];
      ctx.drawImage(r.image, r.x, r.y, r.width, r.height);
    }
  }

  onImageDragOver = (e) => {
    e.preventDefault();
  }

  onMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();

    let canvas = document.getElementById("canvas");

    let mx = parseInt(e.clientX - canvas.offset().left);
    let my = parseInt(e.clientY - canvas.offset().top);

    this.setState({isDragging: false})
    for(let i = 0; i < this.state.images.length; i++) {
      let r = this.state.images[i];
      if(mx > r.x && mx < r.x + r.width && my>r.y && my<r.y+r.height) {
        r.isDragging=true;
        this.setState({isDragging: true});
      }
    }
    this.setState({startX: mx, startY: my})
  }

  onMouseUp(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({isDragging: false});
    let curr;

    for(var i=0; i < this.state.images.length; i++){
      curr = this.state.images[i]
      curr.isDragging=false;
    }
  }

  onMouseMove(e) {
    if(!this.state.isDragging) {return;}

    e.preventDefault();
    e.stopPropagation();
    let canvas = document.getElementById("canvas");

    let mx = parseInt(e.clientX - canvas.offset().left);
    let my = parseInt(e.clientY - canvas.offset().top);

    let dx = mx - this.state.startX;
    let dy = my - this.state.startY;

    for(let i = 0; i < this.state.images.length; i++) {
      let r = this.state.images[i];
      if(r.isDragging) {
        r.x += dx;
        r.y += dy;
      }
    }
    this.setState({startX: mx, startY: my});
  }

  render() {
    return (
      <div className="canvas-container">
        <canvas
          id="canvas"
          onClick={this.handleCanvasClick}
          onDrop={(e) => this.onImageDrop(e)}
          onDragOver={(e) => this.onImageDragOver(e)}
        >
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