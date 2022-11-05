import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({courseItem}) => {
    const {category, img, learningTime, id} = courseItem;
    return (
        <>
            <div className="max-w-sm ml-0 border-[1px] rounded border-gray-700 mx-auto group hover:no-underline focus:no-underline dark:text-white text-black">
                <img role="presentation" className="object-cover w-[318px] rounded h-44 " src={img} alt=''/>
                <div className="p-3 space-y-2">
                    <h3 className="text-1xl font-bold group-hover:underline group-focus:underline">{category}</h3>
                    <span className="text-sm dark:text-gray-400 font-semibold mb-4 block">Learning Time: {learningTime}</span>
                    <Link to={`/courses/${id}`}>
                        <button className='btn text-white mt-4 bg-primary'>Course Details</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CourseItem;

