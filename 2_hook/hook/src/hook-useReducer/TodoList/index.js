import React, { useReducer, useState, useRef } from "react";
import reducer, { initialTodos } from "./reducer";
import { addTodo, editTodo, deleteTodo } from "./actions";
import logger from "./logger";

const randomId = () => {
    return Math.floor(Math.random() * 1000);
};

function TodoList() {
    const [todos, dispatch] = useReducer(logger(reducer), initialTodos);
    const [value, setValue] = useState("");

    const inputRef = useRef();

    // Add todo
    const handleAddTodo = () => {
        if (value === "") {
            alert("Title không được để trống");
            return;
        }

        const newTodo = {
            id: randomId(),
            title: value,
            status: false,
        }

        dispatch(addTodo(newTodo));
        setValue("");
        inputRef.current.focus();
    };

    // Delete todo
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    // Edit todo
    const handleEditTodo = (id) => {
        let todoEdit = todos.find(todo => todo.id === id);
        let newTitle = window.prompt("New Title", todoEdit.title);

        if (!newTitle) return;
        if (newTitle === "") {
            alert("Title khong duoc de trong");
            return;
        }

        dispatch(editTodo({
            id: id,
            title: newTitle
        }));
    }

    return (
        <>
            <h1>TodoList</h1>
            <div>
                <input
                    ref={inputRef}
                    placeholder="Enter todo ..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>

            <div>
                {todos.length > 0 && (
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <span>{todo.title}</span>
                                <button
                                    onClick={() => handleEditTodo(todo.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {todos.length == 0 && (
                    <p>Khong co cong viec nao trong danh sach</p>
                )}
            </div>
        </>
    );
}

export default TodoList;
