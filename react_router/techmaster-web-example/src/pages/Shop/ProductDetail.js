import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import Context from '../../context/Context'

function ProductDetail() {
    // Lấy thông tin giá trị path variable cụ thể trên url
    let { courseId } = useParams();

    // Lấy thông tin giá trị path variable ở dạng object trên url
    let param = useParams();
    console.log(param)

    // Lấy ds khóa học từ trong context
    const { courses } = useContext(Context);

    // Lọc lấy thông tin khóa học và lưu vào state
    const [course, setCourse] = useState(() => {
        let rs = courses.find(c => c.id === +courseId);
        return rs
    })

    return (
        <section>
            <div className='container'>
                <h1>ProductDetail</h1>
                <p>{JSON.stringify(course)}</p>
            </div>
        </section>
    )
}

export default ProductDetail