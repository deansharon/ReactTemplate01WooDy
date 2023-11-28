import React, { Component } from 'react'
import { FaDraftingCompass } from 'react-icons/fa'

import design03 from '../../img/headphones.png'
import design02 from '../../img/tick.png'
import design01 from '../../img/person-check_2.png'

export default class Featured extends Component {
  render() {
    return (
      <div className="container">
        <div className="row pt-5 pb-5 m-4 align-items-end">
            <div className="col-3">
                <img src={design01} alt="service section" width={60} height={60} />
                <h2 className='fs-4'>Creative Designers</h2>
            </div>
            <div className="col-3">
              <img src={design02} alt="service section" width={60} height={60} />
              <h2 className='fs-4'>Quality Products</h2>
            </div>
            <div className="col-3">
              <p className='fs-2'><FaDraftingCompass className='text-black' /></p>
              <h2 className='fs-4'>Free Consultation</h2>
            </div>
            <div className="col-3">
              <img src={design03} alt="service section" width={60} height={60} />
              <h2 className='fs-4'>Customer Support</h2>
            </div>
        </div>
      </div>
    )
  }
}
