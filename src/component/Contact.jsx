import React from 'react'

function Contact() {
  return (
    <div>
<>

<div className="container-fluid cccccc">
  <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-8 text-white" style={{paddingTop: "140px"}}>
      <h1
        className="text-center"
        style={{fontSize: "1.5cm" , marginTop: "4cm", fontFamily: "pargue"}}
      >
        CONTACT US
      </h1>

      <div className="col-md-"></div>
    </div>
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="col-md-6 mt-4 send">
      <h4
        className="mt-4 mb-4 send ">
        SEND US MESSAGE
      </h4>
      <form action="">
        <div class="mt-4 mb-4 " style={{fontWeight: "300"}}>
          <input type="text" class="form-control" placeholder="Name*" />
        </div>
        {/* <!-- Name --> */}

        <div class="mb-4 mt-4" style={{fontWeight: "300"}}>
          <input type="email" class="form-control" placeholder="email*" />
        </div>
        {/* <!-- email --> */}
        <div class="mb-4 mt-4" style={{fontWeight: "300"}}>
          <input type="number" class="form-control" placeholder="phone*" />
        </div>
        {/* <!-- phone --> */}

        <div class="mb-4 mt-4" style={{fontWeight: "300"}}>
          <input type="text" class="form-control" placeholder="Message*" />
        </div>
        {/* <!-- message --> */}

        <div class="d-md-flex">
          <button class="btn bg-warning btn-lg text-light">Submit</button>
        </div>
        {/* <!-- button --> */}
      </form>
    </div>
    {/* <!-- col-md-6 --> */}
    <div
      class="col-md-5 mt-4  adad"
     
    >
      <h2
        class="mt-4 mb-4 send "
       
      >
        CONTACT INFO
      </h2>

      <h6 style={{color:"orange"}}>Address</h6>
      <p style={{color:"black"}} >
        6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021
      </p >
      <h6 style={{color:"orange"}}>For Franchise Enquiry</h6>
      <p style={{color:"black"}}>MOBILE: <b style={{color:"orange"}}>+91 9313663486</b></p>
      <p style={{color:"black"}}>EMAIL: <b style={{color:"orange"}}> franchise@firstfiddle.in</b></p>

      <h6 style={{color:"orange"}}>For HR Enquiry</h6>
      <p style={{color:"black"}}>MOBILE: <b style={{color:"orange"}}>+91 9999304427</b></p>
      <p style={{color:"black"}}>EMAIL: <b style={{color:"orange"}}> hr@firstfiddle.in </b></p>

      <h6 style={{color:"orange"}}>For Other Enquiry</h6>
      <p style={{color:"black"}}>PHONE: <b style={{color:"orange"}}>7676380000</b></p>
      <p style={{color:"black"}}>
        EMAIL: <b style={{color:"orange"}}> customercare@firstfiddle.in</b>
      </p>
      <p style={{color:"black"}}>Open: Monday - Saturday 10:30 - 19:30</p>
    </div>

    {/* <!-- col-md-5 --> */}
  </div>
</div>
{/* <!-- container end --> */}



</> 
</div>
  )
}

export default Contact
