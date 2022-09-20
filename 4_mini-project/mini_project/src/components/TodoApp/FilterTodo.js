import React from 'react'

function FilterTodo(props) {
    const { filterTodo } = props;
    return (
        <div>
            <button onClick={() => filterTodo("all")}>All</button>
            <button onClick={() => filterTodo("active")}>Active</button>
            <button onClick={() => filterTodo("unactive")}>UnActive</button>
        </div>
    );
}

export default FilterTodo