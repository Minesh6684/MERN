import { useState, useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'

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
          <input type='text' placeholder='Name' name='name' value={name} onChange={onChange}/>
          <input type='text' placeholder='Phone Number' name='phone' value={phone} onChange={onChange}/>
          <input type='email' placeholder='Email' name='email' value={email} onChange={onChange}/>
          <input type='password' placeholder='Password' name='password' value={password} onChange={onChange}/>
          <input type='password' placeholder='Confirm Password' name='password2' value={password2} onChange={onChange}/>
          <input type='submit' value='Register'/>
        </form>
      </section>
    </>
  )
}

export default Register