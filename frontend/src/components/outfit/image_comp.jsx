import React from "react"
import { DragSource } from "react-dnd";


//update this based on scroll information 
const imageSource = {
  beginDrag(props, monitor, component) {
    const image = {id: props.id};
    const initialPos = monitor.getClientOffset();
    const posDiff = monitor.getSourceClientOffset()
    const pos = {x: initialPos.x - posDiff.x, y: initialPos.y - posDiff.y}
    const source = props.id === '1' ? "https://cdn.shopify.com/s/files/1/1321/6369/products/duck-404_208c9604-d3d5-4c9a-9a91-afb37f16635a_large.png?v=1518578224" : "https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg"

    return {image, pos, source};
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    posDiff: monitor.getDifferenceFromInitialOffset()
  };
}

class ImageComp extends React.Component {
  render() {
    const { connectDragSource } = this.props
    return connectDragSource(
      this.props.id === '1' ? <img src="https://cdn.shopify.com/s/files/1/1321/6369/products/duck-404_208c9604-d3d5-4c9a-9a91-afb37f16635a_large.png?v=1518578224" alt=""/> : <img src = "https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg" alt="" />
    )
  }
}

export default DragSource("image", imageSource, collect)(ImageComp);