import React from 'react'

import { Link } from 'react-router-dom'

 function Footer() {
  return (
    <>

    <div>
    <div className="container-fluid">
      <div className="row" style={{background:"#111215"}}>
        <div className="col-md-1"></div>
       
        <div className="col-md-3">
          <br /><br /><br />
          <img
            src="https://pn-paul.netlify.app/image/ff-logo-02.png"
            alt=""
            style={{width: "80%", margintop: "2cm"}}
          />
        </div>

        <div className="col-md-1"></div>

        <div className="col-md-6">
          <h1 className="aaa text-light mt-4">
            <span
           className='spn'>CONTACT</span>
            <span>US</span>
          </h1>
          <p  className='p'
          >
            We're a team focusing on redefining the way the hospitality industry
            works by bringing in concept based restaurants across India. We are
            truly committed to catering to the ever-changing cosmopolitan taste
            of the customer and revolutioning the F & B industry!
          </p>
          <br />
          <div className="row">
            <div className="col-md-6">
              <h6
              style={{color:"orange" , fontWeight:"900px"}}
              >
                ADDRESS
              </h6>
              <p className="text-light">
                S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel
                Park, New Delhi, Delhi .
              </p>
            </div>
            <div className="col-md-6">
              <h6
               
              >
                <label style={{color:"orange" , fontWeight:"900px"}} > ENQUIRY</label>
              </h6>
              <p className="text-light">
                Email:
                <span 
                style={{color: "#f79205", fontweight: "400px"}}
                  >customercare@firstfiddle.in</span
                >
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 mb-5">
                <br />
                <br />
                <a href="#"
                  ><i
                  className="bx bxl-facebook-circle i"
                  
                  >
                  </i></a>
                <a href="#"
                  ><i
                  className="bx bxl-instagram i"
                   
                  >
                    </i></a>
                <a href="#"
                  ><i
                  className="bx bxl-whatsapp i "
                  >
                    </i></a>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
     
    </div>
    </div>

    {/* <!-- container fluid end --> */}

<div class="container-fluid" style={{background: "black"}}>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6 text-white">
      <p class="mt-3" style={{fontweight: "250"}}>
        "EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG |
        APP "
        <b style={{fontweight: "250", marginleft: "2.5cm" ,className:"foot"}}
        >COPYRIGHT © 2021 FIRST FIDDLE F&B PRIVATE LIMITED</b>
      </p>
    </div>
  </div>
</div>
{/* <!-- container fluid end --> */}

    </>
  )
}

export default Footer 