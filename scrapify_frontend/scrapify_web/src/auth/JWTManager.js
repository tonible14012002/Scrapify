import jwtDecode from "jwt-decode"

const JWTManager = () => {

    const setToken = (token) => {
        sessionStorage.setItem('JWT', token)
    }

    const getToken = () => {
        return sessionStorage.getItem('JWT')
    }

    const clearToken = () => {
        sessionStorage.setItem('JWT', '')
    }

    const clearRefreshToken = () => {
        sessionStorage.setItem('RefreshJWT', '')

    }

    const setRefreshToken = (token) => sessionStorage.setItem('RefreshJWT', token)

    const getRefreshToken = () => sessionStorage.getItem('RefreshJWT')

    const isTokenValid = () => {
        const {exp: expiration} = jwtDecode(getToken())
        const expirationTimeInSeconds = expiration * 1000
        const now = new Date().getTime()
        return expirationTimeInSeconds > now
    }

    const isRefreshTokenValid = () => {
        const {exp: expiration} = jwtDecode(getRefreshToken())
        const expirationTimeInSeconds = expiration * 1000
        const now = new Date().getTime()
        return expirationTimeInSeconds > now
    }

    return {
        setToken,
        getToken,
        setRefreshToken,
        getRefreshToken,
        isTokenValid,
        isRefreshTokenValid, 
        clearRefreshToken, 
        clearToken
    }
    
}

export default JWTManager()