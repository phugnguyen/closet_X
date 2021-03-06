import React from "react";
import { DropTarget } from "react-dnd";

class OutfitCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragging: false,
      imageURLs : [],
      itemIDs: [],
      title: ""
    };
    this.renderAll = this.renderAll.bind(this);
    this.renderToCanvas = this.renderToCanvas.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.dataURItoBlob = this.dataURItoBlob.bind(this);
    this.returnState = this.returnState.bind(this);

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

  returnState() {
    console.log(this.state);
  }

  renderToCanvas(ctx, imageObj) {
    let img = new Image ();
    img.crossOrigin = "Anonymous";
    img.src = imageObj.image.src;
    window.show = this.returnState;

    img.onload = function() {
      console.log(img);
      let widthScale = 200 / img.width;
      let heightScale = 200 / img.height;
      let scale = widthScale < heightScale ? widthScale : heightScale
      if (imageObj.width === undefined) {
        imageObj.width = img.width*scale;
      }
      if (imageObj.height === undefined) {
        imageObj.height = img.height*scale;
      }

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
      if(mx > r.x && mx < r.x + r.width && my > r.y && my < r.y + r.height) {
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

  handleChange(e) {
    this.setState({
      title: e.currentTarget.value
    })
  }

  handleSave(e) {
    e.preventDefault();
    let canvas = document.getElementById("canvas");

    let dataUrl = canvas.toDataURL('png');
    let blobData = this.dataURItoBlob(dataUrl);

    const formData = new FormData();
    formData.append("user", this.props.user);
    formData.append("title", this.state.title);
    formData.append("image", blobData);
    formData.append("imageURL", this.state.imageURLs);
    formData.append("items", this.state.itemIDs)

    this.props.createOutfit(formData)
    .then(res => this.props.history.push("/"));
  }

  dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}

  render() {
    console.log(this.props.items);
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="canvas-container">
        <div className="canvas-header">Plan an outfit</div>
        <canvas
          id="canvas"
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseMove={this.onMouseMove}
        >
        </canvas>
        <div className="outfit-create-options">
          <input type="text" value={this.state.title} onChange={this.handleChange}
            placeholder="Outfit Title..."></input>
          <div className="outfit-button-container">
            <button onClick={this.props.handleClear}>Clear</button>
            <button onClick={this.handleSave}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

const spec = {
  drop(props, monitor, component) {
    const item = monitor.getItem()
    let diff = monitor.getDifferenceFromInitialOffset();
    item.newPos = {x: item.initialPos.x + diff.x, y: item.initialPos.y + diff.y}
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