import React from 'react'
import './Breadcrum.css'
import Arrow from '../Assets/arrow1.png'

const Breadcrum = (props) => {
    const {service} = props;
  return (
    <div className='breadcrum'>
      Home<img src={Arrow} alt=""/> Take Appoinment <img src={Arrow} alt=""/>{service.category}<img src={Arrow} alt=""/>{service.name}
    </div>
  )
}

export default Breadcrum
