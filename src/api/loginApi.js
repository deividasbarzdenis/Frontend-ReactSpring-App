import axios from "axios";

const loginHttp = axios.create({
    baseURL: ''
})

export const login = (userLogin) => loginHttp.post('/login', userLogin);