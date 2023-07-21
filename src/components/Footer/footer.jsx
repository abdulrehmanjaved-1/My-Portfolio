import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abdulrehman Javed</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target='_blank'><FaFacebook/></a>
        <a href="https://instagram.com" target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com" target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abdulrehman Javed. All rights reserved.</small>
      </div>
    </footer>  
  )
}

export default footer