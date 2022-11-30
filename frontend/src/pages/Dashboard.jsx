import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DonationForm from '../components/DonationForm'
import {getDonations, reset} from '../features/donation/donationSlice'
import DonationItem from '../components/DonationItem'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const { donations, isLoading, isError, message } = useSelector((state) => state.donations)
  

  useEffect( () => {
    if(isError){
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }
    if (user) {
      dispatch(getDonations())
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
            {donations.map((donation) => (
              <DonationItem key={donation._id} donation={donation}/>
            ))}
          </div>
        ) : (<h3>You have no donation</h3>)}
      </section>
    </>
  )
}

export default Dashboard