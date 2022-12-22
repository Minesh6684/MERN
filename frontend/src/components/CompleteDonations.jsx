import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getDonations, reset } from '../features/donation/donationSlice'
import Spinner from './Spinner'

//Material UI
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function CompleteDonations() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const { donations, isLoading, isError, message } = useSelector((state) => state.donations)
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
    <Item sx={{backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
        <Typography sx={{overflow: 'scroll',  maxWidth: 650, height: '9vh', color: 'white' }}>Donation History</Typography>
        <TableContainer component={Paper} sx={{minHeight: '67vh', maxHeight: '67vh',overflow: 'scroll',  maxWidth: 650 }}>
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow sx={{backgroundColor: 'black', color: 'white'}}>
                <TableCell>Description</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Donated To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {completeDonations.map((donation) => (
              <TableRow key={donation._id}>
                <TableCell component="th" scope="row">
                  {donation.description}
                </TableCell>
                <TableCell align="right">{donation.address}</TableCell>
                <TableCell align="right">{donation.reservedFor}</TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Item>
  )
}

export default CompleteDonations