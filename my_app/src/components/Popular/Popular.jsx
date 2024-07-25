import React from 'react'
import './Popular.css'
import data_serv from '../Assets/data'
import Serv from '../Serv/Serv'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-serv">
        {data_serv.map((serv,i)=>{
            return <Serv key={i} id={serv.id} name={serv.name} image={serv.image} new_price={serv.new_price} old_price={serv.old_price}/>
            
            
        })}
      </div>
    </div>
  )
}

export default Popular
