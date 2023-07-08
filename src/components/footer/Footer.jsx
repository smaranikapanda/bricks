import React from 'react'
import './footer.css'
import { Link } from "react-router-dom"
import { FaFacebookF, FaWhatsapp, FaYoutube, FaEnvelope,FaLinkedinIn, FaInstagram} from "react-icons/fa";



const Footer = () => {
  return (
    <>
       <div className="foot w-100">
        <footer>
          <div className="row m-4">
            <div className="col mt-4">
              <h6>Recent Posts</h6>
              <ul>
                <li>Top 7 Elevation Cladding Materials for
                  Your New Home</li>
                <li>
                  The Best Waterproofing Materials that
                  are Worth investing for your New Home
                </li>
                <li>
                  11 Best Construction Materials forIndian Homes
                </li>
                <li>
                  10 Technology Trends in Construction You Need to Know
                </li>
                <li>
                  Smart Home Automation Tools that area Must Have for your New Home
                </li>
              </ul>
            </div>
            <div className="col mt-4">
              <h6>BRICKsnPILLARS</h6>
              <ul>
                <li className='text-light'>#2, 1st Main Road, 4th Block</li>
                <li className='text-light'>Koramangala, Bangalore - 560034</li>
                <li><b className='text-white'>Mobile:</b> +91 8884769695</li>
                <li><b className='text-white'>Email:</b> &nbsp;contact@bricksnpillars.com</li>
              </ul>
              <h6>For Partnerships</h6>
              <ul>
                <li><b className='text-white'>Mobile:</b> +91 88847 69695</li>
              </ul>
              <h6>For Job & Interships</h6>
              <ul>
                <li><b className='text-white'>Mobile:</b> +91 88867 69695</li>
              </ul>
            </div>
            <div className="col mt-4 linking">
              <h6>Quick Links</h6>
              <ul>
                <a href="https://homznoffiz.in/" target="_blank"><li>OUR WORK</li></a>
                <Link to="/package"><li>PACKAGES</li></Link>
                <a href="https://homznoffiz.in" target="_blank"><li>ABOUT US</li></a>
                <Link to='/contact'><li>CONTACT</li></Link>
                <Link to='/blog'><li>BLOG</li></Link>
                <li>GET QUOTE</li>
              </ul>
            </div>
            
            <div className="row mb-4 end container">
              <div className="col-8 mt-4 conditions">COPYRIGHT 2022- 2023 BricknPillars.com   |   ALL RIGHTS RESERVED   | Privacy Policy | Terms and Conditions</div>
              <div className="col-4">
                <div className="row icons text-light">
                  <div className="col"><a href="https://m.facebook.com/homznoffiz"><FaFacebookF/></a></div>
                  <div className="col"><a href=" https://wa.me/+918884769695"><FaWhatsapp/></a></div>
                  <div className="col"><a href="https://youtube.com/@homznoffiz"><FaYoutube/></a></div>
                  <div className="col"><a href="contact@bricksnpillars.com"><FaEnvelope/></a></div>
                  <div className="col"><a href="https://www.linkedin.com/company/homznoffiz/"><FaLinkedinIn/></a></div>
                  <div className="col"><a href="https://instagram.com/homznoffiz?igshid=MzRlODBiNWFlZA=="><FaInstagram/></a></div>   
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer



