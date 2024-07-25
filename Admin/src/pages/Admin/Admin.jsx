import React from 'react'
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Addservice from '../../components/Addservice/Addservice'
import Listservice from '../../components/Listservice/Listservice'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addservice' element={<Addservice/>}/>
        <Route path='/listservices' element={<Listservice/>}/>
      </Routes>
    </div>
  )
}

export default Admin
