import React, { Component } from 'react'
import { BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { IoIosArrowForward, IoMdMail } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'

export default class Footer extends Component {
  render() {
    return (
        <div className="container-fluid">
             <div className="row text-start text-white footer my-5 px-4 py-5">
              <div className="col-3 py-4 px-4">
                <h1 className='pb-4'>Address</h1>
                <p><IoLocationSharp />  123 Street, New York USA</p>
                <p><BsFillTelephoneFill />  +012 345 67890</p>
                <p><IoMdMail />  mail@domain.com</p>
                <div className="row">
                   <div className="col d-flex pt-2">
                       <p className='mx-2 px-2 border pb-2'><FaFacebookF /></p>
                       <p className='mx-2 px-2 border pb-2'><BiLogoTwitter /></p>
                       <p className='mx-2 px-2 border pb-2'><FaYoutube /></p>
                       <p className='mx-2 px-2 border pb-2'><BiLogoLinkedin /></p>
                   </div>
                </div> 
              </div>
              <div className="col-3 py-4 px-4">
                <h1 className='pb-4'>Services</h1>
                <p><IoIosArrowForward />General Carpentry</p>
                <p><IoIosArrowForward />Furniture Remodeling</p>
                <p><IoIosArrowForward />Wooden Floor</p>
                <p><IoIosArrowForward />Wooden Furniture</p>
                <p><IoIosArrowForward />Custom Carrpentry</p>
              </div>
              <div className="col-3 py-4 px-4">
                <h1 className='pb-4'>Quicks Links</h1>
                <p><IoIosArrowForward />About Us</p>
                <p><IoIosArrowForward />Contact Us</p>
                <p><IoIosArrowForward />Our Services</p>
                <p><IoIosArrowForward />Terms & Condition</p>
                <p><IoIosArrowForward />Support</p>
              </div>
              <div className="col-3 py-4 px-4">
                <h1 className='pb-4'>NewsLetter</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <form action="" className='position-relative'>
                   <input type="email" className='form-control'  id='exampleInputemail' aria-describedby='emailHelp' placeholder='Your Email' />
                   <button type="submit" className='btn btn-success position-absolute submit-btn'>Send</button>
                </form>
              </div>
            </div>
        </div>
    )
  }
}
