import { createContext } from "react";


const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const authState = {
        user: {}
    }

    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    )
}
