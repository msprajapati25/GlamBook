import React from 'react'
import './Footer.css'
import logofoot from '../Assets/logo2.png'
import insta from '../Assets/insta.jpeg'
import pinterest from '../Assets/pin.png'
import whatsapp from '../Assets/what.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logofoot} alt=""/>
            <p>GLAMBOOK</p>

        </div>
        <ul className="footer-links">
            <li>Salon</li>
            <li>Services</li>
            <li>Contact</li>
            
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={insta} alt=''/>
                
            </div>
            <div className="footer-icons-container">
                
                <img src={pinterest} alt=''/>
                
            </div>
            <div className="footer-icons-container">
                
                <img src={whatsapp} alt=''/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
