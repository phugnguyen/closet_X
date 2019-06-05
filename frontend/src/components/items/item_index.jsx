import React from "react";

const ItemIndex = props => {
  return (
    <>
      <input type="text" />
      <img className="item_img" src={props.item.imageURL} />
    </>
  );
};

export default ItemIndex;
