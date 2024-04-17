import axios from 'axios';

const MAIN_URI = `http://${import.meta.env.VITE_SERVER_HOST}:3000/api/v1/`;

// Add headers for the axios requests all the time.
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// Create an axios instance.
const api = axios.create({
  baseURL: MAIN_URI,
  validateStatus(status) {
    return status >= 200 && status < 500;
  },
});

// Export the axios instance.
export default api;