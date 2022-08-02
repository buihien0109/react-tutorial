import React, {useState} from 'react'

function FilterTodo(props) {
    const [filter, setFilter] = useState("all"); 

    const selectTodo = status => {
        props.handleFilterTodo(status);
    }
    
    return (
        <div className="todo-option">
            <div className="todo-option-item">
                <input type="radio" name="todo-option-item" id="all" value="all" onChange={() => selectTodo("all")}/>
                <label htmlFor="all">All</label>
            </div>

            <div className="todo-option-item">
                <input type="radio" name="todo-option-item" id="unactive" value="unactive" onChange={() => selectTodo("unactive")}/>
                <label htmlFor="unactive">Chưa hoàn thành</label>
            </div>

            <div className="todo-option-item">
                <input type="radio" name="todo-option-item" id="active" value="active" onChange={() => selectTodo("active")}/>
                <label htmlFor="active">Hoàn thành</label>
            </div>
        </div>
    )
}

export default FilterTodo