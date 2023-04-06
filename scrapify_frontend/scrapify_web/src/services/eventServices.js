import axiosClient from "./axiosClient"


const getMyEvents = (id) => {
    return axiosClient.get('matching/events/', {
        params: {
            recipient_profile: id, 
        }
    })
}

const createMyEvent = (data) => {
    const formData = new FormData()
    Object.keys(data).forEach(key => {
        if (Array.isArray(data[key])) {
            data[key].forEach(item => {
                formData.append(key, item)
            })
        }
        else {
            formData.append(key, data[key])
        }
    })
    return axiosClient.post('matching/events/', formData)
}

export { getMyEvents, createMyEvent }