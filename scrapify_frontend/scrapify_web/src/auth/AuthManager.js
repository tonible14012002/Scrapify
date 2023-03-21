import JWTManager from './jwt'

const handleLoginFromJWT = (access, refresh) => {
    JWTManager.setToken(access)
    JWTManager.setRefreshToken(refresh)
}

const handleLogout = () => {
    JWTManager.setRefreshToken('')
    JWTManager.setToken('')
}


const checkIsLoggedin = () => {
    // check if token is in storage and valid
    const JWT = JWTManager.getToken()
    const RefreshJWT = JWTManager.getRefreshToken()
    return ((JWT && JWTManager.isTokenValid())
        || (RefreshJWT && JWTManager.isRefreshTokenValid()))
}

export { handleLoginFromJWT, checkIsLoggedin, handleLogout }