import React, { Component } from 'react'
import {IoLocationSharp} from 'react-icons/io5'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BiLogoTwitter} from 'react-icons/bi'
import {GrLinkedinOption} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
import {VscArrowRight} from 'react-icons/vsc'
import {FaUsers} from 'react-icons/fa'
import {BsCheckLg} from 'react-icons/bs'
import {FaDraftingCompass} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'
import {FaUserCheck} from 'react-icons/fa'
import {FaHeadphones} from 'react-icons/fa'
import { FaYoutube } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"


import './header.css'

export default class Header extends Component {
  render() {
    return (
      <>
        
        <nav className='navbar navbar-expand-lg py-0'>
          <div className="container-fluid">
            <a href="/" className="navbar-brand fw-bold px-5">WooDY</a>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#collapsedmenu" aria-controls="collapsedmenu" aria-expanded="false" aria-label="Responsive Dropdown">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse p-2" id="collapsedmenu">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item ">
                  <a href="/" className="nav-link">HOME</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">ABOUT</a>
                </li> 
                <li className="nav-item">
                  <a href="/" className="nav-link">SERVICE</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">PROJECT</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="/" className="nav-link dropdown-toggle" role="button" data-bs-target="dropdown" aria-expanded="false">PAGES</a>
                    <ul className="dropdown-menu" id='dropdown'>
                      <li className='nav-item'>
                        <a href="/" className="nav-link dropdown-item">Features</a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">Free Quotes</a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">Our Team</a>
                      </li>
                      <li className="nav-item">
                          <a href="/" className="nav-link">Testimonial</a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">404 Page</a>
                      </li>
                    </ul>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">CONTACT</a>
                </li>
                <li className='bg-warning'>
                  <a href="/" className='bg-warning p-3 fw-bold text-decoration-none' >Get A Quote <VscArrowRight /></a>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
      </>
    )
  }
}
