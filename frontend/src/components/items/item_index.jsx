import React from "react";
import ItemIndexEach from "./item_index_each";
import ItemFormContainer from "./new_item_container";
import ItemShowContainer from "./item_show_container";

class ItemIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewItemModal: false,
      itemShowModal: false,
      modal: null
    };

    this.showNewItemModal = this.showNewItemModal.bind(this);
    this.itemShowModal = this.itemShowModal.bind(this);
    this.hideNewItemModal = this.hideNewItemModal.bind(this);
  }

  // getImageItemId() {}

  showNewItemModal() {
    this.setState({ showNewItemModal: true });
    document.addEventListener("click", this.hideNewItemModal, false);
  }

  itemShowModal(id) {
    this.setState({ itemShowModal: true, modal: id }, () =>
      console.log(this.state)
    );
    document.addEventListener("click", this.hideItemShowModal, false);
  }

  hideNewItemModal(e) {
    let spot = document.querySelector(".new_form_container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    this.setState({ showNewItemModal: false });
    document.removeEventListener("click", this.hideNewItemModal);
  }

  hideItemShowModal(e) {
    let spot = document.querySelector(".new_form_container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    this.setState({ itemShowModal: false });
    document.removeEventListener("click", this.hideItemShowModal);
  }

  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    let items = this.props.items.map(item => (
      <ItemIndexEach itemShowModal={this.itemShowModal} item={item} />
    ));
    let modal = this.state.itemShowModal ? (
      <div className=".new_form_container">
        <ItemShowContainer itemId={this.state.modal} />
      </div>
    ) : (
      <></>
    );
    return (
      <>
        {modal}
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
