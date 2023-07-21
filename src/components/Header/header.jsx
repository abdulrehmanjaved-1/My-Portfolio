import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


function header() {
  return (
      <header>
        <div className="container header_container">
          <h5>Hello i'm </h5>
          <h1>Abdulrehman Javed</h1>
          <h5 className='test-light'>Fullstack Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default header