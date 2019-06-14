import React from "react";

class ItemShow extends React.Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.fetchItem(this.props.match.params.itemId);
    }
  }

  render() {
    if (!this.props.item) {
      return null;
    }
    return (
      <>
        gffytfufyiygiyf
        <div>{this.props.item.title}</div>
        <img src={this.props.item.imageURL} />
      </>
    );
  }
}

export default ItemShow;
