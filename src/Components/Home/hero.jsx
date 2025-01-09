import React from 'react'
import '../../Styles/home.css'
import { Link } from 'react-router-dom'
function hero() {
  return (
    <div class="banner-style-one-area overflow-hidden bg-img text-light">
    {/* <!-- Single Item --> */}
    <div class="banner-style-one">
        <div class="container">
            <div class="content">
                <div class="col-xl-8 col-lg-8 align-middle">
                <   div class="info pr-35 pr-xs-0 pr-md-0">
                            <h4 className='hero_sub'>The Best</h4>
                            <h2 className='hero_title'>Digital Marketing</h2>
                            <p className='hero-text'>
                            Where we craft compelling narratives and dynamic strategies to elevate your business in the digital realm. As a leading social media marketing agency, we specialize in cultivating your online presence and connecting you with your target audience effectively
                            </p>
                            <div class="button">
                                <Link to="/about" className='btn btn-md btn-theme animation border-none rounded-pill btn-color'>Get in touch</Link>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
    {/* <!-- End Single Item --> */}
</div>







  )
}

export default hero
