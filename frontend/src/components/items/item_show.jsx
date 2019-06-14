import React from "react";

class ItemShow extends React.Component {
  componentDidMount() {
    if (this.props.itemId) {
      this.props.fetchItem(this.props.itemId);
    }
  }

  render() {
    const showHideClassName = this.props.show
      ? "login-modal-background display-block"
      : "login-modal-background display-none";
    if (!this.props.item) {
      return null;
    }
    return (
      <>
        <div className={showHideClassName}>
          <div className="new_form_container">
            <div>{this.props.item.title}</div>
            <img src={this.props.item.imageURL} />
          </div>
        </div>
      </>
    );
  }
}

export default ItemShow;
