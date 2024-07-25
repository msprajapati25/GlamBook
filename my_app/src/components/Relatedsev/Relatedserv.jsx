import React from 'react'
import './Relatedserv.css'
import data_serv from '../Assets/data'
import Serv from '../Serv/Serv'
const Relatedserv = () => {
  return (
    <div className='realatedserv'>
        <h1>You may like</h1>
        <hr/>
        <div className="relatedserv-services">
            {data_serv.map((serv,i)=>{
                return <Serv key={i} id={serv.id} name={serv.name} image={serv.image} new_price={serv.new_price} old_price={serv.old_price} />
            })}

        </div>
      
    </div>
  )
}

export default Relatedserv
