import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {setDonation} from '../features/donation/donationSlice'
import { toast } from 'react-toastify'

// Material UI
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        if(!address || !description) {
            toast.error('You might have missed atleast a field')
            return 0
        }
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
            <p>Want to Donate?</p>
            <div>
                <TextField
                    id="standard-helperText"
                    label="Address"
                    name='address' value={address} onChange={onChange}
                    variant="standard"
                />
            </div>
            <div>
                <TextField
                    id="standard-helperText"
                    label="Describe the Meal"
                    name='description' value={description} onChange={onChange}
                    variant="standard"
                />
            </div>
            <div>
                <Button variant="contained" type='submit'>Donate</Button>
            </div>
        </form>
    )
}

export default DonationForm