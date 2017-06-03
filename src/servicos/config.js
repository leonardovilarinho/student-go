import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://studen-go.azurewebsites.net/',
  timeout: 10000,
});