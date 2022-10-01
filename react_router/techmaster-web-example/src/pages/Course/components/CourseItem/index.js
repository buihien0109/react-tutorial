import React from 'react'
import { Link } from 'react-router-dom'
import { formatMoney } from 'utils/utils'

function CourseItem(props) {
    const { id, title, type, image, rating, price } = props.course
    return (
        <div className="col-md-4">
            <Link to={`/khoa-hoc/${id}`}>
                <div className="course-item shadow-sm rounded mb-4">
                    <div className="course-item-image">
                        <img src={image}
                            alt={title} />
                    </div>
                    <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-4 text-dark">
                            {title}
                        </h2>
                        <div
                            className="d-flex justify-content-between align-items-center fw-light text-black-50">
                            <p className="type">{type}</p>
                            <p className="rating">
                                {rating}
                                <span className="text-warning"><i className="fa-solid fa-star"></i></span>
                            </p>
                        </div>
                        <p className="price text-danger fs-5">
                            {formatMoney(price)}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CourseItem