import { BsDashLg } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {updateDonation} from '../features/donation/donationSlice'

// DONATION CARD
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function DonationCard({donation}) {
    
    const dispatch = useDispatch()

    const [reservedFor, setReservedFor] = useState('')
    
    const reserveDonation = (e) => {
        e.preventDefault()
        const updatedDonation = {
            ...donation,
            isReserved: true,
            reservedFor:  reservedFor
        }
        dispatch(updateDonation(updatedDonation))
        setReservedFor('')
    }

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {donation.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {donation.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {donation.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {donation.phone}
                </Typography>
            </CardContent>
        <CardActions>
          <BsDashLg color={!donation.isDonated ? !donation.isReserved ? 'green' : 'orange' : 'red'} /> 
          {donation.isReserved ? (
              <>
                  <p>Reserved For: {donation.reservedFor}</p>
              </>
          ) 
          : (
          <form onSubmit={reserveDonation}>
              Reserve For: <input type='text' value={reservedFor} onChange={(e) => setReservedFor(e.target.value)} required/>
              <Button variant='contained' type='submit'>Reserve</Button>
          </form>
          )}
        </CardActions>
      </Card>
    )
}

export default DonationCard