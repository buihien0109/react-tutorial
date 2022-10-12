import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../reducers/todoSlice";
import { getTodosActive, getTodosFilter } from "../../selectors/todoSelector";
import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./TodoList.css";

function TodoList() {
    const todos = useSelector(getTodosFilter);

    return (
        <div className="row justify-content-center">
            <h1 className="mb-3 text-center">Todolist</h1>
            <div className="col-lg-5 col-md-6 col-sm-12">
                <TodoForm />

                <div>
                    <ul className="list-todo p-0">
                        {todos.length > 0 &&
                            todos.map((todo) => (
                                <TodoItem key={todo.id} todo={todo} />
                            ))}
                        {todos.length === 0 && (
                            <li>Không có công việc nào trong danh sách</li>
                        )}
                    </ul>
                </div>

                <hr />

                <TodoFilter />
            </div>
        </div>
    );
}

export default TodoList;
