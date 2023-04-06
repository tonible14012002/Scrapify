import axios from "axios"
import axiosClient from "../services/axiosClient"
import JWTManager from "./JWTManager"

const logout = async () => {
    return new Promise(resolve => resolve({data: null}))
}

const login = async (params) => {
    return axiosClient.post('/account/auth/token/', params)
}

const register = async (data) => {
    return axios.post('http://127.0.0.1:8000/account/', data)
}

const refreshToken = async () => {
    return axios.post('http://127.0.0.1:8000/account/auth/token/refresh/', {
        refresh: JWTManager.getRefreshToken()
    })
}

const me = async (token) => {
    return axios.post('http://127.0.0.1:8000/account/auth/me/', {token})
}

export { logout, login, register, refreshToken, me }