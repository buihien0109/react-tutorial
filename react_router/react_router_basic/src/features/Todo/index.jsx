import React from "react";
import PropTypes from "prop-types";
import { Outlet, Routes, Route } from "react-router-dom";
import TodoAdd from "./pages/TodoAdd";
import TodoEdit from "./pages/TodoEdit";

function TodoFeature(props) {
    return (
        <div>
            <h1>TodoFeature</h1>
            <div>
                {/* <Outlet /> */}
                <Routes>
                    <Route path="/todo/add" element={<TodoAdd />} />
                    <Route path="/todo/edit" element={<TodoEdit />} />
                </Routes>
            </div>
        </div>
    );
}

TodoFeature.propTypes = {};

export default TodoFeature;
