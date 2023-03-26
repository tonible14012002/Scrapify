import axiosClient from "./axiosClient"



const getDonorPosts = () => {
    return axiosClient.get('/matching/items/')
}

const sendRequestMail = () => {
    return new Promise(resolve  => {
        setTimeout(() => {
            resolve()
        }, 800);
    })
}

export { getDonorPosts, sendRequestMail }