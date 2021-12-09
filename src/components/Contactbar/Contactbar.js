import React from 'react';
import './Contactbar.css';

const Contactbar = () => {
    return (
        <div className="contactbar-bg-color text-white d-flex justify-content-between align-items-center">
            <div>
                <a href="#" className="mx-2 text-white"><i className="fas fa-phone-alt"></i></a>
                <a href="#" className="mx-2 text-white">+1 123 456 789</a>
                <a href="#" className="mx-2 text-white">|</a>
                <a href="#" className="mx-2 text-white"><i className="fas fa-envelope"></i></a>
                <a href="#" className="mx-2 text-white">info@company.com</a>
            </div>
            <div>
                <a href="#" className="mx-2 text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="mx-2 text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="mx-2 text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="mx-2 text-white"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="mx-2 text-white"><i className="fab fa-behance"></i></a>
            </div>
        </div>
    );
};

export default Contactbar;