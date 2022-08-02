import React, { useState } from "react";
import FilterTodo from "./FilterTodo";
import InputTodo from "./InputTodo";
import "./style.css";
import TodoItem from "./TodoItem";

function randomId() {
    return Math.floor(Math.random() * 100000);
}

const data = [
    {
        id: randomId(),
        title: "Ăn tối",
        status: false,
    },
    {
        id: randomId(),
        title: "Đi quẩy",
        status: false,
    },
    {
        id: randomId(),
        title: "Học lập trình",
        status: true,
    },
];

function TodoList() {
    const [todos, setTodos] = useState(data);
    const [isAdd, setIsAdd] = useState(true);
    const [title, setTitle] = useState("");
    const [idTodoUpdate, setIdTodoUpdate] = useState(null);

    const handleUpdateTitle = (data) => {
        setTitle(data);
    };

    // Xử lý thêm công việc
    const handleAddTodo = () => {
        if (title.trim().length == 0) {
            alert("Tiêu đề không được để trống");
            return;
        }

        let newTodo = {
            id: randomId(),
            title: title,
            status: false,
        };
        setTodos([...todos, newTodo]);
        setTitle("");
    };

    // Xử lý xóa công việc
    const handleDeleteTodo = (id) => {
        let isConfirm = window.confirm("Bạn có muốn xóa không?");
        if (isConfirm) {
            let newTodos = todos.filter((t) => t.id != id);
            setTodos(newTodos);
        }
    };

    // Xử lý trước khi cập nhật công việc
    const handlePreUpdateTodo = (id) => {
        setIsAdd(false);

        // Lấy ra công việc đang được chọn để update và hiển thị
        let todoUpdate = todos.find((t) => t.id == id);

        setTitle(todoUpdate.title);
        setIdTodoUpdate(todoUpdate.id);
    };

    // Xử lý cập nhật công việc
    const handleUpdateTodo = () => {
        if (title.trim().length == 0) {
            alert("Tiêu đề không được để trống");
            return;
        }

        let newTodos = todos.map((t) => {
            if (t.id == idTodoUpdate) {
                return { ...t, title: title };
            }
            return t;
        });

        setTodos(newTodos);
        setIsAdd(true);
        setTitle("");
        setIdTodoUpdate(null);
    };

    // Xử lý thay đổi trạng thái công việc
    const handleToggleStatus = (id) => {
        let newTodos = todos.map((t) => {
            if (t.id == id) {
                return { ...t, status: !t.status };
            }
            return t;
        });

        setTodos(newTodos);
    };

    // Xử lý lọc công việc theo trạng thái
    const filterTodo = (status) => {
        if (status == "all") {
            return todos;
        } else if ((status = "active")) {
            return todos.filter((t) => t.status);
        } else if ((status = "unactive")) {
            return todos.filter((t) => !t.status);
        }
        
    };

    const handleFilterTodo = (status) => {
        console.log(status)
        let newTodos = filterTodo(status);
        setTodos(newTodos);
    };

    return (
        <div className="container">
            <h1>Todo List</h1>

            <InputTodo
                isAdd={isAdd}
                title={title}
                handleAddTodo={handleAddTodo}
                handleUpdateTodo={handleUpdateTodo}
                handleUpdateTitle={handleUpdateTitle}
            />

            <FilterTodo handleFilterTodo={handleFilterTodo} />

            <div className="todo-container">
                <div className="todo-list">
                    {todos.length == 0 ? (
                        <p className="todos-empty">
                            Không có công việc nào trong danh sách
                        </p>
                    ) : (
                        todos.map((t) => (
                            <TodoItem
                                key={t.id}
                                todo={t}
                                handleDeleteTodo={handleDeleteTodo}
                                handlePreUpdateTodo={handlePreUpdateTodo}
                                handleToggleStatus={handleToggleStatus}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
