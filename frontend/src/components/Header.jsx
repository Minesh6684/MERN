 import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header () {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const LogOut = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header>            
            <div>
                FeedEveryone
            </div>
            <ul>
                {
                user 
                ? 
                (
                <li>
                    <button onClick={LogOut}> <FaSignOutAlt /> Logout </button>
                </li>
                ) 
                :
                (<>
                    <li><Link to='/register'> <FaUser/> Register</Link></li>
                    <li><Link to='/login'> <FaSignInAlt/> Login</Link></li>
                </>)}
            </ul>
        </header>
    )
}

export default Header