import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function TodoForm(props) {
    // Lấy dữ liệu từ props
    const { handleAddTodo } = props;

    // State
    const [value, setValue] = useState("");

    // Xử lý khi thay đổi nội dung trong ô input -> cập nhật lại state
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    // Xử lý khi submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!handleAddTodo) {
            return;
        }

        let formValue = {
            title: value,
        };

        handleAddTodo(formValue);
        setValue("");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                value={value}
                onChange={(e) => handleChange(e)}
            />

            <button type="submit">Add</button>
        </form>
    );
}

TodoForm.propTypes = {
    handleAddTodo: PropTypes.func,
};

TodoForm.defaultProps = {
    handleAddTodo: null,
};

export default TodoForm;
