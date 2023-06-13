import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import {useState} from 'react'


// Material UI
import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

function Header () {
    const [ham, setHam] = useState(false)
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
      color: '#ed6c02',
    };

    const hamLinkStyle = {
        margin: '0.5rem 0.5rem 0 0.5rem',
        textDecoration: "none",
      color: '#ed6c02',
    }

    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        },
      }));

    return (
        <Root sx={{ flexGrow: 1, backgroundColor: 'black' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}  style={linkStyle}>
                FeedEveryone
            </Typography>
            {user 
            ? ( 
            <Box sx={{margin: '1rem'}}>
                <Box sx={{display: {xs: 'inline', sm: 'inline', md: 'none' }}}>
                    <GiHamburgerMenu style={linkStyle} onClick={()=>setHam(!ham)}/>
                    {ham && <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', border: '1px solid #ed6c02', borderRadius: '5px', position: 'absolute', right: '20px', backgroundColor: 'black', zIndex: 3}}>
                        <Button color="warning" onClick={LogOut} style={hamLinkStyle}><FaSignOutAlt /> Logout</Button>
                        <Button onClick={()=>setHam(!ham)}><Link to='/active_donations' style={hamLinkStyle}>Active Donations</Link></Button>
                        <Button onClick={()=>setHam(!ham)}><Link to='/completed_donations' style={hamLinkStyle}>History</Link></Button>
                        <Button onClick={()=>setHam(!ham)}><Link to='/all_active_donations' style={hamLinkStyle}>All ActiveDonations</Link></Button>
                        <Button onClick={()=>setHam(!ham)}><Link to='/' style={hamLinkStyle}>Home</Link></Button>
                    </Box>}
                </Box>
                <Button sx={{display: {xs: 'none', sm: 'none', md: 'inline' }}} color="warning" onClick={LogOut}><FaSignOutAlt /> Logout</Button>
                <Button sx={{display: {xs: 'none', sm: 'none', md: 'inline' }}}><Link to='/active_donations' style={linkStyle}>Active Donations</Link></Button>
                <Button sx={{display: {xs: 'none', sm: 'none', md: 'inline' }}}><Link to='/completed_donations' style={linkStyle}>History</Link></Button>
                <Button sx={{display: {xs: 'none', sm: 'none', md: 'inline' }}}><Link to='/all_active_donations' style={linkStyle}>All ActiveDonations</Link></Button>
                <Button sx={{display: {xs: 'none', sm: 'none', md: 'inline' }}}><Link to='/' style={linkStyle}>Home</Link></Button>
            </Box>
            )
            : (
            <Box sx={{margin: '1rem'}}>
                <Box sx={{display: {xs: 'inline', sm: 'none', md: 'none' }}}>
                    <GiHamburgerMenu style={linkStyle} onClick={()=>setHam(!ham)}/>
                    {ham && <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', border: '1px solid #ed6c02', borderRadius: '5px', position: 'absolute', right: '20px', backgroundColor: 'black'}}>
                        <Button color="warning" onClick={()=>setHam(!ham)}><Link to='/register' style={hamLinkStyle}> <FaUser/> Register</Link></Button>
                        <Button color="warning" onClick={()=>setHam(!ham)}><Link to='/login' style={hamLinkStyle}> <FaSignInAlt/> Login</Link></Button>
                    </Box>}
                </Box>
                <Button color="warning" sx={{display: {xs: 'none', sm: 'inline', md: 'inline' }}}><Link to='/register' style={linkStyle}> <FaUser/> Register</Link></Button>
                <Button color="warning" sx={{display: {xs: 'none', sm: 'inline', md: 'inline' }}}><Link to='/login' style={linkStyle}> <FaSignInAlt/> Login</Link></Button>
                <Button color="warning" onClick={()=>setHam(!ham)}><Link to='/forget-pass' style={hamLinkStyle}> <FaSignInAlt/> Forget Password</Link></Button>
            </Box>)}
        </Root>
    )
}

export default Header