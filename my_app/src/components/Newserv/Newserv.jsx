import React from 'react'
import './Newserv.css'
import Serv from '../Serv/Serv'
import Newserv1 from '../Assets/newservdata'

const Newserv = () => {
  return (
    <div className='newserv'>
      <h1>NEW SERVICES</h1>
      <hr/>
      <div className="nserv">
      {Newserv1.map((serv,i)=>{
            return <Serv key={i} id={serv.id} name={serv.name} image={serv.image} new_price={serv.new_price} old_price={serv.old_price}/>
            
            
        })}
      </div>
    </div>
  )
}

export default Newserv
