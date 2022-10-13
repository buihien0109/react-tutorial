import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

const randomId = () => {
    return 1000 + Math.floor(Math.random() * 9000);
};

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (!setTitle) {
            alert("Tiêu đề không được để trống");
            return;
        }

        const newTodo = {
            id: randomId(),
            title: title,
            status: false,
        };
        dispatch(addTodo(newTodo));

        setTitle("");
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
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
