import React from 'react';
import { Link } from 'react-router-dom';
import '../page.css'
const CourseItemRIghtNav = ({courseItem, uniqueCourse}) => {
    const { category, id } = courseItem;
    return (
        <>
            <Link to={`/courses/${id}`} className='mb-4 pb-1 custom-brder relative block font-semibold hover:underline group-focus:underline '>{(uniqueCourse)}.) {category}</Link>
        </>
    );
};

export default CourseItemRIghtNav;