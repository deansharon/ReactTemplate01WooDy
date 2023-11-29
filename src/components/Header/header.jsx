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
import { Link } from 'react-router-dom'

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
                  {/* <a href="/about" className="nav-link">ABOUT</a> */}
                  <Link to="/about" className="nav-link">ABOUT</Link>
                </li> 
                <li className="nav-item">
                  <Link to="/services" className="nav-link">SERVICE</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">PROJECT</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">PAGES</Link>
                      <ul className="dropdown-menu dropdown" >
                        <li>
                          <Link to="/" className=" dropdown-item">Features</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/" className="nav-link dropdown-item">Free Quotes</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/" className="nav-link dropdown-item">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link dropdown-item">Testimonial</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/" className="nav-link dropdown-item">404 Page</Link>
                        </li>
                      </ul>
                </li>
                <li className="nav-item">
                  <Link to="/information" className="nav-link">CONTACT</Link>
                </li>
                <li className='bg-warning'>
                  <Link to="/" className='bg-warning p-3 fw-bold text-decoration-none' >Get A Quote <VscArrowRight /></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
      </>
    )
  }
}
