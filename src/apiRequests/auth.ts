import axios from 'axios';

interface registerProps {
    email: string;
    name: string;
    password: string;
}

const BASE_URL = 'https://66c60a09134eb8f434968e53.mockapi.io'; 

const authApiRequest = {
    register: (body: registerProps) => axios.post(`${BASE_URL}/auth`, body),
    login: ()=> axios.get(`${BASE_URL}/auth`),
    resetPassword: (password: string, id: string) => axios.put(`${BASE_URL}/auth/${id}`, { password }),
}

export default authApiRequest;
