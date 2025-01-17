import React from "react";
import "../../Styles/Team.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import team01 from '../../Images/team-01.png'
import team02 from '../../Images/team-02.jpg'
import team03 from '../../Images/team-03.png'
import team04 from '../../Images/team-04.png'


const teamMembers = [
    {
        imgUrl: team01,
        name: 'Yetunde',
        position: 'Production Designer'
    },

    {
        imgUrl: team02,
        name: 'Yetunde',
        position: 'Product Designer'
    },

    {
        imgUrl: team03,
        name: 'Yetunde',
        position: 'Customer Service'
    },

    {
        imgUrl: team04,
        name: 'Yetunde',
        position: 'Project Leader'
    },
]

function Team() {
  return (
    <section className='team-style-one-area our__team default-padding'>
    <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Team members</h4>
              <h2 className="title">Expert Team Members</h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>
    <div className='container'>
        <div className='team__wrapper'>
            {
                teamMembers.map((item, index) => (
                    <div className='team__item col-lg-3' key={index}>
                        <div className='team__img'>
                            <img src={item.imgUrl} alt='' />
                        </div>
                        <div className='team__details'>
                            <h4>{item.name}</h4>
                            <p className='description'>{item.position}</p>

                            <div className='team__member-social'>
                                <span><a href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a></span>
                                <span><a href="#">
                          <FontAwesomeIcon icon={faXTwitter} />
                        </a></span>
                                <span><a href="#">
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a></span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
</section>
  );
}

export default Team;
