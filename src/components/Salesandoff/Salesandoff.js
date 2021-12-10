import React from 'react';
import firstoffer from '../../images/firstoffer.png'
import secondoffer from '../../images/secondoffer.png'
import thirdoffer from '../../images/thirdoffer.png'
import './Salesandoff.css'

const Salesandoff = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row row-cols-lg-3">
                    <div className="offerone" >
                        <img className='img-fluid p-5' src={firstoffer} alt="" />
                    </div>
                    <div className="offertwo" >
                        <img className='img-fluid p-5' src={secondoffer} alt="" />
                    </div>
                    <div className="offerthree" >
                        <img className='img-fluid p-5' src={thirdoffer} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Salesandoff;