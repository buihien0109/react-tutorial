import React, { useContext } from 'react'
import Product from '../../components/Product';
import Context from '../../context/Context'

function Shop() {
    const { courses } = useContext(Context);

    return (
        <section className="py-5" id="course" >
            <div className="container" >
                <h2 className="text-center fs-4 mb-5" > Danh sách khóa học</h2 >
                <div className="row" >
                    {courses.map(course => (
                        <Product key={course.id} course={course} />
                    ))}
                </div >
            </div >
        </section >
    )
}

export default Shop