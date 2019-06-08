import React from "react";
import { DropTarget } from "react-dnd"

class OutfitCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURLs : []
    };
    this.renderToCanvas = this.renderToCanvas.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({imageURLs : []});
      for(let i = 0; i < this.props.items.length; i++) {
        this.setState({imageURLs : [...this.state.imageURLs, this.props.items[i].image.src]})
      }

      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for(let i = 0; i < this.props.items.length; i++) {
        let r = this.props.items[i];
        this.renderToCanvas(ctx, r);
      }
    }
  }

  componentDidMount() {
    let canvas = document.getElementById("canvas");
    canvas.height = 600;
    canvas.width = 600;
  }

  renderToCanvas(ctx, imageObj) {
    let img = new Image();
    img.src = imageObj.image.src;

    img.onload = function() {
      ctx.drawImage(img, imageObj.x, imageObj.y, imageObj.width, imageObj.height);
    }
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
          // onMouseDown={this.onMouseDown}
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