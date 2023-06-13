import {useState} from "react"
import { useDispatch } from 'react-redux'
import { sendPasswordResetLink } from '../features/auth/authSlice'

const ForgotPasswordForm = () => {
    
    const [email, setEmail] = useState('');

    const dispatch = useDispatch()

    // const { passwordReset } = useSelector((state) => state.auth)

    const OnSubmit = (e) => {
        e.preventDefault()
        dispatch(sendPasswordResetLink({email: email}))
    }

  return (
    <form onSubmit={OnSubmit}>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)}/>
      <input type='submit' value='Send Link' />
    </form>
  )
}

export default ForgotPasswordForm
