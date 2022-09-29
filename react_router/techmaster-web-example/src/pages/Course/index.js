import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import CourseTopic from "./components/CourseTopic";
import CourseSearch from "./components/CourseSearch";
import CourseList from "./components/CourseList";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import queryString from "query-string";
import "./Course.css";

function Course() {
    const location = useLocation();
    const navigate = useNavigate();

    const { courses, topics } = useContext(Context);
    const [filter, setFilter] = useState(() => {
        const params = queryString.parse(location.search);

        return {
            topic: params.topic || "",
            term: params.term || ""
        }
    });

    useEffect(() => {
        const params = queryString.parse(location.search);

        setFilter({
            topic: params.topic || "",
            term: params.term || ""
        })
    }, [location.search])

    // Xử lý thay đổi search
    const handleChangeSearchTerm = (term) => {
        const queryParams = { ...filter, term }
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams)
        })
    };

    // Xử lý thay đổi topic
    const handleChangeTopic = (topic) => {
        const queryParams = { ...filter, topic }
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(queryParams)
        })
    };

    // Xử lý lọc khóa học
    const filterCourse = () => {
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

        return newCourses;
    }

    // Danh sách khóa học sau khi lọc
    const coursesRendered = filterCourse();

    return (
        <div className="course-container py-5">
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
                        {coursesRendered.length > 0 ? (
                            <CourseList courses={coursesRendered} />
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

export default Course;