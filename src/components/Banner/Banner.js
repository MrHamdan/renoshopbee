import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-img d-flex align-items-center">
            <div className="text-start container mb-5 col-md-12">
                <h1><span className="thebest-text">THE BEST</span></h1>
                <h1><span className="woocommerce-text">WOOCOMMERCE</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum <br /> sint consequuntur blanditiis dolorum qui amet illum, quasi commodi laborum.
                </p>
                <span className="button-design"><button>Button</button></span>
            </div>
        </div>
    );
};

export default Banner;