import { useState, useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'

// MATERIAL UI
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, phone, email, password, password2 } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isSuccess, isError, message } = useSelector( (state) => state.auth )

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, message, user, navigate, dispatch])

  if(isLoading) {
    return <h1>Loading</h1>
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    })
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Password do not match')
    } else {
      const userData = {
        name,
        phone,
        email,
        password
      }
      console.log(userData)
      dispatch(register(userData))
    }
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
          <FaUser /> Register
        </h1>
        <p>Please Create an Account</p>
      </Box>

      
      <Box onSubmit={onSubmit} component="form" >
        <div>
          <TextField
            color='warning'
            label="Name"
            name='name' value={name} onChange={onChange}
            variant="standard"
            sx={{
              width: 300,
              margin: '10px auto'
            }}
            required
          />
        </div>
        <div>
          <TextField
            color='warning'
            label="Phone Number"
            name='phone' value={phone} onChange={onChange}
            variant="standard"
            sx={{
              width: 300,
              margin: '10px auto'
            }}
            required
          />
        </div>
        <div>
          <TextField
            color='warning'
            label="E-mail"
            type="email"
            name='email' value={email} onChange={onChange}
            variant="standard"
            sx={{
              width: 300,
              margin: '10px auto'
            }}
            required
          />
        </div>
        <div>
          <TextField
            color='warning'
            label="Password"
            type="password"
            name='password' value={password} onChange={onChange}
            variant="standard"
            sx={{
              width: 300,
              margin: '10px auto'
            }}
            required
          />
        </div>
        <div>
          <TextField
            color='warning'
            label="Confirm Password"
            type="password"
            name='password2' value={password2} onChange={onChange}
            variant="standard"
            sx={{
              width: 300,
              margin: '10px auto'
            }}
            required
          />
        </div>
        <div>
          <Button 
            variant="outlined" type='submit'
            sx={{
              width: '50%',
              margin: '20px auto'
            }}
          >
            Register
          </Button>            
        </div>
      </Box>
    </Box>
  )
}

export default Register