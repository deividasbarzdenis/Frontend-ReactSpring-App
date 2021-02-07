import axios from "axios"
import store from '../store'

const HTTP = axios.create({
    baseURL: '/api'
})

HTTP.interceptors.request.use(config => {

    config.headers.authorization = store.getState().user.jwt
    return config
})

HTTP.interceptors.response.use(response => response, ({response: {status}}) => {
    if (status === 401 || status === 403) {
        window.location.href = "/login"
    }
})
export { HTTP as default }