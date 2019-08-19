import React from "react";
import { DragSource } from "react-dnd";

const imageSource = {
  beginDrag(props, monitor, component) {
    const id = props.item._id;
    const initialPos = monitor.getClientOffset();
    const source = props.item.imageURL;
    const width = props.item.width;
    return {id, initialPos, source, width};
    
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    posDiff: monitor.getDifferenceFromInitialOffset()
  };
}

class ItemSliderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imageURL, title } = this.props.item;
    const { translateDelta, connectDragSource } = this.props;

    return connectDragSource(
      <div
        className="outfit-item-vert"
        style={{ transform: `translateY(${translateDelta}%)` }}
      >
        <div>Title: {title}</div>
        <div className="outfit-item-img-div">
          <img crossOrigin="Anonymous" className="item-img" src={`${imageURL}?liuahvanb`} alt="" />
        </div>
      </div>
    );
  }
}

export default DragSource("image", imageSource, collect)(ItemSliderShow);
