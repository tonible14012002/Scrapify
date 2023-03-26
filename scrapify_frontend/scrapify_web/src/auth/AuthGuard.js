import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthProvider } from "../context/authContext/authContext"
import JWTManager from "./JWTManager"

const AuthGuard = ({children}) => {

    const navigate = useNavigate()
    const [ isLoading, setIsLoading] = useState(true)

    const handleSyncLogout = () => {
        console.log('add event listneer')
        // Logout when logout key is set in sessionStorage
        const syncLogout = (event) => {
            console.log('sync logout', event)
            if (event.key === 'logout') {
                navigate('/login')
            }
        }

        window.addEventListener('storage', syncLogout)
        return () => window.removeEventListener('storage', syncLogout)
    }

    const handleSyncAuthentication = () => {
        console.log('handle sync auth')
        if (!sessionStorage.length) {
            // request session from other tab
            localStorage.setItem('getSessionStorage', Date.now())
        }

        const syncSessionStorage = (event) => {
            console.log('local set from other tab')
            if (event.key === 'getSessionStorage') {
                // trigger share
                localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage))
                localStorage.removeItem('sessionStorage')
            }
            else if (event.key === 'sessionStorage') {
                console.log(event.newValue)
                // fill empty session storage
                const data = JSON.parse(event.newValue)
                for (let key in data) {
                    sessionStorage.setItem(key, data[key])
                }
                console.log(event)
            }
        }

        window.addEventListener('storage', syncSessionStorage)
        return () => window.removeEventListener('storage', syncSessionStorage)
    }

    const handleTokenGuard = () => {
        setIsLoading(true)
        if (
            ! ((JWTManager.getToken() && JWTManager.isTokenValid()) ||
            (JWTManager.getRefreshToken() && JWTManager.isRefreshTokenValid()))
        ) {
            navigate('/login')
        }

        setIsLoading(false)
    }

    useEffect(handleSyncLogout, [navigate])
    useEffect(handleTokenGuard, [navigate])
    useEffect(handleSyncAuthentication, [])

    if (isLoading) return <div></div>
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default AuthGuard