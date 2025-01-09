import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import seo from "../../Images/service/seo.png";
import digital from "../../Images/service/digital.png";
import copywrite from "../../Images/service/copywrite.png";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("contentWriting");

  return (
    <div
      className="blog-tabs-section py-5"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="mb-3" style={{ color: "#234232", fontWeight: "bold" }}>
            Read More Articles <br /> From Our Blog
          </h2>
        </div>

        {/* Tab Navigation */}
        <ul className="nav nav-tabs justify-content-end mb-4 border-0">
          <li className="nav-item">
            <button
              className={`nav-link border-0 ${
                activeTab === "contentWriting" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("contentWriting")}
              style={{
                color: activeTab === "contentWriting" ? "#234232" : "#A5B2A4",
                fontWeight: "600",
                background: "none",
              }}
            >
              Content Writing
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link border-0 ${
                activeTab === "contentMarketing" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("contentMarketing")}
              style={{
                color: activeTab === "contentMarketing" ? "#234232" : "#A5B2A4",
                fontWeight: "600",
                background: "none",
              }}
            >
              Content Marketing
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div>
          {activeTab === "contentWriting" && (
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card border-0">
                  <img src={seo} alt="SEO" className="card-img-top" />
                  <div className="card-body">
                    <p className="text-muted mb-2">August 17, 2021</p>
                    <h5
                      className="card-title"
                      style={{ color: "#234232", fontWeight: "600" }}
                    >
                      10 Reasons to invest in SEO copywriting services
                    </h5>
                    <div class="button">
                      <Link
                        to="#"
                        className="btn btn-light btn-md btn-theme animation border border-300 rounded-pill "
                        style={{ border: "2px #A3B938" }}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card border-0">
                      <img
                        src={digital}
                        alt="Digital Marketing"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <p className="text-muted mb-2">August 17, 2021</p>
                        <h5
                          className="card-title"
                          style={{ color: "#234232", fontWeight: "600" }}
                        >
                          How to get hired at a top Digital Marketing
                        </h5>
                        <p className="card-text text-muted">
                          Agency life. We’ve all seen the photos posted on
                          social media...
                        </p>
                        <button className="btn btn-outline-success mt-3">
                          <i className="bi bi-eye"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card border-0">
                      <img
                        src={copywrite}
                        alt="Copywriting"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <p className="text-muted mb-2">August 17, 2021</p>
                        <h5
                          className="card-title"
                          style={{ color: "#234232", fontWeight: "600" }}
                        >
                          Copywriting guidelines during the coronavirus
                        </h5>
                        <p className="card-text text-muted">
                          Since the coronavirus hit earlier this year, it’s hard
                          to go anywhere...
                        </p>
                        <div
                          className=" flex text-center justify-center border rounded-pill"
                          style={{
                            color: "#A3B938",
                            width: "68px",
                            height: "68px",
                          }}
                        >
                          <FiEye
                            className=" "
                            style={{ width: "30px", height: "30px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "contentMarketing" && (
            <div className="row">
              {/* Replace with content marketing articles */}
              <p>No articles available under Content Marketing yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
