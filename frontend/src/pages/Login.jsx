import { FaSignInAlt } from 'react-icons/fa'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


// MATERIAL UI
import * as React from 'react';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
// import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import LoginForm from '../components/LoginForm'

function Login () {

    const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)

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
    }, [dispatch, navigate, user, isSuccess, isError, message])

    if(isLoading) {
        return <Spinner />
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
        <Root
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

            <LoginForm />
        </Root>  
              
    )
}

export default Login