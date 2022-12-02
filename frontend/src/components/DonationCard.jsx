import { BsDashLg } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {updateDonation} from '../features/donation/donationSlice'

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
        <div>
            <p>{donation.description} <BsDashLg color={!donation.isDonated ? !donation.isReserved ? 'green' : 'orange' : 'red'} /></p>
            <p>{donation.address}</p>
            {donation.isReserved ? (
                <>
                    Reserved For: <p>{donation.reservedFor}</p>
                </>
            ) 
            : (
            <form onSubmit={reserveDonation}>
                Reserve For: <input type='text' value={reservedFor} onChange={(e) => setReservedFor(e.target.value)}/>
                <input type='submit' value='Reserve'/>
            </form>
            )}
            
        </div>
    )
}

export default DonationCard