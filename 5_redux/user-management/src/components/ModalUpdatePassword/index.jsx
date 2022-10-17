import React from "react";

function ModalUpdatePassword() {
    return (
        <div
            className="modal fade"
            id="modal-change-password"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            Đổi mật khẩu
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="col-form-label">
                                Mật khẩu cũ
                            </label>
                            <input
                                type="text"
                                id="old-password"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">
                                Mật khẩu mới
                            </label>
                            <input
                                type="text"
                                id="new-password"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Đóng
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            id="btn-change-password"
                        >
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalUpdatePassword;
