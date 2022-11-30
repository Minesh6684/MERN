import { FaSignInAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'

function Login () {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData
    const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/')
        }
            
        dispatch(reset())
    }, [dispatch, navigate, user, isSuccess, isError, message])

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }

    if(isLoading) {
        return <h1>Loading....</h1>
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
                    <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} required/>
                    <input type='password' placeholder='Password' name='password' value={password} onChange={onChange} required/>
                    <input type='submit' value='Login'/>
                </form>
            </section>
        </>        
    )
}

export default Login