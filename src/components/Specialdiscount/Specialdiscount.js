import { Box, TextField } from '@mui/material';
import React from 'react';
import './Specialdiscount.css';
import logoone from '../../images/logo-one.png';
import logotwo from '../../images/logo-two.png';
import logothree from '../../images/logo-three.png';
import logofour from '../../images/logo-four.png';
const Specialdiscount = () => {
    return (
        <div className="specialdiscount">
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                    <div className='text-white text-center py-5 coupon-design'>
                        <h2>Get Out Special Discount</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ducimus.</p>
                        <input className='py-2 px-3' type="email" placeholder='E-mail address' />
                        <button className='btn btn-success ms-2'>GET CUPON NOW</button>
                    </div>
                    <div className='container text-center d-flex flex-column flex-sm-column flex-md-row justify-content-around align-items-center coupon-design-two' >
                        <div className='p-3'><img src={logoone} alt="" /></div>
                        <div className='p-3'><img src={logotwo} alt="" /></div>
                        <div className='p-3'><img src={logothree} alt="" /></div>
                        <div className='p-3'><img src={logofour} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialdiscount;