import { useEffect, useState } from "react"
import JWTManager from "./jwt"
import * as AuthServices from './authServices'
import { useNavigate } from "react-router-dom"
import * as AuthManager from "./AuthManager"

const AuthGuard = ({children}) => {

    const navigate = useNavigate()
    const [ isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        if (!AuthManager.checkIsLoggedin()) {
            navigate('/login')
        }
        setIsLoading(false)
    }, [navigate])

    if (isLoading) return <div></div>
    return (
        <>
            {children}
        </>
    )
}

export default AuthGuard