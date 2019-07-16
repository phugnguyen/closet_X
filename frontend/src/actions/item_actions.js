import * as ItemAPIUtil from "../util/item_api_util";

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";

export const receiveAllItems = items => ({
  type: RECEIVE_ALL_ITEMS,
  items
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item: item.data
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  itemId: item.id
});

export const receiveItemErrors = errors => ({
  type: RECEIVE_ITEM_ERRORS,
  errors
});

export const fetchAllItems = (id) => dispatch =>
  ItemAPIUtil.fetchAllItems(id).then(items =>
    dispatch(receiveAllItems(items), err =>
      dispatch(receiveItemErrors(err.responseJSON))
    )
  );

export const fetchItem = id => dispatch =>
  ItemAPIUtil.fetchItem(id).then(item =>
    dispatch(receiveItem(item), err =>
      dispatch(receiveItemErrors(err.responseJSON))
    )
  );

export const createItem = item => dispatch =>
  ItemAPIUtil.createItem(item).then(item =>
    dispatch(receiveItem(item), err =>
      dispatch(receiveItemErrors(err.responseJSON))
    )
  );

export const updateItem = (item, id) => dispatch =>
  ItemAPIUtil.updateItem(item, id).then(item =>
    dispatch(receiveItem(item), err =>
      dispatch(receiveItemErrors(err.responseJSON))
    )
  );
