import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getDonations, reset} from '../features/donation/donationSlice'
import DonationItem from '../components/DonationItem'


//Material UI
import * as React from 'react';
// import Box from '@mui/material/Box';
import Spinner from './Spinner';
import { styled } from '@mui/material/styles'


function ActiveDonations() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {donations, isLoading, isError, message } = useSelector((state) => state.donations)
    const activeDonations = donations.filter((donation) => !donation.isDonated)

    useEffect( () => {
        if(isError){
          console.log(message)
        }
    
        if(!user) {
          navigate('/login')
        }
        if (user) {
          dispatch(getDonations())
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
    <Root item xs={6} spacing={2} sx={{
      minHeight: '76vh',
      maxHeight: '76vh',
      overflow: 'scroll',
    }}>
      <h1>Active Donations</h1>
      {activeDonations.map((donation) => (
      <DonationItem key={donation._id} donation={donation}/>
      ))}
    </Root>
  )
}

export default ActiveDonations
