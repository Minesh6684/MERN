import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonationCard from '../components/DonationCard'
import { getAllDonations, reset } from '../features/donation/donationSlice'
import Spinner from './Spinner'



// Material UI
import { Box } from '@mui/system'

function AllActiveDonations() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const { allDonations, isLoading, isError, message } = useSelector((state) => state.donations)
    
    useEffect( () => {
        if(isError){
          console.log(message)
        }
    
        if(!user) {
          navigate('/login')
        }
        if (user) {
          dispatch(getAllDonations())
        }
    
        return () => {
          dispatch(reset())
        }
      }, [user, navigate, message, isError, dispatch])
      
      if(isLoading) {
        return (
          <Spinner/>
        )
      }
    return (
    <Box item xs={6} spacing={2} sx={{
      minHeight: '78vh',
      maxHeight: '78vh',
      overflow: 'scroll',
      marginLeft: '50%'  
    }}>
        <p style={{color: 'white', fontFamily: 'sans-serif', marginBottom: '10px'}}>Choose the Donation</p>
          {allDonations.map((donation) => 
            <DonationCard key={donation._id} donation={donation}/>
        )}
    </Box>
  )
}

export default AllActiveDonations