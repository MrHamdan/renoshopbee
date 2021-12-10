import React from 'react';
import moreproduct from '../../images/pexels-photo-821651.png';
import './Featuredproducts.css';
const Featuredproducts = (props) => {
    return (
        <div className="featuredproducts">
            <div className="mb-5">
                <h2 className="fw-bold">FEATURED PRODUCTS</h2>
                <h6 className="renoshop fw-bold">Newest trends from top brands</h6>
            </div>
            <div>
                <div className="card-group mx-5">
                    <div className="card">
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
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
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
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
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
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
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
                        <div className="card-body text-start">
                            <h5 className="card-title">Voyage Yoga Bag</h5>
                            <p><span className="renoshop fs-5">$250.00</span></p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>

                    </div>
                    <div className="card">
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
                        <div className="card-body text-start">
                            <h5 className="card-title">Compete Track Tote</h5>
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
            <div>
                <div className="card-group mx-5">
                    <div className="card">
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
                        <div className="card-body text-start">
                            <h5 className="card-title">Sprite Yoga Companion Kit</h5>
                            <p><span className="renoshop fs-5">$250.00</span></p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>

                    </div>
                    <div className="card">
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
                        <div className="card-body text-start">
                            <h5 className="card-title">Strive Shoulder Pack</h5>
                            <p><span className="renoshop fs-5">$250.00</span></p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>

                    </div>
                    <div className="card">
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
                        <div className="card-body text-start">
                            <h5 className="card-title">Impulse Duffle</h5>
                            <p><span className="renoshop fs-5">$250.00</span></p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>

                    </div>
                    <div className="card">
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
                        <div className="card-body text-start">
                            <h5 className="card-title">Fusion Backpack</h5>
                            <p><span className="renoshop fs-5">$250.00</span></p>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>

                    </div>
                    <div className="card">
                        <img className="card-img-top" src={moreproduct} alt="Card image cap" />
                        <i onClick={() => props.handleAddToCart()} className="fas fa-shopping-cart mx-4"></i>
                        <i className="fas fa-heart mx-4"></i>
                        <div className="card-body text-start">
                            <h5 className="card-title">Endeavor Daytrip</h5>
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

    );
};

export default Featuredproducts;