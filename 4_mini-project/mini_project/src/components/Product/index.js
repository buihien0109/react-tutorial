import React, { useContext, useEffect, useState } from "react";
import CourseContext from "./context/CourseContext";
import CourseTopic from "./components/CourseTopic";
import CourseSearch from "./components/CourseSearch";
import CourseList from "./components/CourseList";
import "./Product.scss";

function Product() {
    const { courses, topics } = useContext(CourseContext);
    const [coursesFilter, setCoursesFilter] = useState([...courses]);

    const [filter, setFilter] = useState({
        topic: "",
        term: "",
    });

    useEffect(() => {
        let newCourses = [...courses];

        if (filter.term !== "") {
            newCourses = newCourses.filter((course) =>
                course.title.toLowerCase().includes(filter.term.toLowerCase())
            );
        }

        if (filter.topic !== "") {
            newCourses = newCourses.filter((course) =>
                course.topics.includes(filter.topic)
            );
        }

        setCoursesFilter(newCourses);
    }, [filter]);

    const handleChangeSearchTerm = (term) => {
        setFilter({ ...filter, term });
    };

    const handleChangeTopic = (topic) => {
        setFilter({ ...filter, topic });
    };

    return (
        <div className="course-container mt-5">
            <div className="container">
                <div className="row">
                    <CourseTopic
                        topics={topics}
                        onChangeTopic={handleChangeTopic}
                    />

                    <div className="col-md-9">
                        <CourseSearch
                            onChangeSearchTerm={handleChangeSearchTerm}
                        />
                        {coursesFilter.length > 0 ? (
                            <CourseList courses={coursesFilter} />
                        ) : (
                            <p className="fst-italic text-black-50 fs-5">
                                Không tìm thấy khóa học phù hợp
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
