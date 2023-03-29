import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext"
import useIsMounted from "../hooks/useIsMounted"
import { me } from "./authServices"
import JWTManager from "./JWTManager"
import Login from "../views/Login"
import { useSyncContext } from "../context/SyncContext"

const AuthGuard = ({
    children
}) => {

    const navigate = useNavigate()
    const { syncTrigger } = useSyncContext()
    const { user, setUser } = useAuthContext()
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isAuthenticated, setIsAuthenticated ] = useState(false)
    const isMounted = useIsMounted()

    const handleTokenGuard = () => {

        const tokenIsValid = JWTManager.getToken() && JWTManager.isTokenValid()
        const refreshTokenIsValid = JWTManager.getRefreshToken() && JWTManager.isRefreshTokenValid()
        const isAuth = tokenIsValid || refreshTokenIsValid

        if (isAuth) {
            if (user) { 
                setIsAuthenticated(true)
                return
            }

            const validToken = (
                tokenIsValid ? JWTManager.getToken() : JWTManager.getRefreshToken()
            )

            const getMyProfile = async () => {
                try {
                    setIsLoading(true)
                    const result = await me(validToken)
                    if (isMounted.current) {
                        setUser(result.data)
                        setIsAuthenticated(true)
                    }
                }
                catch (e) {
                    console.log(e)
                    setIsAuthenticated(false)
                }
                if (isMounted.current) {
                    setIsLoading(false)
                }
            }
            getMyProfile()
        }
        else {
            setIsAuthenticated(false)
        }
    }

    

    useEffect(handleTokenGuard, [navigate, setUser, user,  isMounted, syncTrigger])

    return (
        <>
            {isLoading ?
            <div>Loading...</div>:
            isAuthenticated ? children :
            <Login/>}
        </>
    )
}

export default AuthGuard