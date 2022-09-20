import { useState, useEffect } from 'react'
import TodoItem from './TodoItem';
import FilterTodo from './FilterTodo';

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Di choi", status: false },
        { id: 2, title: "Hoc bai", status: true },
        { id: 3, title: "Da bong", status: false },
    ]);
    const [todosFilter, setTodosFilter] = useState(todos);
    const [title, setTitle] = useState("");
    const [filter, setFilter] = useState("all");

    // Lọc công việc
    const filterTodoByStatus = (status) => {
        const newTodos = [...todos];
        if (status == "all") {
            return newTodos;
        } else if (status == "active") {
            return newTodos.filter((todo) => todo.status);
        } else {
            return newTodos.filter((todo) => !todo.status);
        }
    };

    useEffect(() => {
        let newTodosFilter = filterTodoByStatus(filter);
        setTodosFilter(newTodosFilter);
    }, [filter, todos]);

    // Thay đổi trang thái công việc
    const filterTodo = (status) => {
        setFilter(status);
    };

    // Xoa cong viec
    const onDeleteTodo = (id) => {
        let newTodos = todos.filter((todo) => todo.id != id);
        setTodos(newTodos);
    };

    // Chinh sua tieu de cong viec
    const onEditTodo = (id) => {
        let todoUpdate = todos.find((todo) => todo.id == id);

        let title = window.prompt("Chinh sua cong viec", todoUpdate.title);

        if (!title) return;
        if (title.length == 0) {
            alert("Title cant not empty");
            return;
        }

        let newTodos = todos.map((todo) => {
            if (todo.id == id) {
                return { ...todo, title };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    // Them cong viec
    const addTodo = () => {
        if (title.length == 0) {
            alert("Title cant not empty");
            return;
        }

        let newTodo = {
            id: randomId(),
            title: title,
            status: false,
        };

        let newTodos = [newTodo, ...todos];
        setTodos(newTodos);
        setTitle("");
    };

    // Thay doi trang thai
    const onToggleStatus = (id) => {
        let newTodos = todos.map((todo) => {
            if (todo.id == id) {
                return { ...todo, status: !todo.status };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    // Xoa tat ca cong viec
    const clearAll = () => {
        setTodos([]);
    };

    // random id
    const randomId = () => {
        return Math.floor(Math.random() * 1000);
    };

    return (
        <div className="todo-container">
            <h2>TodoList App</h2>
            <input
                type="text"
                placeholder="Enter todo title ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>

            {todosFilter.length > 0 && (
                <>
                    <ul>
                        {todosFilter.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                {...todo}
                                onDeleteTodo={onDeleteTodo}
                                onEditTodo={onEditTodo}
                                onToggleStatus={onToggleStatus}
                            />
                        ))}
                    </ul>

                    <FilterTodo filterTodo={filterTodo} />

                    <button onClick={clearAll}>Clear All</button>
                </>
            )}
        </div>
    );
}

export default TodoApp