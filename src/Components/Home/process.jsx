import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import shap2 from "../../Images/service/shap2.png";

const Process = () => {
  return (
    <div className="process default-padding " style={{ backgroundColor: "#F6FBF9", textAlign: "center" }}>
        <div className="container">
            <div className="row">
                <h2 className="mb-3" style={{ color: "#234232", fontWeight: "bold" }}> How Can We Help You?</h2>
                <p className="mb-4" style={{ color: "#667467" }}> Let's do great work together </p>
            </div>
             {/* Steps Section */}
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {/* Step 1 */}
          <div className="text-center mx-3">
            <div
              className="d-flex justify-content-center align-items-center rounded-circle mx-auto"
              style={{
                width: "70px",
                height: "70px",
                backgroundColor: "#ffffff",
              }}
            >
              <img
                src={shap2}
                alt="Step 1 Icon"
              />
            </div>
            <p
              className="mt-3"
              style={{ color: "#234232", fontWeight: "600" }}
            >
              Update content <br /> on my Website
            </p>
          </div>

          {/* Dotted line */}
          <div
            style={{
                flexGrow: 1,
                margin: "0 10px",
                maxWidth: "100px",
                border: "1px dashed #A2BDAA" ,
              }}
          ></div>

          {/* Step 2 */}
          <div className="text-center mx-3">
            <div
              className="d-flex justify-content-center align-items-center rounded-circle mx-auto"
              style={{
                width: "70px",
                height: "70px",
                border: "1px solid #A2BDAA",
                backgroundColor: "#ffffff",
              }}
            >
              
            </div>
            <p
              className="mt-3"
              style={{ color: "#234232", fontWeight: "600" }}
            >
              Improve User <br /> Experience
            </p>
          </div>

          {/* Dotted line */}
          <div
            style={{
              flexGrow: 1,
              margin: "0 10px",
              maxWidth: "100px",
              border: "1px dashed #A2BDAA" ,
            }}
          ></div>

          {/* Step 3 */}
          <div className="text-center mx-3">
            <div
              className="d-flex justify-content-center align-items-center rounded-circle mx-auto"
              style={{
                width: "70px",
                height: "70px",
                border: "1px solid #A2BDAA",
                backgroundColor: "#ffffff",
              }}
            >
              
            </div>
            <p
              className="mt-3"
              style={{ color: "#234232", fontWeight: "600" }}
            >
              Request Free <br /> Website Review
            </p>
          </div>

          {/* Dotted line */}
          <div
            style={{
                flexGrow: 1,
                margin: "0 10px",
                maxWidth: "100px",
                border: "1px dashed #A2BDAA" ,
              }}
          ></div>

          {/* Step 4 */}
          <div className="text-center mx-3">
            <div
              className="d-flex justify-content-center align-items-center rounded-circle mx-auto"
              style={{
                width: "70px",
                height: "70px",
                border: "1px solid #A2BDAA",
                backgroundColor: "#ffffff",
              }}
            >
            </div>
            <p
              className="mt-3"
              style={{ color: "#234232", fontWeight: "600" }}
            >
              Improve your <br /> SEO Rankings
            </p>
          </div>
        </div>
        <Link href="#" className="service-link" style={{marginTop: "60px" ,}}>
            <u>See More</u> 
            <i className="flaticon-right-arrow"></i>
        </Link>

        </div>
    </div>
  );
};

export default Process;
