import React from "react";

class ItemShow extends React.Component {
  componentDidMount() {
    if (this.props.itemId) {
      this.props.fetchItem(this.props.itemId);
    }
  }

  render() {
    const showHideClassName = this.props.show
      ? "show-modal-background display-flex"
      : "show-modal-background display-none";
    if (!this.props.item) {
      return null;
    }
    return (
      <>
        <div className={showHideClassName}>
          <div className="show-item-container">
            <div className="show-item-contents">
              <div>{this.props.item.title}</div>
              <img src={this.props.item.imageURL} id="show-image" alt={`item id: ${this.props.item._id}`}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ItemShow;
