import axios from 'axios'

const REGISTER_URI = '/users/register'
const LOGIN_URI = '/users/login'
const FPL = '/users/forget-pass'

const register = async(userData) => {
    const response = await axios.post(REGISTER_URI, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const login = async(userData) => {
    const response = await axios.post(LOGIN_URI, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const sendPasswordResetLink = async(email) => {
    const response = await axios.post(FPL, email)
    return response.data
}

const authService = {
    register, logout, login, sendPasswordResetLink
}

export default authService