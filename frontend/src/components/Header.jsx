import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
            <div>
                <Link to='/'>FeedEveryone</Link>
            </div>
            <ul>
                <li><Link to='/register'> <FaUser/> Register</Link></li>
                <li><Link to='/login'> <FaSignInAlt/> Login</Link></li>
            </ul>
        </header>
    )
}

export default Header