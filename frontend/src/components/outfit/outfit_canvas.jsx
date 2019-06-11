import React from "react";
import { DropTarget } from "react-dnd"

class OutfitCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragging: false,
      imageURLs : [],
      itemIDs: []
    };
    this.renderAll = this.renderAll.bind(this);
    this.renderToCanvas = this.renderToCanvas.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({imageURLs : [],
        itemIDs: []});
      for(let i = 0; i < this.props.items.length; i++) {
        this.setState({imageURLs : [...this.state.imageURLs, this.props.items[i].image.src],
          itemIDs: [...this.state.itemIDs, this.props.items[i].id]})
      }

      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.renderAll(ctx);
    }
  }

  componentDidMount() {
    let canvas = document.getElementById("canvas");
    canvas.height = 600;
    canvas.width = 600;
  }

  renderAll(ctx) {
    for(let i = 0; i < this.props.items.length; i++) {
      let r = this.props.items[i];
      this.renderToCanvas(ctx, r);
    }
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

    let mx = parseInt(e.clientX - canvas.offsetLeft);
    let my = parseInt(e.clientY - canvas.offsetTop);

    this.setState({isDragging: false})
    for(let i = 0; i < this.props.items.length; i++) {
      let r = this.props.items[i];
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

    for(var i=0; i < this.props.items.length; i++){
      curr = this.props.items[i]
      curr.isDragging=false;
    }

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.renderAll(ctx);
  }

  onMouseMove(e) {
    if(!this.state.isDragging) {return;}

    e.preventDefault();
    e.stopPropagation();
    let canvas = document.getElementById("canvas");

    let mx = parseInt(e.clientX - canvas.offsetLeft);
    let my = parseInt(e.clientY - canvas.offsetTop);

    let dx = mx - this.state.startX;
    let dy = my - this.state.startY;

    for(let i = 0; i < this.props.items.length; i++) {
      let r = this.props.items[i];
      if(r.isDragging) {
        r.x += dx;
        r.y += dy;
      }
    }
    this.setState({startX: mx, startY: my});

    let ctx = canvas.getContext("2d");
    this.renderAll(ctx);
  }

  render() {
    const { connectDropTarget } = this.props;
    let className = null;
    console.log("canvas: ", this.state);
    return connectDropTarget(
      <div className={`canvas-container ${className}`}>
        <canvas
          id="canvas"
          onClick={this.handleCanvasClick}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseMove={this.onMouseMove}
        >
        </canvas>
        <div className="outfit-create-options">
          <button onClick={this.props.handleClear}>Clear</button>
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