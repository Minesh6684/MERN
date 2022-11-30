import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {deleteDonation} from '../features/donation/donationSlice'

function DonationItem({donation}) {
    const dispatch = useDispatch()

    return (
        <div>
            <p>{donation.description} <AiFillDelete onClick={()=> dispatch(deleteDonation(donation._id))}/></p>
            <p>{donation.address}</p>
            {new Date(donation.createdAt).toLocaleString('en-US')}
        </div>
    )
}

export default DonationItem