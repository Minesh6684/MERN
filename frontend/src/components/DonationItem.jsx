import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {deleteDonation, updateDonation} from '../features/donation/donationSlice'
import { FcHome } from 'react-icons/fc'
import { GiMeal } from 'react-icons/gi'

// Material UI
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system'

function DonationItem({donation}) {
    const dispatch = useDispatch()

    const donated = () => {
        const updatedDonation = {
            ...donation,
            isDonated: true
        }
        dispatch(updateDonation(updatedDonation))
    }
    return (
        <Card sx={{padding: '20px', maxWidth: 450, marginBottom: 2, border: `1px solid ${!donation.isDonated ? !donation.isReserved ? 'green' : 'orange' : 'red'}`, backgroundColor: 'transparent', color: 'White' }}>
            <Typography gutterBottom variant="h5" component="div">
                    <FcHome/> {donation.address}
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}> 
                    <Typography sx={{marginTop: '12px', minWidth: '150px'}}>
                        <GiMeal/> {donation.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', flexDirection: 'column'}}>
                    { !donation.isReserved 
                    ? <AiFillDelete onClick={()=> dispatch(deleteDonation(donation._id))}/>  
                    : !donation.isDonated 
                    ?         
                    <>
                        <p>Reserved for: {donation.reservedFor}</p><Button variant="contained" onClick={donated}>Mark As Donated</Button>
                    </>
                    : <p>donated to: {donation.reservedFor}</p>}
                </CardActions>
            </Box>
        </Card>
    )
}

export default DonationItem