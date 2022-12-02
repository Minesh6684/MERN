import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {deleteDonation, updateDonation} from '../features/donation/donationSlice'

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
            <p>{donation.description} 
               { !donation.isReserved 
               ? <AiFillDelete onClick={()=> dispatch(deleteDonation(donation._id))}/> 
               : !donation.isDonated 
               ? <button onClick={donated}>Donated</button> 
               : <p>status: Donated</p>}
            </p>
            <p>{donation.address}</p>
        </div>
    )
}

export default DonationItem