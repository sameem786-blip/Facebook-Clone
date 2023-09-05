import React from 'react'
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import Profile from '../../assets/images/profile.jpg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/dashboard' style={{ textDecoration: 'none', color: 'inherit', width: '100%'  }}>
          <span className="logo">Me-Socio</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <MessageOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={Profile} alt="profile" />
          <span className="username">Sameem Abbas</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar