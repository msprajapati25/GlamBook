import React, { useContext } from 'react'
import './Css/Servecategory.css'
import { Appcontext } from '../context/Appcontext'
import dropdown from '../components/Assets/drpdwn.png'
import Serv from '../components/Serv/Serv'
import Footer from '../components/Footer/Footer'

const ShopCategory = (props) => {
  const {All_services}= useContext(Appcontext);
  return (
    <div className='service-category'>
      <img className='sbanner' src={props.banner}/><br/>
      <div className="servcategory-indexsort">
        <p>
          <span>Showing 1-12 </span>out of 25 services
        </p>
        <div className="servcategory-sort">
          Sort by <img src={dropdown} alt=''/>
        </div>
      </div>
      <div className="servcategory-services">
        {All_services.map((serv,i) =>{
          if(props.category===serv.category){
            return <Serv key={i} id={serv.id} name={serv.name} image={serv.image} new_price={serv.new_price} old_price={serv.old_price}/>
          } 
          else{
            return null;
          }
        })}
      </div>
      <div className="scategory-loadmore">
        Explore More

      </div>
      <Footer/>
    </div>
  )
}

export default ShopCategory
