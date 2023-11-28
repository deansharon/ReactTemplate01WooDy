import React, { Component } from 'react'

import Team4 from '../../img/team-4.jpg'
import Team3 from '../../img/team-3.jpg'
import Team2 from '../../img/team-2.jpg'
import Team1 from '../../img/team-1.jpg'

export default class Members extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row m-4 p-4">
          <h1 className='m-4 p-4 fw-bold'>__ Team Members __</h1>
        </div>
        <div className="row pb-4">
          <div className="col-3">
            <img src={Team1} alt="team-1" className='w-100' />
            <h3 className='fw-bold pt-3'>Full Name</h3>
            <p>Designation</p>
          </div>
          <div className="col-3">
            <img src={Team2} alt="team-2" className='w-100' />
            <h3 className='fw-bold pt-3'>Full Name</h3>
            <p>Designation</p>
          </div>
          <div className="col-3">
            <img src={Team3} alt="team-3" className='w-100' />
            <h3 className='fw-bold pt-3'>Full Name</h3>
            <p>Designation</p>
          </div>
          <div className="col-3">
            <img src={Team4} alt="team-4" className='w-100' />
            <h3 className='fw-bold pt-3'>Full Name</h3>
            <p>Designation</p>
          </div>
        </div>
      </div>
    )
  }
}
