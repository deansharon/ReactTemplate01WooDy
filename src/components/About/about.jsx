import React, { Component } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'


import AboutImage from '../../img/about.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid aboutus p-0 m-0">
        <div className="text-start d-flex mt-5 mb-5">
          <div className="col-6">
            <img src={AboutImage} alt="About us page" height={500} className='w-100' />
          </div>
          <div className="col-6 p-4 ">
               <h1 className='fs-1 fw-bolder pb-2'>About Us _</h1>
               <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
            <div className='d-flex p-4 m-4'>
              <div className="col-6">
                <h2 className='fs-1'><FaUsers />   1234</h2>
                <p>Happy Clients</p>
              </div>
              <div className="col-6">
                <h2 className='fs-1'><BsCheckLg />  1234</h2>
                <p>Projects Done</p>
              </div>
            </div>
            <button className='p-3 bg-warning px-4 mx-4 btn fw-bold rounded-0 btn-readmore-hover'>Explore More</button>
          </div>
        </div>
      </div>
    )
  }
}
