import React from 'react'

function Ourteam() {
  return (
    <div>
      <>
      
      <div className="container-fluid ccccc mb-4">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-white" style={{paddingTop: "140px"}}>
          <h1
            class="text-center"
            style={{fontSize: "1.5cm" , marginTop: "4cm", fontFamily: 'prague'}}
          >
            MEET THE TEAM
          </h1>
        </div>
        <div className="col-md-"></div>
      </div>
    </div>


      
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-5 mt-4">
          <img
            src="https://pn-paul.netlify.app/image/priyank-our%20team.jpg"
            alt=""
            className="w-100"
            // style={{height:"13.49cm"}}
          />
        </div>


        <div className="col-md-6 ms-1">
          <h2 className="mt-4">Priyank Sukhija</h2>
          <h6>C.E.O. & M.D.</h6>
          <p className="b">
            A 19-year-old dropout kid, who was just setting up his first
            venture, envisioned what nobody thought would make him a business
            tycoon in the hospitality industry. Once he began, there was no
            stopping this entrepreneur from reaching the heights he has reached
            today. It is the passion and creative streak of Priyank Sukhija that
            has made him the most watched-out restaurateur of today’s time.
            Coming from a family of lawyers, he ventured into the business world
            on his own with Lazeez Affaire in 1999 and has never looked back
            since.
          </p>
          <button className="btn btn-warning btn-lg mb-3 text-light">
            Read More
          </button>
          <div className="row">
            <div className="col-md-6 mb-5">
              <a href="#"
                ><i
                className="bx bxl-facebook-circle"
                  style={{color: "rgb(233, 124, 7)",fontSize: "50px"}} 
                  ></i>
                  </a>
              <a href="#"
                ><i
                className="bx bxl-twitter"
                style={{color: "rgb(233, 124, 7)",fontSize: "50px"}}
                ></i>
                  </a>
              <a href="#"
                ><i
                  class="bx bxl-instagram"
                  style={{color: "rgb(233, 124, 7)",fontSize: "50px"}}
                  ></i>
                  </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow ms-2 mb-4 photo1">
          <h4 style={{paddingTop: "7cm" , textalign: "center" , color: "white"}}>
              Y.P. ASHOK
            </h4>
            <p className="text-center text-white">chairman</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow ms-2 mb-4 photo2">
          <h4 style={{paddingTop: "7cm" , textalign: "center" , color: "white"}}>
              B.R. SACHDEVA
            </h4>
            <p className="text-center text-white">Director Finance & Legal</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow ms-2 mb-4 photo3">
          <h4 style={{paddingTop: "7cm" , textalign: "center" , color: "white"}}>
              SAGAR BAJAJ
            </h4>
            <p className="text-center text-white">Corporate Chief</p>
          </div>
        </div>
        {/* <!-- row end --> */}

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo4">
            <h4 style={{paddingTop: "7cm" , textalign: "center" , color: "white"}}>
                JAY SHANKAR NATRAJ
              </h4>
              <p className="text-center text-white">Franchise Lead</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo5">
            <h4 style={{paddingTop: "7cm" , textalign: "center" , color: "white"}}>
                VIBHUTI SOOD
              </h4>
              <p className="text-center text-white">PR And Communications Head</p>
            </div>
          </div>
        </div>
        {/* <!-- row end --> */}
      </div>
    </div>

    
    
   
      </>
    </div>
  )
}

export default Ourteam
