// Icons
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

//MATERIAL UI
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

//Component
const Footer = () => {
    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '5px',
            fontSize: '10px'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'space-around'
        },
        [theme.breakpoints.up('lg')]: {
        },
      })); 

  return (
    <Root sx={{backgroundColor: 'black', minHeight: '15vh', padding: '30px'}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'grey', margin: '0 40px 15px 40px'}}>
            <Typography variant="" component="p" sx={{ flexGrow: 1, marginBottom: '5px'}}>
                Follow us
            </Typography>
            <Typography variant="" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', width: '80px'}}>
                <BsInstagram />
                <FaFacebookF />
                <BsTwitter />
            </Typography>
        </Typography>
        <Typography variant="" component="p" sx={{ flexGrow: 1, color: 'grey', margin: '0 40px 15px 40px'}}>
            About the initiative, Please reach <a href="mailto:minesh9174@gmail.com" style={{color: 'grey', textDecoration: 'none'}}>HERE</a>
        </Typography>
        <a href='https://www.who.int/news/item/06-07-2022-un-report--global-hunger-numbers-rose-to-as-many-as-828-million-in-2021#:~:text=(1)%20It%20is%20estimated%20that,affected%20by%20hunger%20in%202021.' target='_blank' rel='noreferrer' style={{color: 'grey', textDecoration: 'none', margin: '0 40px 15px 40px'}}>
            Hunger Facts
        </a>
    </Root>
  )
}

export default Footer