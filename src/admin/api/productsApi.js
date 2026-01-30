import axios from 'axios';

const API_BASE_URL = 'https://69771b935b9c0aed1e855f27.mockapi.io/list';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to ensure price and discount are strings
const ensureStringFields = (product) => {
  return {
    ...product,
    price: String(product.price || ''),
    discount: String(product.discount || ''),
  };
};

export const getProducts = async () => {
  const response = await apiClient.get('/');
  return response.data;
};

export const createProduct = async (product) => {
  const productData = ensureStringFields(product);
  const response = await apiClient.post('/', productData);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const productData = ensureStringFields(product);
  const response = await apiClient.put(`/${id}`, productData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await apiClient.delete(`/${id}`);
  return response.data;
};

