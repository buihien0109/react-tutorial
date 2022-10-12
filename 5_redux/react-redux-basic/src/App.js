import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./features/Counter";
import Header from "./components/Header";
import ListProject from "./features/ListProject";
import TodoList from "./features/TodoList";

function App() {
    return (
        <>
            <Header />
            <div className="container my-5">
                <Routes>
                    <Route path="/" element={<ListProject />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/todolist" element={<TodoList />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
