import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='https://www.facebook.com/abdulrehman.javed.984' target='_blank'><AiFillFacebook/></a>
        <a href='https://www.instagram.com/__abdulrehmanjaved__/' target='_blank'><GrInstagram/></a>
        <a href='https://github.com/abdulrehmanjaved-1' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials