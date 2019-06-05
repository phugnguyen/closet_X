import React from "react";
import ItemIndex from "../items/item_index";

class OutfitScrollbar extends React.Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    let items = this.props.items.map(item => (
      <ItemIndex item={item} key={item.id} />
    ));
    return <>{items}</>;
  }
}

export default OutfitScrollbar;
