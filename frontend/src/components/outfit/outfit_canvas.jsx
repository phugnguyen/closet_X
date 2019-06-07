import React from "react";
import { DropTarget } from "react-dnd"

class OutfitCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragging: false,
      startX: null,
      startY: null,
    };
    this.renderImage = this.renderImage.bind(this);
  }

  // onImageDrop = (e) => {
  //   e.stopPropagation();
  //   let data = e.dataTransfer.getData("text");

  //   this.addImage(0, 0, 0.5, `${data}`)
  //   this.renderAll();
  // }

  // addImage(x, y, scaleFactor, imgURL) {
  //   debugger;
  //   let img = new Image();
  //   img.crossOrigin = "anonymous";
  //   // img.onload = startInteraction;
  //   let images = this.state.images.slice(0);
  //   images.push({image: img, x, y, scale: scaleFactor, isDragging: false, url: imgURL})
  //   this.setState({images: images});

  //   this.renderAll();
  // }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.renderAll();
    }

  }


  renderAll() {
    debugger;
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < this.props.items.length; i++) {
      let r = this.props.items[i];
      ctx.drawImage(r.image, r.x, r.y, r.width, r.height);
    }
  }

  renderImage(image, ctx) {
    ctx.drawImage(image.image, image.x, image.y, image.width, image.height);
  }

  // onImageDragOver = (e) => {
  //   e.preventDefault();
  // }

  // onMouseDown(e) {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   let canvas = document.getElementById("canvas");

  //   let mx = parseInt(e.clientX - canvas.offset().left);
  //   let my = parseInt(e.clientY - canvas.offset().top);

  //   this.setState({isDragging: false})
  //   for(let i = 0; i < this.state.images.length; i++) {
  //     let r = this.state.images[i];
  //     if(mx > r.x && mx < r.x + r.width && my>r.y && my<r.y+r.height) {
  //       r.isDragging=true;
  //       this.setState({isDragging: true});
  //     }
  //   }
  //   this.setState({startX: mx, startY: my})
  // }

  // onMouseUp(e) {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   this.setState({isDragging: false});
  //   let curr;

  //   for(var i=0; i < this.state.images.length; i++){
  //     curr = this.state.images[i]
  //     curr.isDragging=false;
  //   }
  // }

  // onMouseMove(e) {
  //   if(!this.state.isDragging) {return;}

  //   e.preventDefault();
  //   e.stopPropagation();
  //   let canvas = document.getElementById("canvas");

  //   let mx = parseInt(e.clientX - canvas.offset().left);
  //   let my = parseInt(e.clientY - canvas.offset().top);

  //   let dx = mx - this.state.startX;
  //   let dy = my - this.state.startY;

  //   for(let i = 0; i < this.state.images.length; i++) {
  //     let r = this.state.images[i];
  //     if(r.isDragging) {
  //       r.x += dx;
  //       r.y += dy;
  //     }
  //   }
  //   this.setState({startX: mx, startY: my});
  // }

  render() {
    const { connectDropTarget, droppedItem } = this.props;
    let className = null;
    console.log(this.props);
    return connectDropTarget(
      <div className={`canvas-container ${className}`}>
        <canvas
          id="canvas"
          onClick={this.handleCanvasClick}
          // onDrop={(e) => this.onImageDrop(e)}
          // onDragOver={(e) => this.onImageDragOver(e)}
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

const spec = {
  drop(props, monitor, component) {
    const item = monitor.getItem()
    props.onDrop(item)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    clientOffset: monitor.getClientOffset()
  };
}


export default DropTarget("image", spec, collect)(OutfitCanvas);