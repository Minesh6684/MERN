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
      color: 'white'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FeedEveryone
                    </Typography>
                    {user 
                    ? (<Button color="inherit" onClick={LogOut}><FaSignOutAlt /> Logout</Button>)
                    : (
                    <>
                        <Button color="inherit"><Link to='/register' style={linkStyle}> <FaUser/> Register</Link></Button>
                        <Button color="inherit"><Link to='/login' style={linkStyle}> <FaSignInAlt/> Login</Link></Button>
                    </>)}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header