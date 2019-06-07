import React from "react"
import { DragSource } from "react-dnd";


//update this based on scroll information 
const imageSource = {
  beginDrag(props, monitor, component) {
    const image = {id: props.id}
    const pos = monitor.getClientOffset();
    const source = "https://cdn.shopify.com/s/files/1/1321/6369/products/duck-404_208c9604-d3d5-4c9a-9a91-afb37f16635a_large.png?v=1518578224";

    return {image, pos, source};
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
  };
}

class ImageComp extends React.Component {
  render() {
    const { connectDragSource } = this.props
    return connectDragSource(
      <img src="https://cdn.shopify.com/s/files/1/1321/6369/products/duck-404_208c9604-d3d5-4c9a-9a91-afb37f16635a_large.png?v=1518578224" alt=""/>
    )
  }
}

export default DragSource("image", imageSource, collect)(ImageComp);