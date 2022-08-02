import React from 'react';
import pencil from "./img/pencil.svg";
import remove from "./img/remove.svg";

function TodoItem(props) {

    const updateTodo = id => {
        props.handlePreUpdateTodo(id);
    }

    const deleteTodo = id => {
        props.handleDeleteTodo(id);
    }

    const toggleStatus = id => {
        props.handleToggleStatus(id);
    }


    return (
        <div className={`todo-item ${props.todo.status ? "active-todo" : ""}`}>
            <div className="todo-item-title">
                <input type="checkbox" defaultChecked={props.todo.status} onChange={() => toggleStatus(props.todo.id)}/>
                <p>{props.todo.title}</p>
            </div>
            <div className="option">
                <button className="btn btn-update">
                    <img src={pencil} alt="icon" onClick={() => updateTodo(props.todo.id)} />
                </button>
                <button className="btn btn-delete">
                    <img src={remove} alt="icon" onClick={() => deleteTodo(props.todo.id)} />
                </button>
            </div>
        </div>
    )
}

export default TodoItem