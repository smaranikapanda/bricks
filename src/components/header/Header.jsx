import React from 'react'
import './header.css'
import Navbar  from '../navbar/Navbar'


const Header = () => {
  return (
    <>

      <div className="head">
        <Navbar/>
        <div className="container-fluid first-card aligns-items-center d-flex justify-content-center">
          <div className="card  aligns-items-center d-flex justify-content-center container-fluid">
            <p>Smart <b>Living,</b> through rightful <b>Construction</b></p>
            <a href='#qoute'><button type="button" class=" align-items-center container-fluid">JOIN US NOW</button></a>            
            <span className=' aligns-items-center  justify-content-center mt-4  fw-bold'>Crafting Exceptional Homes in Bangalore</span>
          </div>
        </div>
      </div>
      <div className='second-section'>
        <div className="second-div-one">
          <h4 className='pt-4 pb-4 text-center text-light'>Crafting Exceptional Homes in Bangalore</h4>
        </div>
        <div className="second-div-two">
          <a href='#qoute'><button type="button" className="second-button  align-items-center text-light h6"><b>GET A FREE ESTIMATE NOW</b></button></a>
        </div>
      </div>
      
      

      
      
    </>
  )
}

export default Header
