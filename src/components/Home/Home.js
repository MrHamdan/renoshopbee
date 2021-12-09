import React from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import Bestseller from '../Bestseller/Bestseller';
import Contactbar from '../Contactbar/Contactbar';
import Navbar from '../Navbar/Navbar';
import './Home.css';
const Home = () => {
    const [cart, setCart] = useState("");

    const handleAddToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    };
    return (
        <div>
            <Contactbar />
            <Navbar cart={cart} />
            <Banner />
            <Bestseller handleAddToCart={handleAddToCart} />
        </div>
    );
};

export default Home;