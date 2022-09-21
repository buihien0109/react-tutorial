import React from "react";

function NotFound() {
    return (
        <section
            className="py-5 d-flex justify-content-center align-items-center"
            style={{
                height: "50vh",
            }}
        >
            <div className="container">
                <div className="text-center">
                    <h1 className="text-center">Not found page</h1>
                    <p>
                        Quay lại <a href="/">trang chủ</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
