import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import * as AuthManager from "../../auth/AuthManager"
import * as AuthServices from "../../auth/authServices"

const Logout = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        const logout =  async () => {
            try {
                await AuthServices.logout()
            }
            catch(e) {}
        }
        logout()
        navigate('/login')
        AuthManager.handleLogout()
        
    }

    useEffect(handleLogout, [navigate])

    return (
        <div>
        
        </div>
    )
}

export default Logout