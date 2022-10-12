import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteTodo,
    editTodo,
    toggleStatus,
} from "../../../../reducers/todoSlice";

function TodoItem(props) {
    const { id, title, status } = props.todo;
    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }));
    };

    const handleToggleStatus = (id) => {
        dispatch(toggleStatus({ id }));
    };

    const handleEditTodo = (id) => {
        const todoEdit = todo.find((t) => t.id === id);
        const newTitle = window.prompt("Edit todo", todoEdit.title);

        if (newTitle === null) return;
        if (!newTitle) {
            alert("Tiêu đề không được để trống");
            return;
        }

        let newTodoEdit = {
            id,
            title: newTitle,
        };
        dispatch(editTodo(newTodoEdit));
        alert("Cập nhật công việc thành công");
    };
    return (
        <li className="d-flex align-items-center">
            <input
                type="checkbox"
                checked={status}
                onChange={() => handleToggleStatus(id)}
            />
            <span className={status ? "todo-active" : ""}>{title}</span>
            <div>
                <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEditTodo(id)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteTodo(id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
