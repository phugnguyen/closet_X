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
    this.hideItemShowModal = this.hideItemShowModal.bind(this);
  }

  showNewItemModal() {
    this.setState({ showNewItemModal: true });
    document.addEventListener("click", this.hideNewItemModal, false);
  }

  itemShowModal(id) {
    this.setState({ itemShowModal: true, modal: id });
    document.addEventListener("click", this.hideItemShowModal, false);
  }

  hideNewItemModal(e) {
    let spot = document.querySelector(".new-form-container");
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
    this.props.fetchAllItems(this.props.userId);
  }

  render() {
    let items = this.props.items.map(item => (
      <ItemIndexEach key={item.id} itemShowModal={this.itemShowModal} item={item} />
    ));
    let modal = this.state.itemShowModal ? (
      <ItemShowContainer
        show={this.state.itemShowModal}
        hideItemShowModal={this.hideItemShowModal}
        itemId={this.state.modal}
      />
    ) : (
      <></>
    );
    return (
      <div className="item-index-container">
        {modal}
        <ItemFormContainer
          show={this.state.showNewItemModal}
          hideNewItemModal={this.hideNewItemModal}
        />
        <div className="item-index-items-container">
          {items}
        </div>
        <p id="modal-text" className="display-none" onClick={this.showNewItemModal}>Click Me!</p>
      </div>
    );
  }
}

export default ItemIndex;
