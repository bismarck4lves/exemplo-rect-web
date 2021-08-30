import axios from 'axios';
import { getToken } from "@/services/storage";
import env from "@/environments/env.json";


const token = getToken();

interface IHeaders {
    Accept: string;
    'Content-Type': string;
    Authorization?: string;
}

let headers: IHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

if (token) {
    headers.Authorization = `Bearer ${token}`;
}

const api = axios.create({
    baseURL: env.baseUrl,
    timeout: 5000,
    headers
});

api.interceptors.response.use(
    (response) => {
        if (response.status === 401) {
            localStorage.clear();
        }
        return response;
    },
    (error) => Promise.reject(error)
);

export default api;