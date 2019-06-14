import React from "react";
import ItemIndexEach from "./item_index_each";
import ItemFormContainer from "./new_item_container";

class ItemIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewItemModal: false
    };

    this.showNewItemModal = this.showNewItemModal.bind(this);
    this.hideNewItemModal = this.hideNewItemModal.bind(this);
  }

  showNewItemModal() {
    this.setState({ showNewItemModal: true });
    document.addEventListener("click", this.hideNewItemModal, false);
  }

  hideNewItemModal(e) {
    let spot = document.querySelector(".new-form-container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    this.setState({ showNewItemModal: false });
    document.removeEventListener("click", this.hideNewItemModal);
  }

  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    let items = this.props.items.map(item => <ItemIndexEach item={item} />);

    return (
      <>
        <span onClick={this.showNewItemModal}>Add Item</span>
        <ItemFormContainer
          show={this.state.showNewItemModal}
          hideNewItemModal={this.hideNewItemModal}
        />
        {items}
      </>
    );
  }
}

export default ItemIndex;
