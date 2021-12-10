import React from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import Bestseller from '../Bestseller/Bestseller';
import Contactbar from '../Contactbar/Contactbar';
import Featuredproducts from '../Featuredproducts/Featuredproducts';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Offers from '../Offers/Offers';
import Salesandoff from '../Salesandoff/Salesandoff';
import Specialdiscount from '../Specialdiscount/Specialdiscount';
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
            <Offers />
            <Salesandoff />
            <Featuredproducts handleAddToCart={handleAddToCart} />
            <Specialdiscount />
            <Footer />
        </div>
    );
};

export default Home;