import React, { Component } from 'react'

import Testimonial1 from '../../img/testimonial-1.jpg'

export default class Testimonial extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row p-4 m-4">
              <h1 className='fw-bold'>__ Testimonial __</h1>
            </div>
            <div className="row">
              <div className="col d-flex flex-column align-items-center">
                <img src={Testimonial1} alt="testimonial-1"  className='border border-3 p-2 mb-4'/>
                <p className='px-4 w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum tenetur porro? Corporis, iusto voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laborum ad accusamus sed aut alias?</p>
                <h3 className='fw-bold'>Client Name</h3>
                <p>Profession</p>
              </div>
            </div>
        </div>
    )
  }
}
