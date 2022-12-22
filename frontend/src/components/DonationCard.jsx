import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {updateDonation} from '../features/donation/donationSlice'
import { FcHome, FcIphone } from 'react-icons/fc'
import { GiMeal } from 'react-icons/gi'

// DONATION CARD
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system'
import { TextField } from '@mui/material'

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
        <Card sx={{padding: '20px', maxWidth: 450, marginBottom: 2, border: `1px solid ${!donation.isDonated ? !donation.isReserved ? 'green' : 'orange' : 'red'}`, backgroundColor: 'transparent', color: 'White' }}>
            <Typography gutterBottom variant="h5" component="div">
                    <FcHome/> {donation.address}
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}> 
                    <Typography>
                        <GiMeal/> {donation.description}
                    </Typography>
                    <Typography sx={{marginTop: '12px', minWidth: '150px'}}>
                        {donation.name}
                        <p><FcIphone/> {donation.phone}</p>
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', flexDirection: 'column'}}>
                    {donation.isReserved ? (
                    <>
                        <p>Reserved For: {donation.reservedFor}</p>
                    </>
                    ) 
                    : (
                    <form onSubmit={reserveDonation}>
                        <TextField variant="standard"
                            color='warning'
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            sx={{
                                width: 300,
                                margin: '10px auto',
                                input: {
                                    color: "#ed6c02",
                                    borderBottom: "1px solid #ffffff",
                                },
                            }} 
                            label='Reserve For' type='text' value={reservedFor} onChange={(e) => setReservedFor(e.target.value)} required
                        />
                        <Button variant='outlined' type='submit' sx={{marginTop: '12px'}} color='warning'>Reserve</Button>
                    </form>
                    )}
                </CardActions>
            </Box>
        </Card>
    )
}

export default DonationCard