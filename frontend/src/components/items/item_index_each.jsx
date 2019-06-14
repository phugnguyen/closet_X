import React from "react";
import { Link } from "react-router-dom";

const ItemIndexEach = props => {
  return (
    <div>
      <img
        src={props.item.imageURL}
        onClick={() => props.itemShowModal(props.item._id)}
      />
    </div>
  );
};

export default ItemIndexEach;
