
import axiosInstance from './axiosInstance';

export const getCartData = async () => {
    const data = await axiosInstance.get('/cart')
    return data
}

export const additemToApi = async (courseId) => {
    const data = await axiosInstance.post('/cart', {
        courseId
    })
    return data
}

export const deleteItemFromCartApi = async (courseId) => {
    const data = await axiosInstance.delete(`/cart/${courseId}`)
    return data
}


