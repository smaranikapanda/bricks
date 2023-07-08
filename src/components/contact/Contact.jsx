import React from 'react'
import './contact.css'
import Navbar from '../navbar/Navbar'
import { FaFacebookF, FaWhatsapp,FaSearchLocation, FaPhone, FaYoutube, FaEnvelope, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";

import Footer from '../footer/Footer'
const submit = e => {
  e.preventDefault()
  console.log(e.target.email.value, e.target.text.value, e.target.textarea.value)
}
const Contact = () => {
  return (
    <>
      <div className="contact">
        <Navbar />
        <div className="row container">
          <div className="col">
            <div className="container-fluid  aligns-items-center d-flex justify-content-center">
              <div className="card">
                <h1 className='text-light ms-4'>Get In Touch</h1>
                <form onSubmit={submit}>
                <input type="email"  name="email" className="form-control mb-3 ms-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required/>
                <input type="text"  name="text" className="form-control mb-3 ms-4" id="exampleInputText1" aria-describedby="textHelp" placeholder="Name" required/>
                <div className="mb-3 form-check">
                  <div className="mb-3">

                   <textarea classNameName="form-control" type='textarea' name='textarea' id="exampleFormControlTextarea1" rows="3" placeholder="Message" required></textarea>
                  </div>
                  <input type="checkbox" name='checkbox' className="form-check-input ms-1" id="exampleCheck1" />
                  <label className="form-check-label text-light" for="exampleCheck1">&nbsp; I would receive the newsletter</label>
                </div>
                <button type="submit" className="ms-4">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col text-light container">
            <div className="container-fluid  aligns-items-center d-flex justify-content-center text-light">
              <div className="card text-light card-map social p-4">
              <p>Get a Free Estimate of our packages, connect with us, visit us.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.545710372746!2d77.61159273541772!3d12.935450142077563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc2d%3A0x1681f38e8c00ae56!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1687786155988!5m2!1sen!2sin" width="200" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <br />
              <br />
              <div ><FaSearchLocation/>Kormangala, Bengaluru</div>
              <br />
              <div><FaPhone/>   +91 88847 69695</div>
              <br />
              <div><FaEnvelope/> contact@bricksnpillars.com</div>
              <div className="row text-light social mt-4">
                  <div className="col"><a href="https://m.facebook.com/homznoffiz"><FaFacebookF/></a></div>
                  <div className="col"><a href="https://wa.me/+918884769695"><FaWhatsapp/></a></div>
                  <div className="col"><a href="https://youtube.com/@homznoffiz"><FaYoutube/></a></div>
                  <div className="col"><a href="contact@bricksnpillars.com"><FaEnvelope/></a></div>
                  <div className="col"><a href="https://www.linkedin.com/company/homznoffiz/"><FaLinkedinIn/></a></div>
                  <div className="col"><a href="https://instagram.com/homznoffiz?igshid=MzRlODBiNWFlZA=="><FaInstagram/></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
