import React from 'react'
import illustration from '../../Images/illustration/20.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocation, faMailBulk, faL } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="contact-area bg-gray default-padding">
        <div className="container">
            <div className="row">
                <div className="col-tact-stye-one col-lg-5 pr-60 pr-md-15 pr-xs-15">
                    <div className="contact-style-one-info">
                        <h2>Contact Us</h2>
                        <p>
                            Collaborate with us on your product and grow your business
                        </p>
                        <ul className='liist'>
                            <li className="wow fadeInUp">
                                <div className="icon">
                                    <i className="fas fa-phone-alt"><FontAwesomeIcon icon={faPhone}/></i>
                                </div>
                                <div className="content">
                                    <h4 className="titles">Phone Number</h4>
                                    <a href="">+234 9162696071</a>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="300ms">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"><FontAwesomeIcon icon={faLocation}/></i>
                                </div>
                                <div className="info">
                                    <h4 className="titles">Location</h4>
                                    <p>
                                        Surulere, Lagos <br/> Nigeria
                                    </p>
                                </div>
                            </li>
                            <li className="wow fadeInUp" data-wow-delay="500ms">
                                <div className="icon">
                                    <i className="fas fa-envelope-open-text"><FontAwesomeIcon icon={faMailBulk}/></i>
                                </div>
                                <div className="info">
                                    <h4 className="titles">Email</h4>
                                    <a href="mailto:info@digital.com.com">info@site.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-tact-stye-one col-lg-7">
                    <div className="contact-form-style-one">
                        <div className="illustration wow fadeInRight" data-wow-delay="300ms">
                            <img src={illustration} />
                        </div>
                        <h4 className="sub-heading">Have Questions?</h4>
                        <h2 className="heading">Send us a Massage</h2>
                        <form action="assets/mail/contact.php" method="POST" className="contact-form contact-form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group comments">
                                        <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="submit" name="submit" id="submit">
                                        <i className="fa fa-paper-plane"></i> Get in Touch
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Alert Message --> */}
                            <div className="col-lg-12 alert-notification">
                                <div id="message" className="alert-msg"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
