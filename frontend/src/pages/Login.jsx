import { FaSignInAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'


// MATERIAL UI
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles';

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

    const Root = styled('div')(({ theme }) => ({
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: '50%',
            width: 300
        },
        [theme.breakpoints.up('lg')]: {
        },
      }));

    return (
        <Root>
        <Box
            sx={{ width: '100%',
                height: 530,
                backgroundColor: 'black',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                color: 'grey',
                minHeight: '78vh'
            }}
        >
            <Box sx={{marginTop: '80px'}}>
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Login and Donate</p>
            </Box>

            <Box 
            component="form" 
            onSubmit={onSubmit}
            sx={{marginTop: '20px'}}
            >
                <div>
                    <TextField
                    color='warning'
                    type='email'  name='email' value={email} onChange={onChange}
                    label='Email'
                    variant="standard"
                    InputLabelProps={{
                        style: { color: '#fff' },
                    }}
                    sx={{
                        width: '100%',
                        margin: '10px auto',
                        input: {
                            color: "#ed6c02",
                            borderBottom: "1px solid #ffffff"
                        },
                    }}
                    />
                </div>
                <div>
                    <TextField
                    color='warning'
                    type='password'
                    name='password'
                    label='Password'
                    value={password} 
                    onChange={onChange}
                    variant="standard"
                    InputLabelProps={{
                        style: { color: '#fff' },
                    }}
                    sx={{
                        width: '100%',
                        margin: '10px auto',
                        color: 'orange',
                        input: {
                            color: "#ed6c02",
                            borderBottom: "1px solid #ffffff",
                            },
                        // borderBottom: '1px solid grey'
                    }} />
                </div>
                <div>
                    <Button 
                        variant="outlined" type='submit' color='warning'
                        sx={{
                            width: '50%',
                            margin: '30px auto'
                        }}
                    >
                        Login
                    </Button>
                </div>
            </Box>
        </Box> 
        </Root>       
    )
}

export default Login