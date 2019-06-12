import React from "react";

class ItemShow extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.itemId);
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
