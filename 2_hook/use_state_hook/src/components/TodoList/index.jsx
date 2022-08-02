import React from "react";
import PropTypes from "prop-types";
import "./TodoList.scss";

function TodoList(props) {
    const { todos, handleDeleteTodo } = props;

    const deleteTodo = (id) => {
        handleDeleteTodo(id);
    };

    return (
        <ul>
            {todos.length == 0 ? (
                <p>List todo empty !</p>
            ) : (
                todos.map((todo) => (
                    <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
                        {todo.title}
                    </li>
                ))
            )}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleDeleteTodo: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    handleDeleteTodo: null,
};

export default TodoList;
