import axios from "axios"


const baseUrl = "https://e-commerce-m.herokuapp.com/api";


const axiosInstance = axios.create({
    baseURL: baseUrl,
    // headers: {
    //     'Authorization': token ? `Bearer ${token}` : ''
    // }
})


export default axiosInstance