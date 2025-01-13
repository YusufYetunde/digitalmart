import React from "react";
import img from "../../Images/story.jpg";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Story() {
  return (
    <div className="about-area circle-shape-right-bottom default-padding">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6 pr-70 pr-md-15 pr-xs-15">
            <div className="about-style-two">
              <div className="thumb">
                <img className="wow fadeInLeft" src={img} style={{width: "800px", height: "800px"}} />
                <div className="sub-item">

                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 pl-60 pl-md-15 pl-xs-15">
            <div className="about-style-one">
              <h4 className="sub-heading">About Us</h4>
              <h2 className="heading">
                DigitalMart 
              </h2>
              <p>
              Digital Mart began with a vision to help businesses thrive in the digital world. What started as a small team with big ideas has grown into an agency that connects brands with their audiences in impactful ways.

We believe every business has a story worth telling. By combining innovation, creativity, and data, we craft strategies that deliver real results.

As the digital world evolves, we remain committed to driving success for our clients, one impactful story at a time.
              </p>
              <a
                href="notfound"
                className="popup-youtube video-play-button with-text"
              >
                <div className="effect"></div>
                <span>
                  <i className="fas fa-play">
                    {" "}
                    <FontAwesomeIcon icon={faPlay} />{" "}
                  </i>{" "}
                  OUR STORY
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
