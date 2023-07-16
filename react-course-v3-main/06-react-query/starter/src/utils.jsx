import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
  headers: {
    Accept: 'Application/json',
  },
});

export default customFetch;
