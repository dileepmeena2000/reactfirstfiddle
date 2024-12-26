import React from 'react'

function Carrers() {
  return (
    <div>
      <>

      <div className="container-fluid ccccac">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-white" style={{paddingTop: "140px"}}>
          <h1
            className="text-center"
            style={{ fontSize: "1.5cm",  marginTop: "4cm",  fontFamily: 'pargue'}}
          >
            CAREERS
          </h1>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  

    <div className="container mt-5">
      <div className="row">
        <div
          className="col-md-12 mb-5 text-center rt "
          //
        >
          <p style={{color:"black" , fontSize:"35px"}} >COME WORK <b style={{color: "orange"}}> WITH US!</b></p>
        </div>
        <p className='rtt' >
          First Fiddle is all about innovation, creativity and understanding
          ever-changing consumer needs. The work environment enables both
          professional and personal growth.
        </p>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row">
        <div
          className="col-md-12 mb-5 text-center  rt"
          
        >
          <p style={{color:"black" , fontSize:"35px"}}>HOW TO <b style={{color: "orange"}}>APPLY!</b></p>
        </div>
        <p className='rtt' >
          First Fiddle is all about innovation, creativity and understanding
          ever-changing consumer needs. The work environment enables both
          professional and personal growth
        </p>
      </div>
    </div>

    <div className="container">
      <div className="row mt-4">
        <div className="col-md-5">
          <h4 style={{fontWeight: "400"}} className="mt-5 mb-1">

            Steep learning curve
          </h4>
          <p className='rttt'>
            Talent and merit are rewarded at First Fiddle Restaurants. Add
            value, and see yourself grow!
          </p>

          <h4  style={{fontWeight: "400"}} className="mt-5 mb-1">
            Growth opportunities
          </h4>
          <p className='rttt' >
            Talent and merit are rewarded at First Fiddle Restaurants. Add
            value, and see yourself grow!
          </p>

          <h4  style={{fontWeight: "400"}} className="mt-5 mb-1">
            Exciting work environment
          </h4>
          <p className='rttt' >
            Work in a highly motivated environment with talented people. A
            positive work environment, ensures a productive and happy you.
          </p>
        </div>


        <div className="col-md-6 mb-4" style={{marginTop: "0px", paddingLeft: "20px"}}>
          <div className="card" style={{boxShadow: "1px 1px 12px #020001"}}>
            <h5 className="mt-2 ms-4" style={{fontWeight:"400"}}>
              Share your Details
            </h5>
            <div className="card-body">
              <form action="">
                <div className="mb-4">
                  <label for className="mb-2">Your Name:</label>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="mb-4">
                  <label for className="mb-2">Your Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                  />
                </div>

                <div className="mb-4">
                  <label for className="mb-2">Your Phone:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>

                <div className="mb-4">
                  <label for className="mb-2">Message:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Message"
                  />
                </div>

                <div className="d-md-flex mt-5">
                  <button
                    className="btn btn-warning btn-xxl text-light"
                    style={{fontSize: "20px", fontWeight: "400"}}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>         

      </>
    </div>
  )
}

export default Carrers
