import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.instagram.com/sinck__/" target="_blank"><BsInstagram/></a>
      <a href="https://github.com/SinckCode" target="_blank"><FaGithub/></a>
      <a href="https://instabio.cc/21016nvJy6G" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
