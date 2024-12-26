import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>

<link rel="icon" href="https://pn-paul.netlify.app/image/ff-logo-02.png" />


      <div>
        <nav
          className="navbar navbar-expand-md bg-info fixed-top"
        // style={{backgroundcolor:' #000082'}}
        >
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              <img
                src="https://pn-paul.netlify.app/image/ff-logo-02.png"
                className="weblogo AAA"
                alt=""
                style={{ width: '20%' }}
              />
              {/* <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpulse%2Fquestions-nep-2020-competitive-exams-rajeev-ranjan&psig=AOvVaw3I2dX25mH1xDPTAAQl-G7P&ust=1734240906530000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwi62eP6xKaKAxUfTGwGHdbvLuwQjRx6BAgAEBk"
                className="moblogo"
                alt=""
                style={{ width: '30%' }}
              /> */}
            </a>

            <button
              className="navbar-toggler"
              data-bs-target="pn"
              data-bs-toggle="collapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse show " id="pn">
              <ul className="navbar-nav ms-auto text-white text-center fs-5  ">
                <li >
                  <Link
                    className="nav-link"
                    to="/"
                    
                  >HOME</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/About"
                    
                  >ABOUT</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/Brand"
                    

                  >BRAND</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/OurTeam"
                   

                  >OUR TEAM</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/PressRelease"
                   

                  >PRESS RELEASE</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/Contact"
                   
                  >CONTACT</Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="/Carrers"
                  >CARRERS</Link >
                </li>
                <li>
                  <Link
                    className="nav-link"
                    to="#"
                  >FRANCHISE</Link >
                </li>
              </ul>
            </div>
          </div>

        </nav>
      </div>
    </>
  )
}

export default Header