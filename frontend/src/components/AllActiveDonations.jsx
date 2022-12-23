import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonationCard from '../components/DonationCard'
import { getAllDonations, reset } from '../features/donation/donationSlice'
import Spinner from './Spinner'



// Material UI
import { styled } from '@mui/material/styles'

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

    const Root = styled('div')(({theme}) => ({
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        margin: '0 auto'
      },
      [theme.breakpoints.up('sm')]: {
        width: '60%',
        margin: '0 auto'
          
      },
      [theme.breakpoints.up('md')]: {
        width: '50%',
        marginLeft: '50%'
      },
    }))
    return (
    <Root item xs={6} spacing={2} sx={{
      minHeight: '76vh',
      maxHeight: '76vh',
      overflow: 'scroll',
      marginLeft: '50%'  
    }}>
        <p style={{color: 'white', fontFamily: 'sans-serif', marginBottom: '10px'}}>Choose the Donation</p>
          {allDonations.map((donation) => 
            <DonationCard key={donation._id} donation={donation}/>
        )}
    </Root>
  )
}

export default AllActiveDonations