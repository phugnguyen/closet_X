import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class OutfitShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imgURL, title, username } = this.props.outfit;
    const { translateDelta } = this.props;
    console.log(translateDelta);
    // console.log(this.props);
    return (
      <div
        className="outfit-item"
        style={{ transform: `translateX(${translateDelta}%)` }}
      >
        <div className="outfit-img-div">
          <img className="outfit-img" src={imgURL} />
        </div>
        <div>Title: {title}</div>
        <div>Username: {username}</div>
      </div>
    );
  }
}

export default withRouter(OutfitShow);
