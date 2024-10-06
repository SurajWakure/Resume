import React from 'react'
import './Navbar.css'
import Logo from '../../asset/Logo.png'
import { Link } from 'react-scroll'
import Contact from '../../asset/contact.png'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={Logo} className='logo'></img>
        <div className='desktopMenu'>
            <Link className='desktopmenulistitems'>
                Home
            </Link>
            <Link className='desktopmenulistitems'>
                About
            </Link>
            <Link className='desktopmenulistitems'>
                Portfolio
            </Link>
            <Link className='desktopmenulistitems'>
                Client
            </Link>
        </div>
        <button className='desktopmenubtn'>
            <img src={Contact} className='desktopmenuimg'></img>
            Contact me 
        </button>
    </nav>
  )
}

export default Navbar
