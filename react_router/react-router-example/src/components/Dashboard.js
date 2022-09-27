import React from 'react'
import { useMatch, useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate();

    // Chuyển hướng sang trang khác
    const handleChangePage = () => {
        navigate("customers")
    }

    // navigate(-2) : Go 2 pages back
    // navigate(-1) : Go back
    // navigate(1)  : Go forward
    // navigate(2) : Go 2 pages forward
    // Trường hợp bạn muốn sử dụng go, goBack, goForward trong lịch sử trình duyệt.

    // navigate('orders', { replace: true })}
    // Sử dụng tham số thứ hai của navigate để chỉ thay đổi URL chứ không muốn URL đó lưu lại trong lịch sử trình duyệt. Kiểu như tại trang A đi tới trang B, tại trang B chúng ta click back trên trình duyệt thì sẽ không quay trở lại trang A nữa.

    return (
        <>
            <h1>Dashboard</h1>
            <button className='btn btn-primary' onClick={handleChangePage}>Go to Customers Page</button>

            <div className='mt-4'>
                <button className='btn btn-primary me-2' onClick={() => navigate(-2)}>Go 2 pages back</button>
                <button className='btn btn-primary me-2' onClick={() => navigate(-1)}>Go back</button>
                <button className='btn btn-primary me-2' onClick={() => navigate(1)}>Go forward</button>
                <button className='btn btn-primary me-2' onClick={() => navigate(2)}>Go 2 pages forward</button>
            </div>

            <button className='btn btn-primary mt-4' onClick={() => navigate('orders', { replace: true })}>
                Go to Orders
            </button>
        </>
    )
}

export default Dashboard