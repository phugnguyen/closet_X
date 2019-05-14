import axios from "axios";

export const fetchAllItems = () => {
  return axios.get("/api/items");
};

export const createItem = data => {
  debugger;
  return axios.post("/api/items", data);
};

export const removeItem = data => {
  return axios.get(`/api/items/${data.id}`);
};
