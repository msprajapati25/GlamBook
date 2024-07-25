import React from 'react'
import './Serv.css'
import { Link } from 'react-router-dom'

const Serv = (props) => {
  return (
    <div className='serv'>
       <Link to={`/service/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link> 
      <p>{props.name}</p>
      <div className="serv-prices">
        <div className="serv-price-new">
            Rs.{props.new_price}
        </div>
        <div className="serv-price-old">
        {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Serv
