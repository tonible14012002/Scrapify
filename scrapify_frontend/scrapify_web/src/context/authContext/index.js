import { createContext, useContext, useState } from "react";
import AuthGuard from "../../auth/AuthGuard";


const AuthContext = createContext({
    user: {},
    setUser: undefined
})

const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState()

    const authState = {
        user,
        setUser,
    }

    return (
        <AuthContext.Provider value={authState}>
                {children}
        </AuthContext.Provider>
    )
}

export { useAuthContext, AuthContext, AuthProvider }