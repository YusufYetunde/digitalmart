import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../Images/digitalMart.png';
import background from '../../Images/service/newletter.png';
import { Link } from 'react-router-dom';


const Newsletter = () => {
  return (
    <div
      className="newsletter default-padding d-flex align-items-center"
      style={{
        background: `url(${background}) no-repeat center center`,
         width: "100vw", 
         height: '550px' , // Full viewport height for the section
        color: "white",
      }}
    >
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-7 text-start">
            <h2 className="mb-4">
              Subscribe to get information, latest news and other interesting offers about
            </h2>
            <img src={logo} alt="DigitalMart Logo" className="mb-4" />

            {/* Newsletter Form */}
            <div className="newsletter-form d-flex justify-content-start">
              <form className="d-flex w-100" style={{ maxWidth: "500px" }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control rounded-pill me-2"
                  style={{
                    border: "none",
                    padding: "10px 20px",
                    fontSize: "1rem",
                  }}
                />
                <Link to="/about" className='btn btn-md btn-theme animation border-none rounded-pill btn-color'>Subscribe</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
