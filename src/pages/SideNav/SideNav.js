import React, { useEffect, useState } from 'react';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => console.log(data));
    })
    return (
        <div>

        </div>
    );
};

export default SideNav;