import React from "react";
import { withRouter } from "react-router-dom";

class OutfitShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { imageURL, title, username } = this.props.outfit;
    const { translateDelta } = this.props;

    return (
      <div
        className="outfit-item"
        style={{ transform: `translateX(${translateDelta}%)` }}
      >
        <div className="outfit-img-div">
          <img className="outfit-img" src={imageURL} alt="" />
        </div>
        <div>Title: {title}</div>
        <div>Username: {username}</div>
      </div>
    );
  }
}

export default withRouter(OutfitShow);
