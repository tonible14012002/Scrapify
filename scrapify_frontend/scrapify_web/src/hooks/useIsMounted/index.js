import { useCallback, useEffect } from "react"
import { useRef } from "react"


const useIsMounted = () => {

    const mounted = useRef(false)
    const isMounted = useCallback(() => mounted.current, [])

    useEffect(() => {
        mounted.current = true
        return () => mounted.current = false
    }, [])


    return isMounted    
}

export default useIsMounted