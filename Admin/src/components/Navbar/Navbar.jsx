import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo2.png'
import navprofile from '../../assets/nav-logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left"><img src={navlogo} alt="" className="nav-logo" />
     <h3>GLAMBOOK  <br/>
      Admin Panel</h3></div>
      
      <img src={navprofile} alt="" className='nav-profile' />
    </div>
  )
}

export default Navbar
