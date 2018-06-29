import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/'
});
