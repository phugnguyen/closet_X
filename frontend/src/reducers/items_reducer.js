import {
  RECEIVE_ALL_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM
} from "../actions/item_actions";
import merge from "lodash/merge";

const ItemReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      return merge({}, state, { [action.item._id]: action.item });
    case REMOVE_ITEM:
      newState = merge({}, state);
      return newState;
    default:
      return state;
  }
};

export default ItemReducer;
