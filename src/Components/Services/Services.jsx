import React from "react";
import { Link } from "react-router-dom";
import shap1 from "../../Images/service/shap1.png";
import shap2 from "../../Images/service/shap2.png";
import shap3 from "../../Images/service/shap3.png";
import shap4 from "../../Images/service/shap4.png";

function Services() {
  return (
    <div className="services-style-six-area default-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="service-six-heading text-dark">
            <h2 className="heading " style={{ color:"#253D32" , marginBottom: "1rem" ,  }}>
            We’re Strategic Digital Marketing Agency
            </h2>
            <h4 className="mt-10 sub-text">We’ve created a full-stack structure for our working workflow processe, were from the funny the century initial all made, have spare to negatives</h4>
            <Link href="#" className="service-link">
              <u>See More</u> 
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
        </div>

        <div className="col-lg-7 pl-50 pl-md-15 pl-xs-15 mt--30 mt-md-30 mt-xs-0">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="service-six-item">
              <img src={shap1} alt="content" style={{ width: '50px', height: 'auto', marginBottom: "40px" }} />
                <h3>
                  <a href="#">Digital Marketing</a>
                </h3>
                <p>
                  Engaging and results-driven social media campaigns. and
                  Strategic planning and execution across various platforms.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="service-six-item">
              <img src={shap2} alt="content" style={{ width: '50px', height: 'auto', marginBottom: "40px" }} />
                <h4>
                  <a href="#">Website Creation and Management</a>
                </h4>
                <p>
                  Customized website design reflecting brand identity. and
                  Ongoing management and updates for optimal performance.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="service-six-item">
              <img src={shap3} alt="content" style={{ width: '50px', height: 'auto', marginBottom: "40px" }} />
                <h4>
                  <a href="#">Branding Services</a>
                </h4>
                <p>
                  Logo design and comprehensive branding solutions. and
                  Crafting a distinct and memorable brand identity.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="service-six-item">
              <img src={shap4} alt="content" style={{ width: '50px', height: 'auto', marginBottom: "40px" }} />
                <h4>
                  <a href="#">Product Marketing</a>
                </h4>
                <p>
                  Launch strategies for new products to ensure market success.
                  Market research, positioning, and messaging tailored to your
                  target audience. Development of compelling product content
                  and sales collateral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services
