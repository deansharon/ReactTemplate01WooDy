import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div className='carousel text-white'>
                <h3 className='fw-bold'>WELCOME TO WOODY</h3>
                <h1 className='fw-bold display-1'>Best Carpenter & Craftsman Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam omnis esse quos adipisci ullam alias! Lorem ipsum dolor sit amet.</p>
                <button className='btn p-2 px-4 bg-warning fw-bold rounded-0 btn-readmore-hover'>Read More</button>  
                <button className='btn p-2 px-4 bg-white fw-bold rounded-0 btn-freequote-hover'>Free Quote</button>
            </div>
        )
    }
}
