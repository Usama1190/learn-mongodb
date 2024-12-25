import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const BASE_URI = process.env.BASE_URI; 

const apiClient = axios.create({
    // baseURL: BASE_URI,
    baseURL: 'http://localhost:9000',
    TimeOut: 3000,
    headers: {
        'Content-Type': 'application/json',
    }
})


// apiClient.interceptors.use.response((res) => {
//     return res
// }, (error) => {
//     return error;
// })


export default apiClient;