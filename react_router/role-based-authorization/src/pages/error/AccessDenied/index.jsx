import React from "react";
import { Link } from "react-router-dom";

function AccessDenied() {
    return (
        <section
            className="py-5 d-flex justify-content-center align-items-center"
            style={{
                height: "50vh",
            }}
        >
            <div className="container">
                <div className="text-center">
                    <h1 className="text-center fs-4 mb-5">
                        Bạn không có quyền
                    </h1>
                    <div>
                        <Link to={"/"} className="btn btn-success">
                            Quay lại trang chủ
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccessDenied;
