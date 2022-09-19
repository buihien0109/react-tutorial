import React, { useEffect, useState } from 'react'

function AvatarPreview() {
    const [file, setFile] = useState();

    // Xử lý upload file
    const handleFile = (e) => {
        // Lấy ra file được upload
        let fileUpload = e.target.files[0];

        // Tạo url để xem tạm
        // Nếu đóng tab => url sẽ mất
        fileUpload.preview = URL.createObjectURL(fileUpload)
        console.log(fileUpload)

        // Lưu lại file vào trong state
        setFile(fileUpload);
    }

    // NHƯỢC ĐIỂM
    // Nếu thay các file khác thì URL preview file vẫn còn
    // Khắc phục => sử dụng useEffect để cleanup những file tạm sau khi thay đổi file mới

    // Nếu có sự thay đổi về file, thì gọi lại Cleanup function để clean URL preview file tạm
    useEffect(() => {

        // Cleanup function
        return () => {
            file && URL.revokeObjectURL(file.preview)
        }

    }, [file])

    return (
        <>
            <div>
                <input type="file" onChange={e => handleFile(e)} />
            </div>

            {file && <img src={file.preview} alt={file.name} style={{ width: 200 }} />}
        </>
    )
}

export default AvatarPreview