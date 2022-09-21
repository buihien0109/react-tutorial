import React from 'react'
import CourseItem from '../CourseItem'

function CourseList(props) {
    const { courses } = props
    return (
        <div className="course-list row">
            {courses.map(course => <CourseItem key={course.id} course={course} />)}
        </div>
    )
}

export default CourseList