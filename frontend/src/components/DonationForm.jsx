import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {setDonation} from '../features/donation/donationSlice'

function DonationForm() {
    const [formData, setFormData] = useState({
        address: '',
        description: '',
    })

    const { address, description } = formData
    const dispatch = useDispatch()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
    )}
    
    const onSubmit = (e) => {
        e.preventDefault()
        const donationData = {
            address, 
            description
        }
        dispatch(setDonation(donationData))
        
        setFormData({
            address: '', 
            description: ''
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder="Address" name='address' value={address} onChange={onChange} required/>
            <input type='text' placeholder="Describe the Meal" name='description' value={description} onChange={onChange} required/>
            <input type='submit' value='Donate' />
        </form>
    )
}

export default DonationForm