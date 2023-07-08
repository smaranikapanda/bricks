import React from 'react'
import './why.css'
const Why = () => {
  return (
    <>
   <h3 className='text-center mt-4 mb-4'>What You <span className=' underline mb-2'>Get? When</span> You Hire Us</h3>
      <p className='text-center text-dark'>At our core are four things that define who we are and what we stand for. This is what you can count on us.</p>

      <div className="container fifth-section">
        <div className="container-fluid">
          <div className="row mt-4 mb-4">
            <div className="col-md-3 fifth">
              <img src="assets/1st.png" alt="" className="pb-4" />
              <h6 className='text-center'>End to End  &nbsp;&nbsp; <span>Ownership</span></h6>
              <br />
              <p>We’re your single point of contact, let
                us manage the designers, architects,
                structural engineers, site supervisors,
                quality controllers and more.</p>
            </div>
            <div className="col-md-3 fifth">
              <img src="assets/2nd.png" alt="" className='pb-4' />
              <h6 className='text-center'>Quality & Discount <span>Assurance</span></h6>
              <br />
              <p>Transparency is achieved for both,
                working process as well as raw material
                used. Great deals with partnered store!</p>
            </div>
            <div className="col-md-3 fifth">
              <img src="assets/3rd.png" alt="" className='pb-4' />
              <h6 className='text-center '>Budgets & Time <span>Upfront</span></h6>
              <br />
              <p>Get a clear idea of your total project
                budget and friendly payment schedule
                upfront. No false promises now and
                surprises later.</p>
            </div>
            <div className="col-md-3 fifth">
              <img src="assets/4th.png" alt="" className='pb-4' />
              <h6 className='text-center mb-2'>Timely Updates & <span>Delivery</span></h6>
              <br />
              <p>Once a project initiates, there is literally
                next to no delays when we talk about
                keeping a check on project status.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Why
