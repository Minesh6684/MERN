import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonationForm from '../components/DonationForm'
import {getDonations, reset} from '../features/donation/donationSlice'
import DonationItem from '../components/DonationItem'
import DonationCard from '../components/DonationCard'
import { getAllDonations } from '../features/donation/donationSlice'

//Material UI
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
  const { allDonations, donations, isLoading, isError, message } = useSelector((state) => state.donations)
  const activeDonations = donations.filter((donation) => !donation.isDonated)
  const completeDonations = donations.filter((donation) => donation.isDonated)
  

  useEffect( () => {
    if(isError){
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }
    if (user) {
      dispatch(getDonations())
      dispatch(getAllDonations())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, message, isError, dispatch])
  
  if(isLoading) {
    return <h1>Loading.....</h1>
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <h1>Welcome {user && user.name} </h1>
            <DonationForm />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h1>Active Donations</h1>
            {activeDonations.map((donation) => (
              <DonationItem key={donation._id} donation={donation}/>
            ))}
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h1>Donation History</h1>
            {completeDonations.map((donation) => (
              <DonationItem key={donation._id} donation={donation}/>
            ))}
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            {allDonations.map((donation) => 
              <DonationCard key={donation._id} donation={donation}/>
            )}
          </Item>
        </Grid>
      </Grid>
    </Box>
    
    // <Box
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'space-between'
    //   }}
    // >
    //   <Box 
    //     sx={{
    //       // border: '1px solid grey',
    //       width: 300,
    //       height: 300,
    //       textAlign: 'center',
    //     }} 
    //   >
    //     <h1>Welcome {user && user.name} </h1>
    //     <DonationForm />
    //   </Box>
    //   <Box>
    //     <h1>Active Donations</h1>
    //     {donations.filter((donation) => !donation.isDonated).map((donation) => (
    //       <DonationItem key={donation._id} donation={donation}/>
    //     ))}
    //   </Box>
    //   <Box>
    //     <h1>Donation History</h1>
    //     {donations.filter((donation) => donation.isDonated).map((donation) => (
    //       <DonationItem key={donation._id} donation={donation}/>
    //     ))}
    //   </Box>
    //   <Box style={{border: '2px solid black'}}>
    //       {allDonations.map((donation) => 
    //         <DonationCard key={donation._id} donation={donation}/>
    //       )}
    //   </Box>
    // </Box>
  )
}

export default Dashboard
/*

*/