import React from 'react';
import './Bestseller.css';
import product from '../../images/pexels-photo-821651.png';
const Bestseller = (props) => {
    return (
        <div>
            <div className="row d-flex align-items-center mx-5">
                <div className="col-lg-3 col-md-12 col-12 text-start">
                    <h1><span className="fs-2 fw-bold">BEST SELLERS</span></h1>
                    <h6><span className="renoshop fs-5 fw-bold">The best production from us</span></h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis optio magni a, deserunt itaque laboriosam laudantium excepturi voluptas totam vitae!</p>
                </div>
                <div className="col-lg-9 col-md-12 col-12 ">
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src={product} alt="Card image cap" />
                            <div className="card-body text-start">
                                <h5 className="card-title">Cruise Dual Analog</h5>
                                <p><span className="renoshop fs-5">$250.00</span></p>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>

                        </div>
                        <div className="card">
                            <img className="card-img-top" src={product} alt="Card image cap" />
                            <div className="card-body text-start">
                                <h5 className="card-title">Crown Summit Backpack</h5>
                                <p><span className="renoshop fs-5">$250.00</span></p>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>

                        </div>
                        <div className="card">
                            <img className="card-img-top" src={product} alt="Card image cap" />
                            <div className="card-body text-start">
                                <h5 className="card-title">Joust Duffle Bag</h5>
                                <p><span className="renoshop fs-5">$250.00</span></p>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>

                        </div>
                        <div className="card">
                            <img className="card-img-top" src={product} alt="Card image cap" />
                            <div className="card-body text-start">
                                <h5 className="card-title">Joust Duffle Bag</h5>
                                <p><span className="renoshop fs-5">$250.00</span></p>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bestseller;