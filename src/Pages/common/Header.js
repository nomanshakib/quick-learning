import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/hdr-logo.png'
import { AuthContext } from '../../Context/AuthProvider';
import avater from '../../assets/avatar.png'
import Swal from 'sweetalert2';
const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
        .then(() => {
            Swal.fire({
              icon: 'error',
              title: 'Log Out Succesfully!!',
              timer: 1500
            });
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: `${error.message}`,
              timer: 1500
            });
          })
    }
    const menuItems = <>
        <li className='font-semibold '><NavLink className='bg-white text-black' to='/home'>Home</NavLink></li>
        <li className='font-semibold'><NavLink className='bg-white text-black'  to='/courses'>Courses</NavLink></li>
        <li className='font-semibold'><NavLink className='bg-white text-black'  to='/faq'>Faq</NavLink></li>
        <li className='font-semibold'><NavLink className='bg-white text-black'  to='/blog'>Blog</NavLink></li>
        {
            user?.uid ? 
            <>
                <li className='font-semibold'><button onClick={handleLogOut} className='btn btn-primary text-white'>Log Out</button></li>
            </>
            :
            <>
                <li className='font-semibold'><NavLink className='bg-white text-black'  to='/register'>Register</NavLink></li>
                <li className='font-semibold'><NavLink className='bg-white text-black'  to='/login'>Login</NavLink></li>
            </>
            
        }
        
    </>
    return (
        <div className=' border-b-2'>
            <div className="navbar max-w-7xl m-auto flex justify-between">
            
                <div className="navbar-start justify-between w-full">
                    
                    <Link to='/' className="">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                            
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <input type="checkbox" className="toggle" />
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                    {
                        user ? <img className='w-12 ml-5 rounded-full' src={user.photoURL} alt="" /> : <img src={avater} alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;