import React, { useEffect, useState } from 'react'
import './Listservice.css'
import cross from '../../assets/cross_icon.png'
const Listservice = () => {
    const [allservices,setallServices] = useState([]);

    const fetchInfo =async () => {
        await fetch('http://localhost:4003/allservices').then((res)=>res.json()).then((data) =>{setallServices(data)});
    }

    useEffect(() => {
        fetchInfo();
    },[])

    const remove_service = async (id) => {
        await fetch('http://localhost:4003/removeservice', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        });
        await fetchInfo(); // Refresh the service list after removal
    }
    

  return (
    <div className='list-serv'>
      <h1>All Services List</h1>
      <div className="listserv-main">
        <p>Services</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
        </div>
        <div className="listserv-allserv">
            <hr />
{allservices.map((service,index)=>{
    return <>
        <div key={index} className="listserv-main listserv-format" >
            <img className='listserv-allserv-icon' src={service.image} alt=''/>
            <p>{service.name}</p>
            <p>Rs.{service.old_price}</p>
            <p>Rs.{service.new_price}</p>
            <p>{service.category}</p>
            <img onClick={()=>{remove_service(service.id)}} className='listserv-icon-remove' src={cross}  alt="" />
        </div>
        <hr/>
        </>
    

})}
        </div>
    </div>
  )
}

export default Listservice
