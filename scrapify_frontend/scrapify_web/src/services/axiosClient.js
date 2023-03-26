import axios from "axios";
import JWTManager from "../auth/JWTManager";
import * as AuthService from "../auth/authServices"

// const baseSocketURL = '';
const baseURL = "http://127.0.0.1:8000";

let isRefreshing = false
let waitingTokenSubscriber = []

const shareTokenForSubscriber = (access) => {
    waitingTokenSubscriber.forEach(resolve => resolve(access))
    waitingTokenSubscriber = []
}

const subscribeRefreshToken = async () => {
    return new Promise(resolve => {
        waitingTokenSubscriber.push(resolve)
    })
}

const axiosClient = axios.create({
    baseURL
})

axiosClient.defaults.withCredentials = true;

// Add Authorization header to each request
axiosClient.interceptors.request.use(
    async config => {
        // dont include token on these apis
        if (config.url === '/account/auth/token/' ||
            config.url === '/account/auth/token/refresh/')
            {
                return config
            }

        const accessToken = JWTManager.getToken()
        const refreshToken = JWTManager.getRefreshToken()

        // navigate to login if token not found
        if (!(accessToken || refreshToken )) {
            window.location.href = '/login'
        }

        // include access token if valid
        if (accessToken && JWTManager.isTokenValid()) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
            return config
        }
        
        if (JWTManager.isRefreshTokenValid()) {
            if (!isRefreshing) {
                isRefreshing = true
                try {
                    // Refresh the token
                    const {data: { access }} = await AuthService.refreshToken()
                    JWTManager.setToken(access)
                    config.headers['Authorization'] = `Bearer ${access}`

                    shareTokenForSubscriber()
                    isRefreshing = false
                }
                catch(e) {
                    isRefreshing = false
                    console.log('refreshing error', e)
                    window.location.href = '/login'
                }
                return config
            }
            const access = await subscribeRefreshToken()
            config.headers['Authorization'] = `Bearer ${access}`
            return config
        }

        JWTManager.clearRefreshToken()
        JWTManager.clearToken()

        window.location.href = '/login'
    },
    error => Promise.reject(error)
)

export default axiosClient;
