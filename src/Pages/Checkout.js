import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='my-24 px-5 lg:px-4'>
            <h2 className='mb-8 pb-4 text-center course-title2 lg:text-4xl text-3xl  font-bold text-black'>Checkout Page</h2>
            <div className='m-auto flex flex-col max-w-lg p-6 justify-center rounded-md sm:p-10 min-h-[500px] dark:text-gray-300'>  
                <h2 className='lg:text-2xl text-1xl text-black text-center dark:text-gray-300 font-bold mb-5'>Name:  {data.category} </h2>
                <Link to='/courses' className='text-center'>
                    <button className="px-8 mt-12 py-3  font-semibold rounded bg-gray-800 dark:bg-blue-300 text-white">Courses</button>
                </Link>
            </div>
        </div>
    );
};

export default Checkout;