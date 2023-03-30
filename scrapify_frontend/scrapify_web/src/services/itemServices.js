import axiosClient from "./axiosClient"



const getDonorUnMatchedItems = () => {
    return axiosClient.get('/matching/items/?matched=false&shuffle=true')
}

const sendRequestMail = () => {
    return new Promise(resolve  => {
        setTimeout(() => {
            resolve()
        }, 800);
    })
}

export { getDonorUnMatchedItems, sendRequestMail }