import React from 'react';
import { Card } from 'react-bootstrap';
import mart from "../../Images/service/mart.png";
import { Link } from 'react-router-dom';

const Mart = () => {
  return (
    <div className='mart-page default-padding'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src={mart} alt="mart-img" />
                </div>
                <div className='col-lg-6 h-auto'>
                <Card.Body>
                    <Card.Title className='heading' style={{ color:"#253D32" , marginBottom: "30px", fontSize: "42px" ,  }}>Increase Business on Social Media Reach</Card.Title>
                    <Card.Text style={{ color:"#78847D" , marginBottom: "50px", fontSize: "22px" ,  }}>
                    Using our network of industry influencers, we help promote your content
                    </Card.Text>
                    <div class="button">
                        <Link to="/about" className=' btn-md btn-theme animation border-none rounded-pill btn-color'>Get Started</Link>
                    </div>
                </Card.Body>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Mart;
