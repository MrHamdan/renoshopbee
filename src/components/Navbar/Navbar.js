import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Navbar = (props) => {
    const { cart } = props;
    const items = cart.length;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="renoshop fs-3 fw-bold">RENOSHOP</span><span className="fs-3 fw-bold">BEE</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#"><span className="renoshop">HOME</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">WOMEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">MEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">KIDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">JEWELLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">ACCESSORIES</a>
                            </li>
                        </ul>
                        <div>
                            <span className="mx-2"><Badge badgeContent={cart.length} color="error">
                                <ShoppingCartIcon />
                            </Badge></span><span className="mx-2"><SearchIcon /></span><span className="mx-2"> <MenuIcon /></span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;