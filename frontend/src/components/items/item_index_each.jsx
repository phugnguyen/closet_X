import React from "react";

const ItemIndexEach = props => {
  return (
    <div className="item-index-item-container">
      <img
        className="item-index-item"
        src={props.item.imageURL}
        onClick={() => props.itemShowModal(props.item._id)}
        alt={`item: ${props.item._id}`}
      />
    </div>
  );
};

export default ItemIndexEach;
