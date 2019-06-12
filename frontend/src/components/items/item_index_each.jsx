import React from "react";
import { Link } from "react-router-dom";

const ItemIndexEach = props => {
  return (
    <div>
      <Link to={`/item/${props.item._id}`}>
        <img src={props.item.imageURL} />
      </Link>
    </div>
  );
};

export default ItemIndexEach;
