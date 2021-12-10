import React from "react";
import "./Footer.css";
import amazonLogo from "../../images/amazon.png";
import amexLogo from "../../images/amex.png";
import paypalLogo from "../../images/paypal.png";
import mastercardLogo from "../../images/mastercard.png";
import visaLogo from "../../images/visa.png";

const Footer = () => {
    return (
        <footer>
            <div className="container info-text">
                <div className="row p-2 d-flex justify-content-around">
                    <div className=' col-12 col-sm-12 col-md-12 col-lg-6 text-center '>
                        <p>We're confident we've provided all the best for you Stay connect with us</p>
                    </div>
                    <div className='border-start col-12 col-sm-12 col-md-12 col-lg-6 text-center border-end py-1'>
                        <i className="fab fa-facebook-f me-5"></i>
                        <i className="fab fa-twitter me-5"></i>
                        <i className="fab fa-instagram  me-5"></i>
                        <i className="fab fa-linkedin-in me-5"></i>
                        <i className="fab fa-behance"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-3 py-4 footer-col">
                        <h5>INFORMATION</h5>
                        <p>
                            <a href="">Delivery Information</a>
                        </p>
                        <p>
                            <a href="">Discount</a>
                        </p>
                        <p>
                            <a href="">Sitemap</a>
                        </p>
                        <p>
                            <a href="">Privacy Policy</a>
                        </p>
                        <p>
                            <a href="">My Account</a>
                        </p>
                    </div>
                    <div className="col-md-3 py-4 footer-col">
                        <h5>MY ACCOUNT</h5>
                        <p>
                            <a href="">Sign In</a>
                        </p>
                        <p>
                            <a href="">View Cart</a>
                        </p>
                        <p>
                            <a href="">My Wishlist</a>
                        </p>
                        <p>
                            <a href="">Check Out</a>
                        </p>
                        <p>
                            <a href="">Track My Order</a>
                        </p>
                    </div>
                    <div className="col-md-3 py-4 footer-col">
                        <h5>HELP</h5>
                        <p>
                            <a href="">F.A.Q</a>
                        </p>
                        <p>
                            <a href="">Shipping</a>
                        </p>
                        <p>
                            <a href="">Contact Us</a>
                        </p>
                        <p>
                            <a href="">Privacy Policy</a>
                        </p>
                    </div>
                    <div className="col-md-3 py-4 footer-col">
                        <h5>CONTACT INFO</h5>
                        <p>
                            <a href="">
                                <i className="fas fa-globe-americas"></i> 1234 Your Address, Country.
                            </a>
                        </p>
                        <p>
                            <a href="">
                                <i className="fas fa-phone-alt"></i> +1 234 567 898
                            </a>
                        </p>
                        <p>
                            <a href="">
                                <i className="fas fa-envelope"></i>{" "}
                                <span className="renoshop fw-bold">mail@domain.com</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-muted py-3">
                <div className="container d-md-flex justify-content-between">
                    <div className="text-center">
                        <p className="m-0 py-2">
                            Copyright 2021 RenoshopBee all right reserved | Design By BeeStudios
                        </p>
                    </div>
                    <div className="text-center d-flex">
                        <div>
                            <img src={visaLogo}
                                className="img-fluid mx-2"
                                style={{ width: "50px" }}
                                alt="" />
                        </div>
                        <div>
                            <img src={paypalLogo}
                                className="img-fluid mx-2"
                                style={{ width: "50px" }}
                                alt="" />
                        </div>
                        <div>
                            <img src={amazonLogo}
                                className="img-fluid mx-2"
                                style={{ width: "50px" }}
                                alt="" />
                        </div>
                        <div>
                            <img src={mastercardLogo}
                                className="img-fluid mx-2"
                                style={{ width: "50px" }}
                                alt="" />
                        </div>
                        <div>
                            <img src={amexLogo}
                                className="img-fluid mx-2"
                                style={{ width: "50px" }}
                                alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;