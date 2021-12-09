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
                <div className="col-lg-9 col-md-12 col-12">
                    <div class="card-group">
                        <div class="card">
                            <img class="card-img-top" src={product} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>

                            </div>

                        </div>
                        <div class="card">
                            <img class="card-img-top" src={product} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>

                            </div>

                        </div>
                        <div class="card">
                            <img class="card-img-top" src={product} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>

                            </div>

                        </div>
                        <div class="card">
                            <img class="card-img-top" src={product} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bestseller;