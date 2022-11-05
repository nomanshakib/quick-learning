import React from 'react';
// import { BiDownArrow } from 'react-icons/fa';
import '../page.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <div className="hero min-h-[80vh] z-10 bg-img flex justify-center items-center relative text-center">
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Learn Smart</h1>
                    <p className="mb-5">Experience nature in its purest form, while enjoying attention to detail, indulgent pampering and exceptional cuisine.</p>
                    <Link to='/courses' className="btn btn-primary">Start Course</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;