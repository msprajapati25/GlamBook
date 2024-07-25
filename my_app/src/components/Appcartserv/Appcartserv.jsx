import React, { useContext } from 'react'
import './Appcartserv.css'
import { Appcontext } from '../../context/Appcontext'
import cancel from '../Assets/cancel.png'

const Appcartserv = () => {
    const{getTotalAmount,All_services,cancelApp}=useContext(Appcontext)
  return (
    <div className='appcartserv'>
      <div className="appcartserv-format-main">
        <p>Services</p>
        <p>Title</p>
        <p>Price</p>
        <p>Cancel</p>
      </div>
      <hr/>
     {All_services.map((e)=>{
        if ([e.id>0])
        {
          return  <div>
            <div className="appcartserv-format appcartserv-format-main">
                <img className='appcarticon-serv-icon' src={e.image} alt=''/>
                <p>{e.name}</p>
                <p>Rs.{e.new_price}</p>
                <img className='appcart-icon-remove' src={cancel} onClick={()=>{cancelApp(e.id)}} alt="" />
            </div>
            <hr/>
          </div>
          
        }
        return null;
     })}
     <div className="appcart-down">
      <div className="appcart-total">
        <h3>Total Amount</h3>
          <h3>Rs.{getTotalAmount()}</h3>
        </div>
       
        <button>PROCEED TO CHECKOUT</button>
      </div>
    
     
    </div>
  )
}

export default Appcartserv
