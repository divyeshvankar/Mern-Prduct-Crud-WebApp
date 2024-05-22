// src/ProductService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/products';

export const getProducts = async () => {
  return await axios.get(API_URL);
};

export const getProductById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createProduct = async (product) => {
  return await axios.post(API_URL, product, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const updateProduct = async (id, product) => {
  return await axios.put(`${API_URL}/${id}`, product, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const deleteProduct = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
