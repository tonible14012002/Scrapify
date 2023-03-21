import axiosClient from "./axiosClient"



const getDonorPosts = () => {
    return axiosClient.get('/matching/items/')
}


export { getDonorPosts }