import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../reducers/todoSlice";

const randomId = () => {
    return 1000 + Math.floor(Math.random() * 9000);
};

function TodoForm() {
    const dispatch = useDispatch();

    const [todoInput, setTodoInput] = useState("");

    const handleAddTodo = () => {
        if (!todoInput) {
            alert("Tiêu đề không được để trống");
            return;
        }

        const newTodo = {
            id: randomId(),
            title: todoInput,
            status: false,
        };
        dispatch(addTodo(newTodo));

        setTodoInput("");
    };
    return (
        <div className="d-flex mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Enter todo ..."
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
            />
            <button className="btn btn-warning ms-2" onClick={handleAddTodo}>
                Add
            </button>
        </div>
    );
}

export default TodoForm;
