import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {
    const { id, title, image, description, price } = props.course
    return (
        <div className="col-lg-4">
            <Link to={`/courses/${id}`}>
                <div className="course-item bg-white shadow-sm mb-4">
                    <div className="thumbnail">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content p-3">
                        <h3 className="fs-5">{title}</h3>
                        <p className="fw-light">{description}</p>
                        <p className="fw-bold text-black-50">{price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product