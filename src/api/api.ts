import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async (endpoint: string, params?: Record<string, any>) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};
