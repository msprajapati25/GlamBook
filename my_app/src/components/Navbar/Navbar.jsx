import React, { useContext, useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo2.png'
import app from '../Assets/app.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Appcontext } from '../../context/Appcontext'
import drop from '../Assets/drpdwn.png'


const Navbar = () => {
    const[menu,setMenu]=useState("Services");
    const {getTotalAppcart} = useContext(Appcontext);
    
   

    
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>GLAMBOOK</p>
        </div>
       
        <ul className="nav-menu" >
            <li onClick={()=>{setMenu("Services")}}><Link style={{textDecoration:'none'}} to ='/'>Services</Link> {menu==="Services"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to='/Men'>Men</Link>  {menu==="Men"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to='/Women'>Women</Link>  {menu==="Women"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("About")}}><Link to="/about" style={{textDecoration:'none'}}>About</Link>  {menu==="About"?<hr/>:<></>} </li>
            
            
        </ul>
        <div className="nav-login-app">
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'> <button>Login</button></Link> }
        
        <Link to='/app'> <img src={app} alt="app"/>  </Link> 
            
            <div className="nav-app-count">{getTotalAppcart()}</div>      </div>
      
    </div>
   
  )
}

export default Navbar
