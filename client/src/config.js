import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://product-comparison-mern-app.herokuapp.com/api'
})