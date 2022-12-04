import { FaSignInAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'


// MATERIAL UI
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

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
        <Box
            sx={{ width: 500,
                height: 530,
                backgroundColor: 'whitesmoke',
                border: '1px solid grey',
                borderRadius: '5px',
                margin: '20px auto',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Box>
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Login and Donate</p>
            </Box>

            <Box 
            component="form" 
            onSubmit={onSubmit}
            >
                <div>
                    <TextField
                        color='warning'
                        label="Email"
                        type='email'  name='email' value={email} onChange={onChange}
                        variant="standard"
                        sx={{
                            width: 300,
                            margin: '10px auto'
                        }}
                    />
                </div>
                <div>
                    <TextField
                        color='warning'
                        label="Password"
                        type='password'  name='password' value={password} onChange={onChange}
                        variant="standard"
                        sx={{
                            width: 300,
                            margin: '10px auto'
                        }}
                    />    
                </div>
                <div>
                    <Button 
                        variant="outlined" type='submit' color='primary'
                        sx={{
                            width: '50%',
                            margin: '20px auto'
                          }}
                    >
                        Login
                    </Button>
                </div>
            </Box>
        </Box>        
    )
}

export default Login