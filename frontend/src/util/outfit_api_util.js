import axios from "axios";

export const fetchAllOutfits = () => {
  return axios.get("/api/outfits");
};

export const fetchOutfit = id => {
  return axios.get(`/api/outfits/${id}`);
};

export const createOutfit = data => {
  return axios.post("/api/outfits", data);
};

export const removeItem = data => {
  return axios.get(`/api/outfits/${data.id}`);
};
