import React, { useState } from 'react'

function InputTodo(props) {
    
    return (
        <div className="todo-input">
            <input type="text" placeholder="Nhập công việc" id="todo-input" autoComplete="off" value={props.title} onChange={(e) => props.handleUpdateTitle(e.target.value)} />
            {
                props.isAdd
                    ? <button id="btn-add" onClick={() => props.handleAddTodo()}>Thêm</button>
                    : <button id="btn-update" onClick={() => props.handleUpdateTodo()}>Cập nhật</button>
            }
        </div>
    )
}

export default InputTodo