import * as OutfitAPIUtil from "../util/outfit_api_util";
import { receiveItemErrors } from "./item_actions";

export const RECEIVE_ALL_OUTFITS = "RECEIVE_ALL_OUTFITS";
export const RECEIVE_OUTFIT = "RECEIVE_OUTFIT";
export const REMOVE_OUTFIT = "REMOVE_OUTFIT";
export const RECEIVE_OUTFIT_ERRORS = "RECEIVE_OUTFIT_ERRORS";
export const CREATE_OUTFIT = "CREATE_OUTFIT";

export const receiveAllOutfits = outfits => ({
  type: RECEIVE_ALL_OUTFITS,
  outfits
});

export const receiveOutfit = outfit => ({
  type: RECEIVE_OUTFIT,
  outfit
});

export const removeOutfit = outfit => ({
  type: REMOVE_OUTFIT,
  outfitId: outfit.id
});

export const receiveOutfitErrors = errors => ({
  type: RECEIVE_OUTFIT_ERRORS,
  errors
});

export const fetchAllOutfits = () => dispatch =>
  OutfitAPIUtil.fetchAllOutfits().then(outfits =>
    dispatchEvent(receiveAllOutfits(outfits), err =>
      dispatch(receiveItemErrors(err.responseJSON))
    )
  );

export const fetchOutfit = id => dispatch =>
  OutfitAPIUtil.fetchOutfit(id).then(outfit =>
    dispatch(receiveOutfit(outfit), err =>
      dispatch(receiveOutfitErrors(err.responseJSON))
    )
  );

export const createOutfit = outfit => dispatch =>
  OutfitAPIUtil.createOutfit(outfit).then(outfit =>
    dispatch(receiveOutfit(outfit), err =>
      dispatch(receiveOutfitErrors(err.responseJSON))
    )
  );
