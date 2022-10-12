import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../reducers/todoSlice";

function TodoFilter() {
    const filterItems = ["all", "active", "unactive"];
    const filter = useSelector((state) => state.todo.filter);
    const dispatch = useDispatch();

    const handleSetFilter = (e) => {
        let value = e.target.value;
        dispatch(setFilter(value));
    };

    return (
        <div className="d-flex">
            {filterItems.map((filterItem) => (
                <div className="form-check me-3" key={filterItem}>
                    <input
                        className="form-check-input"
                        type="radio"
                        id={filterItem}
                        value={filterItem}
                        checked={filter === filterItem}
                        onChange={(e) => handleSetFilter(e)}
                    />
                    <label className="form-check-label" htmlFor={filterItem}>
                        {filterItem}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default TodoFilter;
