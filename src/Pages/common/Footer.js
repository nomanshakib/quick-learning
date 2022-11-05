import React from 'react';
import { Link } from 'react-router-dom';
import lgo from '../../assets/hdr-logo.png';

const Footer = () => {
    return (
        <div className='border-t-2 '>
            <footer className="footer p-10 max-w-7xl m-auto lg:px-4 px-5 ">
                <div className='flex flex-col items-center c-col'>
                    <Link to="/" aria-label="Back to homepage" className="">
                        <img className='w-20 light:hidden imgLight' src={lgo} alt="" srcset="" />
                    </Link>
                </div>
                <div className='c-col'>
                    <span className="footer-title text-black ">Services</span> 
                    <Link className="link link-hover">Branding</Link> 
                    <Link className="link link-hover">Design</Link> 
                    <Link className="link link-hover">Marketing</Link> 
                    <Link className="link link-hover">Advertisement</Link>
                </div> 
                <div className='c-col'>
                    <span className="footer-title text-black ">Company</span> 
                    <Link className="link link-hover">About us</Link> 
                    <Link className="link link-hover">Contact</Link> 
                    <Link className="link link-hover">Jobs</Link> 
                    <Link className="link link-hover">Press kit</Link>
                </div> 
                <div className='c-col'>
                    <span className="footer-title text-black ">Legal</span> 
                    <Link className="link link-hover">Terms of use</Link> 
                    <Link className="link link-hover">Privacy policy</Link> 
                    <Link className="link link-hover">Cookie policy</Link>
                </div> 
                <div className='c-col'>
                    <span className="footer-title text-black ">Newsletter</span> 
                    <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label> 
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;