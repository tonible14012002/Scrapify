import { parsePath } from "react-router-dom"
import axiosClient from "./axiosClient"


const getMyEvents = (id) => {
    return axiosClient.get('matching/events/', {
        params: {
            recipient_profile: id, 
        }
    })
}

export { getMyEvents }