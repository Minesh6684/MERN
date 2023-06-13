import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register } from '../features/auth/authSlice'

// MATERIAL UI
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material'

function RegisterForm() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        password2: ''
      })
    
    const { name, phone, email, password, password2 } = formData
    const dispatch = useDispatch()

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
          dispatch(register(userData))
        }
      }
  return (
    <Box onSubmit={onSubmit} component="form" sx={{marginTop: '20px'}}>
        <div >
          <TextField
            color='warning'
            label="Name"
            name='name' value={name} onChange={onChange}
            variant="standard"
            sx={{
              width: '100%',
              margin: '10px auto',
              color: 'orange',
              input: {
                color: "#ed6c02",
                borderBottom: "1px solid #ffffff",
              },
              // borderBottom: '1px solid grey'
            }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
          />
        </div>
        <div>
          <TextField
            color='warning'
            label="Phone Number"
            name='phone' value={phone} onChange={onChange}
            variant="standard"
            sx={{
              width: '100%',
              margin: '10px auto',
              color: 'orange',
              input: {
                color: "#ed6c02",
                borderBottom: "1px solid #ffffff",
              },
              // borderBottom: '1px solid grey'
            }}
            InputLabelProps={{
              style: { color: '#fff' },
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
              width: '100%',
              margin: '10px auto',
              color: 'orange',
              input: {
                color: "#ed6c02",
                borderBottom: "1px solid #ffffff",
              },
              // borderBottom: '1px solid grey'
            }}
            InputLabelProps={{
              style: { color: '#fff' },
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
              width: '100%',
              margin: '10px auto',
              color: 'orange',
              input: {
                color: "#ed6c02",
                borderBottom: "1px solid #ffffff",
              },
              // borderBottom: '1px solid grey'
            }}
            InputLabelProps={{
              style: { color: '#fff' },
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
              width: '100%',
              margin: '10px auto',
              color: 'orange',
              input: {
                color: "#ed6c02",
                borderBottom: "1px solid #ffffff",
              },
              // borderBottom: '1px solid grey'
            }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            required
          />
        </div>
        <div>
          <Button 
            variant="outlined" type='submit' color='warning'
            sx={{
              width: '50%',
              margin: '30px auto'
            }}
          >
            Register
          </Button>            
        </div>
      </Box>
  )
}

export default RegisterForm