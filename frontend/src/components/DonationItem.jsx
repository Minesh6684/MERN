import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {deleteDonation, updateDonation} from '../features/donation/donationSlice'

// Material UI
import * as React from 'react';
import Button from '@mui/material/Button';


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
        <div>
            <p>{donation.address}</p>
            <p>{donation.description}</p>
            { !donation.isReserved 
            ? <AiFillDelete onClick={()=> dispatch(deleteDonation(donation._id))}/>  
            : !donation.isDonated 
            ?         
            <>
                <p>Reserved for: {donation.reservedFor}</p><Button variant="contained" onClick={donated}>Mark As Donated</Button>
            </>
            : <p>donated to: {donation.reservedFor}</p>}
        </div>
    )
}

export default DonationItem

