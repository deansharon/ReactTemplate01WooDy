import React, { Component } from 'react'

import Service6 from '../../img/service-6.jpg'
import Service5 from '../../img/service-5.jpg'
import Service4 from '../../img/service-4.jpg'

import Service3 from '../../img/service-3.jpg'
import Service2 from '../../img/service-2.jpg'
import Service1 from '../../img/service-1.jpg'
import { FaArrowRight } from 'react-icons/fa'

export default class Services extends Component {
    render() {
        return (
            <div className="container">
                <div className="services">
                    <div className='p-4'>
                        <h1 className='fs-1 fw-bolder py-4'>_ Our Services _</h1>
                    </div>
                    <div className='row d-flex m-4'>
                        <div className="col-4">
                            <img src={Service1} alt="service-1" className='w-100' />
                            <h3 className='pt-2 fw-bold'>General Carpentry</h3>
                            <p className='p-4'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <button className='btn bg-warning fw-bold rounded-0 btn-readmore-hover'>Read More <FaArrowRight /></button>
                        </div>
                        <div className="col-4">
                            <img src={Service2} alt="service-2" className='w-100' />
                            <h3 className='pt-2 fw-bold'>Furniture Manufacturing</h3>
                            <p className='p-4'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <button className='btn bg-warning fw-bold rounded-0 btn-readmore-hover'>Read More<FaArrowRight /></button>
                        </div>
                        <div className="col-4">
                            <img src={Service3} alt="service-3" className='w-100' />
                            <h3 className='pt-2 fw-bold'>Furniture Modeling</h3>
                            <p className='p-4'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <button className='btn bg-warning fw-bold rounded-0 btn-readmore-hover'>Read More<FaArrowRight /></button>
                        </div>
                    </div>
                    <div className='row d-flex m-4 '>
                        <div className="col-4">
                            <img src={Service4} alt="service-4" className='w-100' />
                            <h3 className='pt-2 fw-bold'>Wooden Floor</h3>
                            <p className='p-4'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <button className='btn bg-warning fw-bold rounded-0 btn-readmore-hover'>Read More<FaArrowRight /></button>
                        </div>
                        <div className="col-4">
                            <img src={Service5} alt="service-5" className='w-100' />
                            <h3 className='pt-2 fw-bold'>Wooden Furniture</h3>
                            <p className='p-4'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <button className='btn bg-warning fw-bold rounded-0 btn-readmore-hover'>Read More<FaArrowRight /></button>
                        </div>
                        <div className="col-4 ">
                            <img src={Service6} alt="service-6" className='w-100' />
                            <h3 className='pt-2 fw-bold'>Custom Work</h3>
                            <p className='p-4'>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <button className='btn bg-warning fw-bold rounded-0 btn-readmore-hover'>Read More<FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
