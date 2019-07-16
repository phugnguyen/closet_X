import axios from "axios";

export const fetchAllItems = id => {
  return axios.get("/api/items", {params: {id}});
};

export const fetchItem = id => {
  return axios.get(`/api/items/${id}`);
};

export const createItem = data => {
  return axios.post("/api/items", data);
};

export const updateItem = (data, id) => {
  return axios.post(`/api/items/update/${id}`, data);
};

export const removeItem = data => {
  return axios.get(`/api/items/${data.id}`);
};
