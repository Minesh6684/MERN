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

      dispatch(register(userData))
    }
  }

  return (
    <>
      <section>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please Create an Account</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <div>
            <TextField
              id="standard-helperText"
              label="Name"
              name='name' value={name} onChange={onChange}
              variant="standard"
            />
          </div>
          <div>
            <TextField
              id="standard-helperText"
              label="Phone Number"
              name='phone' value={phone} onChange={onChange}
              variant="standard"
            />
          </div>
          <div>
            <TextField
              id="standard-helperText"
              label="E-mail"
              type="email"
              name='email' value={email} onChange={onChange}
              variant="standard"
            />
          </div>
          <div>
            <TextField
              id="standard-helperText"
              label="Password"
              type="password"
              name='password' value={password} onChange={onChange}
              variant="standard"
            />
          </div>
          <div>
            <TextField
              id="standard-helperText"
              label="Confirm Password"
              type="password"
              name='password2' value={password2} onChange={onChange}
              variant="standard"
            />
          </div>
          <div>
            <Button variant="contained" type='submit'>Register</Button>            
          </div>
        </form>
      </section>
    </>
  )
}

export default Register