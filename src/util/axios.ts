import axios from "axios";
import { DevSettings } from "react-native";
import { getToken, removeToken } from "../common/asyncFn";
const JWT_EXPRIED = "jwt expired";
const BASE_URL = "http://192.168.0.104:3456/api"
const instance = axios.create({
    baseURL: BASE_URL
})
instance.interceptors.request.use(async (config) => {
    const token: string = await getToken();
    config.headers.Authorization = `Bearer ${token}`
    return config;
}, function(err){
    return Promise.reject(err);
})
instance.interceptors.response.use(async function(response){
    return response;
}, async function(error) {
    const message: string = error.response?.data?.message
    if(message === JWT_EXPRIED ) {
        await removeToken();
        DevSettings.reload()
    }
    return Promise.reject(error);
})

export const getRequest = (url: string) => instance.get(url)
 .then((response) => response.data)
export const postRequest = async (url: string, data?: any) => instance.post(url, data).then((response) => response.data);
export const pathRequest = (url: string, data?: any) => instance.patch(url, data);
export const putRequest = (url: string, data?: any) => instance.put(url, data).then((response) => response.data )
    