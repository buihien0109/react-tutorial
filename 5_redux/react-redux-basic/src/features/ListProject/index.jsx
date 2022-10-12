import React from "react";
import { Link } from "react-router-dom";
import "./ListProject.css";

function ListProject() {
    const projectList = [
        { name: "Counter", link: "/counter" },
        { name: "TodoList", link: "/todolist" },
    ];

    return (
        <div className="row">
            {projectList.map((p, index) => (
                <div className="col-md-3" key={index}>
                    <Link to={p.link}>
                        <div className="project-item d-flex justify-content-center align-items-center">
                            {p.name}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ListProject;
