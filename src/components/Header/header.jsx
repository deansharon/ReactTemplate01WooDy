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

import design03 from '../../img/headphones.png'
import design02 from '../../img/tick.png'
import design01 from '../../img/person-check_2.png'
import Service3 from '../../img/service-3.jpg'
import Service2 from '../../img/service-2.jpg'
import Service1 from '../../img/service-1.jpg'
import AboutImage from '../../img/about.jpg'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-secondary-subtle">
            <div className="container">
                    <div className="row pt-3">
                        <div className="col-6 d-flex">
                            <p className='px-4'><IoLocationSharp/> 123 Street, New York,USA</p>
                            <p><AiOutlineClockCircle/> Mon-Fri:09.00 AM - 09.00 PM</p>
                        </div>
                        <div className="col-6 d-flex  justify-content-end">
                            <p className='px-2'><BsFillTelephoneFill/>+012 345 6789</p>
                            <p className='px-2'><FaFacebookF/></p>
                            <p className='px-2'><BiLogoTwitter/></p>
                            <p className='px-2'><GrLinkedinOption/></p>
                            <p className='px-2'><FiInstagram/></p>
                        </div>
                    </div>
                </div>
        </div>
        <nav className='navbar navbar-expand-lg '>
          <div className="container-fluid">
            <a href="/" className="navbar-brand fw-bold px-5">WooDY</a>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#collapsedmenu" aria-controls="collapsedmenu" aria-expanded="false" aria-label="Responsive Dropdown">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse p-2" id="collapsedmenu">
              <ul className="navbar-nav ms-auto">
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
                <li>
                  <a href="/" className='bg-warning p-3'>Get A Quote<VscArrowRight/></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='carousel text-white'>
          <h3 className='fw-bold'>WELCOME TO WOODY</h3>
          <h1 className='fw-bold display-1'>Best Carpenter & Craftsman Services</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam omnis esse quos adipisci ullam alias! Lorem ipsum dolor sit amet.</p>
          <button className='p-2 bg-warning'>Read More</button>  <button className='p-2 bg-white'>Free Quote</button>
        </div>

        <div className="service d-flex pt-5 pb-5 m-4">
            <div className="col-3">
                <img src={design01} alt="service section" width={80} height={80} />
                <h2 className='fs-4'>Creative Designers</h2>
            </div>
            <div className="col-3">
              <img src={design02} alt="service section" width={80} height={80} />
              <h2 className='fs-4'>Quality Products</h2>
            </div>
            <div className="col-3">
              <FaDraftingCompass/>
              <h2 className='fs-4'>Free Consultation</h2>
            </div>
            <div className="col-3">
              <img src={design03} alt="service section" width={80} height={80} />
              <h2 className='fs-4'>Customer Support</h2>
            </div>
        </div>

        <div className="text-start d-flex mt-5 mb-5">
          <div className="col-6">
            <img src={AboutImage} alt="About us page" width={700} height={500} />
          </div>
          <div className="col-6 p-4 m-4">
               <h1 className='fs-1 fw-bolder pb-2'>About Us _</h1>
               <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
            <div className='d-flex p-4 m-4'>
              <div className="col-6">
                <h2><FaUsers/>   1234</h2>
                <p>Happy Clients</p>
              </div>
              <div className="col-6">
                <h2><BsCheckLg/>  1234</h2>
                <p>Projects Done</p>
              </div>
            </div>
            <button className='p-3 bg-warning px-4 mx-4'>Explore More</button>
          </div>
        </div>

        <div className="services">
         <div className='p-4'>
           <h1 className='fs-1 fw-bolder'>_ Our Services _</h1>
         </div>
          <div className='d-flex'>
            <div className="col-2">
              <img src={Service1} alt="service-1" width={600} height={300} />
              <h2>General Carpentry</h2>
              <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
              <p>Read More</p>
            </div>
            <div className="col-2">
              <img src={Service2} alt="service-2" width={600} height={300} />
              <h2>Furniture Manufacturing</h2>
              <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
              <p>Read More</p>
            </div>
            <div className="col-2">
              <img src={Service3} alt="service-3" width={400} height={300} />
              <h2>Furniture Modeling</h2>
              <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
              <p>Read More</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
