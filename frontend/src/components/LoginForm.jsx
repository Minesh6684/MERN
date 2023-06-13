import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { TextField } from '@mui/material'


function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData
    
    const dispatch = useDispatch()

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
  )
}

export default LoginForm