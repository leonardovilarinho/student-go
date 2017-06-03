import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://studen-go.azurewebsites.net/',
  timeout: 10000,
});