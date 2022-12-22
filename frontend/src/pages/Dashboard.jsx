import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonationForm from '../components/DonationForm'
import { getAllDonations, reset } from '../features/donation/donationSlice'
import Spinner from '../components/Spinner'

//Material UI
import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const { isLoading, isError, message } = useSelector((state) => state.donations)
  

  useEffect( () => {
    if(isError){
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }
    if (user) {
      dispatch(getAllDonations())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, message, isError, dispatch])
  
  if(isLoading) {
    return (
      <Spinner/>
    )
  }
  const Root = styled('div')(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      margin: '0 auto'
    },
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      margin: '0 auto'
        
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      marginLeft: '50%'
    },
  }))

  return (
    <Root sx={{ flexGrow: 1,
      backgroundColor: 'black',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '78vh'
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{marginTop: '100px'}}>
          <Item sx={{backgroundColor: 'transparent', color: 'white'}}>
            <h1>Welcome {user && user.name} </h1>
            <DonationForm />
          </Item>
        </Grid>
      </Grid>
    </Root>
  )
}

export default Dashboard

