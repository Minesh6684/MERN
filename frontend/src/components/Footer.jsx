// Icons
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
// import {Link} from 'react-router-dom'

//MATERIAL UI
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//Component
const Footer = () => {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{height: 110, backgroundColor: 'black'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '30px', color: 'grey'}}>
                    <Typography variant="" component="p" sx={{ flexGrow: 1, marginBottom: '10px'}}>
                        Follow us
                    </Typography>
                    <Typography variant="" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', width: '80px' }}>
                        <BsInstagram />
                        <FaFacebookF />
                        <BsTwitter />
                    </Typography>
                </Typography>
                <Typography variant="" component="p" sx={{ flexGrow: 1, color: 'grey'}}>
                    About the initiative, Please reach <a href="mailto:minesh9174@gmail.com" style={{color: 'grey', textDecoration: 'none'}}>HERE</a>
                </Typography>
                <a href='https://www.who.int/news/item/06-07-2022-un-report--global-hunger-numbers-rose-to-as-many-as-828-million-in-2021#:~:text=(1)%20It%20is%20estimated%20that,affected%20by%20hunger%20in%202021.' target='_blank' rel='noreferrer' style={{color: 'grey', textDecoration: 'none'}}>
                    Hunger Facts
                </a>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Footer