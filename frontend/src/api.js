import axios from 'axios';

// Update if your backend port changes
export const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' }
});
