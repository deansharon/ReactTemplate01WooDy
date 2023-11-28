import React, { Component } from 'react'


import Quote from '../../img/quote.jpg' 

export default class Information extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row p-0 quote">
                    <div className="col-6 ps-0">
                        <img src={Quote} alt="quote1" className='w-100' />
                    </div>
                    <div className="col-6 pe-4">
                        <div className="row pt-4">
                            <div className="col text-start">
                                <h1 className='fw-bold p-3'>Free Quote __</h1>
                                <p className='p-3'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                            </div>
                        </div>
                        <div className="row">
                            <form action="">
                                <div className="row">
                                    <div className="col-6">
                                        <label For="Your Name" className='form-label'></label>
                                        <input type="text" className='form-control'  id='exampleInputtext' aria-describedby='NameHelp' placeholder='Your Name' />
                                    </div>
                                    <div className="col-6">
                                        <label For="Your Email" className='form-label'></label>
                                        <input type="email" className='form-control' id='exampleInputemail' aria-describedby='EmailHelp' placeholder='Your Email' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label For="Your mobile" className='form-label'></label>
                                        <input type="Text" className='form-control' id='exampleInputmobile' aria-describedby='MobileHelp' placeholder='Your Mobile'/>
                                    </div>
                                    <div className="col-6">
                                        <label For="Select A Service" className='form-label'></label>
                                        <select className="form-select" id="select"  placeholder='Select A Service'>
                                            <option>Select A Service</option>
                                            <option value="1">Slect A Service</option>
                                            <option value="2">Service 1</option>
                                            <option value="3">Service 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label For="Special Note" className='form-label'></label>
                                        <textarea className="form-control" id="exampleformcontroltextarea1" cols="70" rows="4" placeholder='Special Note'></textarea>
                                    </div> 
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button type="submit" class="btn py-2 bg-warning w-100 mt-4">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
