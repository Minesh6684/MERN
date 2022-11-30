import axios from 'axios'

const setDonation = async(donationData, token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post('/donations', donationData, config)
    return response.data
}

const getDonations = async(token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get('/donations', config)
    return response.data
}

const deleteDonation = async(donationId, token) => {
    const config ={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(`/donations/` + donationId, config)
    return response.data
}


const donationService = {
    setDonation, 
    getDonations,
    deleteDonation,
}

export default donationService