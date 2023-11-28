import React, { Component } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiLogoTwitter } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoLocationSharp } from 'react-icons/io5'

export default class Topbar extends Component {
    render() {
        return (
            <div className="container-fluid bg-secondary-subtle">
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-6 d-flex">
                            <p className='px-4'><IoLocationSharp /> 123 Street, New York,USA</p>
                            <p><AiOutlineClockCircle /> Mon-Fri:09.00 AM - 09.00 PM</p>
                        </div>
                        <div className="col-6 d-flex  justify-content-end">
                            <p className='px-2'><BsFillTelephoneFill />+012 345 6789</p>
                            <p className='px-2'><FaFacebookF /></p>
                            <p className='px-2'><BiLogoTwitter /></p>
                            <p className='px-2'><GrLinkedinOption /></p>
                            <p className='px-2'><FiInstagram /></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}