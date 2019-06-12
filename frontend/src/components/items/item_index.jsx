import React from "react";
import ItemIndexEach from "./item_index_each";

class ItemIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    let items = this.props.items.map(item => <ItemIndexEach item={item} />);
    return <>{items}</>;
  }
}

export default ItemIndex;
