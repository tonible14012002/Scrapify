import { createContext, useEffect, useState, useCallback, useContext } from "react";
import JWTManager from "../../auth/JWTManager";
import { useAuthContext } from "../authContext";


const SyncContext = createContext()

const useSyncContext = () => useContext(SyncContext)

const SyncProvider = ({children}) => {

    const [ syncTrigger , setSyncTrigger ] = useState({})
    const { setUser } = useAuthContext()

    const handleSyncAuthenticationSession = () => {

        const syncSessionStorage = (event) => {
            if (event.key === 'getSessionStorage') {
                // trigger share
                localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage))
                localStorage.removeItem('sessionStorage')
            }
            else if (event.key === 'sessionStorage') {
                // fill empty session storage
                const data = JSON.parse(event.newValue)
                for (let key in data) {
                    sessionStorage.setItem(key, data[key])
                }
                setSyncTrigger({})
            }
        }

        window.addEventListener('storage', syncSessionStorage)
        // get auth token from another tabs.
        if (!sessionStorage.length) {
            // request session from other tab
            console.log('requesting token from other tabs')
            localStorage.setItem('getSessionStorage', Date.now())
        }

        return () => window.removeEventListener('storage', syncSessionStorage)
    }

    const handleTabNumberTracking = () => {
        // register to tracker
        const count = localStorage.getItem('tabcount') ?? 0
        localStorage.setItem('tabcount', count + 1)

        return () => {
            const count = localStorage.getItem('tabcount')
            localStorage.setItem('tabcount', count - 1)
        }
    }

    const handleSyncLogout = () => {
        const syncLogout = (event) => {
            if (event.key === 'logout') {
                setUser({})
                JWTManager.clearToken()
                JWTManager.clearRefreshToken()
                setSyncTrigger({})
            }
        }
        window.addEventListener('storage', syncLogout)
        return () => window.removeEventListener('storage', syncLogout)
    }

    const handleSyncLogin = () => {
        const syncLogin = (event) => {
            if (event.key === 'login') {
                const { user, tokenData: {access, refresh} } = JSON.parse(event.newValue)
                setUser(user)
                JWTManager.setToken(access)
                JWTManager.setRefreshToken(refresh)
                setSyncTrigger({})
            }
        }
        window.addEventListener('storage', syncLogin)
        return () => window.removeEventListener('storage', syncLogin)
    }
    
    useEffect(handleTabNumberTracking, [])
    useEffect(handleSyncAuthenticationSession, [])
    useEffect(handleSyncLogout, [setUser])
    useEffect(handleSyncLogin, [setUser])
    
    const checkAnotherTabIsOpening = useCallback(() => {
        return (localStorage.getItem('tabcount') ?? 0) > 1
    }, [])

    return (
        <SyncContext.Provider value={{
            checkAnotherTabIsOpening,
            syncTrigger,
        }}>
            {children}
        </SyncContext.Provider>
    )
}

export { SyncProvider, useSyncContext}