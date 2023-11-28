import React, { Component } from 'react'

import Portfolio6 from '../../img/portfolio-6.jpg'
import Portfolio5 from '../../img/portfolio-5.jpg'
import Portfolio4 from '../../img/portfolio-4.jpg'
import Portfolio3 from '../../img/portfolio-3.jpg'
import Portfolio2 from '../../img/portfolio-2.jpg'
import Portfolio1 from '../../img/portfolio-1.jpg'

export default class Projects extends Component {
  render() {
    return (
        <div className="container">
              <div className="row">
           <div className="row m-4">
            <h1 className='fw-bold my-4'>__ Our Projects __</h1>
           </div>
           <div className="row p-4">
            <div className="col-4 border border-top-0">
              <img src={Portfolio1} alt="portfolio1" className='w-100' />
              <h4 className='p-4'>General Carpentry</h4>
              <p className='fw-bold fs-4'>Wooden Furniture Manufacturing And Remodeling</p>
            </div>
            <div className="col-4">
              <img src={Portfolio2} alt="portfolio2" className='w-100' />
              <h4 className='p-4'>Custom Carpentry</h4>
              <p className='fw-bold fs-4'>Wooden Furniture Manufacturing And Remodeling</p>
            </div>
            <div className="col-4">
              <img src={Portfolio3} alt="portfolio3" className='w-100' />
              <h4 className='p-4'>General Carpentry</h4>
              <p className='fw-bold fs-4'>Wooden Furniture Manufacturing And Remodeling</p>
            </div>
           </div>
           <div className="row mb-4">
            <div className="col-4">
              <img src={Portfolio4} alt="portfolio4" className='w-100'/>
              <h4 className='p-4'>Custom Carpentry</h4>
              <p className='fw-bold fs-4'>Wooden Furniture Manufacturing And Remodeling</p>
            </div>
            <div className="col-4">
              <img src={Portfolio5} alt="portfolio5" className='w-100' />
              <h4 className='p-4'>General Carpentry</h4>
              <p className='fw-bold fs-4'>Wooden Furniture Manufacturing And Remodeling</p>
            </div>
            <div className="col-4">
              <img src={Portfolio6} alt="portfolio6" className='w-100' />
              <h4 className='p-4'>Custom Carpentry</h4>
              <p className='fw-bold fs-4'>Wooden Furniture Manufacturing And Remodeling</p>
            </div>
           </div>
        </div>
        </div>
    )
  }
}
