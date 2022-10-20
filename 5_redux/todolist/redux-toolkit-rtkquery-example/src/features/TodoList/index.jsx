import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./TodoList.css";
import {
    useCreateTodoMutation,
    useDeleteTodoMutation,
    useGetTodosQuery,
    useUpdateTodoMutation,
} from "./todos.service";

function TodoList() {
    const todos = useSelector((state) => state.todoList.todos);
    const [title, setTitle] = useState("");

    const { isLoading } = useGetTodosQuery();
    const [createTodo] = useCreateTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    // Xử lý thêm công việc
    const handleAddTodo = () => {
        if (!title) {
            alert("Tiêu đề không được để trống");
            return;
        }

        const newTodo = {
            title: title,
            status: false,
        };

        createTodo(newTodo);

        setTitle("");
    };

    // Xử lý cập nhật tiêu đề công việc
    const handleUpdateTodo = (id) => {
        let updatedTodo = todos.find((todo) => todo.id === id);

        const newTitle = window.prompt("Enter todo ...", updatedTodo.title);
        if (newTitle === null) return;
        if (!newTitle) {
            alert("Tiêu đề không được để trống");
            return;
        }

        updatedTodo = { ...updatedTodo, title: newTitle };

        updateTodo(updatedTodo);
    };

    // Xử lý xóa công việc
    const handleDeleteTodo = (id) => {
        const isConfirm = window.confirm("Bạn có muốn xóa không?");
        if (isConfirm) {
            deleteTodo(id);
        }
    };

    if (isLoading) {
        return <>Loading</>;
    }

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
