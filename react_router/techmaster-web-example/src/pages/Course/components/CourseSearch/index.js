import React, { useState } from "react";

function CourseSearch(props) {
    const { onChangeSearchTerm } = props;
    const [title, setTitle] = useState("");

    const handleSubmit = () => {
        onChangeSearchTerm(title);
    };
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                    <input
                        type="text"
                        placeholder="Tìm kiếm khóa học"
                        className="form-control border-0 seach-form-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <span
                        className="text-black-50 seach-form-button"
                        onClick={handleSubmit}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CourseSearch;