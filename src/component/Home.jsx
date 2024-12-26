import React from 'react'

function Home() {
  return (
    <>

<div class="carousel slide" data-bs-ride="carousel" id="a">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#a"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button type="button" data-bs-target="#a" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#a" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#a" data-bs-slide-to="3"></button>
      </div>
     


      <div class="carousel-inner">
        

        <div class="carousel-item active"data-bs-interval="2000" >
          <img
            src="https://pn-paul.netlify.app/image/slider1.jpg"
            alt=""
            class="w-100"
          />
          <div class="carousel-caption"></div>
        </div>

        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://pn-paul.netlify.app/image/slider22.jpg"
            alt=""
            class="w-100"
          />
          <div class="carousel-caption"></div>
        </div>

        <div class="carousel-item"data-bs-interval="2000">
          <img
            src="https://pn-paul.netlify.app/image/slidwr33.jpg"
            alt=""
            class="w-100"
          />
          <div class="carousel-caption"></div>
        </div>

        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://pn-paul.netlify.app/image/slidwr44.jpg"
            alt=""
            class="w-100"
          />
          <div class="carousel-caption"></div>
        </div>
      </div>
    
    </div>
    
      
      <div
        className="carousel-control-prev"
        type="button"
        data-bs-target="#a"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </div>
      <div
        className="carousel-control-next"
        type="button"
        data-bs-target="#a"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </div>
    {/* </div> */}

    <div className="container mt AA">
      <h2 className="text-center a">
        WELCOME TO   <b style={{color:"orange"}} >FIRST FIDDLE</b>
      </h2>
      <div className="row A">
        <div className="col-md-7 my-2">
          <br />
          <p className="b">
            First Fiddle Restaurants, one of India's most prominent F&B
            companies in the casual dining sector, is headed by Priyank Sukhija.
            Starting the journey from Lazeez Affair in 1999 to Miso Sexy and
            Bougie in 2022, we have created wave after wave in the industry with
            over 30+ restaurants, brands, and franchises across India.
          </p>
          <br /><br /><br />
          <center>
            <button className="btn btn-warning mt-3">JOIN THE JOURNEY</button>
          </center>
        </div>
        <div className="col-md-5 my-2">
          <center>
            <img
              src="https://pn-paul.netlify.app/image/first.jpg"
              alt=""
              className="img12 mb-5"
            />
          </center>
        </div>
      </div>
 
    </div>
     

    <div className="container-fluid media mt-4 cc ">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center media-text" >
          <br /><br /> <br />
          <h1 className="text-center" style={{color:"white"}} >MEDIA MENTIONS</h1>
          <br />
          <p className="text-center we " >
            We've been making splashes and headlines since 1999 for our
            innovative concepts and aesthetic ideations, experimental
            gastronomic affairs, and exotic mixology. We've made our way from
            the heart of the country into the hearts of its people!
          </p>
          <br />
          <center>
            <button className="btn btn-warning mb-4 mt-4">KNOW MORE</button>
          </center>
        </div>
        <div className="col-md-2"></div>
      </div>
      
    </div>
    <br /><br /><br />
 
    <div className="container-fluid mb-5">
      <h2 className="text-center ex">
       EXPLORE <span style={{color:"orange"}}>  <b> OUR BRAND  </b></span>
      </h2>
      <br />
      <div className="row abc">
        <div className="col-md-3 mb-3">
          <img
            src=" https://pn-paul.netlify.app/image/ffpic1.jpg"
            alt=""
            className="w-100"
          />
        </div>
        <div className="col-md-3 mb-3">
          <img
            src="https://pn-paul.netlify.app/image/ffpic2.jpg"
            alt=""
            className="w-100"
          />
        </div>
        <div className="col-md-3 mb-3">
          <img
            src="https://pn-paul.netlify.app/image/ffpic3.jpg"
            alt=""
            className="w-100"
          />
        </div>
        <div className="col-md-3 mb-3">
          <img
            src="https://pn-paul.netlify.app/image/ffpic4.jpg"
            alt=""
            className="w-100"
          />
        </div>
      </div>
  
    </div>
   

    <div className="container-fluid  cc">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center f-text " >
          <br /><br /><br /> <br /><br /><br />
          <h1 className="text-center " style={{color:"white" , fontWeight:"300px"}} >
             EXPERIENCE OUR CONCEPTS
          </h1>
          <p className="text-center we " >
            <br />
            Moving beyond just offering Indian, international, and fusion
            cuisines, our restaurants create magic with our special events,
            mood-setting music, Insta-worthy aesthetics, and tongue-tingling
            signatures! Head over to experience it for yourself!
          </p>
          <center>
            <button className="btn btn-warning  mt-4 PPP">KNOW MORE</button>
          </center>
        </div>
        <div className="col-md-2"></div>
      </div>
      
    </div>
    </>

)}

export default Home