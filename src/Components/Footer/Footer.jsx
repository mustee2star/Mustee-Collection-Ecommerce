import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpeg'
import instagram_icon from '../Assets/instagram.jpg'
import pinterest_icon from '../Assets/pinterest.png'
import whatsapp_icon from '../Assets/whatsapp.png'
import facebook_icon from '../Assets/facebook.png'
import twitter_icon from '../Assets/twitter.webp'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>MUSTEE'S COLLECTIONS</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={facebook_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer