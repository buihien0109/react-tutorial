import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import {
    addTodo,
    deleteTodo,
    updateTodo,
} from "../../redux/actions/todoActions";
import "./TodoList.css";

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    // Xử lý thêm công việc
    const handleAddTodo = () => {
        if (!title) {
            alert("Tiêu đề không được để trống");
            return;
        }

        const newTodo = {
            id: v4(),
            title: title,
            status: false,
        };
        dispatch(addTodo(newTodo));

        setTitle("");
    };

    // Xử lý cập nhật tiêu đề công việc
    const handleUpdateTodo = (id) => {
        const updatedTodo = todos.find((todo) => todo.id === id);

        const newTitle = window.prompt("Enter todo ...", updatedTodo.title);
        if (newTitle === null) return;
        if (!newTitle) {
            alert("Tiêu đề không được để trống");
            return;
        }

        updatedTodo.title = newTitle;

        dispatch(updateTodo(updatedTodo));
    };

    // Xử lý xóa công việc
    const handleDeleteTodo = (id) => {
        const isConfirm = window.confirm("Bạn có muốn xóa không?");
        if (isConfirm) {
            dispatch(deleteTodo(id));
        }
    };

    return (
        <div>
            <h1>Todo List</h1>

            <input
                type="text"
                placeholder="Enter todo ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>

            <ul>
                {todos.length === 0 && <li>TodoList empty</li>}
                {todos.length > 0 &&
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span className={todo.status ? "todo-active" : ""}>
                                {todo.title}
                            </span>
                            <button onClick={() => handleUpdateTodo(todo.id)}>
                                Edit
                            </button>
                            <button onClick={() => handleDeleteTodo(todo.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default TodoList;
