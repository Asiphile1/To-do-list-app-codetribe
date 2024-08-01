import axios from 'axios';

const API_URL = 'http://localhost:5001/todos';

export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const removeTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateTodo = async (id, updatedTodo) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
  return response.data;
};
