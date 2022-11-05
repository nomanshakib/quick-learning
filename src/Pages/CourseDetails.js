import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = createRef();
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {category , learningTime, description, id, img} = courseDetails;
    return (
        <div className='max-w-7xl m-auto px-5 lg:px-4 pb-6' ref={ref}>
            <div className='relative mb-12'>
                <div ref={ref} className='bg-primary rounded text-white lg:w-2/3 md:w-2/3 w-[90%] mt-24 z-10 relative m-auto lg:px-10 md:px-8 px-4 py-20 text-center '>
                    <img className='w-80 m-auto mb-5' src={img} alt="" srcset="" />
                    <h1 className='lg:text-3xl text-2xl font-bold course-title custom-brder relative  pb-4'>{category}</h1>
                    <p className='font-medium text-xl mb-5'>To learn this topic you need {learningTime}</p>
                    <p className='font-medium text-xl mb-5'>{description}</p>
                    <Link to={`/checkout/${id}`} className='btn mr-5 bg-white hover:border-white hover:text-white hover:bg-transparent py-2 mt-4 text-gray-900 border-white'>
                        Premium Access
                    </Link>
                    <Pdf targetRef={ref} filename="course-details.pdf">
                            {({ toPdf }) =>
                                <button 
                                    title='Download Course Details'
                                    onClick={toPdf}
                                    className='btn text-white py-2 mt-4 bg-primary hover:bg-white hover:text-black  hover:border-white border-white'>
                                        Download
                                </button>
                            }
                    </Pdf>
                </div>
            </div>
        </div> 
    );
};

export default CourseDetails;