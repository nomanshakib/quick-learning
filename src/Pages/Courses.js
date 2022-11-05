import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from './common/CourseItem';
import CourseItemRIghtNav from './common/CourseItemRIghtNav';
const Courses = () => {
    const coursesData = useLoaderData();
    let number = 1;
    return (
        <div className='max-w-7xl m-auto px-4 lg:py-24 mg:py-20 py-16'>
            <div className=''>
                <h2 className='mb-8 pb-4 page-title lg:text-4xl text-center  text-[28px] font-bold text-black relative custom-brder'>Courses</h2>
                <div className='rounded flex custom-grid-style flex-col lg:flex-row'>
                    <div className="grid pt-8 lg:pt-0 px-4 rounded lg:w-3/4 w-full mr-8 justify-center grid-cols-1 gap-4 order-2  lg:grid-cols-3">
                        {
                            coursesData.map(courseItem => <CourseItem key={courseItem.id}  courseItem={courseItem} />)
                        }
                    </div>
                    <div className='lg:w-1/4 pb-5 w-full text-black rounded border-b-[1px] lg:border-b-0  right-sidebar lg:border-r-[1px] border-0  pl-6 border-gray-700'>
                        <div className='rounded sticky top-5'>
                            {
                                coursesData.map(courseItem => <CourseItemRIghtNav key={courseItem.id} 
                                    uniqueCourse={number++} courseItem={courseItem} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;