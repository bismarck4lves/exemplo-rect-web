import axios from 'axios';

const api = axios.create({
    baseURL: 'https://matriculaadminapi.uniateneu.edu.br/api/',
    timeout: 5000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default api;