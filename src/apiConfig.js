import axios from 'axios';

const api = axios.create({
  baseURL: '',
  timeout: 5000, // Set a timeout value suitable for your needs
  headers: {
    'Authorization': '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',
  },
});

export default api;
