import React from 'react'
import './form.css'

const submit = e => {
  e.preventDefault()
  console.log(e.target.email.value, e.target.text.value,e.target.phone.value,e.target.select.value,e.target.select1.value)
}

const Form = () => {
  return (
    <div>
      <form onSubmit={submit}>
        <div className="container cost mt-4 mb-4" >
        <div className="card" id='qoute'>
          <div className="row m-4">
            <div className="col">
              <h6>With you every step of the way</h6>
              <p>Request a meeting with our professionals today</p>
              <h4 className='mt-4 mb-4'>When it comes to Build</h4>
              <h4>your home, we make no
                Compromises</h4>
            </div>
            <div className="col">
             
              <input type="text" name='text' class="form-control mb-2 name" id="exampleFormControlInput1" placeholder="👨 Full Name" required />
              <input type="tel"  id="phone" name="phone" placeholder=" 📞  Phone Number" className='mb-2 phone p-1' required />
              <p>Do you own a plot of land</p>
              <div className="border-0 mb-2">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name='checkbox1' id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input " type="checkbox" id="inlineCheckbox2" value="option2" name='checkbox2'  />
                  <label class="form-check-label" for="inlineCheckbox2">No</label>
                </div>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
                <label class="form-check-label" for="flexCheckDefault">
                  I agree to the terms & conditions and privacy policy
                </label>
              </div>
            </div>
            <div className="col">
              <input type="email" name='email' className="form-control mb-2 p-1 email text-light" required id="exampleFormControlInput1" placeholder=" 📩 Your Emil ID" />
              <select className="form-select form-select-sm mb-2 p-2 text-light" aria-label=".form-select-sm example" type='select' name='select' required>
                <option selected className='text-light'>🏡
                 Choose the city &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;▼</option>
                <option value="1" className='text-light'>Bengaluru</option>
                <option value="2" className='text-light'>Bhuabaneswar</option>
                <option value="3" className='text-light'>Chennai</option>
                <option value="4" className='text-light'>Delhi</option>
                <option value="5" className='text-light'>Goa</option>
                <option value="6" className='text-light'>Hydrabaad</option>
                <option value="7" className='text-light'>Mumbai</option>
                <option value="8" className='text-light'>Kolkata</option>
              </select>
              <select className="form-select form-select-sm mb-2 p-2" aria-label=".form-select-sm example" type='select' name='select1' required>
                <option selected>&#129521; Start Construction in &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;▼</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button className="text-center cost-btn d-flex text-light" type='submit'>REQUEST CONSULTATION</button>
            </div>
          </div>
        </div> 
      </div>
      </form>
    </div>
  )
}

export default Form
