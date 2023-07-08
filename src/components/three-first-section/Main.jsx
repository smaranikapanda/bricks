import React from 'react'
import './main.css'
const Main = () => {
  return (
    <>
      <h3 className='text-center mt-4 mb-4'>Welcome to Bricks & Pillars</h3>
      <div className="container">
      <div className=" third-section">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-2" >
              <img src="assets/renew1.png" height="300px" width="250px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Interiors</h5>
                <p class="card-text">We Provide Trendy Interior Solution in Partnership with dwelitedecor.com, So that You get the best Living Experience to your space.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card mb-2" >
              <img src="assets/renew2.png" height="300px" width="250px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Renovation</h5>
                <p class="card-text">Relive your own Space with a completely overhaul experience with every inch of the carpet area used to it’s fullest for the best living experience.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card mb-2">
              <img src="assets/renew3.png" height="300px" width="250px" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Construction</h5>
                <p class="card-text">We are Experienced company that have built Homes, Commercial complex and Apartments with Many satisfied home owners and Builders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Main
