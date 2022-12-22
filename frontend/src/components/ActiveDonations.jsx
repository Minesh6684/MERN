import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getDonations, reset} from '../features/donation/donationSlice'
import DonationItem from '../components/DonationItem'


//Material UI
import * as React from 'react';
import Box from '@mui/material/Box';
import Spinner from './Spinner'


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

  return (
    <Box item xs={6} spacing={2} sx={{
      minHeight: '78vh',
      maxHeight: '78vh',
      overflow: 'scroll',
      marginLeft: '50%' 
    }}>
      <h1>Active Donations</h1>
      {activeDonations.map((donation) => (
      <DonationItem key={donation._id} donation={donation}/>
      ))}
    </Box>
  )
}

export default ActiveDonations
