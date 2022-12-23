import { useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { reset } from '../features/auth/authSlice'
import { styled } from '@mui/material/styles'
import RegisterForm from '../components/RegisterForm'

// MATERIAL UI
import * as React from 'react';
import Box from '@mui/material/Box';

function Register() {

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

  const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: '50%',
        width: 300
    },
    [theme.breakpoints.up('lg')]: {
    },
  }));

  return (
    <Root
      sx={{
          width: '100%',
          backgroundColor: 'black',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          color: 'grey',
          minHeight: '76vh'
        }}
    >
      <Box>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please Create an Account</p>
      </Box>

      <RegisterForm/>
    </Root>
    
  )
}

export default Register