import React from 'react'
import './package.css'
import { Link } from "react-router-dom"
const Package = () => {
  return (
    <>

<h3 className="text-center mb-4 mt-4">Our Packages</h3>

      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8 packages">
            <h2 className='mt-4'>Classic Package</h2>
            <p> Come to our Experience Centre and get a look and feel of what we do! No substandard products used and no surprises later!</p>
            <div className="row mt-4 mb-4">
              <div className="col">
                <ul>
                  <li>Design & Drawings</li>
                  <li>Core Construction Materials</li>
                  <li>Flooring and Wall Tiling</li>
                  <li>Painting</li>
                  <li>Electrical</li>
                  <li>Fabrication Works</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li> Plumbing</li>
                  <li>Doors</li>
                  <li>Windows</li>
                  <li>Kitchen</li>
                  <li>Bathroom</li>
                  <li>
                    Warranty Period</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Structure Designs in 2D and 3D</li>
                  <li>Site Audio & Reporting</li>
                  <li>Elevation Budget</li>
                  <li>Extra Charges</li>
                  <li>Government Sanctions and Liasoning Charges</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col"><a href='#qoute'><button className="  package-btn-1 text-light" >GET QUOTE</button></a></div>
              <div className="col"><Link to="/package"><button className="  package-btn-2 text-light" >LEARN MORE</button></Link></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 packages">
            <h2 className='mt-4'>Value Package</h2>
            <p> Come to our Experience Centre and get a look and feel of what we do! No substandard products used and no surprises later!</p>
            <div className="row mt-4 mb-4">
              <div className="col">
                <ul>
                  <li>Design & Drawings</li>
                  <li>Core Construction Materials</li>
                  <li>Flooring and Wall Tiling</li>
                  <li>Painting</li>
                  <li>Electrical</li>
                  <li>Fabrication Works</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li> Plumbing</li>
                  <li>Doors</li>
                  <li>Windows</li>
                  <li>Kitchen</li>
                  <li>Bathroom</li>
                  <li>
                    Warranty Period</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Structure Designs in 2D and 3D</li>
                  <li>Site Audio & Reporting</li>
                  <li>Elevation Budget</li>
                  <li>Extra Charges</li>
                  <li>Government Sanctions and Liasoning Charges</li>
                </ul>
              </div>
              <div className="row">
                <div className="col"><a href='#qoute'><button className=" package-btn-1 text-light" >GET QUOTE</button></a></div>
                <div className="col"><Link to="/package"><button className=" package-btn-2 text-light" >LEARN MORE</button></Link></div>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-8 packages">
            <h2 className='mt-4'>Premium Package</h2>
            <p> Come to our Experience Centre and get a look and feel of what we do! No substandard products used and no surprises later!</p>
            <div className="row mt-4 mb-4">
              <div className="col">
                <ul>
                  <li>Design & Drawings</li>
                  <li>Core Construction Materials</li>
                  <li>Flooring and Wall Tiling</li>
                  <li>Painting</li>
                  <li>Electrical</li>
                  <li>Fabrication Works</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li> Plumbing</li>
                  <li>Doors</li>
                  <li>Windows</li>
                  <li>Kitchen</li>
                  <li>Bathroom</li>
                  <li>
                    Warranty Period</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Structure Designs in 2D and 3D</li>
                  <li>Site Audio & Reporting</li>
                  <li>Elevation Budget</li>
                  <li>Extra Charges</li>
                  <li>Government Sanctions and Liasoning Charges</li>
                </ul>
              </div>
              <div className="row">
                <div className="col"><a href='#qoute'><button className=" package-btn-1 text-light" >GET QUOTE</button></a></div>
                <div className="col"><Link to="/package"><button className=" package-btn-2 text-light" >LEARN MORE</button></Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Package
