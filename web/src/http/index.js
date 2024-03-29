import axios from 'axios'
const { detect } = require('detect-browser');

export  const API_URL='http://localhost:8000/api'

const $api =axios.create({
     withCredentials:true,
    baseURL:API_URL
})
$api.interceptors.request.use((config)=>{
    // console.log(`${config.method} ${config.url}  ${config.data}`);
    // console.log(config)
    config.headers.Authorization=`Bearer ${localStorage.getItem('token')}`
    return config;
})


$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const device=detect()
            const response = await axios.post(`${API_URL}/refresh`, {device:device},{withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export default $api;