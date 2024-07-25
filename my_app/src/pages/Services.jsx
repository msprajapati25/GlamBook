import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import Servdisplay from '../components/ServDisplay/Servdisplay';
import Descriptionbox from '../components/Descriptionbox/Descriptionbox';
import Relatedserv from '../components/Relatedsev/Relatedserv';

const Services = () => {
  const {All_services} = useContext(Appcontext);
  const {ServiceId} =useParams();
  const service = All_services.find((e)=> e.id===Number (ServiceId));
  return (
    <div>
      <Breadcrum service={service}/>
      <Servdisplay service={service}/>
      <Descriptionbox/>
      <Relatedserv/>
    </div>
  )
}

export default Services
