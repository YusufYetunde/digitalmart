import React from 'react'
import '../../Styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import logo from '../../Images/digitalMartblack.png';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bgfooter">
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    <div className="col-lg-5 col-md-6 footer-item pr-50 pr-xs-15 pr-md-15">
                        <div className="about">
                            <img className="logo" src={logo} />
                            <p>
                            Marketing is a company that focus on developing company’s strategy for increase digital marketing.
                            </p>
                            <ul className="footer-social">
                                <li>
                                    <a href="#"><i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook}/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin}/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-item pr-50">
                        <div className="link">
                            <h4 className="widget-title">Menu</h4>
                            <ul className='footer_services'>
                                <li>
                                    <Link to="/services">Home</Link>
                                </li>
                                <li>
                                <Link to="#">Features</Link>
                                </li>
                                <li>
                                <Link to="#">About</Link>
                                </li>
                                <li>
                                <Link to="#">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-item pr-50">
                        <div className="link">
                            <h4 className="widget-title">Services</h4>
                            <ul className='footer_services'>
                                <li>
                                    <Link to="/services">Content Strategy</Link>
                                </li>
                                <li>
                                <Link to="#">Content Development</Link>
                                </li>
                                <li>
                                <Link to="#">Content Creation</Link>
                                </li>
                                <li>
                                <Link to="#">Content Optimization</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-item">
                        <div className="link">
                            <h4 className="widget-title">Company</h4>
                            <ul className='footer_services'>
                                <li>
                                    <Link to="/services">Site Map</Link>
                                </li>
                                <li>
                                <Link to="#">Terms of use</Link>
                                </li>
                                <li>
                                <Link to="#">Privacy Notice</Link>
                                </li>
                                <li>
                                <Link to="#">Cookie</Link>
                                </li>
                                <li>
                                <Link to="#">Mordern Slavery</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Start Footer Bottom --> */}
        <div className="footer-bottom border-t-4">
            <div className="container">
                <div className="row">
                    <div className='line'></div>
                    <div className="col-lg-12 text-center">
                        <p>&copy; Copyright 2025. All Rights Reserved by Yetunde </p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Footer Bottom --> */}
    </footer>
  )
}

export default Footer
