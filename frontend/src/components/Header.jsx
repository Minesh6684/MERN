import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'


// Material UI
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header () {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const LogOut = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    const linkStyle = {
      margin: "1rem",
      textDecoration: "none",
      color: '#ed6c02'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: 'black'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}  style={linkStyle}>
                        FeedEveryone
                    </Typography>
                    {user 
                    ? (
                    <Box>
                        <Button color="warning" onClick={LogOut}><FaSignOutAlt /> Logout</Button>
                        <Button><Link to='/active_donations' style={linkStyle}>Active Donations</Link></Button>
                        <Button><Link to='/completed_donations' style={linkStyle}>History</Link></Button>
                        <Button><Link to='/all_active_donations' style={linkStyle}>All ActiveDonations</Link></Button>
                        <Button><Link to='/' style={linkStyle}>Home</Link></Button>
                    </Box>
                    )

                    : (
                    <Box>
                        <Button color="warning"><Link to='/register' style={linkStyle}> <FaUser/> Register</Link></Button>
                        <Button color="warning"><Link to='/login' style={linkStyle}> <FaSignInAlt/> Login</Link></Button>
                    </Box>)}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header