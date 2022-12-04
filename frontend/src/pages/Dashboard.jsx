import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonationForm from '../components/DonationForm'
import {getDonations, reset} from '../features/donation/donationSlice'
import DonationItem from '../components/DonationItem'
import DonationCard from '../components/DonationCard'
import { getAllDonations } from '../features/donation/donationSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const { allDonations, donations, isLoading, isError, message } = useSelector((state) => state.donations)
  

  useEffect( () => {
    if(isError){
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }
    if (user) {
      dispatch(getDonations())
      dispatch(getAllDonations())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, message, isError, dispatch])
  
  if(isLoading) {
    return <h1>Loading.....</h1>
  }

  return (
    <>
      <section>
        <h1>Welcome {user && user.name} </h1>
      </section>
      <DonationForm />
      <section>
        {donations.length > 0 ? (
          <div>
            <h1>Active Donations</h1>
            {donations.filter((donation) => !donation.isDonated).map((donation) => (
              <DonationItem key={donation._id} donation={donation}/>
            ))}
            <h1>Donation History</h1>
            {donations.filter((donation) => donation.isDonated).map((donation) => (
              <DonationItem key={donation._id} donation={donation}/>
            ))}
          </div>
        ) : (<h3>You have no donation</h3>)}
      </section>
      <div style={{border: '2px solid black'}}>
          {allDonations.map((donation) => 
            <DonationCard key={donation._id} donation={donation}/>
          )}
      </div>
    </>
  )
}

export default Dashboard
