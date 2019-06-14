import React from "react";

class ItemShow extends React.Component {
  componentDidMount() {
    if (this.props.itemId) {
      this.props.fetchItem(this.props.itemId);
    }
  }

  render() {
    if (!this.props.item) {
      return null;
    }
    return (
      <>
        <div>{this.props.item.title}</div>
        <img src={this.props.item.imageURL} />
      </>
    );
  }
}

export default ItemShow;
