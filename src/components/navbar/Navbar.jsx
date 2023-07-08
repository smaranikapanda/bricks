import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
       <div className="container-fluid aligns-items-center d-flex justify-content-center">
          <nav className="navbar navbar-expand-lg position-sticky position-fixed  text-light ">
            <div className="navbar-contents container-fluid aligns-items-center d-flex justify-content-center">
              <Link to="/"><img src="https://bricksnpillars.com/wp-content/uploads/2021/07/Logo-PNG-White-croped.png" clssName=" navbar-brand ps-4 pe-4" height="50"  alt="" /></Link>
              
              <button className="navbar-toggle float-end justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon float-end justify-content-end"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav pe-4">
                  <li className="nav-item nav-hov ps-4 pe-4">
                    <a className="nav-link" aria-current="page" href="https://homznoffiz.in/" target='_blank'>OUR WORK</a>
                  </li>
                  <li className="nav-item nav-hov ps-4 pe-4">
                    <Link className="nav-link" to="/package">PCKAGES</Link>
                  </li>
                  <li className="nav-item nav-hov ps-4 pe-4">
                    <a className="nav-link" href="https://homznoffiz.in/" tabindex="-1" aria-disabled="true" target='_blank'>ABOUT US</a>
                  </li>
                  <li className="nav-item nav-hov ps-4 pe-4">
                    <Link className="nav-link" to="/contact" tabIndex="-1" aria-disabled="true">CONTACT</Link>
                  </li>
                  <li className="nav-item nav-hov ps-4 pe-4">
                    <Link className="nav-link" to="/blog" tabIndex="-1" aria-disabled="true">BLOG</Link>
                  </li>
                  <li className="nav-item nav-last-btn ps-4 pe-4">
                  <a href='#qoute'><button type="button" class="text-light navbar-btn btn  ps-4 pe-4">GET QUOTE</button></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    </>
  )
}

export default Navbar
