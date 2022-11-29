import { FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {login, reset} from '../features/auth/authSlice'

function Login () {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData
    const { user, isLoading, isError, isSuccess, message } = useSelector( (state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    })

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    return (
        <>
            <section>
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Login and Donate</p>
            </section>

            <section>
                <form onSubmit={onSubmit}>
                    <input type='email' placeholder='Email' name='email' value={email} onChange={onChange}/>
                    <input type='password' placeholder='Password' name='password' value={password} onChange={onChange}/>
                    <input type='submit' value='Login'/>
                </form>
            </section>
        </>        
    )
}

export default Login