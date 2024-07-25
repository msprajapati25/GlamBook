import React from 'react'
import './Offers.css'
import model from '../Assets/model1.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only For Wedding </p>
            <button>Check Now</button>

        </div>
        <div className="offers-right">
            <img src={model} alt=""/>
        </div>
      
    </div>
  )
}

export default Offers
