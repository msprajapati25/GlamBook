import React from 'react'
import './Mid.css'
import hand from '../Assets/waving-hand.png'
import arrow from '../Assets/arrow.png'
import model from '../Assets/model2.png'

const Mid = () => {
  return (
    <div className='mid'>
      <div className="mid-left">
        <h2>Welcome To Glambook</h2>
        <div>
            <div className="mid-hand-icon">
                <p>New</p>
                <img id="hand"src={hand} alt=""/>
            </div>
            <p>Services</p>
            <p>for everyone</p>
        </div>
        <div className="mid-latest-btn">
            <div>New Services</div>
            <img src={arrow} alt=""/>
        </div>
      </div>
      <div className="mid-right">
        <img id='img' src={model} alt=""/>

      </div>
    </div>
  )
}

export default Mid
