import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://compareproductserver.onrender.com/api'
})