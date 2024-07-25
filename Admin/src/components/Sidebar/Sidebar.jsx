import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import Appicon from '../../assets/app.png'
import list_serv from '../../assets/list.svg'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addservice'} style={{textDecoration:"none"}}>
        <div className="sidebar-serv">
            <img src={Appicon} alt=''/>
            <p>Add Services</p>
        </div>
      </Link>
      <Link to={'/listservices'} style={{textDecoration:"none"}}>
        <div className="sidebar-serv">
            <img src={list_serv} alt=''/>
            <p>Service List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
