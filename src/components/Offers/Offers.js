import React from 'react';
import offer1 from '../../images/offer1.png';
import offer2 from '../../images/offer2.png';
import offer3 from '../../images/offer3.png';
import offer4 from '../../images/offer4.png';
import './Offers.css';

const Offers = () => {
    return (
        <div className="offer-section">
            <div className="offers-bg-color d-flex justify-content-evenly mx-auto row">
                <div className="" style={{ width: 'auto' }}>
                    <div className="card-body">
                        <img src={offer1} alt="" className="offer-image mx-auto" />
                        <h6 className="card-subtitle mb-2  mt-2 fs-4 fw-bold">SPECIAL OFFERS</h6>
                        <p className="card-text text-muted">Shop Big Save Big</p>

                    </div>
                </div>
                <div className="" style={{ width: 'auto' }}>
                    <div className="card-body">
                        <img src={offer2} alt="" className="offer-image mx-auto" />

                        <h6 className="card-subtitle mb-2  mt-2 fs-4 fw-bold">FREE DELIVERY</h6>
                        <p className="card-text text-muted">On Orders Above $99</p>

                    </div>
                </div>
                <div className="" style={{ width: 'auto' }}>
                    <div className="card-body">
                        <img src={offer3} alt="" className="offer-image mx-auto" />

                        <h6 className="card-subtitle mb-2  mt-2 fs-4 fw-bold">30 DAYS RETURN</h6>
                        <p className="card-text text-muted">Policy We Offers</p>

                    </div>
                </div>
                <div className="" style={{ width: 'auto' }}>
                    <div className="card-body">
                        <img src={offer4} alt="" className="offer-image mx-auto" />

                        <h6 className="card-subtitle mb-2  mt-2 fs-4 fw-bold">FASTEST SHIPPING</h6>
                        <p className="card-text text-muted">2 Days Express</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;