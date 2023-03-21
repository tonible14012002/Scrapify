import axios from "axios"
import axiosClient from "../services/axiosClient"
import JWTManager from "./jwt"

const logout = async () => {
    return Promise(resolve => resolve({data: null}))
}

const login = async (params) => {
    return axiosClient.post('/account/auth/token/', params)
}

const refreshToken = async () => {
    return axios.post('http://127.0.0.1:8000/account/auth/token/refresh/', {
        refresh: JWTManager.getRefreshToken()
    })
}

export { logout, login, refreshToken }