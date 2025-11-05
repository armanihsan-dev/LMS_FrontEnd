
import axiosInstance from './axiosInstance';

export const resgisterApi = async (userData) => {
    const data = await axiosInstance.post('/auth/register', userData)
    return data
}

export const loginApi = async (email, password) => {

    const data = await axiosInstance.post('/auth/login', {
        email, password
    })
    return data
}
export const logoutApi = async () => {
    const data = await axiosInstance.post('/auth/logout')
    return data
}
export const getUserProfileApi = async () => {
    const data = await axiosInstance.get('/auth/profile')
    return data
}

