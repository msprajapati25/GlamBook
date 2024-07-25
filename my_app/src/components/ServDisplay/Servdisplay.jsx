import React, { useContext } from 'react'
import './Servdisplay.css'
import star from '../Assets/star.png'
import stard from '../Assets/stard.png'
import { Appcontext } from '../../context/Appcontext'

const Servdisplay = (props) => {
    const {service} = props;
    const {takeApp}=useContext(Appcontext);
  return (
    <div className='service-display'>
        <div className="display-left">
            <div className="display-imagelist">
                <img src={service.image} alt=''/>
                <img src={service.image} alt=''/>
                <img src={service.image} alt=''/>
                <img src={service.image} alt=''/>
            </div>
            <div className="display-img">
                <img className='display-main-img' src={service.image} alt=''/>
            </div>
        </div>
        <div className="display-right">
                <h1>{service.name}</h1>
                <div className="display-right-stars">
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                    <img src={stard} alt=''/>
                    <p>(122)</p>
                </div>
                <div className="display-right-price">
                    <div className="display-oldprice">
                        Rs.{service.old_price}
                    </div>
                    <div className="display-newprice">
                        Rs.{service.new_price}
                    </div>
                </div>
                <div className="display-right-description">
                Flawless foundation, accentuated eyes, groomed brows, rosy cheeks, and a kiss-proof lip color for timeless elegance.
                </div>
                <div className="display-right-time">
                    <h1>Select Time</h1>
                    <div className="servdisplay-right-time">
                        <div>10AM</div>
                        <div>12PM</div>
                        <div>2PM</div>
                        <div>4PM</div>
                        <div>6PM</div>

                    </div>
                </div>
                <button onClick={()=>{takeApp(service.id)}}>TAKE APPOINTMENT</button>
                

        </div>
      
    </div>
  )
}

export default Servdisplay
