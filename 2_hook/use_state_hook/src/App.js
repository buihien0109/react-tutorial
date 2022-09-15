import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initTodos = [
  {
    id: 1,
    title: "Làm bài tập "
  },
  {
    id: 2,
    title: "Đi chơi"
  },
  {
    id: 3,
    title: "Đá bóng"
  },
]

function App() {
  // state
  const [todos, setTodos] = useState(initTodos);

  // Xử lý khi xóa todo
  const handleDeleteTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index < 0) {
      return;
    }

    let newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
  }

  // Xử lý thêm công việc
  const handleAddTodo = (formValues) => {
    let newTodo = {
      id: todos.length + 1,
      ...formValues
    }

    let newTodos = [...todos];
    newTodos.push(newTodo);

    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Wellcome to React Hooks</h1>

      {/* <ColorBox /> */}
      {/* <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} /> */}

      {/* <TodoForm handleAddTodo={handleAddTodo} /> */}

      <Counter />
    </div>
  );
}

export default App;
