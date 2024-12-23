import axios from 'axios';

const apiClient = axios.create({
    baseURL: '',
    TimeOut: 3000,
    headers: {
        'Content-Type': 'application/json',
    }
})


// apiClient.interceptors.response((res) => {
//     return res
// }, (error) => {
//     return error;
// })


export default apiClient;