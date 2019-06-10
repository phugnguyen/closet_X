import React from "react";
import { withRouter } from "react-router-dom";

class ItemSliderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imageURL, title } = this.props.item;
    const { translateDelta } = this.props;

    return (
      <div
        className="outfit-item"
        style={{ transform: `translateY(${translateDelta}%)` }}
      >
        <div className="item-img-div">
          <img className="item-img" src={imageURL} alt="" />
        </div>
        <div>Title: {title}</div>
      </div>
    );
  }
}

export default ItemSliderShow;
