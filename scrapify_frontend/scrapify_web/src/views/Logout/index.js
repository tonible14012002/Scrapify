import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import * as AuthServices from "../../auth/authServices"
import { useAuthContext } from "../../context/authContext/authContext"
import JWTManger from "../../auth/JWTManager"

const Logout = () => {

    const navigate = useNavigate()
    const { setUser } = useAuthContext()

    const handleLogout = () => {
        const logout =  async () => {
            try {
                await AuthServices.logout()
                JWTManger.clearRefreshToken()
                JWTManger.clearToken()
                // clear user data
                setUser({})
                // trigger logout on all tabs
                console.log('set Item')
                // trigger logout on all tabs
                window.localStorage.setItem('logout', Date.now())
            }
            catch(e) {
                console.log(e)
            }
            navigate('/login')
        }
        logout()
    }

    useEffect(handleLogout, [navigate, setUser])

    return (
        <div>
        
        </div>
    )
}

export default Logout