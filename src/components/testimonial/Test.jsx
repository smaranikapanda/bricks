import React from 'react'
import './test.css'
const Test = () => {
  return (
    <>
      <div className="container mt-4 mb-4">
        {/* <div className="studio-img"><img src="assets/stidio.png" alt="" /></div> */}
        {/* <div className="card d-flex justify-content-end flex-end">
         <h3 className='p-2'><b>|</b>&nbsp;BricksnPillars Studio</h3>
         <p className=''>Our flagship Homes Studio in Bangalore is ready for walk-ins. At our studio, you will be able to get in touch with our team to guide you through your home-building journey. At BricknPillars, you can browse through our material catalogue to pick the best quality materials for your dream home.</p>
        </div> */}
      </div>

      <h2 className="text-center mt-4 mb-4 ">Client Testimonials</h2>
      <div className="container testimonials">
        <div className="row mt-4 mb-4">
          <div className="col-md-4">
            <div className="card">
              <h5 className="d-flex justify-content-end mt-4 mb-4 me-4">⭐⭐⭐⭐⭐</h5>
              <p className="mt-4 mb-4 ms-4">Finding and buying a house was not an easy task. Bricks & Pillars made it possible in a very easy way. The agent I was been provided was so down to earth and soft spoken. She guided us in a right way and helped us obtain our dream house. I would highly recommend Bricks & Pillars to anyone looking to purchase home.</p>
              <h6 className="mt-4 mb-4 ms-4">Sanket Shrimant</h6>
            </div>
          </div>
          <div className="col-md-4">

            <div className="card">
              <h5 className="d-flex justify-content-end mt-4 mb-4 me-4">⭐⭐⭐⭐⭐</h5>
              <p className="mt-4 mb-4 ms-4">We were first-time homebuyers with very little knowledge about how to find the right place. We met with a couple of realtors before Craig, but we knew instantly that he was the one for us. He is honest and hands-on (he even crawled into creepy attics to check insulation for us!), and he really helped to take the pressure off of us.</p>
              <h6 className="mt-4 mb-4 ms-4">Ramesh Chilgudi</h6>
            </div>

          </div>
          <div className="col-md-4">

            <div className="card">
              <h5 className="d-flex justify-content-end mt-4 mb-4 me-4">⭐⭐⭐⭐⭐</h5>
              <p className="mt-4 mb-4 ms-4">I would like to extend my sincerest thanks to all the members of your sales & tech support team who assisted me till today & also thank you team Bricks & Pillars that you all demonstrated a great amount of patience & keen level of knowledge while explaining about portal designing. We are with you from last 4 years & no doubt that it continues again thanks to all member of team. Highly Recommended Team Bricks & Pillars.</p>
              <h6 className="mt-4 mb-4 ms-4">Dushyant Singh</h6>
            </div>

          </div>
        </div>
      </div>

      <h2 className="text-center mt-4 mb-4">Our Trusted Brands</h2>
      <div className="container mt-4 mb-4 brands">
        <img src="assets/brand.png" className="mt-4 mb-4 image-fluid" alt="" />
      </div>
    </>
  )
}

export default Test
