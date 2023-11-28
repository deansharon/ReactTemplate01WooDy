import React, { Component } from 'react'
import { FaCheck, FaDraftingCompass, FaHeadphones, FaUserCheck } from 'react-icons/fa'

import Feature from '../../img/feature.jpg'


export default class Consultation extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <div className='row d-flex align-items-center my-4 py-4'>
          <div className="col-6 text-start pt-4 px-4">
            <h1 className='fw-bold ps-4'>Why Choose Us _</h1>
            <p className='ps-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
            <div className="row py-4">
              <div className="col-6 ps-5">
                <div className="row d-flex align-items-center">
                  <div className="col-2 fs-1 pb-1"><FaCheck /></div>
                  <div className="col-10 text-start flex-column">
                    <p className='m-0'>Quality</p>
                    <p className='fw-bold fs-4 m-0'>Services</p>
                  </div>
                </div>
              </div>
              <div className="col-6 ps-5">
                <div className="row d-flex align-items-center">
                  <div className="col-2 fs-1 pb-1"><FaUserCheck /></div>
                  <div className="col-10 text-start flex-column">
                    <p className='m-0'>Creative</p>
                    <p className='fw-bold fs-4 m-0'>Designers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-6 ps-5">
                <div className="row d-flex align-items-center">
                  <div className="col-2 fs-1 pb-1"><FaDraftingCompass /></div>
                  <div className="col-10 text-start flex-column">
                    <p className='m-0'>Free</p>
                    <p className='fw-bold fs-4 m-0'>Consultation</p>
                  </div>
                </div>
              </div>
              <div className="col-6 ps-5">
                <div className="row d-flex align-items-center">
                  <div className="col-2 fs-1 pb-1"><FaHeadphones /></div>
                  <div className="col-10 text-start flex-column">
                    <p className='m-0'>Customer</p>
                    <p className='fw-bold fs-4 m-0'>Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={Feature} alt="feature-1" height={500} className='w-100'/>
          </div>
        </div>
      </div>

    )
  }
}
